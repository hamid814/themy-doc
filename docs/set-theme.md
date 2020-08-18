---
id: set-theme
title: Set Active Theme
sidebar_label: setTheme
---

you can add new themes after initilizing the themy by `addTheme` method

```js {14}
const themy = require('themy');

const themes = {
  coolTheme: {
    // cool colors
  }
  awesomeTheme: {
    // awesome colors
  }
};

const theme = new themy(themes);

theme.setTheme('awesomeTheme');
```

:::note
when using `setTheme()` , you must pass a **string** as argument
:::
