export const localization = function () {
  const curLocale = getLocale();
  if (curLocale) document.documentElement.setAttribute('lang', curLocale);

  const hrefLangLinks = Array.from(document.querySelectorAll('link[hreflang]'));
  const langSwitchLinks = Array.from(document.querySelectorAll('[switcher-lang]'));

  // 1) update each lang link in lang switcher to corresponding page
  hrefLangLinks.forEach((link) => {
    const localeStr = link.getAttribute('hreflang');

    if (localeStr === curLocale) return;

    const langSwitchLink = langSwitchLinks.find(
      (link) => link.getAttribute('switcher-lang') === localeStr
    );

    if (!langSwitchLink) return;

    const linkStr = link.getAttribute('href') || '';

    const path = getPathFromUrl(linkStr);

    langSwitchLink.setAttribute('href', path || '/');
  });
};

function getLocale() {
  const locPath = window.location.pathname.slice(1, 3);

  // Using a switch statement for clarity
  switch (locPath) {
    case 'no':
      return 'no';
    case 'sv':
      return 'sv';
    case 'fi':
      return 'fi';
    default:
      return 'x-default';
  }
}

function getPathFromUrl(urlString: string) {
  try {
    const url = new URL(urlString);
    return url.pathname;
  } catch (e) {
    console.error('Invalid URL');
    return null;
  }
}
