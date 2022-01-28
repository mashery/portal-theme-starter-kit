// Configs
var themes = ['default', 'sidebar', 'skinny-nav'];

// export default createExport();
export default themes.map(function (theme) {
	return {
		input: `src/setup/templates/${theme}.js`,
		output: {
			file: `dist/${theme}/setup/body.js`,
			format: 'iife'
		}
	}
});
