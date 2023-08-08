export const nestedCollection = function () {
  const items = document.querySelectorAll('[nested-collection="item"]');

  items.forEach((item) => {
    const itemSlug = item.getAttribute('nested-collection-item-slug');
    if (!itemSlug) return;

    const collectionSlug = item
      .closest('[nested-collection-slug]')
      ?.getAttribute('nested-collection-slug');
    if (!collectionSlug) return;

    getSubLinks(itemSlug, collectionSlug, item);
  });

  async function getSubLinks(itemSlug, collectionSlug, item) {
    try {
      const url = `/${collectionSlug}/${itemSlug}`;

      const res = await fetch(url);
      const html = await textToHtml(res);

      const extractEl = html.querySelector('[nested-collection="extract"]');
      if (!extractEl) return;

      item.append(extractEl);
    } catch (err) {
      console.log(err);
    }
  }

  async function textToHtml(res) {
    const text = await res.text();
    const parser = new DOMParser();
    const html = parser.parseFromString(text, 'text/html');
    return html;
  }
};
