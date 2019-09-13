/*!
 * portal-theme v2.0.0
 * Portal theme for...
 * (c) 2019 Chris Ferdinandi
 * MIT License
 * http://github.com/mashery/portal-theme-starter-kit
 */

/*
Details Element Polyfill 2.3.1
Copyright © 2019 Javan Makhmali
 */
(function() {
  "use strict";
  var element = document.createElement("details");
  element.innerHTML = "<summary>a</summary>b";
  element.setAttribute("style", "position: absolute; left: -9999px");
  var support = {
    open: "open" in element && elementExpands(),
    toggle: "ontoggle" in element
  };
  function elementExpands() {
    (document.body || document.documentElement).appendChild(element);
    var closedHeight = element.offsetHeight;
    element.open = true;
    var openedHeight = element.offsetHeight;
    element.parentNode.removeChild(element);
    return closedHeight != openedHeight;
  }
  var styles = '\ndetails, summary {\n  display: block;\n}\ndetails:not([open]) > *:not(summary) {\n  display: none;\n}\nsummary::before {\n  content: "►";\n  padding-right: 0.3rem;\n  font-size: 0.6rem;\n  cursor: default;\n}\n[open] > summary::before {\n  content: "▼";\n}\n';
  var _ref = [], forEach = _ref.forEach, slice = _ref.slice;
  if (!support.open) {
    polyfillStyles();
    polyfillProperties();
    polyfillToggle();
    polyfillAccessibility();
  }
  if (support.open && !support.toggle) {
    polyfillToggleEvent();
  }
  function polyfillStyles() {
    document.head.insertAdjacentHTML("afterbegin", "<style>" + styles + "</style>");
  }
  function polyfillProperties() {
    var prototype = document.createElement("details").constructor.prototype;
    var setAttribute = prototype.setAttribute, removeAttribute = prototype.removeAttribute;
    var open = Object.getOwnPropertyDescriptor(prototype, "open");
    Object.defineProperties(prototype, {
      open: {
        get: function get() {
          if (this.tagName == "DETAILS") {
            return this.hasAttribute("open");
          } else {
            if (open && open.get) {
              return open.get.call(this);
            }
          }
        },
        set: function set(value) {
          if (this.tagName == "DETAILS") {
            return value ? this.setAttribute("open", "") : this.removeAttribute("open");
          } else {
            if (open && open.set) {
              return open.set.call(this, value);
            }
          }
        }
      },
      setAttribute: {
        value: function value(name, _value) {
          var _this = this;
          var call = function call() {
            return setAttribute.call(_this, name, _value);
          };
          if (name == "open" && this.tagName == "DETAILS") {
            var wasOpen = this.hasAttribute("open");
            var result = call();
            if (!wasOpen) {
              var summary = this.querySelector("summary");
              if (summary) summary.setAttribute("aria-expanded", true);
              triggerToggle(this);
            }
            return result;
          }
          return call();
        }
      },
      removeAttribute: {
        value: function value(name) {
          var _this2 = this;
          var call = function call() {
            return removeAttribute.call(_this2, name);
          };
          if (name == "open" && this.tagName == "DETAILS") {
            var wasOpen = this.hasAttribute("open");
            var result = call();
            if (wasOpen) {
              var summary = this.querySelector("summary");
              if (summary) summary.setAttribute("aria-expanded", false);
              triggerToggle(this);
            }
            return result;
          }
          return call();
        }
      }
    });
  }
  function polyfillToggle() {
    onTogglingTrigger((function(element) {
      element.hasAttribute("open") ? element.removeAttribute("open") : element.setAttribute("open", "");
    }));
  }
  function polyfillToggleEvent() {
    if (window.MutationObserver) {
      new MutationObserver(function(mutations) {
        forEach.call(mutations, (function(mutation) {
          var target = mutation.target, attributeName = mutation.attributeName;
          if (target.tagName == "DETAILS" && attributeName == "open") {
            triggerToggle(target);
          }
        }));
      }).observe(document.documentElement, {
        attributes: true,
        subtree: true
      });
    } else {
      onTogglingTrigger((function(element) {
        var wasOpen = element.getAttribute("open");
        setTimeout((function() {
          var isOpen = element.getAttribute("open");
          if (wasOpen != isOpen) {
            triggerToggle(element);
          }
        }), 1);
      }));
    }
  }
  function polyfillAccessibility() {
    setAccessibilityAttributes(document);
    if (window.MutationObserver) {
      new MutationObserver(function(mutations) {
        forEach.call(mutations, (function(mutation) {
          forEach.call(mutation.addedNodes, setAccessibilityAttributes);
        }));
      }).observe(document.documentElement, {
        subtree: true,
        childList: true
      });
    } else {
      document.addEventListener("DOMNodeInserted", (function(event) {
        setAccessibilityAttributes(event.target);
      }));
    }
  }
  function setAccessibilityAttributes(root) {
    findElementsWithTagName(root, "SUMMARY").forEach((function(summary) {
      var details = findClosestElementWithTagName(summary, "DETAILS");
      summary.setAttribute("aria-expanded", details.hasAttribute("open"));
      if (!summary.hasAttribute("tabindex")) summary.setAttribute("tabindex", "0");
      if (!summary.hasAttribute("role")) summary.setAttribute("role", "button");
    }));
  }
  function eventIsSignificant(event) {
    return !(event.defaultPrevented || event.ctrlKey || event.metaKey || event.shiftKey || event.target.isContentEditable);
  }
  function onTogglingTrigger(callback) {
    addEventListener("click", (function(event) {
      if (eventIsSignificant(event)) {
        if (event.which <= 1) {
          var element = findClosestElementWithTagName(event.target, "SUMMARY");
          if (element && element.parentNode && element.parentNode.tagName == "DETAILS") {
            callback(element.parentNode);
          }
        }
      }
    }), false);
    addEventListener("keydown", (function(event) {
      if (eventIsSignificant(event)) {
        if (event.keyCode == 13 || event.keyCode == 32) {
          var element = findClosestElementWithTagName(event.target, "SUMMARY");
          if (element && element.parentNode && element.parentNode.tagName == "DETAILS") {
            callback(element.parentNode);
            event.preventDefault();
          }
        }
      }
    }), false);
  }
  function triggerToggle(element) {
    var event = document.createEvent("Event");
    event.initEvent("toggle", false, false);
    element.dispatchEvent(event);
  }
  function findElementsWithTagName(root, tagName) {
    return (root.tagName == tagName ? [ root ] : []).concat(typeof root.getElementsByTagName == "function" ? slice.call(root.getElementsByTagName(tagName)) : []);
  }
  function findClosestElementWithTagName(element, tagName) {
    if (typeof element.closest == "function") {
      return element.closest(tagName);
    } else {
      while (element) {
        if (element.tagName == tagName) {
          return element;
        } else {
          element = element.parentNode;
        }
      }
    }
  }
})();

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
	var settings, app;

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
		app.classList.remove( settings.initClass );
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
		app = document.querySelector('#app');

		// Listeners and methods
		app.classList.add( settings.initClass ); // Add class to HTML element to activate conditional CSS
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

	var createLangNav = function (settings, selector) {

		var codes = document.querySelectorAll(selector + ' pre code');
		var reg = new RegExp(settings.langDefault);
		var lang = settings.langs.filter((function (lang) {
			return reg.test(lang.selector);
		}))[0];

		// Create select menu
		var select = document.createElement('div');
		select.className = settings.langsNav;
		select.innerHTML = '<label class="screen-reader">Select your preferred programming language</label><select>' + settings.langs.map((function (lang, index) {
			return '<option value="' + lang.selector.split(',')[0].trim() + '" ' + (reg.test(lang.selector) ? 'selected="selected"' : '') + '>' + lang.title + '</option>';
		})).join('') + '</select>';

		codes.forEach((function (code, index) {

			var pre = code.parentNode;

			// Inject selector before the first pre element in a group
			if (!pre.previousElementSibling.matches('pre')) {
				var toggle = select.cloneNode(true);
				toggle.querySelector('select').id = 'lang-toggle-' + index;
				toggle.querySelector('label').setAttribute('for', 'lang-toggle-' + index);
				pre.parentNode.insertBefore(toggle, pre);
			}

			// Show default languages
			lang.selector.split(',').forEach((function (className) {
				if (!code.matches('.lang-' + className.trim() + ', .language-' + className.trim())) return;
				pre.classList.add('active');
			}));

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
			var lang = settings.langs.filter((function (lang) {
				return reg.test(lang.selector);
			}))[0];
			var val = lang.selector.split(',')[0].trim();

			if (!lang || !lang.selector) return;

			var classes = lang.selector.split(',').reduce((function (arr, className) {
				arr.push('pre.lang-' + className.trim());
				arr.push('pre.language-' + className.trim());
				return arr;
			}), []);

			var currentLang = document.querySelectorAll('[class*="lang-"].active, [class*="language-"].active');
			var newLang = document.querySelectorAll(classes.join(','));
			var toggles = document.querySelectorAll('.' + settings.langsNav + ' select');

			currentLang.forEach((function (lang) {
				lang.classList.remove('active');
			}));

			newLang.forEach((function (lang) {
				lang.classList.add('active');
			}));

			toggles.forEach((function (toggle) {
				toggle.value = val;
			}));

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
				createStyles(settings.langs);
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

	return BetterDocs;

}));
/**
 * docsNavCollapse.js
 * Copyright (c) 2019. TIBCO Software Inc. All Rights Reserved.
 * @description Expand-and-collapse documentation navigation.
 * @version     2.0.0
 * @author      Chris Ferdinandi
 */
var docsNavCollapse = function (options) {

	'use strict';

	//
	// Variables
	//

	// @todo make these part of the script, duh!
	var defaults = {
		selector: '#nav-docs',
		className: 'docs-nav-dropdown',
		overview: 'Overview'
	};

	var settings;


	//
	// Methods
	//

	/**
	 * Merge two or more objects together.
	 * @param   {Object}   objects  The objects to merge together
	 * @returns {Object}            Merged values of defaults and options
	 */
	var extend = function () {
		var merged = {};
		Array.prototype.forEach.call(arguments, (function (obj) {
			for (var key in obj) {
				if (!obj.hasOwnProperty(key)) return;
				merged[key] = obj[key];
			}
		}));
		return merged;
	};

	/**
	 * Add the details element to the DOM
	 * @param  {NodeList} navs The nav items to add the element to
	 */
	var makeDetails = function (navs) {
		Array.prototype.forEach.call(navs, (function (nav) {

			// Variables
			var li = nav.closest('li');
			var link = li.querySelector('a');
			var open = li.classList.contains('active') ? ' open' : '';

			// Add the element
			li.innerHTML =
				'<details class="' + settings.className + '"' + open + '>' +
					'<summary>' + link.textContent + '</summary>' +
					'<ul>' +
						'<li class="' + li.className + '"><a href="' + link.href + '">' + settings.overview + '</a></li>' +
						nav.innerHTML +
					'</ul>' +
				'</details>';

			// Recursively add to child elements
			var navs = li.querySelectorAll('ul > li > ul');
			makeDetails(navs);

		}));
	};

	/**
	 * Initialize the plugin
	 */
	var init = function () {
		settings = extend(defaults, options || {});
		var navs = document.querySelectorAll(settings.selector + ' ul > li > ul');
		if (navs.length < 1) return;
		makeDetails(navs);
	};


	//
	// Inits
	//

	init();

};
/*!
 * addDropdown.js v1.1.0
 * Add dropdown menus to the primary nav
 * (c) 2019 TIBCO Software Inc.
 * Written by Chris Ferdinandi
 * All Rights Reserved
 */
var addDropdown = function (url, data, home) {

	'use strict';

	//
	// Variables
	//

	var nav = document.querySelector('#nav-primary-list');


	//
	// Methods
	//

	var addDropdown = function () {

		// Get the target element
		var target = nav.querySelector('a[href*="' + url + '"]');
		if (!target) return;
		var li = target.closest('li');
		if (!li) return;

		// Replace original link
		var original = '';
		if (home) {
			original = '<li><a href="' + target.href + '">' + home + '</a></li>';
		}

		// Inject the new DOM
		li.innerHTML = '<details class="nav-dropdown"><summary>' + target.textContent + '</summary><ul>' + original + data.map((function (item) {
			return '<li><a href="' + item.url + '">' + item.title + '</a></li>';
		})).join('') + '</ul></details>';

	};

	var closeOthers = function (current) {
		var details = nav.querySelectorAll('.nav-dropdown[open]');
		Array.prototype.forEach.call(details, (function (detail) {
			if (detail === current) return;
			detail.removeAttribute('open');
		}));
	};

	var toggleHandler = function (event) {
		if (!event.target.open) return;
		closeOthers(event.target);
	};

	var addEvent = function () {

		// If already setup, bail
		if (m$.dropdown) return;

		// Add event listener
		nav.addEventListener('toggle', toggleHandler, true);
		m$.dropdown = true;

	};


	//
	// Inits & Event Listeners
	//

	// Make sure there's data
	if (!data || Object.prototype.toString.call(data) !== '[object Array]' || data.length < 1) return;

	// Add the dropdown
	addDropdown();

	// Setup event listener
	addEvent();

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
		var posts = data.querySelectorAll('#main .section');
		if (posts.length > 0) {
			posts.forEach((function (post, index) {
				if (index >= settings.count) return;
				var title = post.querySelector('h2 a');
				var author = post.querySelector('.user-reference');
				var excerpt = document.createElement('div');
				excerpt.innerHTML = m$.convertMarkdown(post.querySelector('.section-body').innerHTML);
				postData = {
					author: author.innerHTML.split('(')[0],
					authorUrl: null,
					excerpt: excerpt.textContent.slice(0, parseInt(settings.excerptLength, 10)),
					published: post.querySelector('.timestamp abbr').getAttribute('title'),
					title: title.innerHTML,
					url: title.getAttribute('href'),
				};
				list += settings.template(postData);
			}));
		} else {
			list = '<li><em>No blog posts yet.</em></li>';
		}

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