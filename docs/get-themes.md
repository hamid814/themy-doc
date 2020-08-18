---
id: get-themes
title: Get list of themes
sidebar_label: getThemes
---

to see a list of names of themes you can:

```js {5}
const themy = require('themy');

const theme = new themy({ coolTheme: {} });

theme.getThemes();
```

:::info
`getThemes()` reutrns an array of strings
:::
