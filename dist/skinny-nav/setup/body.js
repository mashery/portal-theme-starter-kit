/*!
 * Templates & Initializations
 * portal-themes v2.0.0
 * http://github.com/mashery/portal-themes
 */


/**
 * Theme Templates
 */

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
						'<li><a href="/search"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-link" width="16" height="16" viewBox="0 0 32 32"><title>Search</title><path d="M31.008 27.231l-7.58-6.447c-.784-.705-1.622-1.029-2.299-.998a11.954 11.954 0 0 0 2.87-7.787c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-.031.677.293 1.515.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007.23s.997-2.903-.23-4.007zM12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"/></svg></a></li>' +
					'</ul>' +
				'</div>' +
			'</div>' +
		'</div>' +
	'</div>';

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
document.documentElement.className += ' js-theme-skinny-nav';


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

	// Accordion content
	houdini.init({
		selectorToggle: '.collapse-toggle'
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

}, false);