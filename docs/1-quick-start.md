# Quick Start

<style>
	.color-swatch {
		background-color: #f7f7f7;
		display: inline-block;
		height: 1em;
		margin-right: 5px;
		width: 1em;
	}
</style>

The Blackbeard Quick Start Guide will walk you through how to setup a new Portal with Blackbeard in about 5 minutes.

## Step 1: Activate Blackbeard

You need to explicitly activate Blackbeard to use it. By default, your Portal will have the standard Portal front end enabled.

<mark markdown="1">*__Note:__ This step can only be completed by a Mashery employee with MashDash access. If you're a Mashery customer, please contact your Mashery representative to enable Blackbeard for you.*</mark>

0. Log into MashDash.
0. Click the `Config` tab.
0. Scroll down to `Enhanced Portal Configuration`.
0. Check the box for `Enables the modernized portal experience.`.
0. Update the `Portal Assets Domain` to `https://s3.amazonaws.com/developer.mashery`. In the future, we'll use a dedicated CDN.
0. Scroll to the bottom and click `Save`.


## Step 2: Pick a Theme

We've built 3 starter themes to help you get up-and-running more quickly.

[Download the starter kit](https://github.com/mashery/portal-theme-starter-kit/archive/master.zip) and unzip it. The files for all three themes are in the `dist` folder. Pick the theme you like best.

<a class="btn btn-large" href="https://github.com/mashery/portal-theme-starter-kit/archive/master.zip">Download the Starter Kit</a>

<mark markdown="1">*__Note:__* Your existing Portal theme will not work with Blackbeard. The markup structure and JavaScript environment is different. Attempting to use an old theme with Blackbeard will cause errors that will break your Portal.</mark>

<h3 class="h4">Theme Demos</h3>

View demos of all three themes using the links below.

<div class="row row-start-medium">
	<div class="grid-third margin-bottom">
		<a href="https://stagingcs1.mashery.com?theme=default">
			<img alt="" src="https://developer.mashery.com/files/sparrow.jpg">
			Default
		</a>
	</div>
	<div class="grid-third margin-bottom">
		<a href="https://stagingcs1.mashery.com?theme=skinny-nav">
			<img alt="" src="https://developer.mashery.com/files/skinny-nav.jpg">
			Skinny Nav
		</a>
	</div>
	<div class="grid-third margin-bottom">
		<a href="https://stagingcs1.mashery.com?theme=sidebar">
			<img alt="" src="https://developer.mashery.com/files/blackbeard.jpg">
			Sidebar
		</a>
	</div>
</div>

## Step 3: Add Your Theme

Once you've picked a theme, you need to do some quick setup.

**Upload Your Theme Files**

0. In the API Control Center, go to `Manage > Content`, and click on the `File Manager` button.
0. Upload the CSS file in the `css` folder for your theme.
0. Upload the `main.js` file in the `js` folder for your theme.

**Configure Your Theme**

0. In the API Control Center, go to `Manage > Portal` and click on `Portal Setup`.
0. Under the `Custom JavaScript File Inclusion` section in the `Body JavaScript File URL` field, put `/files/main.js`.
0. Under the `Custom CSS Files` section in the `Screen Stylesheet URL` field, put `/files/{your-theme}.css` (replacing `{your-theme}` with the name of the CSS file for your theme).
0. Under the `Inline Javascript` section in the `Body JavaScript` field, copy/paste the contents of the `setup/body.js` file that came with your theme.
0. Scroll to the bottom of the page and click `Save`.

## Step 4: Add Some Content

The *Portal Theme Starter Kit* comes with some starter layouts that you can modify as needed.

0. Open the `layouts` directory in your chosen theme.
0. In the API Control Center, go to `Manage > Content`.
0. Uncheck the `Use TinyMCE` checkbox.
0. Under `Custom Pages`, click on the first item (the one in bold) and copy/paste the contents of either `homepage.md` or `homepage-with-video.md` into the content area. Then click `Save`.
0. Under `Documentation`, click on the first item (the one in bold) and copy/paste the contents of either `documentation.md` or `documentation-better-docs.md` into the content area. Then click `Save`.
0. Under `Blog`, click on the first item (the one in bold) and copy/paste the contents of `blog.md`. Then click `Save`.

## Step 5: Customize

Now that you've got your new Portal set up, you're ready to customize it for your brand.

<h3 class="h3">Adding a Logo</h3>

The first thing most people want to do is add a logo. In the API Control Center, go to `Manage > Portal` and click on `Portal Setup`. Copy/paste this code into the `Body JavaScript` field under the `Inline Javascript` section. Replace `{logo-url}` with the name of your logo file.

**What's the URL for your image?** Upload it to the `File Manager` under `Manage > Content`, then click on the image to get a URL you can copy/paste.

```js
window.portalOptions.logo = '<img alt="Developer Portal" src="{logo-url}">';
```

<mark markdown="1">*__Psst...__ Don't forget to click save.*</mark>

<h3 class="h3">Customize Colors</h3>

Using a text editor like [VS Code](https://code.visualstudio.com) (free and cross-platform), you can do a find-and-replace for the colors below and replace them with your brand's colors:

- <span class="color-swatch" style="background-color: #0088cc;"></span> #0088cc / #08c
- <span class="color-swatch" style="background-color: #ffdd2f;"></span> #ffdd2f
- <span class="color-swatch" style="background-color: #b4d253;"></span> #b4d253
- <span class="color-swatch" style="background-color: #a42032;"></span> #a42032
- <span class="color-swatch" style="background-color: #272727;"></span> #272727
- <span class="color-swatch" style="background-color: #ffffff; border: 1px solid #808080;"></span> #ffffff / #fff

**Prefer to work with Sass?** You can access the complete source files for your theme in the `src` directory.