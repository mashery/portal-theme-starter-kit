/**
 * Theme Templates
 */

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