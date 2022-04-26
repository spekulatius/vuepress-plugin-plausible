const { path } = require("@vuepress/shared-utils");

module.exports = (options = {}, context) => ({
  define() {
    const { siteConfig = {} } = context;
    const domain = options.domain || siteConfig.domain;
    const outboundLinkTracking =
      options.outboundLinkTracking || siteConfig.outboundLinkTracking;
    const DOMAIN = domain || false;
    const OUTBOUND_LINKS = outboundLinkTracking || false;

    return { DOMAIN, OUTBOUND_LINKS };
  },

  enhanceAppFiles: [path.resolve(__dirname, "inject.js")],
});
