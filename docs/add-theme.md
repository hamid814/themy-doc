---
id: add-theme
title: Add theme in javascript
sidebar_label: addTheme
---

you can add new themes after initilizing the themy by `addTheme` method

```js {14}
const themy = require('themy');

const themes = {
  // list of themes...
};

const theme = new themy(themes);

const coolerTheme = {
  primary: '#rrggbb',
  secondary: '#rrggbb',
};

theme.addTheme(coolerTheme);

// set new theme as active theme
theme.setTheme('coolerTheme');
```

:::note
after adding theme with `addTheme()` , the new theme will NOT be set as default theme
:::
