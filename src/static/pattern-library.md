<script>
	mashery.globals.pageFullWidth = true;
</script>
<div class="container" markdown="1">
<div class="row" markdown="1">
<div class="grid-third" id="demo-subnav"></div>
<div class="grid-two-thirds" markdown="1">
# Components

This page is living documentation for your Portal theme. If you would like to update your theme, [click here to download the source files](/files/portal-theme.zip).

<mark markdown="1">*__Note:__ This page is only visible to site admins and other power users. Typical developer accounts will not have access to this page, nor will it show up in the navigation menu for them.*</mark>

## Brand Elements

<style type="text/css">
	.demo-color-box {
		border: 1px solid #808080;
		height: 8em;
		margin-right: 1em;
		margin-bottom: 1em;
		padding: 1em;
		width: 8em;
	}

	.demo-font {
		margin-bottom: 0.5em;
	}
</style>

### Colors

<div class="clearfix">
	<div class="float-left demo-color-box" style="background-color: #0088cc; color: white;">
		#0088cc
	</div>
	<div class="float-left demo-color-box" style="background-color: #ffdd2f;">
		#ffdd2f
	</div>
	<div class="float-left demo-color-box" style="background-color: #b4d253;">
		#b4d253
	</div>
	<div class="float-left demo-color-box" style="background-color: #808080; color: white;">
		#808080
	</div>
	<div class="float-left demo-color-box" style="background-color: #e5e5e5;">
		#e5e5e5
	</div>
	<div class="float-left demo-color-box" style="background-color: #f7f7f7;">
		#f7f7f7
	</div>
	<div class="float-left demo-color-box" style="background-color: #ffffff;">
		#ffffff
	</div>
	<div class="float-left demo-color-box" style="background-color: #272727; color: white;">
		#272727
	</div>
</div>

### Font Stacks

<p class="demo-font" style="font-family: 'Helvetica Neue', Arial, sans-serif">Helvetica Neue, Arial, sans-serif</p>
<p class="demo-font" style="font-family: Georgia, Times, serif;">Georgia, Times, serif</p>
<p class="demo-font" style="font-family: Menlo, Monaco, 'Courier New', monospace;">Menlo, Monaco, Courier New, monospace</p>

---


## The Grid

<style type="text/css">
	/* Add a background to the grids so you can see them in action */
	.demo-grid-bg {
		background-color: #f7f7f7;
		border: 1px solid #e5e5e5;
		border-radius: 0.0725em;
		margin-bottom: 1.5625em;
		padding: 0.9375em;
	}
</style>

Your theme uses a fluid, mobile-first grid system based on simple fractions—halves, thirds, and fourths. It supports nesting, and includes special classes for offsets and content choreography.

### Base Grid

The `.container` class centers content on the page and restricts it to a maximum width. To create a grid, add a `div` with a `.row` class. You can create grids within a row by creating `div` elements with the `.grid-$size` class.

<div class="row">
	<div class="grid-third"><div class="demo-grid-bg">.grid-third</div></div>
	<div class="grid-two-thirds"><div class="demo-grid-bg">.grid-two-thirds</div></div>
</div>

<div class="row">
	<div class="grid-fourth"><div class="demo-grid-bg">.grid-fourth</div></div>
	<div class="grid-three-fourths"><div class="demo-grid-bg">.grid-three-fourths</div></div>
</div>

<div class="row">
	<div class="grid-half"><div class="demo-grid-bg">.grid-half</div></div>
	<div class="grid-half"><div class="demo-grid-bg">.grid-half</div></div>
</div>

<div class="row">
	<div class="grid-full"><div class="demo-grid-bg">.grid-full</div></div>
</div>

```html
<div class="container">

	<p>Your theme uses a fluid, mobile-first grid system...</p>

	<div class="row">
		<div class="grid-third">.grid-third</div>
		<div class="grid-two-thirds">.grid-two-thirds</div>
	</div>

	<div class="row">
		<div class="grid-fourth">.grid-fourth</div>
		<div class="grid-three-fourths">.grid-three-fourths</div>
	</div>

	<div class="row">
		<div class="grid-half">.grid-half</div>
		<div class="grid-half">.grid-half</div>
	</div>

	<div class="row">
		<div class="grid-full">.grid-full</div>
	</div>

</div>
```

### Offsets

Push grids to the right by adding an `.offset-$size` class. Center grids with the `.float-center` class.

<div class="row">
	<div class="grid-three-fourths offset-fourth"><div class="demo-grid-bg">.grid-three-fourths .offset-fourth</div></div>
</div>

<div class="row">
	<div class="grid-third"><div class="demo-grid-bg">.grid-third</div></div>
	<div class="grid-third offset-third"><div class="demo-grid-bg">.grid-third .offset-third</div></div>
</div>

<div class="row">
	<div class="grid-two-thirds float-center"><div class="demo-grid-bg">.grid-two-thirds .float-center</div></div>
</div>

```html
<div class="row">
	<div class="grid-three-fourths offset-fourth">.grid-three-fourths .offset-fourth</div>
</div>

<div class="row">
	<div class="grid-third">.grid-third</div>
	<div class="grid-third offset-third">.grid-third .offset-third</div>
</div>

<div class="row">
	<div class="grid-two-thirds float-center">.grid-two-thirds .float-center</div>
</div>
```

### Grids on Small Viewports

The grid activates on medium-sized viewports by default. You can toggle the grid on smaller screens by adding a simple class&mdash;`.row-start-xsmall` or `.row-start-small`&mdash;to the desired `.row` element.

**Extra Small Screens**
<div class="row row-start-xsmall">
	<div class="grid-fourth"><div class="demo-grid-bg">.grid-fourth</div></div>
	<div class="grid-fourth"><div class="demo-grid-bg">.grid-fourth</div></div>
	<div class="grid-fourth"><div class="demo-grid-bg">.grid-fourth</div></div>
	<div class="grid-fourth"><div class="demo-grid-bg">.grid-fourth</div></div>
</div>

**Small Screens**
<div class="row row-start-small">
	<div class="grid-fourth"><div class="demo-grid-bg">.grid-fourth</div></div>
	<div class="grid-fourth"><div class="demo-grid-bg">.grid-fourth</div></div>
	<div class="grid-fourth"><div class="demo-grid-bg">.grid-fourth</div></div>
	<div class="grid-fourth"><div class="demo-grid-bg">.grid-fourth</div></div>
</div>

```html
Extra Small Screens
<div class="row row-start-xsmall">
	<div class="grid-fourth">.grid-fourth</div>
	<div class="grid-fourth">.grid-fourth</div>
	<div class="grid-fourth">.grid-fourth</div>
	<div class="grid-fourth">.grid-fourth</div>
</div>

Small Screens
<div class="row row-start-small">
	<div class="grid-fourth">.grid-fourth</div>
	<div class="grid-fourth">.grid-fourth</div>
	<div class="grid-fourth">.grid-fourth</div>
	<div class="grid-fourth">.grid-fourth</div>
</div>
```

### Content Choreography

Flip the display order of a grid on bigger viewports by adding the `.grid-flip` class.

<div class="row">
	<div class="grid-third grid-flip"><div class="demo-grid-bg">First in HTML</div></div>
	<div class="grid-two-thirds"><div class="demo-grid-bg">Second in HTML</div></div>
</div>

```html
<div class="row">
	<div class="grid-third grid-flip">First in HTML</div>
	<div class="grid-two-thirds">Second in HTML</div>
</div>
```

### Dynamic Grids

Create grids that vary in size based on screen width using the `.grid-dynamic` class.

<div class="row">
	<div class="grid-dynamic"><p><img src="https://source.unsplash.com/random/350x350"></p></div>
	<div class="grid-dynamic"><p><img src="https://source.unsplash.com/random/350x350"></p></div>
	<div class="grid-dynamic"><p><img src="https://source.unsplash.com/random/350x350"></p></div>
	<div class="grid-dynamic"><p><img src="https://source.unsplash.com/random/350x350"></p></div>
	<div class="grid-dynamic"><p><img src="https://source.unsplash.com/random/350x350"></p></div>
	<div class="grid-dynamic"><p><img src="https://source.unsplash.com/random/350x350"></p></div>
	<div class="grid-dynamic"><p><img src="https://source.unsplash.com/random/350x350"></p></div>
	<div class="grid-dynamic"><p><img src="https://source.unsplash.com/random/350x350"></p></div>
	<div class="grid-dynamic"><p><img src="https://source.unsplash.com/random/350x350"></p></div>
	<div class="grid-dynamic"><p><img src="https://source.unsplash.com/random/350x350"></p></div>
	<div class="grid-dynamic"><p><img src="https://source.unsplash.com/random/350x350"></p></div>
	<div class="grid-dynamic"><p><img src="https://source.unsplash.com/random/350x350"></p></div>
</div>

```html
<div class="row">
	<div class="grid-dynamic"><img src="kitten.jpg"></div>
	<div class="grid-dynamic"><img src="kitten.jpg"></div>
	<div class="grid-dynamic"><img src="kitten.jpg"></div>
	<div class="grid-dynamic"><img src="kitten.jpg"></div>
	<div class="grid-dynamic"><img src="kitten.jpg"></div>
	<div class="grid-dynamic"><img src="kitten.jpg"></div>
	<div class="grid-dynamic"><img src="kitten.jpg"></div>
	<div class="grid-dynamic"><img src="kitten.jpg"></div>
	<div class="grid-dynamic"><img src="kitten.jpg"></div>
	<div class="grid-dynamic"><img src="kitten.jpg"></div>
	<div class="grid-dynamic"><img src="kitten.jpg"></div>
	<div class="grid-dynamic"><img src="kitten.jpg"></div>
</div>
```

---


## Typography

Your theme uses relative sizing (ems and % instead of pixels) for everything.

*New to relative sizing? [Learn more.](http://gomakethings.com/working-with-relative-sizing/)*


### Text Basics

<div>
Default text<br>
<span class="text-muted">Muted text</span><br>
<span class="text-small">Small text</span><br>
<span class="text-large">Large text</span><br>
<span class="text-hero">Hero text</span><br>
<span class="text-no-bold">Remove bold from text</span><br>
<span class="text-no-italics">Remove italics from text</span><br>
<a href="#">Hyperlinks</a><br>
<a class="link-no-underline" href="#">Hyperlinks with no underline</a><br>
<strong>Bold</strong> and <em>italics</em>
</div>

```html
Default text
<span class="text-muted">Muted text</span>
<span class="text-small">Small text</span>
<span class="text-large">Large text</span>
<span class="text-hero">Hero text</span>
<span class="text-no-bold">Remove bold from text</span>
<span class="text-no-italics">Remove italics from text</span>
<a href="#">Hyperlinks</a>
<a class="link-no-underline" href="#">Hyperlinks with no underline</a>
<strong>Bold</strong> and <em>italics</em>
```

**Note:** Because Your theme uses relative sizing, you should always apply `.text-large` and `.text-small` classes to a `span` element and not directly to a `p`. Otherwise, your spacing will get all messed up. The `.text-*` classes can be found in `_overrides.scss` for better cascade inheritance.


### Block-Level Links

Use the `.link-block` class to create block-level links that are styled like regular text. Add the `.link-block-styled` class to the sections of text you want styled like a traditional link.

<a class="link-block" href="#">
	<h4 class="no-margin-bottom">This is a block-level link</h4>
	<p>
		This whole section is a clickable link. Hover over it to see.<br>
		<span class="link-block-styled">Only this text is styled like a link &rarr;</span>
	</p>
</a>

```html
<a class="link-block" href="#">
	<h4>A block-level link</h4>
	<p>This whole section is a clickable link. Hover over it to see.</p>
	<p><span class="link-block-styled">Only this text is styled like a link &rarr;</span></p>
</a>
```

---


## Lists

Your theme includes styling for ordered, unordered, unstyled, inline, breadcrumb, and definition lists.

<div class="row">
	<div class="grid-third">
		<strong>Ordered</strong>
		<ol>
			<li>Item 1</li>
			<li>Item 2</li>
			<li>Item 3</li>
		</ol>
	</div>
	<div class="grid-third">
		<strong>Unordered</strong>
		<ul>
			<li>Item 1</li>
			<li>Item 2</li>
			<li>Item 3</li>
		</ul>
	</div>
	<div class="grid-third">
		<strong>Unstyled</strong>
		<ul class="list-unstyled">
			<li>Item 1</li>
			<li>Item 2</li>
			<li>Item 3</li>
		</ul>
	</div>
</div>

<div>
	<strong>Inline</strong>
	<ul class="list-inline">
		<li>Item 1</li>
		<li>Item 2</li>
		<li>Item 3</li>
	</ul>
</div>

<div>
	<strong>Inline Responsive</strong>
	<ul class="list-inline list-inline-responsive">
		<li>Item 1</li>
		<li>Item 2</li>
		<li>Item 3</li>
	</ul>
</div>

<div>
	<strong>Inline Divided</strong>
	<ul class="list-inline list-inline-divided">
		<li>Item 1</li>
		<li>Item 2</li>
		<li>Item 3</li>
	</ul>
</div>

<div>
	<strong>Inline Breadcrumbs</strong>
	<ul class="list-inline list-inline-breadcrumbs">
		<li>Item 1</li>
		<li>Item 2</li>
		<li>Item 3</li>
	</ul>
</div>

<dl>
	<dt>Definition List</dt>
	<dd>Encloses a list of pairs of terms and descriptions. Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs).</dd>

	<dt>Here's another term</dt>
	<dd>And another definition.</dd>
</dl>

```html
Ordered
<ol>
	<li>Item 1</li>
	<li>Item 2</li>
	<li>Item 3</li>
</ol>

Unordered
<ul>
	<li>Item 1</li>
	<li>Item 2</li>
	<li>Item 3</li>
</ul>

Unstyled
<ul class="list-unstyled">
	<li>Item 1</li>
	<li>Item 2</li>
	<li>Item 3</li>
</ul>

Inline
<ul class="list-inline">
	<li>Item 1</li>
	<li>Item 2</li>
	<li>Item 3</li>
</ul>

Inline Responsive
<ul class="list-inline list-inline-responsive">
	<li>Item 1</li>
	<li>Item 2</li>
	<li>Item 3</li>
</ul>

Inline Divided
<ul class="list-inline list-inline-divided">
	<li>Item 1</li>
	<li>Item 2</li>
	<li>Item 3</li>
</ul>

Inline Breadcrumbs
<ul class="list-inline list-inline-breadcrumbs">
	<li>Item 1</li>
	<li>Item 2</li>
	<li>Item 3</li>
</ul>

<dl>
	<dt>Definition List</dt>
	<dd>Encloses a list of pairs of terms and descriptions. Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs).</dd>

	<dt>Here's another term</dt>
	<dd>And another definition.</dd>
</dl>
```

*For semantic reasons, `.list-unstyled` and `.list-inline` should only be applied to unordered lists.*

---


## Headings

Your theme includes styling for `h1` through `h6` headings.

<h1>h1. Heading 1</h1>

<h2>h2. Heading 2</h2>

<h3>h3. Heading 3</h3>

<h4>h4. Heading 4</h4>

<h5>h5. Heading 5</h5>

<h6>h6. Heading 6</h6>

```html
<h1>h1. Heading 1</h1>
<h2>h2. Heading 2</h2>
<h3>h3. Heading 3</h3>
<h4>h4. Heading 4</h4>
<h5>h5. Heading 5</h5>
<h6>h6. Heading 6</h6>
```

### Semantic Heading Classes

All heading values can also be applied as classes. For example, if a heading should be an `h1` element semantically, but you would like it to be styled as an `h4` element, you can apply `class="h4"` to the `h1` element.

<h1 class="h4">This is an h1 heading that's styled as an h4 heading</h1>

```html
<h1 class="h4=">This is an h1 heading that's styled as an h4 heading</h1>
```

---


## Quotes and Citations

<blockquote>
	Someone once said something so important, it was deemed worthy of repeating here in the form of a blockquote. This is that blockquote.
	<cite>- Someone</cite>
</blockquote>

You can also include superscripts<sup>1</sup> and subscripts<sub>xyz</sub>.

```html
<blockquote>
	Someone once said something so important, it was deemed worthy of repeating here in the form of a blockquote. This is that blockquote.
	<cite>- Someone</cite>
</blockquote>

You can also include superscripts<sup>1</sup> and subscripts<sub>xyz</sub>.
```

---


## Code

Inline code: `.js-example`.

```css
/* Preformatted Text */
.js-example {
	color: #272727;
	background: #ffffff;
}
```

```html
<p>Inline code: <code>.js-example</code></p>

<pre>
	<code class="lang-css">
		/* Preformatted Text */
		.js-example {
			color: #272727;
			background: #ffffff;
		}
	</code>
</pre>
```

You'll need to escape brackets contained in code by typing `&lt;` for `<` and `&gt;` for `>`.

---


## Syntax Highlighting

Syntax highlighting is provided by [Prism by Lea Verou](http://prismjs.com/). It includes support for:

* Bash
* CSS
* C-like languages
* HTTP
* Markup/HTML
* Java
* JavaScript
* PHP
* Python
* Ruby
* Sass/scss

Add `class="lang-*"` to your `code` element, where `*` is the language to be highlighted.

```html
	<pre><code class="lang-*">
		/* Your code here...  */
	</code></pre>

	<!-- Example -->
	<pre><code class="lang-php">
		// Your code here...
	</code></pre>
```

***Note:*** *The syntax highlighter tool in TinyMCE will automatically add the correct markup and classes and highlighting for you.*

### Language Table

| Language    | Class                         |
|-------------|-------------------------------|
| Bash        | `.lang-bash`                  |
| CSS         | `.lang-css`                   |
| C, C#, C++  | `.lang-clike`                 |
| HTTP        | `.lang-http`                  |
| Markup/HTML | `.lang-markup`/`.lang-html`   |
| Java        | `.lang-java`                  |
| JavaScript  | `.lang-javascript`/`.lang-js` |
| PHP         | `.lang-php`                   |
| Python      | `.lang-python`                |
| Ruby        | `.lang-ruby`                  |
| Sass        | `.lang-sass`                  |
| scss        | `.lang-scss`                  |

---


## Lines

Add lines to your markup using the `hr` element.

---


## Backgrounds

Add background colors with a handful of helper classes.

<div class="bg-muted"><div class="container text-center">.bg-muted</div></div>
<div class="bg-white" style="border: 1px solid #272727;"><div class="container text-center">.bg-white</div></div>
<div class="bg-dark"><div class="container text-center">.bg-dark</div></div>
<div class="bg-primary margin-bottom"><div class="container text-center">.bg-primary</div></div>

```html
<div class="bg-muted">.bg-muted</div>
<div class="bg-white">.bg-white</div>
<div class="bg-dark">.bg-dark</div>
<div class="bg-primary">.bg-primary</div>
```

### Hero Image Backgrounds

Use the `.bg-hero` class with one of the above background colors to create a background hero image. This class ensures that the image fully covers the background.

You will need to specify a background image (using either the inline CSS feature in the Dashboard or by adding inline CSS to the element directly). You may also wish to add a minimum height (or heights at different breakpoints) depending on the image.

<div class="bg-primary bg-hero margin-bottom" style="background-image: url('https://source.unsplash.com/random/740x320'); min-height: 15em;">
	<div class="padding-top-large padding-bottom-large text-center">
		<span class="text-large">This is a hero image with text.</span>
	</div>
</div>

```html
<div class="bg-primary bg-hero" style="background-image: url('https://source.unsplash.com/random/740x320'); min-height: 15em;">
	<div class="padding-top-large padding-bottom-large text-center">
		<span class="text-large">This is a hero image with text.</span>
	</div>
</div>
```

### Hero Video Backgrounds

In addition to the `.bg-hero` class, also add the `.bg-hero-video` class.

Within the `.bg-hero` element, add a `div` with the `.bg-hero-video-player` class and include your video in it. This can be either an iframe video or an HTML5 `video` element. You should also include an empty `div` with the `.bg-hero-video-overlay` class if you'd like to add a semi-transparent overlay on the video (to make your text easier to read).

Create a `div` with the `.bg-hero-video-text` class and add your hero content to it.

```html
<div class="bg-hero bg-hero-video">
	<div class="bg-hero-video-player">
		<!-- You can use an iframe video OR and HTML5 video element -->
		<iframe width="640" height="360" src="https://player.vimeo.com/video/222514756?title=0&portrait=0&byline=0&autoplay=1&loop=1" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
	</div>
	<div class="bg-hero-video-overlay"></div>
	<div class="bg-hero-video-text container">
		<h1>Welcome to our developer portal!</h1>
	</div>
</div>
```

---


## Buttons

Button styles can be applied `a`, `button`, and `input type="submit"` elements using the `.btn` class. Use `.active` and `.disabled` classes to change the appearance of buttons.

<div>
<button class="btn">Button</button>
<button class="btn btn-secondary">Button Secondary</button>
<button class="btn btn-large">Button Large</button>

<button class="btn btn-block">Button Block</button>
<button class="btn btn-secondary btn-block">Button Block</button>

<button class="btn active">Active</button>
<button class="btn btn-secondary active">Secondary Active</button>
<button class="btn disabled">Disabled</button>
<button class="btn btn-secondary disabled">Secondary Disabled</button>
</div>

```html
<button class="btn">Button</button>
<button class="btn btn-secondary">Button Secondary</button>
<button class="btn btn-large">Button Large</button>

<button class="btn btn-block">Button Block</button>
<button class="btn btn-secondary btn-block">Button Block</button>

<button class="btn active">Active</button>
<button class="btn btn-secondary active">Secondary Active</button>
<button class="btn disabled">Disabled</button>
<button class="btn btn-secondary disabled">Secondary Disabled</button>
```

---


## Forms

Labels, legends and inputs are styled as full width block elements (with the exception of checkboxes and radio buttons).

<form>
	<label>Label</label>
	<input type="text">
	<label>
		<input type="checkbox">
		Option 1
	</label>
	<label>
		<input type="checkbox">
		Option 2
	</label>
	<label>
		<input type="radio" name="radioset">
		Option 1
	</label>
	<label>
		<input type="radio" name="radioset">
		Option 2
	</label>
	<select>
		<option>Select 1</option>
		<option>Select 2</option>
		<option>Select 3</option>
	</select>
	<textarea></textarea>
</form>

```html
<form>
	<label>Label</label>
	<input type="text">
	<label>
		<input type="checkbox">
		Option 1
	</label>
	<label>
		<input type="checkbox">
		Option 2
	</label>
	<label>
		<input type="radio" name="radioset">
		Option 1
	</label>
	<label>
		<input type="radio" name="radioset">
		Option 2
	</label>
	<select>
		<option>Select 1</option>
		<option>Select 2</option>
		<option>Select 3</option>
	</select>
	<textarea></textarea>
</form>
```

***Tip:*** *Wrap checkboxes and radio buttons inside a `label` to make them easier to click.*


### Form Layouts

Use the grid system to add structure to your forms.

<form>
	<div class="row">
		<div class="grid-fourth">
				<label>Name</label>
		</div>
		<div class="grid-three-fourths">
				<input type="text">
		</div>
	</div>
	<div class="row">
		<div class="grid-fourth">
				<label>Message</label>
		</div>
		<div class="grid-three-fourths">
				<textarea></textarea>
		</div>
	</div>
	<div class="row">
		<div class="grid-three-fourths offset-fourth">
			<button class="btn btn-blue">Submit</button>
		</div>
	</div>
</form>

```html
<form>
	<div class="row">
		<div class="grid-fourth">
				<label>Name</label>
		</div>
		<div class="grid-three-fourths">
				<input type="text">
		</div>
	</div>
	<div class="row">
		<div class="grid-fourth">
				<label>Message</label>
		</div>
		<div class="grid-three-fourths">
				<textarea></textarea>
		</div>
	</div>
	<div class="row">
		<div class="grid-three-fourths offset-fourth">
			<button class="btn btn-blue">Submit</button>
		</div>
	</div>
</form>
```


### Condensed &amp; Inline Inputs

For smaller forms, add the `.input-condensed` class to your input fields. For inline form elements, add the `.input-inline` class.

<form>
	<input type="text" class="input-inline" placeholder=".input-inline">
	<input type="text" class="input-condensed input-inline" placeholder=".input-condensed">
</form>

```html
<form>
	<input type="text" class="input-inline">
	<input type="text" class="input-condensed input-inline">
</form>
```

---


## Tables

Simple, easy-to-read tables.

<table>
	<thead>
		<tr>
			<th>First Name</th>
			<th>Last Name</th>
			<th>Super Hero</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Peter</td>
			<td>Parker</td>
			<td>Spiderman</td>
		</tr>
		<tr>
			<td>Bruce</td>
			<td>Wayne</td>
			<td>Batman</td>
		</tr>
		<tr>
			<td>Clark</td>
			<td>Kent</td>
			<td>Superman</td>
		</tr>
	</tbody>
</table>

```html
<table>
	<thead>
		<tr>
			<th>First Name</th>
			<th>Last Name</th>
			<th>Super Hero</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Peter</td>
			<td>Parker</td>
			<td>Spiderman</td>
		</tr>
		<tr>
			<td>Bruce</td>
			<td>Wayne</td>
			<td>Batman</td>
		</tr>
		<tr>
			<td>Clark</td>
			<td>Kent</td>
			<td>Superman</td>
		</tr>
	</tbody>
</table>
```

### Zebra Striped Table

Add the `.table-striped` class to add zebra stripes to your table.

<table class="table-striped">
	<thead>
		<tr>
			<th>First Name</th>
			<th>Last Name</th>
			<th>Super Hero</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Peter</td>
			<td>Parker</td>
			<td>Spiderman</td>
		</tr>
		<tr>
			<td>Bruce</td>
			<td>Wayne</td>
			<td>Batman</td>
		</tr>
		<tr>
			<td>Clark</td>
			<td>Kent</td>
			<td>Superman</td>
		</tr>
	</tbody>
</table>

```html
<table class="table-striped">
	...
</table>
```

### Condensed Table

Add the `.table-condensed` class for more compact tables.

<table class="table-condensed">
	<thead>
		<tr>
			<th>First Name</th>
			<th>Last Name</th>
			<th>Super Hero</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Peter</td>
			<td>Parker</td>
			<td>Spiderman</td>
		</tr>
		<tr>
			<td>Bruce</td>
			<td>Wayne</td>
			<td>Batman</td>
		</tr>
		<tr>
			<td>Clark</td>
			<td>Kent</td>
			<td>Superman</td>
		</tr>
	</tbody>
</table>

```html
<table class="table-condensed">
	...
</table>
```

### Responsive Table

Add the `.table-responsive` class for tables that reformat on smaller viewports. (You can automatically make all tables responsive&mdash;including adding the `data-label` attributes&mdash;using [responsive-tables.js](#automatic-responsive-tables).)

<table class="table-responsive">
	<thead>
		<tr>
			<th>First Name</th>
			<th>Last Name</th>
			<th>Super Hero</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td data-label="First Name">Peter</td>
			<td data-label="Last Name">Parker</td>
			<td data-label="Super Hero">Spiderman</td>
		</tr>
		<tr>
			<td data-label="First Name">Bruce</td>
			<td data-label="Last Name">Wayne</td>
			<td data-label="Super Hero">Batman</td>
		</tr>
		<tr>
			<td data-label="First Name">Clark</td>
			<td data-label="Last Name">Kent</td>
			<td data-label="Super Hero">Superman</td>
		</tr>
	</tbody>
</table>

```html
<table class="table-responsive">
	<thead>
		<tr>
			<th>First Name</th>
			<th>Last Name</th>
			<th>Super Hero</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td data-label="First Name">Peter</td>
			<td data-label="Last Name">Parker</td>
			<td data-label="Super Hero">Spiderman</td>
		</tr>
		...
	</tbody>
</table>
```

### Combining Classes

Classes can be combined as needed.

<table class="table-striped table-condensed table-responsive">
	<thead>
		<tr>
			<th>First Name</th>
			<th>Last Name</th>
			<th>Super Hero</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Peter</td>
			<td>Parker</td>
			<td>Spiderman</td>
		</tr>
		<tr>
			<td>Bruce</td>
			<td>Wayne</td>
			<td>Batman</td>
		</tr>
		<tr>
			<td>Clark</td>
			<td>Kent</td>
			<td>Superman</td>
		</tr>
	</tbody>
</table>

```html
<table class="table-striped table-condensed table-responsive">
	...
</table>
```

---


## Navigation

Your theme includes an expand-and-collapse navigation menu on smaller screens.

### Getting Started

#### Markup

*__Note:__ This is already done for you in your theme setup file.*

Turn any button or link into a toggle for your navigation menu by adding the `[data-nav-toggle]` attribute, and give it a value that matches the selector of the area(s) you're trying to expand.

```html
<nav class="nav-wrap">
	<a class="logo" href="#">My Brand</a>
	<a class="nav-toggle" data-nav-toggle=".nav-collapse" href="#">Menu</a>
	<div class="nav-menu nav-collapse" id="nav-primary-menu">
		<ul class="nav">
			<li><a href="#">Home</a></li>
			<li><a href="#">About</a></li>
		</ul>
	</div>
</nav>
```

#### JavaScript

The script will not run until initialized in a `portalAfterRender` event. This is done for you already in the `Body JavaScript` section under `Portal > Portal Setup` in the API Control Center.

```js
// Expand-and-collapse nav on small viewports
astro.init();
```

### Global Settings

You can pass options and callbacks into Astro through the `init()` function:

```javascript
astro.init({
	selector: '[data-nav-toggle]', // Navigation toggle selector
	toggleActiveClass: 'active', // Class added to active dropdown toggles on small screens
	navActiveClass: 'active', // Class added to active dropdown content areas on small screens
	initClass: 'js-astro', // Class added to `<html>` element when initiated
	callback: function ( toggle, navID ) {} // Function that's run after a dropdown is toggled
});
```

*__Note:__ If you change the `selector`, you still need to include the `[data-nav-toggle]` attribute in order to pass in the selector for the navigation menu.*

### Use Astro events in your own scripts

You can also call Astro's navigation toggle event in your own scripts.

#### toggleNav()
Expand or collapse a navigation menu.

```javascript
astro.toggleNav(
	toggle, // Node that toggles the dropdown action. ex. document.querySelector('#toggle')
	navID, // ID of the navigation content wrapper. ex. '#nav-menu'
	options, // Classes and callbacks. Same options as those passed into the init() function.
	event // Optional, if a DOM event was triggered.
);
```

**Example**

```javascript
astro.toggleNav( null, '#nav-menu' );
```

#### destroy()
Destroy the current `astro.init()`. This is called automatically during the init function to remove any existing initializations.

```javascript
astro.destroy();
```

---


## Image Styling

Add simple `.img-*` classes to any img element to add styling. You can combine classes for additional styling options. Mix-and-match as desired.

<div class="row">
	<div class="grid-third">
		<p style="text-align: center;">
			<strong>Circle</strong><br>
			<img class="img-circle" src="https://source.unsplash.com/random/200x200">
		</p>
	</div>
	<div class="grid-third">
		<p style="text-align: center;">
			<strong>Border</strong><br>
			<img class="img-border" src="https://source.unsplash.com/random/200x200">
		</p>
	</div>
	<div class="grid-third">
		<p style="text-align: center;">
			<strong>Photo</strong><br>
			<img class="img-photo" src="https://source.unsplash.com/random/200x200">
		</p>
	</div>
</div>

```html
<img class="img-circle" src="#">
<img class="img-border" src="#">
<img class="img-photo" src="#">
```

---


## Responsive Videos

Your theme comes bundled with [fluidvids.js](https://github.com/toddmotto/fluidvids), a lightweight script that makes iframe videos responsive.

<p><iframe width="560" height="315" src="//www.youtube.com/embed/aQ_isEq-pT8?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe></p>

The script will not run until initialized in a `portalAfterRender` event. This is done for you already in the `Body JavaScript` section under `Portal > Portal Setup` in the API Control Center.

```javascript
// Responsive iFrame Videos
fluidvids.init({
	selector: ['iframe', 'object'],
	players: ['www.youtube.com', 'player.vimeo.com'] // players to support
});
```

---


## Sticky Footer

If there's not a lot of content on a page, the footer may not be tall enough to fill the rest of the page, resulting in a gap at the bottom of the page. The `stickyFooter.js` plugin pushes the footer down to the bottom of the page even on pages without much content.

The script will not run until initialized in a `portalAfterRender` event. Pass in a unique selector for the footer as an argument. This is done for you already in the `Body JavaScript` section under `Portal > Portal Setup` in the API Control Center.

```javascript
stickyFooter('#footer');
```

---


## Smooth Scroll

Animate scrolling to anchor links.

[Click me!](#bazinga)

.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.

<p id="bazinga"><a href="#1@#%^-bottom">Bazinga!</a></p>


.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.

<p id="1@#%^-bottom"><a href="#">Scroll to the Top</a></p>

### Getting Started

#### Markup

No special markup needed&mdash;just standard anchor links. Give the anchor location an ID just like you normally would.

```html
<a data-scroll href="#bazinga">Anchor Link</a>
...
<div id="bazinga">Bazinga!</div>
```

***Note:*** *Smooth Scroll does not work with `a name="anchor"` style anchors. It requires IDs.*

#### JavaScript

The script will not run until initialized in a `portalAfterRender` event. This is done for you already in the `Body JavaScript` section under `Portal > Portal Setup` in the API Control Center.

You should also destroy the scroll event in a `portalBeforeRenderAjax` event to prevent

```js
// Smooth scrolling to anchor links
var scroll = new SmoothScroll('.category-page #main-wrapper a[href*="#"], .category-docs #main-wrapper a[href*="#"], .category-docs #main-wrapper a[href*="#"], .category-blogall #main-wrapper a[href*="#"], .category-blogsingle #main-wrapper a[href*="#"], #nav-docs a[href*="#"]', {
	ignore: '.js-scroll-ignore'
});
```

#### Self-Destruct

To prevent Smooth Scroll from initializing on every Ajax page load, add a self-destruction listener in a `portalBeforeRender` event.

```js
// Destroy instantiation on Ajax page reload
window.addEventListener('portalBeforeRender', function () {
	if ('destroy' in scroll) {
		scroll.destroy();
	}
}, false);
```

### Global Settings

You can pass options and callbacks into Smooth Scroll when initializing. Learn more about the different easing patterns and what they do at [easings.net](http://easings.net/).

```js
var scroll = new SmoothScroll('a[href*="#"]', {
	// Selectors
	ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
	header: null, // Selector for fixed headers (must be a valid CSS selector)

	// Speed & Easing
	speed: 500, // Integer. How fast to complete the scroll in milliseconds
	offset: 0, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
	easing: 'easeInOutCubic', // Easing pattern to use
	customEasing: function (time) {

		// Function. Custom easing pattern
		// If this is set to anything other than null, will override the easing option above

		// return <your formulate with time as a multiplier>

		// Example: easeInOut Quad
		return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;

	},

	// Callback API
	before: function (anchor, toggle) {}, // Callback to run before scroll
	after: function (anchor, toggle) {} // Callback to run after scroll
});
```

##### Easing Options

Some common easing patterns are included by default, but you can also pass in your own custom easing pattern using the `customEasing` option noted above.

**Linear**
*Moves at the same speed from start to finish.*

* `Linear`


**Ease-In**
*Gradually increases in speed.*

* `easeInQuad`
* `easeInCubic`
* `easeInQuart`
* `easeInQuint`


**Ease-In-Out**
*Gradually increases in speed, peaks, and then gradually slows down.*

* `easeInOutQuad`
* `easeInOutCubic`
* `easeInOutQuart`
* `easeInOutQuint`


**Ease-Out**
*Gradually decreases in speed.*

* `easeOutQuad`
* `easeOutCubic`
* `easeOutQuart`
* `easeOutQuint`

Learn more about the different easing patterns and what they do at [easings.net](http://easings.net/).

### Use Smooth Scroll events in your own scripts

You can also call Smooth Scroll's methods in your own scripts.

#### animateScroll()
Animate scrolling to an anchor.

```javascript
var scroll = new SmoothScroll();
scroll.animateScroll(
	anchor, // Node to scroll to. ex. document.querySelector( '#bazinga' )
	toggle, // Node that toggles the animation, OR an integer. ex. document.querySelector( '#toggle' )
	options // Classes and callbacks. Same options as those passed into the init() function.
);
```

**Example 1**

```javascript
var scroll = new SmoothScroll();
var anchor = document.querySelector( '#bazinga' );
scroll.animateScroll( anchor );
```

**Example 2**

```javascript
var scroll = new SmoothScroll();
var anchor = document.querySelector( '#bazinga' );
var toggle = document.querySelector('#toggle');
var options = { speed: 1000, easing: 'easeOutCubic' };
scroll.animateScroll( anchor, toggle, options );
```

**Example 3**

```javascript
// You can optionally pass in a y-position to scroll to as an integer
var scroll = new SmoothScroll();
scroll.animateScroll( 750 );
```

#### cancelScroll()
Cancel a scroll-in-progress.

```javascript
var scroll = new SmoothScroll();
scroll.cancelScroll();
```

***Note:*** *This does not handle focus management. The user will stop in place, and focus will remain on the anchor link that triggered the scroll.*

#### init()
Initialize Smooth Scroll. This is called automatically when you setup your `new SmoothScroll` object, but can be used to reinitialize your instance.

```javascript
var scroll = new SmoothScroll();
scroll.init('.some-selector');
```

#### destroy()
Destroy the current `smoothScroll.init()`. This is called automatically during the `init` function to remove any existing initializations.

```javascript
var scroll = new SmoothScroll();
scroll.destroy();
```

### Fixed Headers

If you're using a fixed header, Smooth Scroll will automatically offset scroll distances by the header height. Pass in a valid CSS selector for your fixed header as an option to the `init`.

If you have multiple fixed headers, pass in the last one in the markup.

```html
<nav data-scroll-header>
	...
</nav>
```

```js
var scroll = new SmoothScroll('.some-selector',{
	header: '[data-scroll-header]'
});
```

---

## Enhanced Documentation

Create beautiful, single-page documentation with toggleable code examples. Inspired by [Stripe](https://stripe.com/docs/api) and [PayPal's](https://developer.paypal.com/docs/api/) API documentation, and the [Slate open source project](https://github.com/lord/slate).

[View the demo.](https://stagingcs1.mashery.com/docs/read/Better_Docs)

### Getting Started

#### Markup

Better docs automatically pulls `pre` and `blockquote` elements over to the right side of the page. You can write your docs in true HTML, use the WYSIWIG editor, or use markdown.

Code examples wrapped in `pre` elements can also be toggled, so the developer can pick their language and only see examples in that language. Make sure to add a language class to your `pre` elements (ex. `pre class="lang-javascript`) for this to work.

Code examples should be placed *above* the descriptive text for proper alignment.

**Markdown**

	This example API documentation page was created with Better Docs. Feel free to edit it and use it as a base for your own API's documentation.

	## Authentication

	> To authorize, use this code:

	```bash
	# With shell, you can just pass the correct header with each request
	curl "api_endpoint_here"
	  -H "Authorization: meowmeowmeow"
	```

	```ruby
	require 'kittn'

	api = Kittn::APIClient.authorize!('meowmeowmeow')
	Make sure to replace meowmeowmeow with your API key.
	```

	```python
	import kittn

	api = kittn.authorize('meowmeowmeow')
	```

	```js
	const kittn = require('kittn');

	let api = kittn.authorize('meowmeowmeow');
	```

	>Make sure to replace meowmeowmeow with your API key.

**HTML**

```html
<p>This example API documentation page was created with Better Docs. Feel free to edit it and use it as a base for your own API's documentation.</p>

<h2>Authentication</h2>

<blockquote>To authorize, use this code:</blockquote>

<pre class="lang-bash"><code># With shell, you can just pass the correct header with each request
curl "api_endpoint_here"
  -H "Authorization: meowmeowmeow"</code></pre>

<pre class="lang-ruby"><code>
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
Make sure to replace meowmeowmeow with your API key.</code></pre>

<pre class="lang-python"><code>
import kittn

api = kittn.authorize('meowmeowmeow')</code></pre>

<pre class="lang-javascript"><code>
const kittn = require('kittn');

let api = kittn.authorize('meowmeowmeow');</code></pre>

<blockquote>Make sure to replace meowmeowmeow with your API key.</blockquote>
```

#### Programming Language Toggle

Add an empty `div` with the `.better-docs-nav` class. Your language toggle menu will automatically be injected here.

```html
<div class="better-docs-nav"></div>
```

You can include as many of these as you want in your markup. They'll update together, meaning that changing the language on one updates all of them and toggles programming languages through the documentation. You may want just one of them at the top of the page, or one above every code example.

#### JavaScript

Better Docs will not run until initialized in a `portalAfterRender` event. This is done for you already in the `Body JavaScript` section of `Portal > Portal Setup` in the API Control Center.

You need to pass in the selector for your content as the first argument (this is typically the `.content` class). You also need to pass in a few options as an object for the second argument.

`langs` are the languages you want to support. Each language needs a `selector` (the language name that appears after `lang-` or `language-` on the `pre` element class), and the `title` you want to appear in the language selector.

You should also specify a `langDefault`, the language that Better Docs will show by default when the page loads.

```js
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
```

*__Note:__ Any language you don't specify in your options will always be visible.*

#### Self-Destruct

To prevent Better Docs styles from impacting other documentation pages, you'll need to destroy your initialization on other pages. Add a self-destruction listener in a `portalBeforeRender` event.

```js
// Destroy instantiation on Ajax page reload
window.addEventListener('portalBeforeRender', function () {
	if ('destroy' in docs) {
		docs.destroy();
	}
}, false);
```

### Global Settings

You can pass options into Better Docs on initialization.

```js
var docs = new BetterDocs('.content', {

	// Only run on certain pages
	// This should match a window.mashery.contentType or window.mashery.contentId
	restrictToPages: 'docs',

	// Table of Contents
	// Automatically generated
	tocSelector: 'h2, h3, h4, h5, h6', // Headings to use to generate table fo contents
	tocHeading: '', // A heading to include above the table of contents
	tocLocation: '#nav-docs', // Where to inject the table of contents (defaults to below the current page navigation)
	currentPageSelector: '.current-page', // Selector for the current page in the docs sub navigation
	tocLocationReplace: false, // If true, replaces the navigation menu entirely

	// Languages
	langs: null, // The languages to include in the toggle menu
	langDefault: null, // The language to show by default
	langsNav: '.better-docs-nav', // The selector for the language toggle menu

	// Styles
	wideLayout: true, // Use a wide layout (docs and examples side by side) instead of a tranditional stacked layout
	wideLayoutBg: true, // Include a background color behind the code examples
	initClass: 'better-docs', // The class to add to the document element after Better Docs loads
	wideLayoutClass: 'better-docs-wide', // The class to add when wide layouts are enabled
	wideLayoutBgClass: 'better-docs-wide-bg', // The class to add when background color for wide layouts is enabled
	contentClassSuffix: '-content' // The suffix to add to the wide layout classes for the content area

});
```

### Use Better Docs methods in your own scripts

You can also call Better Docs methods in your own scripts.

#### toggleLang()
Toggle a programming language in the examples.

```js
var docs = new BetterDocs('.content', {
	// ...
});
docs.toggleLang('ruby');
```

#### destroy()
Destroy the initialization.

```js
var docs = new BetterDocs('.content', {
	// ...
});
docs.destroy();
```

---

## Display the Latest Blog Posts

You can add a list of your latest blog posts to any page in your Portal.

### Demo

<div id="latest-blog-posts">
	<div class="placeholder placeholder-sentence"></div>
	<div class="placeholder placeholder-sentence"></div>
	<div class="placeholder placeholder-sentence"></div>
</div>

### Getting Started

#### Markup

Add a div with the `#latest-blog-posts` ID.

```html
<div id="latest-blog-posts"></div>
```

For additional style, you can add "loading" placeholders that will disappear after the content is loaded by creating `div` elements with the `.placeholder` and `.placeholder-sentence` classes.

```html
<div id="latest-blog-posts">
	<div class="placeholder placeholder-sentence"></div>
	<div class="placeholder placeholder-sentence"></div>
	<div class="placeholder placeholder-sentence"></div>
</div>
```

#### JavaScript

The script will not run until initialized in a `portalAfterRender` event. This is done for you already in the `Body JavaScript` section under `Portal > Portal Setup` in the API Control Center.

```js
// Get the latest blog posts
latestBlogPosts();
```

### Global Settings

You can pass options into Latest Blog Posts when initializing.

```javascript
latestBlogPosts({
	selector: '#latest-blog-posts', // The selector for the div to render the posts into
	listClass: 'latest-blog-posts-list', // The class added to the latest posts list (used for styling)
	count: 5, // The number of posts to display
	excerptLength: 250, // The length of the blog post excerpt in characters
	listType: 'ul', // The list type (`ul` or `ol`)

	// The template for each post
	// Must pass in `post` as an argument and return a string
	// post.author - the post author
	// post.authorUrl - the URL of the author's profile
	// post.excerpt - the excerpt content
	// post.published - the date the post was published
	// post.title - the post title
	// post.url - the post URL
	template: function (post) {
		var template =
			'<li>' +
				'<strong><a href="' + post.url + '">' + post.title + '</a></strong><br>' +
				'<span class="text-muted">By ' + post.author + ' on ' + post.published + '</span><br>' +
				post.excerpt + '...' +
			'</li>';
		return template;
	}
})l
```

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


## Utility Classes

You can adjust text alignment, spacing, and visibility using a few simple CSS utility classes.

### Text Alignment

| Class                | Alignment                        |
|----------------------|----------------------------------|
| `.text-left`         | Left                             |
| `.text-center`       | Centered                         |
| `.text-right`        | Right                            |
| `.text-right-large`  | Right *(only on bigger screens)* |


### Floats

| Class           | Float    |
|-----------------|----------|
| `.float-left`   | Left     |
| `.float-center` | Centered |
| `.float-right`  | Right    |
| `.float-middle` | Middle   |
| `.float-bottom` | Bottom   |

The `.float-middle` and `.float-bottom` classes should be applied to block level elements, and require a parent `div` with a `.float-*-wrap` class.

```html
<div class="float-middle-wrap">
	<div class="float-middle">
		.float-middle
	</div>
</div>

<div class="float-bottom-wrap">
	<div class="float-bottom">
		.float-bottom
	</div>
</div>
```

Clear floats by wrapping floated content in a `div` with the `.clearfix` class.

```html
<div class="clearfix">
	<button class="float-right">Floated to the Right</button>
	<button>Not floated</button>
</div>
```

### Margins

| Class                  | Margin             |
|------------------------|--------------------|
| `.no-margin`           | all: `0`           |
| `.no-margin-top`       | top: `0`           |
| `.no-margin-bottom`    | bottom: `0`        |
| `.margin-top`          | top: `1.5625em`    |
| `.margin-bottom`       | bottom: `1.5625em` |
| `.margin-bottom-small` | bottom: `0.5em`    |
| `.margin-bottom-large` | bottom: `2em`      |
| `.margin-left`         | left:   `1.5625em` |
| `.margin-left-small`   | left:   `0.5em`    |
| `.margin-right`        | right:  `1.5625em` |
| `.margin-right-small`  | right:  `0.5em`    |


### Padding

| Class                   | padding            |
|-------------------------|--------------------|
| `.no-padding`           | all: `0`           |
| `.no-padding-top`       | top: `0`           |
| `.no-padding-bottom`    | bottom: `0`        |
| `.padding-top`          | top: `1.5625em`    |
| `.padding-top-small`    | top: `0.5em`       |
| `.padding-top-large`    | top: `2em`         |
| `.padding-bottom`       | bottom: `1.5625em` |
| `.padding-bottom-small` | bottom: `0.5em`    |
| `.padding-bottom-large` | bottom: `2em`      |
| `.padding-left`         | left: `1.5625em`   |
| `.padding-right`        | right: `1.5625em`  |


### Visibility

Hide content using the `[hidden]` attribute.

```html
<div hidden>This is removed from the markup.</div>
```

If you have text that you don't want displayed on screen, but that should still be in the markup for screen readers (for example, a search form label), simply apply the `.screen-reader` class.</p>

```html
<form>
	<label class="screen-reader">Search this site</label>
	<input type="text" placeholder="Search this site...">
	<input type="submit">
</form>
```

For visually hidden content that should become visible on focus (such as a [skip nav link](http://webaim.org/techniques/skipnav/) for sighted users navigating by keyboard), also add the `.screen-reader-focusable` class.

```html
<a class="screen-reader screen-reader-focusable" href="#main">Skip to content</a>
```

### Visibility based on logged-in status

The Mashery Portal provides high levels of custom access for pages and documentation based on whether or not a user is logged in, is a member of a particular role or group, and so on. However, these access levels apply to the entire page.

You can selectively hide or show pieces content within a page or documentation only for logged-in users using the `.hide-logged-in` and `.hide-logged-out` classes.

```html
<div class="hide-logged-in">
	Logged out users will see this. Logged in users will NOT.
</div>

<div class="hide-logged-out">
	Logged out users will NOT see this. Logged in users will.
</div>
```
</div>
</div>
</div>

<script>
	var renderPortalComponentsTOC = function () {

		'use strict';

		// Variables
		var subnav = document.querySelector('#demo-subnav');
		var sections = document.querySelectorAll('h2');
		var subnavContent = '';

		// Check that all variables exist
		if ( !subnav || sections.length === 0 ) return;

		// Loop through each section and create a link to it
		for ( var i = 0, len = sections.length; i < len; i++  ) {

			// Ignore sections without an id
			var id = sections[i].id;
			if ( !id ) continue;

			// Create section navigation
			subnavContent += '<li><a class="js-scroll link-plain" href="#' + id + '">' + sections[i].innerHTML + '</a></li>';

		}

		// Add subnav
		subnav.innerHTML = '<h3>Contents</h3><ul>' + subnavContent + '</ul>';

	};

	// Create table of contents
	window.addEventListener('portalAfterRender', renderPortalComponentsTOC, false);
	renderPortalComponentsTOC();

	// Init Translate Demo
	window.addEventListener('portalAfterRender', function () {
		new Translate();
	}, false);

</script>