var sass = require('sass');
var fs = require('fs');
var pkg = require('./package.json');


// Themes
let themes = ['default', 'skinny-nav', 'sidebar'];

// Banner
var banner = `/*! ${pkg.name} v${pkg.version} | (c) ${new Date().getFullYear()} ${pkg.author.name} | ${pkg.license} License | ${pkg.repository.url} */`;

var getOptions = function (theme, filename, minify) {
	return {
		file: `src/scss/${theme}.scss`,
		outFile: `dist/${theme}/css/${filename}`,
		indentType: 'tab',
		indentWidth: 1,
		outputStyle: minify ? 'compressed' : 'expanded'
	};
};

var writeFile = function (pathOut, fileName, fileData, printBanner = true) {
    // Create the directory path
    fs.mkdir(pathOut, { recursive: true }, function (err) {
        // If there's an error, throw it
        if (err) throw err;

        // Write the file to the path
        fs.writeFile(`${pathOut}/${fileName}`, fileData, function (err) {
            if (err) throw err;

            var data = fs.readFileSync(`${pathOut}/${fileName}`);
            var fd = fs.openSync(`${pathOut}/${fileName}`, 'w+');
            var insert = printBanner ? new Buffer.from(banner + '\n') : '';
            fs.writeSync(fd, insert, 0, insert.length, 0);
            fs.writeSync(fd, data, 0, data.length, insert.length);
            fs.close(fd, function (err) {
                if (err) throw err;
                console.log(`Compiled ${pathOut}/${fileName}`);
            })
        })
    })
}

var parseSass = function (theme, minify) {
    var filename = `${theme}${minify ? '.min' : ''}.css`;
    sass.render(getOptions(theme, filename, minify), function (err, result) {

    	// If there's an error, throw it
    	if (err) throw err;

        // Write the file
        writeFile(`dist/${theme}/css`, filename, result.css);

    });
};

themes.forEach(function (theme) {
    parseSass(theme);
    parseSass(theme, true);
});
