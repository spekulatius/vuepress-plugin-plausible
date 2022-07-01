const { path } = require("@vuepress/shared-utils");

module.exports = (options = {}, context) => ({
  define() {
    const { siteConfig = {} } = context;
    const selfHostedUrl = options.selfHostedUrl || siteConfig.selfHostedUrl;
    const domain = options.domain || siteConfig.domain;
    const outboundLinkTracking =
      options.outboundLinkTracking || siteConfig.outboundLinkTracking;
    
    const SELF_HOSTED_URL = selfHostedUrl || "https://plausible.io";
    const DOMAIN = domain || false;
    const OUTBOUND_LINKS = outboundLinkTracking || false;

    return { DOMAIN, OUTBOUND_LINKS, SELF_HOSTED_URL };
  },

  enhanceAppFiles: [path.resolve(__dirname, "inject.js")],
});
