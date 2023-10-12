export const localization = function () {
  const curLocale = getLocale();
  // sets current locale's lang code on html doc
  if (curLocale) document.documentElement.setAttribute('lang', curLocale);

  // gets all href links from <head></head>
  const hrefLangLinks = Array.from(document.querySelectorAll('link[hreflang]'));
  // gets all switch links from language switchers
  const langSwitchLinks = Array.from(document.querySelectorAll('[switcher-lang]'));

  hrefLangLinks.forEach((link) => {
    const langCode = link.getAttribute('hreflang');

    if (langCode === curLocale) return;

    const langSwitchLink = langSwitchLinks.find(
      (link) => link.getAttribute('switcher-lang') === langCode
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
      return 'en';
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
