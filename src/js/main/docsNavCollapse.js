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
		navItems.forEach(function (item) {

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

		});
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