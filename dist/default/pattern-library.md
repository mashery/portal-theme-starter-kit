<script>
	mashery.globals.noHeading = true;
</script>
<div class="full-width" markdown="1">
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


### Full Width Layouts

Make any piece of content go full width (run from one edge of the viewport to the other) by adding the `.full-width` class.

```html
<div class="bg-muted bg-hero full-width">
	<h1>This entire section will run edge-to-edge.</h1>
	<p>Useful for hero sections with full-bleed images.</p>
</div>

<p>This content will have the normal amount of padding on the left and right.</p>

<img class="full-width" src="/path/to/image.jpg">

<p>The image above will also run edge-to-edge.</p>
```


### Hiding Headings

You can hide the automatically generated heading on a page by setting `mashery.globals.noHeading` to `true` inline on that page.

```html
<script>
	mashery.globals.noHeading = true;
</script>

The rest of your content...
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

### Combining Classes

Classes can be combined as needed.

<table class="table-striped table-condensed">
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
<table class="table-striped table-condensed">
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

## Dropdown Menus

You can add dropdown menus to your primary navigation menu with the `addDropdown()` function.

The function accepts three arguments:

1. The URL in your navigation to add the dropdown to,
2. The items to add to it (as an array of data), and
3. Optionally, text to use for link it's replacing (which gets added as an item in the dropdown menu).

```js
var dropdownData = [
	{
		title: 'Hello',
		url: '#hello'
	},
	{
		title: 'World',
		url: '#world'
	}
];

// The "/docs" link will be added as the first item in the dropdown, with the label "Overview"
addDropdown('/docs', dropdownData, 'Overview');
```

Add this to the `Body JavaScript` section under `Portal > Portal Setup` in the API Control Center.

---

## Docs Expand-and-Collapse Navigation

If you have a nested documentation structure, you can add expand-and-collapse functionality to your docs navigation with `docsNavCollapse.js`.

The script will not run until initialized in a `portalAfterRender` event. This is done for you already in the `Body JavaScript` section under `Portal > Portal Setup` in the API Control Center.

```js
docsNavCollapse();
```

You can optionally pass in an object of options to configure the script's behavior.

```js
docsNavCollapse({
	selector: '#nav-docs', // The selector for your docs nav section (only needed if you change it from the default)
	className: 'docs-nav-dropdown', // The class to add to the dropdowns for styling purposes
	overview: 'Overview' // The text to use for the link to the section homepage
});
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

</script>