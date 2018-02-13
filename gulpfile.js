/**
 * Settings
 */

var settings = {
	scripts: true,		// Turn on/off script tasks
	styles: true,		// Turn on/off style tasks
	svgs: true,			// Turn on/off SVG tasks
	images: true,		// Turn on/off image tasks
	setup: true,		// Turn on/off init tasks
	static: true,		// Turn on/off static file copying
	patterns: true,		// Turn on/off pattern library generation
	docs: true,			// Turn on/off documentation generation
	cacheBust: false	// Turn on/off cache busting (adds a version number to minified files)
};


/**
 * Themes to build
 */
var themes = [
	'default',
	'skinny-nav',
	'sidebar'
];


/**
 * Gulp Packages
 */

// General
var gulp = require('gulp');
var fs = require('fs');
var del = require('del');
var lazypipe = require('lazypipe');
var plumber = require('gulp-plumber');
var flatten = require('gulp-flatten');
var tap = require('gulp-tap');
var rename = require('gulp-rename');
var multidest = require('gulp-multi-dest');
var header = require('gulp-header');
var footer = require('gulp-footer');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
var package = require('./package.json');

// Scripts
var jshint = settings.scripts ? require('gulp-jshint') : null;
var stylish = settings.scripts ? require('jshint-stylish') : null;
var concat = settings.scripts ? require('gulp-concat') : null;
var uglify = settings.scripts ? require('gulp-uglify') : null;
var optimizejs = settings.scripts ? require('gulp-optimize-js') : null;

// Styles
var sass = settings.styles ? require('gulp-sass') : null;
var prefix = settings.styles ? require('gulp-autoprefixer') : null;
var minify = settings.styles ? require('gulp-cssnano') : null;

// SVGs
var svgmin = settings.svgs ? require('gulp-svgmin') : null;

// Pattern Library & Docs
var markdown = settings.patterns || settings.docs ? require('gulp-markdown') : null;
var fileinclude = settings.patterns || settings.docs ? require('gulp-file-include') : null;

// Deploy
var s3 = require('gulp-s3');
var properties = require('properties');


/**
 * Paths to project folders
 */

var paths = {
	input: 'src/**/*',
	output: 'dist/',
	scripts: {
		input: 'src/js/*',
		output: 'js/'
	},
	styles: {
		input: 'src/sass/**/*.{scss,sass}',
		output: 'css/'
	},
	svgs: {
		input: 'src/svg/*',
		output: 'svg/'
	},
	images: {
		input: 'src/img/*',
		output: 'img/'
	},
	static: {
		input: 'src/static/**',
		output: 'dist/'
	},
	setup: {
		templates: 'src/setup/templates/*.js',
		inits: 'src/setup/inits/*.js',
		output: 'setup/'
	},
	docs: {
		input: 'src/docs/**',
		output: 'docs/'
		// templates: 'src/docs/_templates/',
		// assets: 'src/docs/assets/**'
	}
};


/**
 * Template for banner to add to file headers
 */

 var banner = {
	full:
		'/*!\n' +
		' * <%= package.name %> v<%= package.version %>\n' +
		' * <%= package.description %>\n' +
		' * (c) ' + new Date().getFullYear() + ' <%= package.author.owner %> and <%= package.author.name %>\n' +
		' * <%= package.license %> License\n' +
		' * <%= package.repository.url %>\n' +
		' */\n\n',
	min:
		'/*!' +
		' <%= package.name %> v<%= package.version %>' +
		' | (c) ' + new Date().getFullYear() + ' <%= package.author.owner %> and <%= package.author.name %>' +
		' | <%= package.license %> License' +
		' | <%= package.repository.url %>' +
		' */\n',
	setup:
		'/*!\n' +
		' * Templates & Initializations\n' +
		' * <%= package.name %> v<%= package.version %>\n' +
		' * <%= package.repository.url %>\n' +
		' */\n\n\n'
};


/**
 * Gulp Tasks
 */

 // Create theme destinations array
var getThemeDirectories = function (path) {
	var dirs = [];
	themes.forEach(function (theme) {
		dirs.push(paths.output + theme + (path ? '/' + path : ''));
	});
	return dirs;
};

// Lint, minify, and concatenate scripts
gulp.task('build:scripts', ['clean:dist'], function() {
	if ( !settings.scripts ) return;

	// Cache busting filename
	var fileVersion = settings.cacheBust ? '.' + package.version : '';

	// Create theme destinations
	var dirs = getThemeDirectories(paths.scripts.output);

	var jsTasks = lazypipe()
		.pipe(header, banner.min, { package : package })
		.pipe(optimizejs)
		.pipe(multidest, dirs)
		.pipe(rename, { suffix: '.min' + fileVersion })
		.pipe(uglify, {output: {comments: /^!/}})
		.pipe(optimizejs)
		// .pipe(header, banner.min, { package : package })
		.pipe(multidest, dirs);

	return gulp.src(paths.scripts.input)
		.pipe(plumber())
		.pipe(tap(function (file, t) {
			if ( file.isDirectory() ) {
				var name = file.relative + '.js';
				return gulp.src(file.path + '/*.js')
					.pipe(concat(name))
					.pipe(jsTasks());
			}
		}))
		.pipe(jsTasks());
});

// Process, lint, and minify Sass files
gulp.task('build:styles', ['clean:dist'], function() {
	if ( !settings.styles ) return;

	// Cache busting filename
	var fileVersion = settings.cacheBust ? '.' + package.version : '';

	return gulp.src(paths.styles.input)
		.pipe(plumber())
		.pipe(sass({
			outputStyle: 'expanded',
			sourceComments: true
		}))
		.pipe(flatten())
		.pipe(prefix({
			browsers: ['last 2 version', '> 1%'],
			cascade: true,
			remove: true
		}))
		.pipe(header(banner.min, { package : package }))
		.pipe(rename(function (path) {
			// Change destination directory based on theme name
			// https://stackoverflow.com/a/38025993
			themes.forEach(function (theme) {
				if (theme === path.basename) {
					path.dirname = theme + '/' + paths.styles.output;
				}
			});
		}))
		.pipe(gulp.dest(paths.output))
		.pipe(rename({ suffix: '.min' + fileVersion }))
		.pipe(minify())
		// .pipe(header(banner.min, { package : package }))
		.pipe(gulp.dest(paths.output));
});

// Generate SVG sprites
gulp.task('build:svgs', ['clean:dist'], function () {
	if ( !settings.svgs ) return;

	// Create theme destinations
	var dirs = getThemeDirectories(paths.svgs.output);

	return gulp.src(paths.svgs.input)
		.pipe(plumber())
		.pipe(svgmin())
		.pipe(multidest(dirs));
});

// Copy image files into output folder
gulp.task('build:images', ['clean:dist'], function() {
	if ( !settings.images ) return;

	// Create theme destinations
	var dirs = getThemeDirectories(paths.images.output);

	return gulp.src(paths.images.input)
		.pipe(plumber())
		.pipe(multidest(dirs));
});

// Build theme setup file
gulp.task('build:setup', ['clean:dist'], function() {
	if ( !settings.setup ) return;

	return gulp.src(paths.setup.templates)
		.pipe(plumber())
		.pipe(flatten())
		.pipe(tap(function (file, t) {
			var dir = file.path.slice(file.path.lastIndexOf('/') + 1).slice(0, -3);
			return gulp.src([file.path, paths.setup.inits])
				.pipe(concat('body.js'))
				.pipe(header(banner.setup, { package : package }))
				.pipe(gulp.dest(paths.output + dir + '/' + paths.setup.output));
		}));
});

// Copy static files into output folder
gulp.task('build:static', ['clean:dist'], function() {
	if ( !settings.static ) return;

	// Create theme destinations
	var dirs = getThemeDirectories();

	return gulp.src(paths.static.input)
		.pipe(plumber())
		.pipe(multidest(dirs));
});

// Lint scripts
gulp.task('lint:scripts', function () {
	if ( !settings.scripts ) return;

	return gulp.src(paths.scripts.input)
		.pipe(plumber())
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});

// Remove pre-existing content from output folders
gulp.task('clean:dist', function () {
	del.sync([
		paths.output
	]);
});

// Generate documentation
gulp.task('build:docs', ['compile', 'clean:docs'], function() {
	if ( !settings.docs ) return;

	return gulp.src(paths.docs.input)
		.pipe(plumber())
		.pipe(gulp.dest(paths.docs.output));
});

// Copy distribution files to docs
gulp.task('copy:dist', ['compile', 'clean:docs'], function() {
	if ( !settings.docs ) return;

	return gulp.src(paths.output + '/**')
		.pipe(plumber())
		.pipe(gulp.dest(paths.docs.output + '/dist'));
});

// Copy documentation assets to docs
// gulp.task('copy:assets', ['clean:docs'], function() {
// 	if ( !settings.docs ) return;

// 	return gulp.src(paths.docs.assets)
// 		.pipe(plumber())
// 		.pipe(gulp.dest(paths.docs.output + '/assets'));
// });

// Remove prexisting content from docs folder
gulp.task('clean:docs', function () {
	if ( !settings.docs ) return;
	return del.sync(paths.docs.output);
});

// Spin up livereload server and listen for file changes
gulp.task('listen', function () {
	livereload.listen();
	gulp.watch(paths.input).on('change', function(file) {
		gulp.start('default');
		gulp.start('refresh');
	});
});

// Run livereload after file change
gulp.task('refresh', ['compile', 'docs'], function () {
	livereload.changed();
});

// Deploy to Amazon S3
gulp.task('deploy:dist', function () {
	properties.parse ("/etc/mashery/conf/secure.conf", { sections: true, path: true, comments: ";", separators: "=", strict: true}, function (error, obj){
		if (error) return console.error (error);
		var AWS = obj['Mashery_Developer_Portal'];
		console.log(AWS);
		return gulp.src(paths.output + '/**')
		.pipe(s3(AWS));
	});
});


/**
 * Task Runners
 */

// Compile files
gulp.task('compile', [
	'lint:scripts',
	'clean:dist',
	'build:scripts',
	'build:styles',
	'build:images',
	'build:static',
	'build:setup',
	'build:svgs'
]);

// Generate documentation
gulp.task('docs', [
	'clean:docs',
	'build:docs',
	// 'copy:dist',
	// 'copy:assets'
]);

// Compile files and generate docs (default)
gulp.task('default', [
	'compile',
	'docs'
]);

// Compile files and generate docs when something changes
gulp.task('watch', [
	'listen',
	'default'
]);

// Deploy to Amazon S3
gulp.task('deploy', [
    'deploy:dist'
]);