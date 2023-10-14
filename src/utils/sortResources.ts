import type { CMSItem, CMSList } from '@finsweet/attributes-cmscore/types';

declare global {
  interface Window {
    fsAttributes?: Array<[string, Function]>;
  }
}

export const sortResources = function () {
  window.fsAttributes = window.fsAttributes || [];
  window.fsAttributes.push([
    'cmscombine',
    (listInstances: CMSList[]) => {
      const [listInstance] = listInstances;
      if (!listInstance) return;

      sortResourcesByPublishDate(listInstance.items);
      listInstance.renderItems();
    },
  ]);
};

function sortResourcesByPublishDate(resourcesArr: Array<CMSItem>) {
  resourcesArr.sort((a, b) => {
    const dateA = a.element.getAttribute('publish-date');
    const dateB = b.element.getAttribute('publish-date');

    // Convert date strings to timestamps; if date is missing, use -Infinity
    const publishedDateA = dateA ? new Date(dateA).getTime() : -Infinity;
    const publishedDateB = dateB ? new Date(dateB).getTime() : -Infinity;

    // Sort in descending order (newest to oldest)
    return publishedDateB - publishedDateA;
  });
}
