export const fetchResources = function () {
  const elements = document.querySelectorAll('[verified-resources-instance]');
  if (!elements) return;

  const targets = [];

  // Get append element and the order in which Resource Posts should be added
  elements.forEach((element) => {
    const targetEl = element.closest('[verified-resources-element="target"]');
    if (!targetEl) return;

    const replaceResource =
      element.getAttribute('verified-resources-instance') === 'true' ? true : false;
    const sortPosition = Number(element.getAttribute('verified-resources-sort'));
    const slug = element.getAttribute('verified-resources-slug');

    targets.push({
      replaceResource: replaceResource,
      targetElement: targetEl,
      sortPosition: sortPosition,
      slug: slug,
    });
  });

  // Sort targets by sortPosition
  targets.sort((a, b) => {
    b.sortPosition - a.sortPosition;
  });

  const slugs = targets.map((target) => target.slug);

  const resources = Array.from(document.querySelectorAll('[verified-resources-element="latest"]'));

  resources.sort((a, b) => {
    const publishedStrA = a.getAttribute('verified-resources-published');
    const publishedStrB = b.getAttribute('verified-resources-published');
    if (!publishedStrA || !publishedStrB) return;

    const publishedA = new Date(publishedStrA).getTime();
    const publishedB = new Date(publishedStrB).getTime();

    return publishedB - publishedA;
  });

  const filteredResources = resources.filter((res, i) => {
    const slug = res.getAttribute('verified-resources-slug');
    if (!slug) return;

    return !checkSlug(slugs, slug);
  });

  function checkSlug(arr: Array<string>, slug: string) {
    return arr.some((arrVal: string) => slug === arrVal);
  }

  const includedTargets = targets.filter((target) => target.replaceResource);

  console.log(includedTargets);

  const finalResources = filteredResources.slice(0, targets.length);

  const instances = targets.map((instance, i) => {
    return { ...instance, resource: finalResources[i] };
  });

  // Clear and append resources
  instances.forEach(({ targetElement, resource }) => {
    // Clear target element
    targetElement.innerHTML = '';

    targetElement.appendChild(resource);
  });
};
