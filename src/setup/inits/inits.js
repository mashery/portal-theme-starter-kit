

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