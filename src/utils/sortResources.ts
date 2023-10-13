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
