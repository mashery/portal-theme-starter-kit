# Custom Fonts

Most browsers do a bad job of loading web fonts.

They will often display nothing while the font is downloading and parsing, leaving your users with a flash of invisible text, or in some cases, a page that never displays.

This is particularly pronounced on certain mobile browsers that have no timeout for when fonts fail to load.

As a best practice, you should display a system font by default and switch over to your custom font only after it has completed loading.

## Load your web fonts asynchronously

First, load the stylesheet for your web fonts asynchronously using [this trick from the Filament Group](https://www.filamentgroup.com/lab/load-css-simpler/).

To make this work, we'll [use this trick to load additional stylesheets](/docs/your_portal/tutorials/Loading_Additional_Stylesheets)  in the `Head JavaScript` section of the API Control Center (under `Manage` > `Portal` > `Portal Setup`).

*Make sure to replace `/path/to/my.css` with the actual path to your CSS file.*

```html
</script>

<link rel="stylesheet" href="/path/to/my.css" media="print" onload="this.media='all'; this.onload=null;">

<script>
```

First, upload [fontFaceObserver.js](https://github.com/bramstein/fontfaceobserver) to your Portal via the File Manager under `Manage > Content`.

Then, add this in Control Center under `Manage > Portal > Portal Settings` under one of the inline JavaScript sections. Change the font file and font name to whatever typeface you're using.



Finally, in your CSS file, make the font that you use conditional on the `.fonts-loaded` class.

```css
body {
    font-family: Helvetica Neue, Arial, sans-serif;
}

.fonts-loaded body {
    font-family: 'Your Typeface Name', sans-serif;
}
```