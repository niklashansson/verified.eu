import { restartWebflow } from '@finsweet/ts-utils';

type extractedElements = {
  element: HTMLElement;
  styles: HTMLDivElement;
};

export const fetchItems = async function () {
  const instances = document.querySelectorAll('[bw-cmsfetch-slug]');
  if (!instances.length) return;

  const tasks = Array.from(instances).map(async (instance) => {
    const collectionSlug: string = instance.getAttribute('bw-cmsfetch-collection') || '';
    const itemSlug: string = instance.getAttribute('bw-cmsfetch-slug') || '';
    if (!itemSlug || !collectionSlug) return;
    const slug = `/${collectionSlug}/${itemSlug}`;
    const loaderEl =
      (instance.closest('[bw-cmsfetch-element="loader"]') as HTMLElement) || undefined;

    const extractedEl = (await fetchElement(slug)) as HTMLElement;

    if (extractedEl) {
      extractedEl.className = instance.className;
      instance.replaceWith(extractedEl);
    }

    if (loaderEl) loaderEl.classList.add('is-active');
    restartWebflow();
  });

  await Promise.all(tasks);
};

async function fetchElement(slug: string): Promise<HTMLElement | extractedElements | undefined> {
  try {
    const res = await fetch(slug);
    if (!res.ok) throw new Error(`Failed to fetch ${slug}`);

    const text = await res.text();
    const parser = new DOMParser();
    const html = parser.parseFromString(text, 'text/html');

    const element = html.querySelector(
      '[bw-cmsfetch-element="extract-item"]'
    ) as HTMLElement | null;

    if (!element) {
      return undefined;
    }

    return element;
  } catch (err) {
    console.error(err);
    return undefined;
  }
}
