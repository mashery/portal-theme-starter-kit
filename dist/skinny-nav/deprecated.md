---

## Language Translation

You can add multi-language support to your Mashery developer portal.

### Demo

<ul class="list-inline">
	<li><a class="js-scroll-ignore active" data-translate="en" href="#">EN</a></li>
	<li><a class="js-scroll-ignore" data-translate="fr" href="#">FR</a></li>
	<li><a class="js-scroll-ignore" data-translate="sp" href="#">SP</a></li>
</ul>

<div class="translate translate-en active">
	<p>Hello, world!</p>
</div>

<div class="translate translate-fr">
	<p>Bonjour le monde!</p>
</div>

<div class="translate translate-sp">
	<p>¡Hola Mundo!</p>
</div>

### Getting Started

#### 1. Add language toggles

Turn any link or button into a language toggle by adding the `[data-translate]` data attribute. The value of this attribute should equal the language it toggles. You can use any naming convention for your languages that you'd like (ex. `en` or `english` for *English*, `fr` or `french` for *French*, and so on).

```html
<a data-translate="en" role="button" href="#">EN</a>
<a data-translate="fr" role="button" href="#">FR</a>
<a data-translate="sp" role="button" href="#">SP</a>

<!-- OR... -->

<button data-translate="english">English</button>
<button data-translate="french">French</button>
<button data-translate="spanish">Spanish</button>
```

*__Note:__ For proper accessibility for visitors using screen readers and other assistive technology, add `role="button"` if using links.*

#### 2. Add language blocks to your content

Within your editable content areas (like *Custom Pages*, *Documentation*, and *Blog Posts*), add pre-translated blocks of text by adding the `.translate` and  `.translate-*` classes to a `div` element. The `*` should match one of the `[data-translate]` values in your language toggles.

These language blocks are dynamically shown or hidden based on the visitor's selected language. Make a language block visible by default by adding the `.active` class. Language blocks can contain any content you want, including additional markup.

```html
<div class="translate translate-en active">
	<p>Hello, world!</p>
</div>

<div class="translate translate-fr">
	<p>Bonjour le monde!</p>
</div>

<div class="translate translate-sp">
	<p>¡Hola Mundo!</p>
</div>

<!-- OR... -->

<div class="translate translate-english active">
	<p>Hello, world!</p>
</div>

<div class="translate translate-french">
	<p>Bonjour le monde!</p>
</div>

<div class="translate translate-spanish">
	<p>¡Hola Mundo!</p>
</div>
```

#### 3. Create a dictionary of translation definitions

For areas where you cannot customize markup (such as header navigation, form labels, and documentation navigation), you will need to create a "dictionary" of words to look for and translate.

This is an array of objects. Each object contains a collection of key/value pairs, where the *key* is your language code/name (the one used in your `[data-translate]` toggles) and the *value* is the word or phrase in that language. These are *case sensitive*.

Whatever language you list first will be your default language unless you specify one in the [options and settings](#options-and-settings).

```javascript
var dictionary = [{
	en: 'Documentation',
	fr: 'Documentation',
	sp: 'Documentación'
},
{
	en: 'Interactive API',
	fr: 'API interactive',
	sp: 'API interactiva'
}];
```

You also need to provide a list of selectors for the content areas that you want to translate this way. Separate each selector with a comma, and be as restrictive as possible.

```javascript
// Translate the primary navigation, user navigation, and documentation navigation
var contentSelectors = '#nav-primary-list, #nav-user-list, #nav-docs ul';
```

*__Note:__ If you only want to use pre-translated language blocks, that's fine. You can skip this step.*

#### 4. Initialize your translations

Initialize your translations in a `portalAfterRender` event.

```js
window.addEventListener('portalAfterRender', function () {

	var dictionary = [{
		en: 'Documentation',
		fr: 'Documentation',
		sp: 'Documentación'
	},
	{
		en: 'Interactive API',
		fr: 'API interactive',
		sp: 'API interactiva'
	}];

	// Translate the primary navigation, user navigation, and documentation navigation
	var contentSelectors = '#nav-primary-list, #nav-user-list, #nav-docs ul';

	var translate = new Translate({
		contentSelector: contentSelectors,
		dictionary: dictionary
	});

}, false);
```

### Global Settings

You can pass options and callbacks into Smooth Scroll when initializing.

```javascript
var translate = new Translate({
	default: null, // The default language [optional]
	activeClass: 'active', // The class to add to active language blocks and toggles
	langBlockSelector: '.translate', // The selector for language blocks
	langBlockPrefix: '.translate-', // The selector prefix for language-specific language blocks
	contentSelectors: null, // The selectors for targeted content translation
	initClass: 'js-translate', // The class to add to the document when the script initializes
	dictionary: [], // Your disctionary of translation
});
```

### Use Translate events in your own scripts

You can also call Translate's methods in your own scripts.

#### updateOptions()
Update your options and settings.

```javascript
var translate = new Translate();
translate.updateOptions(options);
```

**Example**

```javascript
var translate = new Translate();
translate.updateOptions({
	dictionary: [{
		en: 'Hello',
		fr: 'Bonjour',
		sp: 'Hola'
	}]
});
```

#### saveLang()
Save the chosen language into local storage.

```javascript
var translate = new Translate();
translate.saveLang(lang);
```

**Example**

```javascript
var translate = new Translate();
translate.saveLang('fr');
```

#### getSavedLang()
Get the saved language from local storage.

```javascript
var translate = new Translate();
translate.getSavedLang();
```

**Example**

```javascript
var translate = new Translate();
var lang = translate.getSavedLang();

// Returns "fr"
console.log(lang);
```

#### removeSavedLang()
Remove the saved language from local storage.

```javascript
var translate = new Translate();
translate.removeSavedLang();
```

#### setCurrentLang()
Set the current language. Use this if you programmatically translate content.

```javascript
var translate = new Translate();
translate.setCurrentLang(lang);
```

**Example**

```javascript
var translate = new Translate();
translate.setCurrentLang('sp');
```

#### toggleLangBlock()
Show any content blocks for the current language (and hide all others).


```javascript
var translate = new Translate();
translate.toggleLangBlock(lang);
```

**Example**

```javascript
var translate = new Translate();
translate.toggleLangBlock('fr');
```

#### translateContent()
Translate targeted content into the new language.

```javascript
var translate = new Translate();
translate.translateContent(content, lang);
```

**Example**

```javascript
var translate = new Translate();
translate.translateContent('#nav-primary-list', 'fr');
```

#### activateToggle()
Activate the toggle for the currently selected language.

```javascript
var translate = new Translate();
translate.activateToggle(lang, toggle);
```

**Example**

```javascript
var translate = new Translate();
translate.activateToggle('fr', document.querySelector('[data-translate="fre"]'));
```

#### run()
Run a translation.

```javascript
var translate = new Translate();
translate.run(lang, toggle);
```

**Example**

```javascript
var translate = new Translate();
translate.run('fr', document.querySelector('[data-translate="fre"]'));
```

#### destroy()
Destroy the current `Translate()` instantiation.

```javascript
var translate = new Translate();
translate.destroy();
```

---

## GitHub-Hosted Documentation

You can now host your documentation on GitHub&mdash;taking advantage of its markdown support and version control features&mdash;and display it dynamically on your Mashery Portal.

This approach uses Blackbeard's [event hooks](https://developer.mashery.com/docs/read/your_portal/layout_and_design/Event_Hooks) and [custom JavaScript variables](https://developer.mashery.com/docs/read/your_portal/layout_and_design/CSS_and_JavaScript_Hooks#custom-javascript-variables) with the [GitHub Content API](https://developer.github.com/v3/repos/contents/).

### Getting Started

#### 1. Define your GitHub options and details

There are only two required options: `user` and `repo`. These should point to the GitHub username and repository, respectively, of the project to pull content from.

Exclude any other options from the list below to use the default.

```js
var githubDocsOptions = {
	selector: '.content', // The selector for the container to render the content in
	user: null, // The GitHub username for the repository
	repo: null, // The GitHub repository to get content from
	root: '', // The root directory to use in the project
	runScripts: false, // If true, run any in-content scripts after loading the content
	loading: '<p>Loading...</p>', // Text to display while loading content from GitHub
	failMessage: '<p>Unable to load content. Visit <a target="_blank" href="https://github.com/mashery/blackbeard/tree/master/docs/' + mashery.globals.github + '">https://github.com/mashery/blackbeard/tree/master/docs/' + mashery.globals.github + '</a> to view the documentation.</p>' // Text to display if the GitHub API returns an error
};
```

#### 2. Initialize GitHub Docs

Initialize GitHub Docs in a `portalAfterRender` event.

```js
window.addEventListener('portalAfterRender', function () {
	githubDocs(githubDocsOptions);
}, false);
```

#### 3. Point to your content

In the API Control Center under `Manage > Content`, click on the page you'd like to render from GitHub. Uncheck "Use TinyMCE", and add an inline script with a [global JavaScript variable](https://developer.mashery.com/docs/read/your_portal/layout_and_design/CSS_and_JavaScript_Hooks#custom-javascript-variables) named `github`.

It should be a string that points to the content path in your project (within the `root` directory if you specified one).

```html
<script>
	mashery.globals.github = 'path/to/your/content.md';
</script>
```

### An Example

Here's an example from this Portal.

**Setup**

```js
var githubDocsOptions = {
	user: 'mashery',
	repo: 'portal-theme-starter-kit',
	root: 'docs/' // The root directory for all of this documentation
};

window.addEventListener('portalAfterRender', function () {
	githubDocs(githubDocsOptions);
}, false);
```

**On The Page**

```html
<script>
	// Points to https://github.com/mashery/portal-theme-starter-kit/blob/master/docs/1-quick-start.md
	// The /docs in the URL is automatically added because it's set as the root directory for the project
	mashery.globals.github = '1-quickstart.md';
</script>
```

### Event Hooks

This plugin emits two custom events.

- `portalAfterGitHubRender` runs after content is rendered.
- `portalAfterGitHubError` runs if the GitHub Content API returns with an error.

You can hook into these to run additional scripts if desired.

### Potential Issues

#### No Search Integration

A known issue with this approach: content is not cached on our server and therefore not searchable via the built-in Portal search functionality.

You might try to get around this by including a brief description or some metadata in the body of your post in the Portal content editor. This content will be wiped out once the API data loads, but provides the internal search engine content to crawl and cache.

#### GitHub API Limits

The GitHub Content API limits the number of transactions, and once exceeded, returns an error.

To prevent excessive API calls, GitHub Docs caches each piece of documentation locally for the current browser session with `sessionStorage`. That said, on a high-traffic site, it's still possible to exceed your limit and receive a content error. Users will instead be directed to visit the content on GitHub directly.


---