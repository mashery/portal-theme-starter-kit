/**
 * prismForTinyMCE.js
 * Copyright (c) 2017. TIBCO Software Inc. All Rights Reserved.
 * @description  Adds class="lang-*" to TinyMCE-generated code snippets
 * @version  2.1.0
 * @author  Chris Ferdinandi
 */
window.addEventListener('portalBeforeRender', function () {

	'use strict';

	// Make sure content exists
	if (!window.mashery.content.main) return;


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
	codes.forEach(function (code) {
		var lang = /brush: (.*?);/.exec( code.className );
		if (!lang || Object.prototype.toString.call(lang) !== '[object Array]' || lang.length < 2) return;
		var langClass = getLangClass(lang[1]);
		code.classList.add(langClass);
	});

	// Update content
	window.mashery.content.main = content.innerHTML;

}, false);