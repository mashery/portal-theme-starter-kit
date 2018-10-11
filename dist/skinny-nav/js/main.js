/*! portal-theme v1.0.0 | (c) 2018 TIBCO and Chris Ferdinandi | Portal Theme Starter Kit v2.7.8 - Default Theme | MIT License | http://github.com/mashery/portal-theme-starter-kit */
/*!
 * Astro v10.2.0: Mobile-first navigation patterns
 * (c) 2016 Chris Ferdinandi
 * MIT License
 * http://github.com/cferdinandi/astro
 */

(function (root, factory) {
	if ( typeof define === 'function' && define.amd ) {
		define([], factory(root));
	} else if ( typeof exports === 'object' ) {
		module.exports = factory(root);
	} else {
		root.astro = factory(root);
	}
})(typeof global !== 'undefined' ? global : this.window || this.global, (function (root) {

	'use strict';

	//
	// Variables
	//

	var astro = {}; // Object for public APIs
	var supports = 'querySelector' in document && 'addEventListener' in root && 'classList' in document.createElement('_'); // Feature test
	var settings;

	// Default settings
	var defaults = {
		selector: '[data-nav-toggle]',
		toggleActiveClass: 'active',
		navActiveClass: 'active',
		initClass: 'js-astro',
		callback: function () {}
	};


	//
	// Methods
	//

	/**
	 * Merge defaults with user options
	 * @private
	 * @param {Object} defaults Default settings
	 * @param {Object} options User options
	 * @returns {Object} Merged values of defaults and options
	 */
	var extend = function () {

		// Variables
		var extended = {};
		var deep = false;
		var i = 0;
		var length = arguments.length;

		// Check if a deep merge
		if ( Object.prototype.toString.call( arguments[0] ) === '[object Boolean]' ) {
			deep = arguments[0];
			i++;
		}

		// Merge the object into the extended object
		var merge = function (obj) {
			for ( var prop in obj ) {
				if ( Object.prototype.hasOwnProperty.call( obj, prop ) ) {
					// If deep merge and property is an object, merge properties
					if ( deep && Object.prototype.toString.call(obj[prop]) === '[object Object]' ) {
						extended[prop] = buoy.extend( true, extended[prop], obj[prop] );
					} else {
						extended[prop] = obj[prop];
					}
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

	/**
	 * Get the closest matching element up the DOM tree.
	 * @private
	 * @param  {Element} elem     Starting element
	 * @param  {String}  selector Selector to match against
	 * @return {Boolean|Element}  Returns null if not match found
	 */
	var getClosest = function ( elem, selector ) {

		// Element.matches() polyfill
		if (!Element.prototype.matches) {
			Element.prototype.matches =
				Element.prototype.matchesSelector ||
				Element.prototype.mozMatchesSelector ||
				Element.prototype.msMatchesSelector ||
				Element.prototype.oMatchesSelector ||
				Element.prototype.webkitMatchesSelector ||
				function(s) {
					var matches = (this.document || this.ownerDocument).querySelectorAll(s),
						i = matches.length;
					while (--i >= 0 && matches.item(i) !== this) {}
					return i > -1;
				};
		}

		// Get closest match
		for ( ; elem && elem !== document; elem = elem.parentNode ) {
			if ( elem.matches( selector ) ) return elem;
		}

		return null;

	};

	/**
	 * Show and hide navigation menu
	 * @public
	 * @param  {Element} toggle Element that triggered the toggle
	 * @param  {String} navID The ID of the navigation element to toggle
	 * @param  {Object} settings
	 * @param  {Event} event
	 */
	astro.toggleNav = function ( toggle, navID, options, event ) {

		// Selectors and variables
		var settings = extend( settings || defaults, options || {} );  // Merge user options with defaults
		var nav = document.querySelectorAll(navID);

		toggle.classList.toggle( settings.toggleActiveClass ); // Toggle the '.active' class on the toggle element
		for (var i = nav.length - 1; i >= 0; i--) {
			nav[i].classList.toggle( settings.navActiveClass ); // Toggle the '.active' class on the menu
		}
		settings.callback( toggle, navID ); // Run callbacks after toggling nav

	};

	/**
	 * Handle click event methods
	 * @private
	 */
	var eventHandler = function (event) {
		var toggle = getClosest(event.target, settings.selector);
		if ( toggle ) {
			// Prevent default click event
			if ( toggle.tagName.toLowerCase() === 'a') {
				event.preventDefault();
			}
			// Toggle nav
			astro.toggleNav( toggle, toggle.getAttribute('data-nav-toggle'), settings );
		}
	};

	/**
	 * Destroy the current initialization.
	 * @public
	 */
	astro.destroy = function () {
		if ( !settings ) return;
		document.documentElement.classList.remove( settings.initClass );
		document.removeEventListener('click', eventHandler, false);
		settings = null;
	};

	/**
	 * Initialize Astro
	 * @public
	 * @param {Object} options User settings
	 */
	astro.init = function ( options ) {

		// feature test
		if ( !supports ) return;

		// Destroy any existing initializations
		astro.destroy();

		// Selectors and variables
		settings = extend( defaults, options || {} ); // Merge user options with defaults

		// Listeners and methods
		document.documentElement.classList.add( settings.initClass ); // Add class to HTML element to activate conditional CSS
		document.addEventListener('click', eventHandler, false); // Listen for click events and run event handler

	};


	//
	// Public APIs
	//

	return astro;

}));
/*!
 * BetterDocs.js v1.1.0
 * Create better static documentation.
 * (c) 2017 TIBCO Software Inc.
 * Written by Chris Ferdinandi
 * All Rights Reserved
 */
(function (root, factory) {
	if ( typeof define === 'function' && define.amd ) {
		define([], (function () {
			return factory(root);
		}));
	} else if ( typeof exports === 'object' ) {
		module.exports = factory(root);
	} else {
		root.BetterDocs = factory(root);
	}
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this, (function (window) {

	'use strict';

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

		// Table of Contents
		tocSelector: 'h2, h3, h4, h5, h6',
		tocHeading: '',
		tocLocation: '#nav-docs',
		currentPageSelector: '.current-page',
		tocLocationReplace: false,

		// Languages
		langs: null,
		langDefault: null,
		langsNav: '.better-docs-nav',

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

	/**
	 * Create a valid ID from a heading's content
	 * @param  {Node}   heading  The heading
	 * @return {string}          The ID
	 */
	var createID = function (heading) {
		return 'toc-' + heading.innerText.toLowerCase().replace(/^[^a-z]+|[^\w:.-]+/g, '-');
	};

	/**
	 * Add a sub-item to the navigation list
	 * @param {Node}   heading     The heading element
	 * @param {Number} difference  The difference between the current and last heading
	 */
	var addSubItem = function (heading, difference) {
		var toc = '';
		for (var i = Math.abs(difference); i > 0; i--) {
			toc += '<ul>';
		}
		return toc;
	};

	/**
	 * Close a sub-item from the navigation list
	 * @param {Node}   heading     The heading element
	 * @param {Number} difference  The difference between the current and last heading
	 */
	var closeSubItem = function (heading, difference) {
		var toc = '';
		for (var i = Math.abs(difference); i > 0; i--) {
			toc += '</li></ul>';
		}
		return toc;
	};

	var createStyles = function (langs) {

		// Variables
		var ref = document.querySelector('script');
		var css = document.createElement('style');
		var selectors = [];

		// Create classes
		langs.forEach((function (lang) {
			var classes = lang.selector.split(',');
			classes.forEach((function (className) {
				selectors.push('pre.lang-' + className.trim());
				selectors.push('pre.language-' + className.trim());
			}));
		}));

		css.id = 'better-docs-lang-styles';
		css.innerHTML =
			selectors.join(',') + '{display:none;visibility:hidden;}' +
			selectors.join('.active,') + '.active{display:block;visibility:visible;}';

		ref.before(css);

	};

	var createLangNav = function (langs, selector) {
		var list = '';
		langs.forEach((function (lang, key) {
			list += '<li><a role="button" data-lang="' + key + '" href="#lang-' + key + '">' + lang.title + '</a></li>';
		}));
		document.querySelectorAll(selector).forEach((function (langNav) {
			langNav.innerHTML = '<ul>' + list + '</ul>';
		}));

	};


	//
	// BetterDocs Constructor
	//

	var BetterDocs = function (selector, options) {

		//
		// Variables
		//

		var betterDocs = {}; // Object for public APIs
		var settings, content;


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

		/**
		 * Render the Table of Contents
		 */
		var createTOC = function () {

			var headings = content.querySelectorAll(settings.tocSelector);
			var toc = settings.tocLocationReplace ? document.querySelector(settings.tocLocation) : document.querySelector(settings.tocLocation + ' ' + settings.currentPageSelector);
			var list = '';
			var last, current, close;

			if (!toc) return;

			headings.forEach((function (heading) {

				// Get current heading position
				current = parseInt(heading.tagName.substring(1), 10);
				close = '</li>';

				// If first loop, set last to current
				if (!last) {
					close = '';
					last = current;
				}

				// Create an ID if the heading is missing one
				if (!heading.id || heading.id.length < 1) {
					heading.id = createID(heading);
				}

				// Get difference between last and current
				var difference = current - last;

				if (difference > 0) {
					list += addSubItem(heading, difference);
				} else if (difference < 0) {
					list += closeSubItem(heading, difference);
				}

				list += close + '<li><a href="#' + heading.id + '">' + heading.innerText + '</a>';

				// Update last position
				last = current;

			}));

			if (settings.tocLocationReplace) {
				toc.innerHTML = settings.tocHeading + '<ul>' + list + '</ul>';
			} else {
				toc.innerHTML += settings.tocHeading + '<ul>' + list + '</ul>';
			}

		};

		betterDocs.toggleLang = function (active) {
			var currentLang = document.querySelectorAll('[class*="lang-"].active, [class*="language-"].active, ' + settings.langsNav + ' a.active');

			var classes = settings.langs[active].selector.split(',');
			var selectors = [];
			classes.forEach((function (className) {
				selectors.push('.lang-' + className.trim());
				selectors.push('.language-' + className.trim());
			}));

			var newLang = document.querySelectorAll(selectors.join(',') + ',' + settings.langsNav + ' [data-lang="' + active + '"]');

			currentLang.forEach((function (lang) {
				lang.classList.remove('active');
			}));

			newLang.forEach((function (lang) {
				lang.classList.add('active');
			}));
		};

		var clickHandler = function (event) {
			var toggle = event.target.closest(settings.langsNav + ' a');
			if (!toggle) return;
			event.preventDefault();
			betterDocs.toggleLang(toggle.getAttribute('data-lang'));
		};

		betterDocs.destroy = function () {

			// If plugin isn't already initialized, stop
			if (!settings) return;

			// Remove event listeners
			document.removeEventListener('click', clickHandler, false);

			// Remove classes
			document.documentElement.classList.remove(settings.initClass);
			document.documentElement.classList.remove(settings.wideLayoutClass);
			document.documentElement.classList.remove(settings.wideLayoutBgClass);
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

			// Add initialization class
			document.documentElement.classList.add(settings.initClass);
			content.classList.add(settings.initClass + settings.contentClassSuffix);

			// If wide layout, add wide class
			if (settings.wideLayout) {
				document.documentElement.classList.add(settings.wideLayoutClass);
				content.classList.add(settings.wideLayoutClass + settings.contentClassSuffix);

				if (settings.wideLayoutBg) {
					document.documentElement.classList.add(settings.wideLayoutBgClass);
				}
			}

			// Create Table of Contents
			createTOC();

			// Create language navigation
			createLangNav(settings.langs, settings.langsNav);

			// Add inline styles
			if (settings.langs) {
				createStyles(settings.langs);
			}

			// Listen for click events
			document.addEventListener('click', clickHandler, false);

			// Set a default language
			if (settings.langDefault) {
				betterDocs.toggleLang(settings.langDefault);

				window.setTimeout((function () {
					betterDocs.toggleLang(settings.langDefault);
				}), 300);
			}

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

	return BetterDocs;

}));
/**
 * docsNavCollapse.js
 * Copyright (c) 2018. TIBCO Software Inc. All Rights Reserved.
 * @description Expand-and-collapse documentation navigation.
 * @version     1.0.0
 * @author      Chris Ferdinandi
 */
var docsNavCollapse = function (options) {

	'use strict';

	var publicAPIs = {};
	var defaults = {
		selector: '#nav-docs li > ul',
		selectorClass: 'docs-expand-toggle',
		initClass: 'js-docs-expand',
		show: '+ <span class="screen-reader">Show Nav Items</span>',
		hide: '— <span class="screen-reader">Hide Nav Items</span>'
	};
	var settings, navItems;


	//
	// Methods
	//

	/**
	 * Merge two or more objects together.
	 * @param   {Boolean}  deep     If true, do a deep (or recursive) merge [optional]
	 * @param   {Object}   objects  The objects to merge together
	 * @returns {Object}            Merged values of defaults and options
	 */
	var extend = function () {

		// Variables
		var extended = {};
		var deep = false;
		var i = 0;

		// Check if a deep merge
		if ( Object.prototype.toString.call( arguments[0] ) === '[object Boolean]' ) {
		    deep = arguments[0];
		    i++;
		}

		// Merge the object into the extended object
		var merge = function (obj) {
			for (var prop in obj) {
				if (obj.hasOwnProperty(prop)) {
					// If property is an object, merge properties
					if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
						extended[prop] = extend(extended[prop], obj[prop]);
					} else {
						extended[prop] = obj[prop];
					}
				}
			}
		};

		// Loop through each object and conduct a merge
		for (; i < arguments.length; i++) {
			var obj = arguments[i];
			merge(obj);
		}

		return extended;

	};

	var clickHandler = function (event) {
		if (!event.target.closest(settings.selectorClass)) return;
		event.preventDefault();
		var parent = event.target.closest('li');
		if (!parent) return;
		parent.classList.toggle('is-shown');
	};

	var setup = function () {
		document.documentElement.classList.add(settings.initClass);
		navItems.forEach((function (item) {

			// Variables
			var parent = item.closest('li');
			if (!parent) return;
			var link = parent.querySelector('a');
			if (!link) return;

			// Create expand/collapse toggle
			var toggle = document.createElement('a');
			toggle.innerHTML  =
				'<span class="docs-expand-show">' + settings.show + '</span>' +
				'<span class="docs-expand-hide">' + settings.hide + '</span>';
			toggle.className = settings.selectorClass + ' js-scroll-ignore';
			toggle.href = '#';
			toggle.setAttribute('role', 'button');

			// Inject toggle
			link.before(toggle);

		}));
	};

	var destroy = function () {
		if (!settings) return;
		document.documentElement.classList.remove(settings.initClass);
		document.removeEventListener('click', clickHandler, false);
		settings = null;
		navItems = null;
	};

	var init = function () {

		// Destroy previous inits
		destroy();

		// Merge defaults with options
		settings = extend(defaults, options || {});

		// Get the nav items
		navItems = document.querySelectorAll(settings.selector);
		if (navItems.length < 1) {
			destroy();
			return;
		}

		// Setup the DOM
		setup();

		// Setup event listener
		document.addEventListener('click', clickHandler, false);

	};


	//
	// Inits & Event Listeners
	//

	init();

};
/*! fluidvids.js v2.4.1 | (c) 2014 @toddmotto | https://github.com/toddmotto/fluidvids */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory;
  } else {
    root.fluidvids = factory();
  }
})(this, (function () {

  'use strict';

  var fluidvids = {
    selector: ['iframe', 'object'],
    players: ['www.youtube.com', 'player.vimeo.com']
  };

  var css = [
    '.fluidvids {',
      'width: 100%; max-width: 100%; position: relative;',
    '}',
    '.fluidvids-item {',
      'position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;',
    '}'
  ].join('');

  var head = document.head || document.getElementsByTagName('head')[0];

  function matches (src) {
    return new RegExp('^(https?:)?\/\/(?:' + fluidvids.players.join('|') + ').*$', 'i').test(src);
  }

  function getRatio (height, width) {
    return ((parseInt(height, 10) / parseInt(width, 10)) * 100) + '%';
  }

  function fluid (elem) {
    if (!matches(elem.src) && !matches(elem.data) || !!elem.getAttribute('data-fluidvids')) return;
    var wrap = document.createElement('div');
    elem.parentNode.insertBefore(wrap, elem);
    elem.className += (elem.className ? ' ' : '') + 'fluidvids-item';
    elem.setAttribute('data-fluidvids', 'loaded');
    wrap.className += 'fluidvids';
    wrap.style.paddingTop = getRatio(elem.height, elem.width);
    wrap.appendChild(elem);
  }

  function addStyles () {
    if (document.querySelector('#fluid-vids-styles')) return;
    var div = document.createElement('div');
    div.innerHTML = '<p>x</p><style id="fluid-vids-styles">' + css + '</style>';
    head.appendChild(div.childNodes[1]);
  }

  fluidvids.render = function () {
    var nodes = document.querySelectorAll(fluidvids.selector.join());
    var i = nodes.length;
    while (i--) {
      fluid(nodes[i]);
    }
  };

  fluidvids.init = function (obj) {
    for (var key in obj) {
      fluidvids[key] = obj[key];
    }
    fluidvids.render();
    addStyles();
  };

  return fluidvids;

}));

/*!
 * githubDocs.js v1.0.1
 * Load documentation from GitHub
 * (c) 2017 TIBCO Software Inc.
 * Written by Chris Ferdinandi
 * All Rights Reserved
 */
var githubDocs = function (options) {

	'use strict';

	// Sanity check
	if (!window.mashery.globals.github) return;

	// Variables
	var defaults = {
		selector: '.content',
		user: null,
		repo: null,
		root: '',
		runScripts: false,
		loading: '<p>Loading...</p>',
		failMessage: '<p>Unable to load content.</p>'
	};
	var settings = m$.extend(defaults, options || {});
	if (!settings.user || !settings.repo) return;
	var main = document.querySelector(settings.selector);
	if (!main) return;

	// Add loading text
	main.innerHTML = settings.loading;

	var renderDocs = function (content) {

		// Convert markdown to HTML
		main.innerHTML = m$.convertMarkdown(content);

		// If inline scripts should be run, run them
		if (settings.runScripts) {
			main.querySelectorAll('script').forEach((function (script) {
				var func = new Function(script.innerHTML);
				func();
			}));
		}

		// Fix the location
		m$.fixLocation();

		// Syntax highlight code
		if ('Prism' in window) {
			Prism.highlightAll();
		}

		m$.emitEvent('portalAfterGitHubRender');

	};

	// Get the docs
	var docs = sessionStorage.getItem('portalGHDocs_' + window.mashery.contentId);
	if (docs) {
		renderDocs(docs);
	} else {

		atomic.ajax({
			url: 'https://api.github.com/repos/' + settings.user + '/' + settings.repo + '/contents/' + settings.root + mashery.globals.github
		}).success((function (data) {
			var content = window.atob(data.content);
			renderDocs(content);
			sessionStorage.setItem('portalGHDocs_' + window.mashery.contentId, content);
		})).error((function (data) {
			main.innerHTML = settings.failMessage;
			m$.emitEvent('portalAfterGitHubError');
		}));

	}

};
/*!
 * latestBlogPosts.js v1.0.0
 * Load the latest blog posts onto any page
 * (c) 2017 TIBCO Software Inc.
 * Written by Chris Ferdinandi
 * All Rights Reserved
 */
var latestBlogPosts = function (options) {

	var defaults = {
		selector: '#latest-blog-posts',
		listClass: 'latest-blog-posts-list',
		count: 5,
		excerptLength: 250,
		listType: 'ul',
		template: function (post) {
			var template =
				'<li>' +
					'<strong><a href="' + post.url + '">' + post.title + '</a></strong><br>' +
					'<span class="text-muted">By ' + post.author + ' on ' + post.published + '</span><br>' +
					post.excerpt + '...' +
				'</li>';
			return template;
		}
	};

	// Shallow merge options into defaults
	var settings = defaults;
	for (var key in options) {
		if (options.hasOwnProperty(key)) {
			settings[key] = options[key];
		}
	}

	var latestPosts = document.querySelector(settings.selector);
	if (!latestPosts) return;

	atomic.ajax({
		url: '/blog',
		responseType: 'document'
	}).success((function (data) {
		var list = '';
		data.querySelectorAll('#main .section').forEach((function (post, index) {
			if (index >= settings.count) return;
			var title = post.querySelector('h2 a');
			var author = post.querySelector('.user-reference a');
			var excerpt = document.createElement('div');
			excerpt.innerHTML = m$.convertMarkdown(post.querySelector('.section-body').innerHTML);
			postData = {
				author: author.innerHTML,
				authorUrl: author.getAttribute('href'),
				excerpt: excerpt.textContent.slice(0, parseInt(settings.excerptLength, 10)),
				published: post.querySelector('.timestamp abbr').getAttribute('title'),
				title: title.innerHTML,
				url: title.getAttribute('href'),
			};
			list += settings.template(postData);
		}));
		latestPosts.innerHTML = '<' + settings.listType + ' class="' + settings.listClass + '">' + list + '</' + settings.listType + '>';
	}));

};
/**
 * prismForTinyMCE.js
 * Copyright (c) 2017. TIBCO Software Inc. All Rights Reserved.
 * @description  Adds class="lang-*" to TinyMCE-generated code snippets
 * @version  2.1.0
 * @author  Chris Ferdinandi
 */
window.addEventListener('portalBeforeRender', (function () {

	'use strict';

	// Make sure content exists
	if (!window.mashery.content.main || typeof window.mashery.content.main !== 'string') return;


	// Get all code snippets
	var content = document.createElement('div');
	content.innerHTML = window.mashery.content.main;
	var codes = content.querySelectorAll('pre[class*="brush:"]');

	/**
	 * Get the language class to add
	 * @param  {String} lang The existing language class
	 * @return {String}      The new language class
	 */
	var getLangClass = function (lang) {

		var langClass = '';

		if ( lang === 'bash' ) { langClass = 'lang-bash'; }
		if ( lang === 'csharp' ) { langClass = 'lang-clike'; }
		if ( lang === 'cpp' ) { langClass = 'lang-clike'; }
		if ( lang === 'css' ) { langClass = 'lang-css'; }
		if ( lang === 'java' ) { langClass = 'lang-java'; }
		if ( lang === 'jscript' ) { langClass = 'lang-javascript'; }
		if ( lang === 'php' ) { langClass = 'lang-php'; }
		if ( lang === 'python' ) { langClass = 'lang-python'; }
		if ( lang === 'ruby' ) { langClass = 'lang-ruby'; }
		if ( lang === 'xml' ) { langClass = 'lang-markup'; }

		return langClass;

	};

	// Convert the class on each TinyMCE generated code snippet
	codes.forEach((function (code) {
		var lang = /brush: (.*?);/.exec( code.className );
		if (!lang || Object.prototype.toString.call(lang) !== '[object Array]' || lang.length < 2) return;
		var langClass = getLangClass(lang[1]);
		code.classList.add(langClass);
	}));

	// Update content
	window.mashery.content.main = content.innerHTML;

}), false);
/**
 * Responsive tables
 * Copyright (c) 2017. TIBCO Software Inc. All Rights Reserved.
 * @description Automatically make tables on documentation page responsive
 * @version     1.0.0
 * @author      Chris Ferdinandi
 */

(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		define('responsiveTables', factory(root));
	} else if (typeof exports === 'object') {
		module.exports = factory(root);
	} else {
		root.responsiveTables = factory(root);
	}
})(window || this, (function (root) {

	'use strict';

	//
	// Variables
	//

	var responsiveTables = {}; // Object for public APIs
	var supports = !!document.querySelector; // Feature test
	var settings, tables;

	// Default settings
	var defaults = {
		selector: 'table',
		responsiveClass: 'table-responsive',
		initClass: 'js-responsive-tables',
		callback: function () {},
	};


	//
	// Methods
	//

	/**
	 * Merge two or more objects. Returns a new object.
	 * Set the first argument to `true` for a deep or recursive merge
	 * @param {Boolean}  deep     If true, do a deep (or recursive) merge [optional]
	 * @param {Object}   objects  The objects to merge together
	 * @returns {Object}          Merged values of defaults and options
	 */
	var extend = function () {

		// Variables
		var extended = {};
		var deep = false;
		var i = 0;
		var length = arguments.length;

		// Check if a deep merge
		if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
			deep = arguments[0];
			i++;
		}

		// Merge the object into the extended object
		var merge = function (obj) {
			for (var prop in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, prop)) {
					// If deep merge and property is an object, merge properties
					if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
						extended[prop] = extend(true, extended[prop], obj[prop]);
					} else {
						extended[prop] = obj[prop];
					}
				}
			}
		};

		// Loop through each object and conduct a merge
		for (; i < length; i++) {
			var obj = arguments[i];
			merge(obj);
		}

		return extended;

	};

	/**
	 * Add data-label attributes
	 * @param {node} table The table to add data-label attributes to
	 */
	var addLabels = function (table) {

		// Variables
		var labels = table.querySelectorAll('th');
		var rows = table.querySelectorAll('tr');

		// Sanity check
		if (labels.length === 0 || rows.length === 0) return;

		// Loop through each row
		for (var i = 0, len = rows.length; i < len; i++) {

			// Get cells within the row
			var cells = rows[i].querySelectorAll('td');

			// For each cell, add a data-label
			for (var n = 0, len2 = cells.length; n < len2; n++) {
				if (!labels[n]) continue;
				cells[n].setAttribute('data-label', labels[n].innerHTML);
			}
		}

	};

	/**
	 * Add attributes to the tables
	 * @param {NodeList} tables The tables
	 */
	var addAttributes = function (tables) {
		for (var i = 0, len = tables.length; i < len; i++) {
			tables[i].classList.add(settings.responsiveClass);
			addLabels(tables[i]);
		}
	};


	/**
	 * Destroy the current initialization.
	 * @public
	 */
	responsiveTables.destroy = function () {

		// If plugin isn't already initialized, stop
		if (!settings) return;

		// Remove responsive class
		for (var i = 0, len = tables.length; i < len; i++) {
			tables[i].classList.remove(settings.responsiveClass);
		}

		// Reset variables
		settings = null;
		tables = null;

	};

	/**
	 * Initialize Responsive Tables
	 * @public
	 * @param {Object} options User settings
	 */
	responsiveTables.init = function (options) {

		// feature test
		if (!supports) return;

		// Destroy any existing inits
		responsiveTables.destroy();

		// Merge user options with defaults
		settings = extend(true, defaults, options || {});

		// Only run on documentation and custom pages
		if (!document.body.classList.contains('page-docs') && !document.body.classList.contains('page-page')) return;

		// Add class to HTML element to activate conditional CSS
		document.documentElement.classList.add(settings.initClass);

		// Get all responsive tables
		tables = document.querySelectorAll(settings.selector);

		// Make them responsive
		addAttributes(tables);

		// Run callback
		settings.callback();

	};


	//
	// Public APIs
	//

	return responsiveTables;

}));
/*!
 * smooth-scroll v12.1.5: Animate scrolling to anchor links
 * (c) 2017 Chris Ferdinandi
 * MIT License
 * http://github.com/cferdinandi/smooth-scroll
 */

(function (root, factory) {
	if ( typeof define === 'function' && define.amd ) {
		define([], (function () {
			return factory(root);
		}));
	} else if ( typeof exports === 'object' ) {
		module.exports = factory(root);
	} else {
		root.SmoothScroll = factory(root);
	}
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this, (function (window) {

	'use strict';

	//
	// Feature Test
	//

	var supports =
		'querySelector' in document &&
		'addEventListener' in window &&
		'requestAnimationFrame' in window &&
		'closest' in window.Element.prototype;


	//
	// Default settings
	//

	var defaults = {
		// Selectors
		ignore: '[data-scroll-ignore]',
		header: null,

		// Speed & Easing
		speed: 500,
		offset: 0,
		easing: 'easeInOutCubic',
		customEasing: null,

		// Callback API
		before: function () {},
		after: function () {}
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
		var deep = false;
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

	/**
	 * Get the height of an element.
	 * @param  {Node} elem The element to get the height of
	 * @return {Number}    The element's height in pixels
	 */
	var getHeight = function (elem) {
		return parseInt(window.getComputedStyle(elem).height, 10);
	};

	/**
	 * Escape special characters for use with querySelector
	 * @param {String} id The anchor ID to escape
	 * @author Mathias Bynens
	 * @link https://github.com/mathiasbynens/CSS.escape
	 */
	var escapeCharacters = function (id) {

		// Remove leading hash
		if (id.charAt(0) === '#') {
			id = id.substr(1);
		}

		var string = String(id);
		var length = string.length;
		var index = -1;
		var codeUnit;
		var result = '';
		var firstCodeUnit = string.charCodeAt(0);
		while (++index < length) {
			codeUnit = string.charCodeAt(index);
			// Note: there’s no need to special-case astral symbols, surrogate
			// pairs, or lone surrogates.

			// If the character is NULL (U+0000), then throw an
			// `InvalidCharacterError` exception and terminate these steps.
			if (codeUnit === 0x0000) {
				throw new InvalidCharacterError(
					'Invalid character: the input contains U+0000.'
				);
			}

			if (
				// If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
				// U+007F, […]
				(codeUnit >= 0x0001 && codeUnit <= 0x001F) || codeUnit == 0x007F ||
				// If the character is the first character and is in the range [0-9]
				// (U+0030 to U+0039), […]
				(index === 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
				// If the character is the second character and is in the range [0-9]
				// (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
				(
					index === 1 &&
					codeUnit >= 0x0030 && codeUnit <= 0x0039 &&
					firstCodeUnit === 0x002D
				)
			) {
				// http://dev.w3.org/csswg/cssom/#escape-a-character-as-code-point
				result += '\\' + codeUnit.toString(16) + ' ';
				continue;
			}

			// If the character is not handled by one of the above rules and is
			// greater than or equal to U+0080, is `-` (U+002D) or `_` (U+005F), or
			// is in one of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to
			// U+005A), or [a-z] (U+0061 to U+007A), […]
			if (
				codeUnit >= 0x0080 ||
				codeUnit === 0x002D ||
				codeUnit === 0x005F ||
				codeUnit >= 0x0030 && codeUnit <= 0x0039 ||
				codeUnit >= 0x0041 && codeUnit <= 0x005A ||
				codeUnit >= 0x0061 && codeUnit <= 0x007A
			) {
				// the character itself
				result += string.charAt(index);
				continue;
			}

			// Otherwise, the escaped character.
			// http://dev.w3.org/csswg/cssom/#escape-a-character
			result += '\\' + string.charAt(index);

		}

		return '#' + result;

	};

	/**
	 * Calculate the easing pattern
	 * @link https://gist.github.com/gre/1650294
	 * @param {String} type Easing pattern
	 * @param {Number} time Time animation should take to complete
	 * @returns {Number}
	 */
	var easingPattern = function (settings, time) {
		var pattern;

		// Default Easing Patterns
		if (settings.easing === 'easeInQuad') pattern = time * time; // accelerating from zero velocity
		if (settings.easing === 'easeOutQuad') pattern = time * (2 - time); // decelerating to zero velocity
		if (settings.easing === 'easeInOutQuad') pattern = time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time; // acceleration until halfway, then deceleration
		if (settings.easing === 'easeInCubic') pattern = time * time * time; // accelerating from zero velocity
		if (settings.easing === 'easeOutCubic') pattern = (--time) * time * time + 1; // decelerating to zero velocity
		if (settings.easing === 'easeInOutCubic') pattern = time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1; // acceleration until halfway, then deceleration
		if (settings.easing === 'easeInQuart') pattern = time * time * time * time; // accelerating from zero velocity
		if (settings.easing === 'easeOutQuart') pattern = 1 - (--time) * time * time * time; // decelerating to zero velocity
		if (settings.easing === 'easeInOutQuart') pattern = time < 0.5 ? 8 * time * time * time * time : 1 - 8 * (--time) * time * time * time; // acceleration until halfway, then deceleration
		if (settings.easing === 'easeInQuint') pattern = time * time * time * time * time; // accelerating from zero velocity
		if (settings.easing === 'easeOutQuint') pattern = 1 + (--time) * time * time * time * time; // decelerating to zero velocity
		if (settings.easing === 'easeInOutQuint') pattern = time < 0.5 ? 16 * time * time * time * time * time : 1 + 16 * (--time) * time * time * time * time; // acceleration until halfway, then deceleration

		// Custom Easing Patterns
		if (!!settings.customEasing) pattern = settings.customEasing(time);

		return pattern || time; // no easing, no acceleration
	};

	/**
	 * Determine the document's height
	 * @returns {Number}
	 */
	var getDocumentHeight = function () {
		return Math.max(
			document.body.scrollHeight, document.documentElement.scrollHeight,
			document.body.offsetHeight, document.documentElement.offsetHeight,
			document.body.clientHeight, document.documentElement.clientHeight
		);
	};

	/**
	 * Calculate how far to scroll
	 * @param {Element} anchor The anchor element to scroll to
	 * @param {Number} headerHeight Height of a fixed header, if any
	 * @param {Number} offset Number of pixels by which to offset scroll
	 * @returns {Number}
	 */
	var getEndLocation = function (anchor, headerHeight, offset) {
		var location = 0;
		if (anchor.offsetParent) {
			do {
				location += anchor.offsetTop;
				anchor = anchor.offsetParent;
			} while (anchor);
		}
		location = Math.max(location - headerHeight - offset, 0);
		return location;
	};

	/**
	 * Get the height of the fixed header
	 * @param  {Node}   header The header
	 * @return {Number}        The height of the header
	 */
	var getHeaderHeight = function (header) {
		return !header ? 0 : (getHeight(header) + header.offsetTop);
	};

	/**
	 * Bring the anchored element into focus
	 * @param {Node}     anchor      The anchor element
	 * @param {Number}   endLocation The end location to scroll to
	 * @param {Boolean}  isNum       If true, scroll is to a position rather than an element
	 */
	var adjustFocus = function (anchor, endLocation, isNum) {

		// Don't run if scrolling to a number on the page
		if (isNum) return;

		// Otherwise, bring anchor element into focus
		anchor.focus();
		if (document.activeElement.id !== anchor.id) {
			anchor.setAttribute('tabindex', '-1');
			anchor.focus();
			anchor.style.outline = 'none';
		}
		window.scrollTo(0 , endLocation);

	};

	/**
	 * Check to see if user prefers reduced motion
	 * @param  {Object} settings Script settings
	 */
	var reduceMotion = function (settings) {
		if ('matchMedia' in window && window.matchMedia('(prefers-reduced-motion)').matches) {
			return true;
		}
		return false;
	};


	//
	// SmoothScroll Constructor
	//

	var SmoothScroll = function (selector, options) {

		//
		// Variables
		//

		var smoothScroll = {}; // Object for public APIs
		var settings, anchor, toggle, fixedHeader, headerHeight, eventTimeout, animationInterval;


		//
		// Methods
		//

		/**
		 * Cancel a scroll-in-progress
		 */
		smoothScroll.cancelScroll = function () {
			// clearInterval(animationInterval);
			cancelAnimationFrame(animationInterval);
		};

		/**
		 * Start/stop the scrolling animation
		 * @param {Node|Number} anchor  The element or position to scroll to
		 * @param {Element}     toggle  The element that toggled the scroll event
		 * @param {Object}      options
		 */
		smoothScroll.animateScroll = function (anchor, toggle, options) {

			// Local settings
			var animateSettings = extend(settings || defaults, options || {}); // Merge user options with defaults

			// Selectors and variables
			var isNum = Object.prototype.toString.call(anchor) === '[object Number]' ? true : false;
			var anchorElem = isNum || !anchor.tagName ? null : anchor;
			if (!isNum && !anchorElem) return;
			var startLocation = window.pageYOffset; // Current location on the page
			if (animateSettings.header && !fixedHeader) {
				// Get the fixed header if not already set
				fixedHeader = document.querySelector( animateSettings.header );
			}
			if (!headerHeight) {
				// Get the height of a fixed header if one exists and not already set
				headerHeight = getHeaderHeight(fixedHeader);
			}
			var endLocation = isNum ? anchor : getEndLocation(anchorElem, headerHeight, parseInt((typeof animateSettings.offset === 'function' ? animateSettings.offset() : animateSettings.offset), 10)); // Location to scroll to
			var distance = endLocation - startLocation; // distance to travel
			var documentHeight = getDocumentHeight();
			var timeLapsed = 0;
			var start, percentage, position;

			/**
			 * Stop the scroll animation when it reaches its target (or the bottom/top of page)
			 * @param {Number} position Current position on the page
			 * @param {Number} endLocation Scroll to location
			 * @param {Number} animationInterval How much to scroll on this loop
			 */
			var stopAnimateScroll = function (position, endLocation) {

				// Get the current location
				var currentLocation = window.pageYOffset;

				// Check if the end location has been reached yet (or we've hit the end of the document)
				if ( position == endLocation || currentLocation == endLocation || ((startLocation < endLocation && window.innerHeight + currentLocation) >= documentHeight )) {

					// Clear the animation timer
					smoothScroll.cancelScroll();

					// Bring the anchored element into focus
					adjustFocus(anchor, endLocation, isNum);

					// Run callback after animation complete
					animateSettings.after(anchor, toggle);

					// Reset start
					start = null;

					return true;

				}
			};

			/**
			 * Loop scrolling animation
			 */
			var loopAnimateScroll = function (timestamp) {
				if (!start) { start = timestamp; }
				timeLapsed += timestamp - start;
				percentage = (timeLapsed / parseInt(animateSettings.speed, 10));
				percentage = (percentage > 1) ? 1 : percentage;
				position = startLocation + (distance * easingPattern(animateSettings, percentage));
				window.scrollTo(0, Math.floor(position));
				if (!stopAnimateScroll(position, endLocation)) {
					window.requestAnimationFrame(loopAnimateScroll);
					start = timestamp;
				}
			};

			/**
			 * Reset position to fix weird iOS bug
			 * @link https://github.com/cferdinandi/smooth-scroll/issues/45
			 */
			if (window.pageYOffset === 0) {
				window.scrollTo( 0, 0 );
			}

			// Run callback before animation starts
			animateSettings.before(anchor, toggle);

			// Start scrolling animation
			smoothScroll.cancelScroll();
			window.requestAnimationFrame(loopAnimateScroll);


		};

		/**
		 * Handle has change event
		 */
		var hashChangeHandler = function (event) {

			// Only run if there's an anchor element to scroll to
			if (!anchor) return;

			// Reset the anchor element's ID
			anchor.id = anchor.getAttribute('data-scroll-id');

			// Scroll to the anchored content
			smoothScroll.animateScroll(anchor, toggle);

			// Reset anchor and toggle
			anchor = null;
			toggle = null;

		};

		/**
		 * If smooth scroll element clicked, animate scroll
		 */
		var clickHandler = function (event) {

			// Don't run if the user prefers reduced motion
			if (reduceMotion(settings)) return;

			// Don't run if right-click or command/control + click
			if (event.button !== 0 || event.metaKey || event.ctrlKey) return;

			// Check if a smooth scroll link was clicked
			toggle = event.target.closest(selector);
			if (!toggle || toggle.tagName.toLowerCase() !== 'a' || event.target.closest(settings.ignore)) return;

			// Only run if link is an anchor and points to the current page
			if (toggle.hostname !== window.location.hostname || toggle.pathname !== window.location.pathname || !/#/.test(toggle.href)) return;

			// Get the sanitized hash
			var hash;
			try {
				hash = escapeCharacters(decodeURIComponent(toggle.hash));
			} catch(e) {
				hash = escapeCharacters(toggle.hash);
			}

			// If the hash is empty, scroll to the top of the page
			if (hash === '#') {

				// Prevent default link behavior
				event.preventDefault();

				// Set the anchored element
				anchor = document.body;

				// Save or create the ID as a data attribute and remove it (prevents scroll jump)
				var id = anchor.id ? anchor.id : 'smooth-scroll-top';
				anchor.setAttribute('data-scroll-id', id);
				anchor.id = '';

				// If no hash change event will happen, fire manually
				// Otherwise, update the hash
				if (window.location.hash.substring(1) === id) {
					hashChangeHandler();
				} else {
					window.location.hash = id;
				}

				return;

			}

			// Get the anchored element
			anchor = document.querySelector(hash);

			// If anchored element exists, save the ID as a data attribute and remove it (prevents scroll jump)
			if (!anchor) return;
			anchor.setAttribute('data-scroll-id', anchor.id);
			anchor.id = '';

			// If no hash change event will happen, fire manually
			if (toggle.hash === window.location.hash) {
				event.preventDefault();
				hashChangeHandler();
			}

		};

		/**
		 * On window scroll and resize, only run events at a rate of 15fps for better performance
		 */
		var resizeThrottler = function (event) {
			if (!eventTimeout) {
				eventTimeout = setTimeout((function() {
					eventTimeout = null; // Reset timeout
					headerHeight = getHeaderHeight(fixedHeader); // Get the height of a fixed header if one exists
				}), 66);
			}
		};

		/**
		 * Destroy the current initialization.
		 */
		smoothScroll.destroy = function () {

			// If plugin isn't already initialized, stop
			if (!settings) return;

			// Remove event listeners
			document.removeEventListener('click', clickHandler, false);
			window.removeEventListener('resize', resizeThrottler, false);

			// Cancel any scrolls-in-progress
			smoothScroll.cancelScroll();

			// Reset variables
			settings = null;
			anchor = null;
			toggle = null;
			fixedHeader = null;
			headerHeight = null;
			eventTimeout = null;
			animationInterval = null;

		};

		/**
		 * Initialize Smooth Scroll
		 * @param {Object} options User settings
		 */
		smoothScroll.init = function (options) {

			// feature test
			if (!supports) return;

			// Destroy any existing initializations
			smoothScroll.destroy();

			// Selectors and variables
			settings = extend(defaults, options || {}); // Merge user options with defaults
			fixedHeader = settings.header ? document.querySelector(settings.header) : null; // Get the fixed header
			headerHeight = getHeaderHeight(fixedHeader);

			// When a toggle is clicked, run the click handler
			document.addEventListener('click', clickHandler, false);

			// Listen for hash changes
			window.addEventListener('hashchange', hashChangeHandler, false);

			// If window is resized and there's a fixed header, recalculate its size
			if (fixedHeader) {
				window.addEventListener('resize', resizeThrottler, false);
			}

		};


		//
		// Initialize plugin
		//

		smoothScroll.init(options);


		//
		// Public APIs
		//

		return smoothScroll;

	};

	return SmoothScroll;

}));
/**
 * Remove any gap below the foote ron short pages
 * @param  {String} selector Selector for the footer
 */
var stickyFooter = function (selector) {

	// Variables
	var footer = document.querySelector(selector);
	if (!footer) return;
	var timeout;

	/**
	 * Get an element's distance from the top of the Document.
	 * @param  {Node} elem The element
	 * @return {Number}    Distance from the top in pixels
	 */
	var getOffsetTop = function (elem) {
		var location = 0;
		if (elem.offsetParent) {
			do {
				location += elem.offsetTop;
				elem = elem.offsetParent;
			} while (elem);
		}
		return location >= 0 ? location : 0;
	};

	/**
	 * Get the distance to push the footer down on the page
	 * @return {Integer} The distance to to push the footer
	 */
	var getPush = function () {
		footer.style.marginTop = '';
		var winHeight = window.innerHeight || document.documentElement.clientHeight;
		var footerHeight = parseInt(window.getComputedStyle(footer).height, 10) - parseInt(window.getComputedStyle(footer).marginTop, 10);
		var footerOffset = getOffsetTop(footer);
		return winHeight - footerOffset - footerHeight;
	};

	/**
	 * Add a top margin to the footer to push it down the page
	 */
	var setPush = function () {
		var push = getPush();
		if (push > 0) {
			footer.style.marginTop = push + 'px';
		} else {
			footer.style.marginTop = '';
		}
	}

	/**
	 * Debounce browser resize events for performance
	 * @param  {[type]} event [description]
	 * @return {[type]}       [description]
	 */
	var resizeDebounce = function (event) {

			// If there's a timer, cancel it
			if (timeout) {
				window.cancelAnimationFrame(timeout);
			}

			// Restick footer
			timeout = window.requestAnimationFrame((function () {
				setPush();
			}));

	};

	// Make footer sticky
	setPush();
	window.removeEventListener('resize', resizeDebounce, false);
	window.addEventListener('resize', resizeDebounce, false);

};
/**
 * tablesForTinyMCE.js
 * Copyright (c) 2017. TIBCO Software Inc. All Rights Reserved.
 * @description Add table headers that are missing from the GUI generated tables
 * @version  2.1.0
 * @author Chris Ferdinandi
 *
 */
window.addEventListener('portalBeforeRender', (function () {


	'use strict';

	// Make sure content exists
	if (!window.mashery.content.main || typeof window.mashery.content.main !== 'string') return;


	// Variables
	var content = document.createElement('div');
	content.innerHTML = window.mashery.content.main;
	var tables = content.querySelectorAll('table');


	/**
	 * Get the closest matching element up the DOM tree.
	 * @param  {Element} elem     Starting element
	 * @param  {String}  selector Selector to match against (class, ID, data attribute, or tag)
	 * @return {Boolean|Element}  Returns null if not match found
	 */
	var getTbody = function ( elem ) {
		for ( ; elem && elem !== document && elem.nodeType === 1; elem = elem.parentNode ) {
			if ( elem.tagName.toLowerCase() === 'tbody' ) {
				return elem;
			}
		}
		return null;
	};

	// Add headers
	tables.forEach((function (table) {

		// Check if a table head already exists
		var thead = table.querySelector('thead');
		if (thead) return;

		// Get the first table row and conver it to a thead
		var row = table.querySelector('tr');
		var tbody = getTbody(row);
		if (!row || !tbody) return;
		thead = document.createElement('thead');
		thead.innerHTML = '<tr>' + row.innerHTML + '</tr>';
		tbody.parentNode.insertBefore(thead, tbody);
		row.parentNode.removeChild(row);

	}));

	// Update content
	window.mashery.content.main = content.innerHTML;

}), false);
/*!
 * translate.js v1.0.0
 * Provide multi-language portal suport
 * (c) 2017 TIBCO Software Inc.
 * Written by Chris Ferdinandi
 * All Rights Reserved
 */
 (function (root, factory) {
 	if ( typeof define === 'function' && define.amd ) {
 		define([], (function () {
 			return factory(root);
 		}));
 	} else if ( typeof exports === 'object' ) {
 		module.exports = factory(root);
 	} else {
 		root.Translate = factory(root);
 	}
 })(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this, (function (window) {

	'use strict';

	//
	// Shared Variables
	//

	// The default values
	var defaults = {
		default: null, // The default language [optional]
		activeClass: 'active', // The class to add to active language blocks and toggles
		langBlockSelector: '.translate', // The selector for language blocks
		langBlockPrefix: '.translate-', // The selector prefix for language-specific language blocks
		contentSelectors: null, // The selectors for targeted content translation
		initClass: 'js-translate', // The class to add to the document when the script initializes
		dictionary: [], // Your disctionary of translation
	};


	//
	// Shared Methods
	//

	/*!
	 * Merge two or more objects together.
	 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
	 * @param   {Boolean}  deep     If true, do a deep (or recursive) merge [optional]
	 * @param   {Object}   objects  The objects to merge together
	 * @returns {Object}            Merged values of defaults and options
	 */
	var extend = function () {

		// Variables
		var extended = {};
		var deep = false;
		var i = 0;

		// Check if a deep merge
		if (Object.prototype.toString.call( arguments[0] ) === '[object Boolean]') {
			deep = arguments[0];
			i++;
		}

		// Merge the object into the extended object
		var merge = function (obj) {
			for (var prop in obj) {
				if (obj.hasOwnProperty(prop)) {
					// If property is an object, merge properties
					if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
						extended[prop] = extend(extended[prop], obj[prop]);
					} else {
						extended[prop] = obj[prop];
					}
				}
			}
		};

		// Loop through each object and conduct a merge
		for (; i < arguments.length; i++) {
			var obj = arguments[i];
			merge(obj);
		}

		return extended;

	};

	/**
	 * Get all text nodes within a container
	 * @param  {Node} node The parent node to search within
	 * @return {Array}     The text nodes
	 */
	var getTextNodes = function (node){
		var allNodes = [];
		for (node = node.firstChild; node; node = node.nextSibling) {
			if (node.nodeType === 3 && !node.parentElement.matches('script, [data-translate]')) {
				allNodes.push(node);
			} else {
				allNodes = allNodes.concat(getTextNodes(node));
			}
		}
		return allNodes;
	};


	//
	// Constructor
	// Can be named anything you want
	//

	var Constructor = function (options) {

		//
		// Unique Variables
		//

		var translate = {}; // Placeholder for the public APIs
		var settings; // Local settings
		var currentLang; // The currently selected language


		//
		// Unique Methods
		//

		/**
		 * Merge user options into defaults
		 * @param  {Object} options The user options
		 */
		translate.updateOptions = function (options) {
			settings = extend(defaults, options || {});
		};

		/**
		 * Save the chosen language into local storage
		 * @param  {String} lang The language
		 */
		translate.saveLang = function (lang) {
			localStorage.setItem('translateLang', lang);
		};

		/**
		 * Get the saved language from local storage
		 * @return {String} lang The language
		 */
		translate.getSavedLang = function () {
			return localStorage.getItem('translateLang');
		};

		/**
		 * Remove the saved language from local storage
		 */
		translate.removeSavedLang = function () {
			localStorage.removeItem('translateLang');
		};

		/**
		 * Set the current language
		 * @param {String} lang The language
		 */
		translate.setCurrentLang = function (lang) {

			// If no language is provided, set a default
			if (!lang) {

				// If there's no dictionary to use, bail
				if (settings.dictionary.length < 1) return;

				// Otherwise, get the first language of the first definition and use that
				for (var i = 0; i < settings.dictionary.length; i++) {
					for (var key in settings.dictionary[i]) {
						lang = key;
						break;
					}
					break;
				}

				// Set the settings default to this language
				settings.default = lang;

			}

			// Update the current language
			currentLang = lang;

			// Save the chosen language in local storagea
			translate.saveLang(lang);

		};

		/**
		 * Show any content blocks for the current language (and hide all others)
		 * @param  {String} lang The selected language
		 */
		translate.toggleLangBlock = function (lang) {

			// Hide active lang blocks
			document.querySelectorAll(settings.langBlockSelector + '.' + settings.activeClass).forEach((function (block) {
				block.classList.remove(settings.activeClass);
			}));

			// Show new lang blocks
			document.querySelectorAll(settings.langBlockPrefix + lang).forEach((function (block) {
				block.classList.add(settings.activeClass);
			}));

		};

		/**
		 * Translate targeted content into the new language
		 * @param  {Node|String} content  The content area to translate
		 * @param  {String}      lang     The selected language
		 */
		translate.translateContent = function (content, lang) {

			// Make sure definitions exist
			if (settings.dictionary.length < 1) return;

			// Get content if only a selector
			content = typeof content === 'string' ? document.querySelector(content) : content;

			// Get all of the text nodes in the content area
			var textNodes = getTextNodes(content);
			if (textNodes.length < 1) return;

			// Translate each text node
			settings.dictionary.forEach((function (definition) {

				// If the selected or current language don't exist for this definition, bail
				if (!definition[lang] || !definition[currentLang]) return;

				// Get all matching strings
				var matches = textNodes.filter((function (text) {
					return text.textContent.trim() === definition[currentLang].trim();
				}));

				// Translate all matching nodes
				matches.forEach((function (match) {
					match.textContent = definition[lang];
				}));

			}));

		};

		/**
		 * Translate all content areas
		 * @param  {String} lang The selected language
		 */
		var translateContentAreas = function (lang) {

			// If there are not content areas to translate, bail
			if (!settings.contentSelectors) return;

			// Translate the content of each content area
			document.querySelectorAll(settings.contentSelectors).forEach((function (content) {
				translate.translateContent(content, lang);
			}));

		};

		/**
		 * Activate the toggle for the currently selected language
		 * @param  {String} lang   The selected language
		 * @param  {Node}   toggle The toggle for the language
		 */
		translate.activateToggle = function (lang, toggle) {

			// Deselected any currently active toggles
			document.querySelectorAll('[data-translate="' + currentLang + '"].' + settings.activeClass).forEach((function (currentToggle) {
				currentToggle.classList.remove(settings.activeClass);
			}));

			// Activate the toggle for the currently selected language
			if (toggle) {
				toggle.classList.add(settings.activeClass);
			}

		};

		/**
		 * Run a translation
		 * @param  {String} lang   The selected language
		 * @param  {Node}   toggle The toggle for the language
		 */
		translate.run = function (lang, toggle) {

			// Activate toggle
			translate.activateToggle(lang, toggle);

			// Only run if language changes
			if (lang === currentLang) return;

			// Toggle lang block
			translate.toggleLangBlock(lang);

			// Translate content areas
			translateContentAreas(lang);

			// Update the currentLang
			translate.setCurrentLang(lang);

		};

		/**
		 * Handle click events
		 * @param  {Event} event  The click event
		 */
		var clickHandler = function (event) {

			// Get the selected language
			var lang = event.target.getAttribute('data-translate');
			if (!lang) return;

			// Prevent default link/button behavior
			event.preventDefault();

			// Run translation
			translate.run(lang, event.target);

		};

		/**
		 * Run a translation on Ajax page loads
		 */
		var ajaxHandler = function () {
			translate.run(currentLang, document.querySelector('[data-translate="' + currentLang + '"]'));
		};

		/**
		 * Destroy the current instantiation
		 */
		translate.destroy = function () {

			// If plugin isn't already initialized, stop
			if (!settings) return;

			// Reset to the default language
			translate.run(settings.default, document.querySelector('[data-translate="' + settings.default + '"]'));

			// Remove event listeners
			document.removeEventListener('click', clickHandler, false);
			window.removeEventListener('portalAfterRenderAjax', ajaxHandler, false);

			// Remove saved language
			translate.removeSavedLang();

			// Remove init class
			document.documentElement.classList.remove(settings.initClass);

			// Reset variables
			settings = null;

		};

		/**
		 * Initialize the plugin
		 */
		translate.init = function (options) {

			// Merge options into defaults
			translate.updateOptions(options);

			// Add init class
			document.documentElement.classList.add(settings.initClass);

			// Check for a saved language
			var saved = translate.getSavedLang();

			// Set the current language
			translate.setCurrentLang(settings.default);

			// Activate the current lang
			var lang = saved ? saved : currentLang;
			translate.run(lang, document.querySelector('[data-translate="' + lang + '"]'));

			// Listen for translation events
			document.addEventListener('click', clickHandler, false);
			window.addEventListener('portalAfterRenderAjax', ajaxHandler, false);

		};

		// Initialize the plugin
		translate.init(options);

		// Return the public APIs
		return translate;

	};


	//
	// Return the constructor
	//

	return Constructor;

}));