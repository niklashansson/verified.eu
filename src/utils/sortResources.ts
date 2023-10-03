import type { CMSList } from '@finsweet/attributes-cmscore/types';

export const sortResources = function () {
  window.fsAttributes = window.fsAttributes || [];

  window.fsAttributes.push([
    'cmscombine',
    (listInstances: CMSList[]) => {
      const [listInstance] = listInstances;
      if (!listInstance) return;

      // Sort items by Publish Date (newest to oldest)
      listInstance.items.sort((a, b) => {
        const publishDateA = new Date(a.element.getAttribute('publish-date')).getTime();
        const publishDateB = new Date(b.element.getAttribute('publish-date')).getTime();

        return publishDateB - publishDateA;
      });

      listInstance.renderItems();
    },
  ]);
};

// function getLocale() {
//   const locPath = window.location.pathname.slice(1, 3);
//   let localization = '';

//   if (locPath === 'no') localization = 'no';
//   if (locPath === 'sv') localization = 'sv';
//   if (locPath === 'fi') localization = 'fi';
//   if (locPath !== 'no' && locPath !== 'sv' && locPath !== 'fi') localization = 'en';

//   return localization;
// }

// const locale = getLocale();

// listInstance.items.forEach((item) => {
//   const hideFromLocale = item.element.querySelector(`[hide-from-${locale}="true"]`);
//   if (!hideFromLocale) return;

//   item.valid = false;
// });
