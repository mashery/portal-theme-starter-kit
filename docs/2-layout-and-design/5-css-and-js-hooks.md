Blackbeard includes unique classes and JavaScript variables you can use to more easily to apply styles, layouts, and scripts to specific pages and content types.

## CSS Hooks

The primary `#app-wrapper` container has two classes you can use to scope your CSS to specific pages and content types.

0. `.category-*` is the content type. Examples include `.category-page` and `.category-docs`.
0. `.single-*` is a class unique to that specific page and not shared by any others. You can use it to target styles to a specific page.

There's a third class&mdash;`.content`&mdash;that is rendered on the primary content area `div` on custom pages and documentation.

This class *can* be changed or overwritten if you [update the template](/docs/read/your_portal/layout_and_design/Templates) for either of these content types.

```css
/* Make the H1 element smaller on documentation pages */
.category-docs h1 {
	font-size: 1.5em;
}

/* Change the max-width on the homepage */
.single-home .container {
	max-width: 60em;
}

/* Give the content area a background color on custom pages and docs */
.content {
	background-color: #f7f7f7;
}
```

## JavaScript Hooks

There are a handful of hooks you can use in your JavaScript, scoped within the `mashery` global object.

- `mashery.contentType` is the content type. Examples include `docs` and `page`.
- `mashery.contentId` is unique to the specific page and not shared by any others. You can use it to target scripts to a specific page.
- `mashery.area` is the name of your Mashery Area as defined in Control Center.
- `mashery.isAdmin` is a boolean that returns `true` if the current user has access to Control Center.
- `mashery.loggedIn` is a boolean that returns `true` if the current user is logged in.
- `mashery.userProfile` is a link to the current user's profile, if logged in.
- `mashery.username` is the username of the current user, if logged in.

```js
// Display a message on documentation pages if the user is not logged in
if (mashery.contentType === 'docs' && !mashery.loggedIn) {
	var content = document.querySelector('.content');
	content.innerHTML = '<p>Please log in to view the full set of documentation. As a logged out user, you are only seeing a small introductory set of content.</p>' + content.innerHTML;
}
```

## Custom JavaScript Variables

You can also create custom hooks that can be used in your scripts by setting them to the `mashery.globals` object.

You can assign globals in the API Control Center. Go to `Manage > Portal` and click `Portal Settings`. Then add them to the `Body JavaScript` field under the `Inline Javascript` section. You can also add them in a `script` element on an individual page or piece of documentation.

Globals can be a boolean, number, or string. Functions will not work and will throw an error.

```js
mashery.globals.isAwesome = true;
mashery.globals.secretMessage = 'What is the answer to life, the universe, and everything?';
mashery.globals.answer = 42;

// If present, display a secret message
if (mashery.globals.secretMessage) {
	var hitchHikers = prompt(mashery.globals.secretMessage);
	if (hitchHikers == mashery.globals.answer) {
		alert('You\'re a good frood!');
	} else {
		alert('So long and thanks for all the fish!');
	}
}
```

*__Note:__ If you're using Ajax page loads (the default behavior), you must set your globals to `mashery.globals` if you want to access them on subsequent page loads.*