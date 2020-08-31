const { path } = require('@vuepress/shared-utils')

module.exports = (options = {}, context) => ({
  define () {
    const { siteConfig = {} } = context
    const domain = options.domain || siteConfig.domain
    const DOMAIN = domain || false

    return { DOMAIN }
  },

  enhanceAppFiles: [
    path.resolve(__dirname, 'inject.js')
  ]
})
