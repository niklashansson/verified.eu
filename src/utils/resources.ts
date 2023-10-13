import type { CMSItem, CMSList } from '@finsweet/attributes-cmscore';
import type { CMSItem } from '@finsweet/attributes-cmscore/types';

export const resources = async () => {
  window.fsAttributes = window.fsAttributes || [];
  window.fsAttributes.push([
    'cmscombine',
    (listInstances: CMSList[]) => {
      listInstances.forEach((instance) => {
        removeResourceFromList(instance, 'strategic-partnership-together-with-procountor');
        sortResources(instance.items);
        instance.renderItems();
      });
    },
  ]);
};

function sortResources(resourcesArr: Array<CMSItem>) {
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

function removeResourceFromList(list: CMSList, itemSlug: string) {
  const removeItem = list.items.find((item: CMSItem) => item.element.dataset.slug === itemSlug);
  if (!removeItem) return;
  removeItem.valid = false;
}

// const visiblePosts = document.querySelectorAll('.postslayout1_alt:not(.w-condition-invisible)');

//   console.log(visiblePosts);

//   const activeArr = Array.from(visiblePosts);

//   activeArr.forEach((item) => {
//     const child = item.firstChild;
//     const childSlug = child?.dataset.slug;

//     console.log(childSlug);
//   });
