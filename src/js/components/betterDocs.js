//
// Feature Test
//

var supports =
	'querySelector' in document &&
	'addEventListener' in window &&
	'closest' in window.Element.prototype;


//
// Default settings
//

var defaults = {

	// Only run on certain pages
	restrictToPages: 'docs',

	// Languages
	langs: null,
	langDefault: null,
	langsNav: 'better-docs-nav',

	// Styles
	wideLayout: true,
	wideLayoutBg: true,
	initClass: 'better-docs',
	wideLayoutClass: 'better-docs-wide',
	wideLayoutBgClass: 'better-docs-wide-bg',
	contentClassSuffix: '-content'

};


//
// Utility Methods
//

/**
 * Merge two or more objects. Returns a new object.
 * @param {Object}   objects  The objects to merge together
 * @returns {Object}          Merged values of defaults and options
 */
var extend = function () {

	// Variables
	var extended = {};
	var i = 0;
	var length = arguments.length;

	// Merge the object into the extended object
	var merge = function (obj) {
		for (var prop in obj) {
			if (obj.hasOwnProperty(prop)) {
				extended[prop] = obj[prop];
			}
		}
	};

	// Loop through each object and conduct a merge
	for ( ; i < length; i++ ) {
		var obj = arguments[i];
		merge(obj);
	}

	return extended;

};

var createStyles = function (settings) {

	// If the styles already exist, do nothing
	if (document.querySelector('#better-docs-lang-styles')) return;

	// Variables
	var ref = document.querySelector('script');
	var css = document.createElement('style');
	var selectors = [];

	// Create classes
	settings.langs.forEach(function (lang) {
		var classes = lang.selector.split(',');
		classes.forEach(function (className) {
			selectors.push('.' + settings.initClass + settings.contentClassSuffix + ' pre.lang-' + className.trim());
			selectors.push('.' + settings.initClass + settings.contentClassSuffix + ' pre.language-' + className.trim());
		});
	});

	css.id = 'better-docs-lang-styles';
	css.innerHTML =
		selectors.join(',') + '{display:none;visibility:hidden;}' +
		selectors.join('.active,') + '.active{display:block;visibility:visible;}';

	ref.before(css);

};

var createLangNav = function (settings, selector) {

	var codes = document.querySelectorAll(selector + ' pre code');
	var reg = new RegExp(settings.langDefault);
	var lang = settings.langs.filter(function (lang) {
		return reg.test(lang.selector);
	})[0];

	// Create select menu
	var select = document.createElement('div');
	select.className = settings.langsNav;
	select.innerHTML = '<label class="screen-reader">Select your preferred programming language</label><select>' + settings.langs.map(function (lang, index) {
		return '<option value="' + lang.selector.split(',')[0].trim() + '" ' + (reg.test(lang.selector) ? 'selected="selected"' : '') + '>' + lang.title + '</option>';
	}).join('') + '</select>';

	codes.forEach(function (code, index) {

		var pre = code.parentNode;

		// Inject selector before the first pre element in a group
		if (!pre.previousElementSibling.matches('pre')) {
			var toggle = select.cloneNode(true);
			toggle.querySelector('select').id = 'lang-toggle-' + index;
			toggle.querySelector('label').setAttribute('for', 'lang-toggle-' + index);
			pre.parentNode.insertBefore(toggle, pre);
		}

		// Show default languages
		lang.selector.split(',').forEach(function (className) {
			if (!code.matches('.lang-' + className.trim() + ', .language-' + className.trim())) return;
			pre.classList.add('active');
		});

	});

};


//
// BetterDocs Constructor
//

var BetterDocs = function (selector, options) {

	//
	// Variables
	//

	var betterDocs = {}; // Object for public APIs
	var settings, content, app;


	//
	// Methods
	//

	/**
	 * Check if the page is one that the script should run on
	 * @return {Boolean} [description]
	 */
	var isSupportedPage = function () {

		// If a restricted page is set
		if (settings.restrictToPages) {

			// If it's not an array, convert it to one
			if (Object.prototype.toString.call(settings.restrictToPages) !== '[object Array]') {
				var temp = settings.restrictToPages;
				settings.restrictToPages = [];
				settings.restrictToPages.push(temp);
			}

			// Return `false` if the contentType and contentId don't match any allowed pages
			if (
				settings.restrictToPages.indexOf(window.mashery.contentType) === -1 &&
				settings.restrictToPages.indexOf(window.mashery.contentId) === -1
			) return false;
		}

		// Otherwise return true
		return true;

	};

	betterDocs.toggleLang = function (langName) {

		var reg = new RegExp(langName);
		var lang = settings.langs.filter(function (lang) {
			return reg.test(lang.selector);
		})[0];
		var val = lang.selector.split(',')[0].trim();

		if (!lang || !lang.selector) return;

		var classes = lang.selector.split(',').reduce(function (arr, className) {
			arr.push('pre.lang-' + className.trim());
			arr.push('pre.language-' + className.trim());
			return arr;
		}, []);

		var currentLang = document.querySelectorAll('[class*="lang-"].active, [class*="language-"].active');
		var newLang = document.querySelectorAll(classes.join(','));
		var toggles = document.querySelectorAll('.' + settings.langsNav + ' select');

		currentLang.forEach(function (lang) {
			lang.classList.remove('active');
		});

		newLang.forEach(function (lang) {
			lang.classList.add('active');
		});

		toggles.forEach(function (toggle) {
			toggle.value = val;
		});

	};

	var changeHandler = function (event) {
		var toggle = event.target.closest('.' + settings.langsNav + ' select');
		if (!toggle) return;
		betterDocs.toggleLang(event.target.value);
	};

	betterDocs.destroy = function () {

		// If plugin isn't already initialized, stop
		if (!settings) return;

		// Remove event listeners
		document.removeEventListener('click', changeHandler, false);

		// Remove classes
		app.classList.remove(settings.initClass);
		app.classList.remove(settings.wideLayoutClass);
		app.classList.remove(settings.wideLayoutBgClass);
		if (content) {
			content.classList.remove(settings.initClass + settings.contentClassSuffix);
			content.classList.remove(settings.wideLayoutClass + settings.contentClassSuffix);
		}

		// Remove styles
		var styles = document.querySelector('#better-docs-lang-styles');
		if (styles) {
			styles.remove();
		}

		// Reset variables
		settings = null;
		content = null;

		// @todo remove ToC

	};

	/**
	 * Initialize the Table of Contents
	 * @param {Object} options User settings
	 */
	betterDocs.init = function (options) {

		// feature test
		if (!supports) return;

		// Merge defaults with user options
		settings = extend(defaults, options || {});

		// Make sure should run on this page
		if (!isSupportedPage()) return;

		// Get the content container
		content = document.querySelector(selector);
		if (!content) return;

		// The app
		app = document.querySelector('#app');
		if (!app) return;

		// Add initialization class
		app.classList.add(settings.initClass);
		content.classList.add(settings.initClass + settings.contentClassSuffix);

		// If wide layout, add wide class
		if (settings.wideLayout) {
			app.classList.add(settings.wideLayoutClass);
			content.classList.add(settings.wideLayoutClass + settings.contentClassSuffix);

			if (settings.wideLayoutBg) {
				app.classList.add(settings.wideLayoutBgClass);
			}
		}

		// Create language navigation
		createLangNav(settings, selector);

		// Add inline styles
		if (settings.langs) {
			createStyles(settings);
		}

		// Listen for click events
		var app = document.querySelector('#app');
		if (!app) return;
		app.addEventListener('change', changeHandler, false);

		// Set a default language
		// betterDocs.toggleLang(settings.langDefault);
		// window.setTimeout(function () {
		// 	betterDocs.toggleLang(settings.langDefault);
		// }, 300);

	};


	//
	// Initialize plugin
	//

	betterDocs.init(options);


	//
	// Public APIs
	//

	return betterDocs;

};

export default BetterDocs;