/* global DOMAIN */
export default ({ router }) => {
  if (
    // only in production
    process.env.NODE_ENV === "production" &&
    // only if we got the domain
    DOMAIN &&
    // and we are ready
    typeof window !== "undefined"
  ) {
    (function () {
      var d = document,
        g = d.createElement("script"),
        s = d.getElementsByTagName("script")[0];
      var h = OUTBOUND_LINKS
        ? SELF_HOSTED_URL + "/js/plausible.outbound-links.js"
        : SELF_HOSTED_URL + "/js/plausible.js";

      g.setAttribute("data-domain", DOMAIN);
      g.async = true;
      g.defer = true;
      g.src = h;
      s.parentNode.insertBefore(g, s);
    })();
  }
};
