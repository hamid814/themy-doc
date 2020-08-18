---
id: get-theme
title: Get the name of active theme
sidebar_label: getTheme
---

to see the active theme you can just do:

```js {5}
const themy = require('themy');

const theme = new themy({ coolTheme: {} });

theme.getTheme();
```

:::info
`getTheme()` reutrns a string, the name of active theme
:::
