Blackbeard has built-in syntax highlighting powered by [Prism.js](http://prismjs.com/).

All of the themes in the Portal Theme Starter Kit include syntax highlighting styles. They can be modified in your theme CSS, or if you're rolling your own theme, you can grab one of the themes on the [Prism website](http://prismjs.com/).


## Highlighting Code

In order for syntax highlighting to work, your code must be wrapped in both `pre` and `code` elements.

The `pre` element should have either a `.lang-*` or `language-*` class, where `*` is the language being used.

```html
<pre class="lang-javascript">
	<code>
		var someElement = document.querySelector('#my-app');
	</code>
</pre>

<pre class="language-css">
	<code>
		.some-element {
			color: red;
			font-weight: bold;
		}
	</code>
</pre>
```

### Supported Languages

- Bash - `.lang-bash`
- CSS - `.lang-css`
- C-like languages - `.lang-clike`
- HTTP - `.lang-http`
- Markup/HTML - `.lang-html`/`.lang-markup`
- Java - `.lang-java`
- JavaScript - `.lang-javascript`/`.lang-js`
- PHP - `.lang-php`
- Python - `.lang-python`
- Ruby - `.lang-ruby`
- Sass/scss - `.lang-scss`

### With Markdown

Highlighting code with markdown is insanely easy.

Wrap your code in three backticks. Append the language being used after the opening backticks&mdash;no `lang-` or `language-` needed.

	```javascript
	var someElement = document.querySelector('#my-app');
	```

### With the WYSIWYG Editor

If you have TinyMCE enabled, click the icon in the editor toolbar that looks like a highlighter.

Then, select your language from the dropdown menu and paste your code into the content window. The WYSIWYG will automatically escape your code for your and wrap it in the required tags.