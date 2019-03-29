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
		Array.prototype.forEach.call(arguments, function (obj) {
			for (var key in obj) {
				if (!obj.hasOwnProperty(key)) return;
				merged[key] = obj[key];
			}
		});
		return merged;
	};

	/**
	 * Add the details element to the DOM
	 * @param  {NodeList} navs The nav items to add the element to
	 */
	var makeDetails = function (navs) {
		Array.prototype.forEach.call(navs, function (nav) {

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

		});
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