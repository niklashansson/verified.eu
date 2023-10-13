export const fetchResources = () => {
  const elements = Array.from(document.querySelectorAll('[verified-resources-instance]'));
  if (elements.length === 0) return;

  const targetElements = getTargetElementsFromEnabledResources(elements);
  const slugsSet = new Set(elements.map((el) => el.getAttribute('verified-resources-slug')));

  const resources = Array.from(document.querySelectorAll('[verified-resources-element="latest"]'));
  if (resources.length === 0) return;

  sortResources(resources);

  const filteredResources = resources.filter((res) => {
    const slug = res.getAttribute('verified-resources-slug');
    return slug && !slugsSet.has(slug);
  });

  filteredResources.splice(targetElements.length);

  targetElements.forEach((target, i) => {
    target.innerHTML = '';
    target.appendChild(filteredResources[i]);
  });
};

function getTargetElementsFromEnabledResources(elements) {
  return elements
    .reduce((acc, el) => {
      const enabled = el.getAttribute('verified-resources-instance');
      const slug = el.getAttribute('verified-resources-slug');

      if (enabled === 'true') {
        if (slug && slug !== '') {
          console.error(
            `The resource "${slug}" was replaced because CMS field "Get latest published Resource instead?" is enabled for the Resource Position. Disable it to show the resource.`
          );
        }

        const targetEl = el.closest('[verified-resources-element="target"]');
        if (!targetEl) throw new Error('Missing target element');

        acc.push(targetEl);
      }
      return acc;
    }, [])
    .sort(
      (a, b) =>
        Number(a.getAttribute('verified-resources-sort')) -
        Number(b.getAttribute('verified-resources-sort'))
    );
}

function sortResources(resourcesArr) {
  resourcesArr.sort((a, b) => {
    const publishedA = new Date(a.getAttribute('verified-resources-published')).getTime();
    const publishedB = new Date(b.getAttribute('verified-resources-published')).getTime();
    return publishedB - publishedA;
  });
}
