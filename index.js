const { path } = require("@vuepress/shared-utils");

module.exports = (options = {}, context) => ({
  define() {
    const { siteConfig = {} } = context;
    const domain = options.domain || siteConfig.domain;
    const outboundLinkTracking =
      options.outboundLinkTracking || siteConfig.outboundLinkTracking;

    /**
     * fully qualified url without the last `/`
     */
    const selfHostedUrl =
      options.selfHostedUrl || siteConfig.selfHostedUrl;
    
    const DOMAIN = domain || false;
    const OUTBOUND_LINKS = outboundLinkTracking || false;
    const SELF_HOSTED_URL = selfHostedUrl || false;

    return { DOMAIN, OUTBOUND_LINKS, SELF_HOSTED_URL };
  },

  enhanceAppFiles: [path.resolve(__dirname, "inject.js")],
});
