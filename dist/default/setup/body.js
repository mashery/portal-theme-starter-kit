/*!
 * Templates & Initializations
 * portal-theme v1.0.0
 * Portal Theme Starter Kit v2.5.0 - Default Theme
 * http://github.com/mashery/portal-theme-starter-kit
 */


/**
 * Theme Templates
 */

// Enable full width layouts
window.portalOptions.templates.page = function () {
	if (mashery.globals.pageFullWidth) {
		return	'<div class="main content" id="main">' +
					'{{content.main}}' +
				'</div>';
	} else if (mashery.globals.pageWide) {
		return	'<div class="main container content" id="main">' +
					'<h1>{{content.heading}}</h1>' +
					'{{content.main}}' +
				'</div>';
	} else {
		return	'<div class="main container container-small content" id="main">' +
					'<h1>{{content.heading}}</h1>' +
					'{{content.main}}' +
				'</div>';
	}
};

window.addEventListener('portalBeforeRender', function () {
	if (mashery.globals.pageFullWidth) {
		document.documentElement.classList.add('full-width');
	} else {
		document.documentElement.classList.remove('full-width');
	}
}, false);

// Add theme style hook
document.documentElement.className += ' js-theme-default';


/**
 * Initialize plugins
 */
window.addEventListener('portalAfterRender', function () {

	// Expand-and-collapse nav on small viewports
	astro.init();

	// Enhanced documentation
	var docs = {};
	if (document.querySelector('.better-docs-nav')) {
		docs = new BetterDocs('.content', {
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
	// Destroy instantiation on Ajax page reload
	window.addEventListener('portalBeforeRender', function () {
		if ('destroy' in docs) {
			docs.destroy();
		}
	}, false);

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

	// Smooth scrolling to anchor links
	var scroll = {};
	scroll = new SmoothScroll('.category-page #main-wrapper a[href*="#"], .category-docs #main-wrapper a[href*="#"], .category-docs #main-wrapper a[href*="#"], .category-blogall #main-wrapper a[href*="#"], .category-blogsingle #main-wrapper a[href*="#"], #nav-docs a[href*="#"]', {
		ignore: '.js-scroll-ignore'
	});

	// Destroy instantiation on Ajax page reload
	window.addEventListener('portalBeforeRender', function () {
		if ('destroy' in scroll) {
			scroll.destroy();
		}
	}, false);

	// Language translation
	window.addEventListener('portalAfterRender', function () {
		// NOTE: You should update this with your desired options, languages, and translations.
		// Details at https://developer.mashery.com/docs/customizing_your_portal/plugins/Translate
		var translate = new Translate();
	}, false);

	// Sticky footer
	stickyFooter('#footer');

}, false);