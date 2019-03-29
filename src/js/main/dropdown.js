/*!
 * addDropdown.js v1.0.0
 * Add dropdown menus to the primary nav
 * (c) 2019 TIBCO Software Inc.
 * Written by Chris Ferdinandi
 * All Rights Reserved
 */
var addDropdown = function (url, data, home) {

	'use strict';

	// Make sure there's data
	if (!data || Object.prototype.toString.call(data) !== '[object Array]' || data.length < 1) return;

	// Get the target element
	var target = document.querySelector('#nav-primary-list a[href*="' + url + '"]');
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