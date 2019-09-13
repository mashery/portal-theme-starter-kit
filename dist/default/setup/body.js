/*!
 * Templates & Initializations
 * portal-theme v2.0.0
 * Portal Theme Starter Kit v2.9.0 - Default Theme
 * http://github.com/mashery/portal-theme-starter-kit
 */


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

// Add theme style hook
document.documentElement.className += ' js-theme-default';


// Add customizations here...


/**
 * Initialize plugins
 */
window.addEventListener('portalAfterRender', function () {

	// Expand-and-collapse nav on small viewports
	astro.init();

	// Enhanced documentation
	if (mashery.globals.betterDocs) {
		new BetterDocs('.content', {
			langs: [
				{
					selector: 'bash',
					title: 'Bash'
				},
				{
					selector: 'javascript, js',
					title: 'JavaScript',
				},
				{
					selector: 'ruby',
					title: 'Ruby'
				},
				{
					selector: 'python',
					title: 'Python'
				}
			],
			langDefault: 'js',
			wideLayout: true,
		};
	}

	// Responsive iFrame Videos
	fluidvids.init({
		selector: ['iframe', 'object'], // runs querySelectorAll()
		players: ['www.youtube.com', 'player.vimeo.com'] // players to support
	});

	// Get the latest blog posts
	latestBlogPosts();

}, false);