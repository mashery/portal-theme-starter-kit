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
		li.innerHTML = '<details class="nav-dropdown"><summary>' + target.textContent + '</summary><ul>' + original + data.map(function (item) {
			return '<li><a href="' + item.url + '">' + item.title + '</a></li>';
		}).join('') + '</ul></details>';

	};

	var closeOthers = function (current) {
		var details = nav.querySelectorAll('.nav-dropdown[open]');
		Array.prototype.forEach.call(details, function (detail) {
			if (detail === current) return;
			detail.removeAttribute('open');
		});
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