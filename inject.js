/* global DOMAIN */
export default ({ router }) => {
  if (
    // only in production
    process.env.NODE_ENV === 'production' &&

    // only if we got the domain
    DOMAIN &&

    // and we are ready
    typeof window !== 'undefined'
  ) {
    (function() {
      var d=document,
      g=d.createElement('script'),
      s=d.getElementsByTagName('script')[0];

      g.setAttribute('data-domain', DOMAIN);
      g.async=true;
      g.defer=true;
      g.src='https://plausible.io/js/plausible.js';
      s.parentNode.insertBefore(g,s);
    })();
  }
}

