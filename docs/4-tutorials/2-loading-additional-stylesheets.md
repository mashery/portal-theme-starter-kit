# Loading Additional Stylesheets

The Portal only allows you to load a single stylesheet by default under `Manage > Portal > Portal Settings` in the API Control Center.

There are two techniques you can use to load additional stylesheets.

1. Load additional stylesheets using the [`m$.loadCSS()` method](/docs/read/your_portal/layout_and_design/JavaScript_API#loadcss) and an appropriate [event hook](/docs/read/your_portal/layout_and_design/Event_Hooks).
2. Load it synchronously by posting the following hack into the `Head JavaScript` field of the `Inline JavaScript` section under `Manage > Portal > Portal Settings` in the API Control Center.

    ```html
    </script>
    <link rel="stylesheet" href="/files/your-stylesheet.css" media="all">
    <script>
    ```