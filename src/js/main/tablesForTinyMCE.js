/**
 * tablesForTinyMCE.js
 * Copyright (c) 2017. TIBCO Software Inc. All Rights Reserved.
 * @description Add table headers that are missing from the GUI generated tables
 * @version  2.1.0
 * @author Chris Ferdinandi
 *
 */
window.addEventListener('portalBeforeRender', function () {


	'use strict';

	// Make sure content exists
	if (!window.mashery.content.main) return;


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
	tables.forEach(function (table) {

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

	});

	// Update content
	window.mashery.content.main = content.innerHTML;

}, false);