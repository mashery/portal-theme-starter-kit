# Google Analytics

Your Portal loads pages asynchronously with JavaScript. In order to properly track page loads beyond the first, we need to use [an event hook](/docs/read/your_portal/layout_and_design/Event_Hooks) to tell Google Analytics that a new page has loaded.

## 1. Load Google Analytics on the page.

In either the `Header JavaScript` or `Footer JavaScript` in the `Manage` > `Portal` > `Portal Setup` > `Inline JavaScript` section of Control Center, copy/paste your Google Analytics script.

The script varies from `analytics.js` to `gtag.js` to Google Tag Manager.

**`analytics.js`**

```js
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-0000000-1', 'auto');
ga('send', 'pageview');
```

**`gtag.js`**

```js
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-0000000-1');
```

**Google Tag Manager**

```js
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-0000000');
```

## 2. Tell Google Analytics a new page has loaded.

Immediately after your Google Analytics script, add an event listener for the `portalAfterRender` event. Inside it, you'll run a function to let Google know a new page has loaded.

**`analytics.js`**

```js
window.addEventListener('portalAfterRender', function () {
	ga('send', 'pageview');
}, false);
```

**`gtag.js`**

```js
window.addEventListener('portalAfterRender', function () {
	// Replace this with your unique UA ID
	gtag('config', 'UA-0000000-1');
}, false);
```

**Google Tag Manager**

```js
window.addEventListener('portalAfterRender', function () {
	dataLayer.push({event: 'pageview'});
}, false);
```

Google Tag Manager also requires you to register a custom `pageview` event. [Details on how to do that here.](https://www.bounteous.com/insights/2018/03/30/single-page-applications-google-analytics/?ns=l#only-the-first-page-is-tracked)