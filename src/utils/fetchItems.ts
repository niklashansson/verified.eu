import { cloneNode, restartWebflow } from '@finsweet/ts-utils';
import { Swiper } from 'swiper';

export const fetchItems = async function () {
  const instances = Array.from(document.querySelectorAll('[bw-cmsfetch-element="instance"]'));
  if (!instances) return;

  instances.forEach(async (instance) => {
    const listSlug = instance.getAttribute('bw-cmsfetch-list-slug');
    const itemSlug = instance.getAttribute('bw-cmsfetch-slug');
    const target = instance.querySelector('[bw-cmsfetch-element="target"]');
    if (!listSlug || !itemSlug || !target) return;

    const slug = `/${listSlug}/${itemSlug}`;

    const fetchedElement = await fetchElement(slug);

    target.innerHTML = '';
    target.appendChild(fetchedElement);
    const newTarget = target.querySelector('[bw-cmsfetch-element="element"]');
    restartWebflow();

    newTarget?.classList.add('is-active');
    target?.classList.add('is-active');
  });
};

async function fetchElement(slug: string) {
  try {
    const res = fetch(slug);
    const text = await (await res).text();
    const parser = new DOMParser();
    const html = parser.parseFromString(text, 'text/html');

    const element = html.querySelector('[bw-cmsfetch-element="element"]');

    if (!element) return;

    return element;
  } catch (err) {
    console.error(err);
  }
}
