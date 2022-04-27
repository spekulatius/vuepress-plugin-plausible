# Plausible Analytics Plugin for VuePress

This plugin helps to integrate [Plausible Analytics](https://plausible.io/) in your [VuePress](https://vuepress.vuejs.org/) documentation website. Plausible is a alternative to Google Analytics with a focus on privacy.

There is also a list [privacy-focused tracking solutions](https://github.com/spekulatius/awesome-privacy-friendly-web-analytics).


## Install

To install the VuePress plugin, run one of the following commands:

```sh
npm install vuepress-plugin-plausible

# or

yarn add vuepress-plugin-plausible
```


## Configuration

Add the VuePress plugin in your site or theme config file. The configuration is done as part of the plugin configuration. Your configuration file is usually located under `.vuepress/config.js`. Extend it with this line:

```js
module.exports = {
  plugins: {
    'plausible': { domain: 'your-domain.com' },

    // other plugins
    // ...
  }
}
```

### Outbound link tracking

Plausible can also [track all outbound links](https://plausible.io/docs/outbound-link-click-tracking). To enable outbound link tracking with this extension, do this instead of the above:

```js
module.exports = {
  plugins: {
    'plausible': { domain: 'your-domain.com', outboundLinkTracking: true },

    // other plugins
    // ...
  }
}
```

For more details on how to work with VuePress plugins, check out the [official docs](https://vuepress.vuejs.org/plugin/using-a-plugin.html).


## License

This package is released under the MIT license by [Peter Thaleikis](https://peterthaleikis.com).
