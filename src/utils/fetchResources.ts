import { throwError } from '@finsweet/ts-utils';

export const fetchResources = function () {
  // Select all Resource Positions
  const elements = Array.from(document.querySelectorAll('[verified-resources-instance]'));
  if (!elements) return;

  // Include enabled Resource Positions
  const targetElements = elements
    .filter((el) => {
      const enabled = el.getAttribute('verified-resources-instance') === 'true' ? true : false;
      if (enabled === undefined) throw new Error('Enabled/disabled status not found');

      const slug = el.getAttribute('verified-resources-slug');

      if (slug !== '' && enabled)
        console.error(
          `The resource "${slug}" was replaced because CMS field "Get latest published Resource instead?" is enabled for the Resource Position. Disable it to show the resource.`
        );

      return enabled;
    })
    .map((el) => {
      const targetEl = el.closest('[verified-resources-element="target"]');
      if (!targetEl) throw new Error('Missing target element');

      return targetEl;
    });

  // Sort Resource Positions by position set in Webflow (mutates original arr)
  sortTargetElements(targetElements);

  // Collect all slugs from elements
  const slugs = Array.from(elements.map((el) => el.getAttribute('verified-resources-slug')));

  // Collect three newest posts from each Resource Type (Articles, News Posts, Customer Cases)
  const resources = Array.from(document.querySelectorAll('[verified-resources-element="latest"]'));
  if (!resources) return;

  // Sort and mutate resources element by Publish Date Webflow CMS field
  sortResources(resources);

  // Exclude resources that is already present
  const filteredResources = resources.filter((res, i) => {
    const slug = res.getAttribute('verified-resources-slug');
    if (!slug) return;

    return !checkSlug(slugs, slug);
  });

  // Delete unneeded resources based on amount of Resource Positions
  filteredResources.splice(targetElements.length);

  targetElements.forEach((target, i) => {
    clear(target);
    target.appendChild(filteredResources[i]);
  });
};

function clear(el) {
  el.innerHTML = '';
}

function sortTargetElements(targetsArr) {
  targetsArr.sort((a, b) => {
    const posA = Number(a.getAttribute('verified-resources-sort'));
    const posB = Number(b.getAttribute('verified-resources-sort'));

    return posA - posB;
  });
}

function sortResources(resourcesArr) {
  resourcesArr.sort((a, b) => {
    const publishedStrA = a.getAttribute('verified-resources-published');
    const publishedStrB = b.getAttribute('verified-resources-published');
    if (!publishedStrA || !publishedStrB) return;

    const publishedA = new Date(publishedStrA).getTime();
    const publishedB = new Date(publishedStrB).getTime();

    return publishedB - publishedA;
  });

  return resourcesArr;
}

function checkSlug(arr: Array<string>, slug: string) {
  return arr.some((arrVal: string) => slug === arrVal);
}
