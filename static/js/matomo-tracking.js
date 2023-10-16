'use strict';

var matomoUrl = 'https://stats.mrraph.photo';
var matomoSiteId = '1';

var _paq = _paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(["setDoNotTrack", true]);
_paq.push(['disableCookies']);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
_paq.push(['trackAllContentImpressions']);
(function () {
  _paq.push(['setTrackerUrl', matomoUrl + '/matomo.php']);
  _paq.push(['setSiteId', matomoSiteId]);

  var d = document;
  var g = d.createElement('script');
  var s = d.getElementsByTagName('script')[0];

  g.type = 'text/javascript';
  g.defer = true;
  g.src = matomoUrl + '/matomo.js';
  s.parentNode.insertBefore(g, s);
})();