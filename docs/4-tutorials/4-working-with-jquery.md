# Working with jQuery

jQuery is *not* bundled with your Portal.

If you'd rather use jQuery than [work with native, modern JavaScript](/docs/read/your_portal/tutorials/Working_with_modern_JavaScript), you should load it using the [`m$.loadJS()` helper method](/docs/read/your_portal/layout_and_design/JavaScript_API#loadjs) and run your jQuery-dependent code as a callback.

Log into the API Control Center, go to `Manage > Portal`, and click `Portal Settings`. Then add this under the `Body JavaScript` field under the `Inline JavaScript` section.

```js
window.addEventListener('portalAfterRender', function () {

    // Load jQuery
    m$.loadJS('https://code.jquery.com/jquery-3.2.1.min.js', function () {
        // Your code goes here...
    });

}, false);
```