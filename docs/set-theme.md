---
id: set-theme
title: Set Active Theme
sidebar_label: setTheme
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
when using `setTheme()` , you must use a string as first argument
:::
