import { cloneNode, restartWebflow } from '@finsweet/ts-utils';
import { Swiper } from 'swiper';

export const fetchItems = async function () {
  const instances = Array.from(document.querySelectorAll('[bw-cmsfetch-element="instance"]'));
  if (!instances) return;

  instances.forEach(async (instance) => {
    const listSlug = instance.getAttribute('bw-cmsfetch-list-slug');
    const itemSlug = instance.getAttribute('bw-cmsfetch-slug');
    const targets = Array.from(instance.querySelectorAll('[bw-cmsfetch-element="target"]'));
    const option = instance.getAttribute('bw-cmsfetch-option') || '';
    if (!listSlug || !itemSlug || !targets) return;

    const slug = `/${listSlug}/${itemSlug}`;

    targets.forEach(async (target) => {
      const fetchedElement = await fetchElement(slug, option);
      target.innerHTML = '';
      target.appendChild(fetchedElement);

      const newTarget = target.querySelector('[bw-cmsfetch-element="element"]');

      restartWebflow();
      newTarget?.classList.add('is-active');
      target?.classList.add('is-active');
    });
  });
};

async function fetchElement(slug: string, option: string) {
  try {
    const res = fetch(slug);
    const text = await (await res).text();
    const parser = new DOMParser();
    const html = parser.parseFromString(text, 'text/html');

    const optionAttribute = option !== '' ? `[bw-cmsfetch-option="${option}"]` : '';

    const element = html.querySelector(`[bw-cmsfetch-element="element"]${optionAttribute}`);

    if (!element) return;

    return element;
  } catch (err) {
    console.error(err);
  }
}
