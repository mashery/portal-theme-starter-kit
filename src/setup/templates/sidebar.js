/**
 * Theme Templates
 */

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