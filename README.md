# Plausible Analytics Plugin for VuePress

This plugin helps to integrate [Plausible Analytics](https://plausible.io/) in your [VuePress](https://vuepress.vuejs.org/) documentation website. Plausible is a privacy-friendly alternative to Google Analytics.


## Install

To install the VuePress plugin run one of the following commands:

```sh
npm install vuepress-plugin-plausible

# or

yarn add vuepress-plugin-plausible
```


## Configuration

Add the VuePress plugin in your site or theme config file. The configuration is done as part of the plugin-configuration. Your configuration file is usually located under `.vuepress/config.js`. Extend it with this line:

```js
module.exports = {
  plugins: [
    ['plausible', {domain: 'your-domain.com'}]

    // other plugins
    // ...
  ]
}
```

For more details on how to work with VuePress plugins check the [official docs](https://vuepress.vuejs.org/plugin/using-a-plugin.html).


## License

This package is release under the MIT license by [Peter Thaleikis](https://peterthaleikis.com).
