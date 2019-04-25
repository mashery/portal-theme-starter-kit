var masheryPortalThemeSelected = sessionStorage.getItem('masheryPortalTheme');

/**
 * Theme Templates
 */

if (masheryPortalThemeSelected === 'toggle-theme-skinny-nav') {

	// Remove the user nav
	window.portalOptions.templates.userNav = null;

	// Adjust the primary nav
	window.portalOptions.templates.primaryNav =
		'<div class="nav-primary nav-wrap" id="nav-primary">' +
			'<div class="container padding-top-small padding-bottom-small">' +
				'<a id="logo" class="logo" href="/">{{content.logo}}</a>' +
				'<a role="button" class="nav-toggle" id="nav-primary-toggle" data-nav-toggle=".nav-collapse" href="#">{{content.menuToggle}}</a>' +
				'<div class="nav-menu">' +
					'<div id="nav-user-menu" class="nav-collapse">' +
						'<ul class="nav" id="nav-user-list">' +
							'{{content.navItemsUser}}' +
						'</ul>' +
					'</div>' +
					'<div id="nav-primary-menu" class="nav-collapse">' +
						'<ul class="nav" id="nav-primary-list">' +
							'{{content.navItemsPrimary}}' +
							'<li><a href="/search"><svg xmlns="http://www.w3.org/2000/svg" style="height: 1em; width: 1em;" viewBox="0 0 32 32" aria-describedBy="search-link-title"><title id="search-link-title">Search</title><path fill="currentColor" d="M31.008 27.231l-7.58-6.447c-.784-.705-1.622-1.029-2.299-.998a11.954 11.954 0 0 0 2.87-7.787c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-.031.677.293 1.515.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007.23s.997-2.903-.23-4.007zM12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"/></svg></a></li>' +
						'</ul>' +
					'</div>' +
				'</div>' +
			'</div>' +
		'</div>';

	// Enable full width layouts
	window.portalOptions.templates.page = function () {
		return	'<div class="main container container-small content" id="main">' +
					(mashery.globals.noHeading ? '' : '<h1>{{content.heading}}</h1>') +
					'{{content.main}}' +
				'</div>';
	};

	window.addEventListener('portalBeforeRender', function () {
		if (mashery.globals.noHeading) {
			document.documentElement.classList.add('page-no-heading');
		} else {
			document.documentElement.classList.remove('page-no-heading');
		}
	}, false);

	// Add theme style hook
	document.documentElement.className += ' js-theme-skinny-nav';

} else if (masheryPortalThemeSelected === 'toggle-theme-sidebar') {

	// Remove the user nav
	window.portalOptions.templates.userNav = null;

	// Update the primary nav
	portalOptions.templates.primaryNav = function () {
		var template =
			'<div class="nav-primary nav-wrap" id="nav-primary">' +
				'<div class="container padding-top-small padding-bottom-small">' +
					'<a id="logo" class="logo" href="/">{{content.logo}}</a>' +
					'<a role="button" class="nav-toggle" id="nav-primary-toggle" data-nav-toggle=".nav-collapse" href="#">{{content.menuToggle}}</a>' +
					'<div class="nav-menu nav-collapse" id="nav-primary-menu">' +
						'<ul class="nav" id="nav-primary-list">' +
							'{{content.navItemsPrimary}}' +
						'</ul>' +
						'<ul class="nav-user-list" id="nav-user-list">' +
							'{{content.navItemsUser}}' +
						'</ul>' +
						'{{content.searchForm}}' +
						(mashery.contentType === 'docs' ? '<h2 class="margin-top">In The Docs</h2><ul class="nav-docs" id="nav-docs">{{content.secondary}}</ul>' : '') +
					'</div>' +
				'</div>' +
			'</div>';
		return template;
	};

	// Update the documentation
	window.portalOptions.templates.docs =
		'<div class="main container content" id="main">' +
			'<h1>{{content.heading}}</h1>' +
			'{{content.main}}' +
		'</div>';

	// Adjust the layout
	window.portalOptions.templates.layout =
		'<div class="row row-no-padding clearfix">' +
			'<div class="grid-fourth">' +
				'<a class="screen-reader screen-reader-focusable" href="#main">Skip to content</a>' +
				'{{layout.navPrimary}}' +
			'</div>' +
			'<div class="grid-three-fourths">' +
				'{{layout.main}}' +
				'<footer class="footer" id="footer">' +
					'{{layout.footer1}}' +
					'{{layout.navSecondary}}' +
					'{{layout.footer2}}' +
				'</footer>' +
			'</div>' +
		'</div>';

	// Enable full width layouts
	window.portalOptions.templates.page = function () {
		return	'<div class="main container container-small content" id="main">' +
					(mashery.globals.noHeading ? '' : '<h1>{{content.heading}}</h1>') +
					'{{content.main}}' +
				'</div>';
	};

	window.addEventListener('portalBeforeRender', function () {
		if (mashery.globals.noHeading) {
			document.documentElement.classList.add('page-no-heading');
		} else {
			document.documentElement.classList.remove('page-no-heading');
		}
	}, false);

	// Add theme style hook
	document.documentElement.className += ' js-theme-sidebar';

} else {

	// Enable full width layouts
	window.portalOptions.templates.page = function () {
		return	'<div class="main container container-small content" id="main">' +
					(mashery.globals.noHeading ? '' : '<h1>{{content.heading}}</h1>') +
					'{{content.main}}' +
				'</div>';
	};

	window.addEventListener('portalBeforeRender', function () {
		if (mashery.globals.noHeading) {
			document.documentElement.classList.add('page-no-heading');
		} else {
			document.documentElement.classList.remove('page-no-heading');
		}
	}, false);

	// Add theme style hook
	document.documentElement.className += ' js-theme-default';
}



/**
 * Initialize plugins
 */
window.addEventListener('portalAfterRender', function () {

	// Expand-and-collapse nav on small viewports
	astro.init();

	// Enhanced documentation
	if (document.querySelector('.better-docs-nav')) {
		new BetterDocs('.content', {
			langs: {
				bash: {
					selector: 'bash',
					title: 'Bash'
				},
				js: {
					selector: 'javascript, js',
					title: 'JavaScript',
				},
				ruby: {
					selector: 'ruby',
					title: 'Ruby'
				},
				python: {
					selector: 'python',
					title: 'Python'
				}
			},
			langDefault: 'js',
			wideLayout: (document.documentElement.classList.contains('js-theme-sidebar') ? true : false),
		});
	}

	// Conditional content
	// Add logged-in/logged-out class
	if (window.mashery.loggedIn) {
		document.documentElement.classList.add('is-logged-in');
		document.documentElement.classList.remove('is-logged-out');
	} else {
		document.documentElement.classList.add('is-logged-out');
		document.documentElement.classList.remove('is-logged-in');
	}

	// Responsive iFrame Videos
	fluidvids.init({
		selector: ['iframe', 'object'], // runs querySelectorAll()
		players: ['www.youtube.com', 'player.vimeo.com'] // players to support
	});

	// Get the latest blog posts
	latestBlogPosts();

	// Sticky footer
	if (mashery.contentType === 'ioDocs') {
		window.setTimeout(function () {
			stickyFooter('#footer');
		}, 300);
	} else {
		stickyFooter('#footer');
	}

}, false);

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
	var themeName = selected.replace('toggle-theme-', '');
	var style = document.querySelector('link[href="https://stagingcs1.mashery.com/files/default.css"]');
	if (!style) return;
	style.href = 'https://stagingcs1.mashery.com/files/' + themeName + '.css';

}, false);

// If theme is changed, store it in localStorage and trigger a new render
window.addEventListener('click', function (event) {
	if (!event.target.matches('input[name="theme-toggle"]')) return;
	sessionStorage.setItem('masheryPortalTheme', event.target.id);
	window.location.reload();
}, false);