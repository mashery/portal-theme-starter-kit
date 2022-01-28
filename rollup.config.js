// Plugins
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';


// Configs
var configs = {
	name: 'portal',
	files: ['main.js'],
	themes: ['default', 'sidebar', 'skinny-nav'],
	default: 'iife',
	minify: true,
	sourceMap: false
};

// Banner
var banner = `/*! ${pkg.name} v${pkg.version} | (c) ${new Date().getFullYear()} ${pkg.author.name} | ${pkg.license} | ${pkg.repository.url} */`;

var createOutput = function (filename, minify) {
	return configs.themes.map(function (theme) {
		var output = {
			file: `dist/${theme}/js/${filename}${minify ? '.min' : ''}.js`,
			format: 'iife',
			banner: banner
		};
		if (minify) {
			output.plugins = [terser()];
		}

		output.sourcemap = configs.sourceMap

		return output;
	});
};

/**
 * Create output formats
 * @param  {String} filename The filename
 * @return {Array}           The outputs array
 */
var createOutputs = function (filename) {

	// Create base outputs
	var outputs = createOutput(filename);

	// If not minifying, return outputs
	if (!configs.minify) return outputs;

	// Otherwise, ceate second set of outputs
	var outputsMin = createOutput(filename, true);

	// Merge and return the two arrays
	return outputs.concat(outputsMin);

};

/**
 * Create export object
 * @return {Array} The export object
 */
var createExport = function (file) {
	return configs.files.map(function (file) {
		var filename = file.replace('.js', '');
		return {
			input: `src/js/${file}`,
			output: createOutputs(filename)
		};
	});
};

export default createExport();
