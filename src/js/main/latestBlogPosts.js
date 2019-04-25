/*!
 * latestBlogPosts.js v1.0.0
 * Load the latest blog posts onto any page
 * (c) 2017 TIBCO Software Inc.
 * Written by Chris Ferdinandi
 * All Rights Reserved
 */
var latestBlogPosts = function (options) {

	var defaults = {
		selector: '#latest-blog-posts',
		listClass: 'latest-blog-posts-list',
		count: 5,
		excerptLength: 250,
		listType: 'ul',
		template: function (post) {
			var template =
				'<li>' +
					'<strong><a href="' + post.url + '">' + post.title + '</a></strong><br>' +
					'<span class="text-muted">By ' + post.author + ' on ' + post.published + '</span><br>' +
					post.excerpt + '...' +
				'</li>';
			return template;
		}
	};

	// Shallow merge options into defaults
	var settings = defaults;
	for (var key in options) {
		if (options.hasOwnProperty(key)) {
			settings[key] = options[key];
		}
	}

	var latestPosts = document.querySelector(settings.selector);
	if (!latestPosts) return;

	atomic.ajax({
		url: '/blog',
		responseType: 'document'
	}).success(function (data) {
		var list = '';
		var posts = data.querySelectorAll('#main .section');
		if (posts.length > 0) {
			posts.forEach(function (post, index) {
				if (index >= settings.count) return;
				var title = post.querySelector('h2 a');
				var author = post.querySelector('.user-reference');
				var excerpt = document.createElement('div');
				excerpt.innerHTML = m$.convertMarkdown(post.querySelector('.section-body').innerHTML);
				postData = {
					author: author.innerHTML.split('(')[0],
					authorUrl: null,
					excerpt: excerpt.textContent.slice(0, parseInt(settings.excerptLength, 10)),
					published: post.querySelector('.timestamp abbr').getAttribute('title'),
					title: title.innerHTML,
					url: title.getAttribute('href'),
				};
				list += settings.template(postData);
			});
		} else {
			list = '<li><em>No blog posts yet.</em></li>';
		}

		latestPosts.innerHTML = '<' + settings.listType + ' class="' + settings.listClass + '">' + list + '</' + settings.listType + '>';
	});

};