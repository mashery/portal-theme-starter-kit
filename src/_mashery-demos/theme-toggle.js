/**
 * Toggle Portal Theme
 */

// Get the value of a query string from a URL
var masheryPortalThemeSetFromQuery = function () {

	// Get theme from query string
	var getQueryString = function () {
		var reg = new RegExp('[?&]theme=([^&#]*)', 'i');
		var string = reg.exec(window.location.href);
		return string ? string[1] : null;
	};

	// Variables
	var query =  getQueryString();

	// If query, store in session storage
	if (!query) return;
	sessionStorage.setItem('masheryPortalTheme', 'toggle-theme-' + query);
	var reg = new RegExp('theme=' + query, 'i');
	window.location.href = window.location.href.replace(reg, '');

};
masheryPortalThemeSetFromQuery();

// Load initial theme selection
window.addEventListener('portalBeforeRender', function (event) {

	// Variables
	var app = document.querySelector('#app-wrapper');
	if (!app) return;
	var toggle = document.querySelector('#theme-toggle-wrapper');
	if (toggle) return;

	// Create the toggle
	toggle = document.createElement('div');
	// toggle.className = 'highlight';
	// toggle.id = 'theme-toggle-wrapper';
	toggle.innerHTML =
		'<div class="highlight" style="position: fixed; bottom: 0; left: 0; right: 0;" id="theme-toggle-wrapper">' +
			'<div class="container">' +
				'<strong style="display: inline-block; margin-right: 8px;">Change Themes:</strong> ' +
				'<label class="input-inline text-no-bold margin-right" style="margin-right: 16px;"><input class="input-inline" type="radio" name="theme-toggle" id="toggle-theme-default"> Default</label> ' +
				'<label class="input-inline text-no-bold margin-right" style="margin-right: 16px;"><input class="input-inline" type="radio" name="theme-toggle" id="toggle-theme-skinny-nav"> Skinny Nav</label> ' +
				'<label class="input-inline text-no-bold margin-right" style="margin-right: 16px;"><input class="input-inline" type="radio" name="theme-toggle" id="toggle-theme-sidebar" checked> Sidebar</label> ' +
				'</div>' +
			'</div>';

	// Insert into the DOM
	app.after(toggle);

	// Add padding to the body element
	document.body.style.paddingBottom = '30px';

	// Check if there's a selected theme already
	var selected = sessionStorage.getItem('masheryPortalTheme');
	if (!selected) return;

	// Update the selected theme in the toggle
	var theme = document.querySelector('#' + selected);
	if (!theme) return;
	theme.setAttribute('checked', 'checked');

	// Swap out the stylesheet
	var style = document.querySelector('link[href*="/files/sidebar.css"]');
	if (!style) return;
	style.href = '/files/' + selected.replace('toggle-theme-', '') + '.css';

}, false);

// If theme is changed, store it in localStorage and trigger a new render
window.addEventListener('click', function (event) {
	if (!event.target.matches('input[name="theme-toggle"]')) return;
	sessionStorage.setItem('masheryPortalTheme', event.target.id);
	window.location.reload();
}, false);