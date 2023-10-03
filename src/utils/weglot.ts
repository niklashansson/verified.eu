import { closeDropdown } from '@finsweet/ts-utils';

export const weglot = function () {
  const currentLang = Weglot.getCurrentLang();
  updateLangSwitchers(currentLang);

  const instances = document.querySelectorAll(
    '[weglot-element="wrapper"]'
  ) as NodeListOf<HTMLDivElement>;

  instances.forEach((instance) => {
    const links = instance.querySelectorAll('[lang]') as NodeListOf<Element>;

    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        const lang = link.getAttribute('lang') as string;

        Weglot.switchTo(lang);

        updateLangSwitchers(currentLang);
      });
    });
  });
};

function updateLangSwitchers(currentLang: string) {
  const wrappers = document.querySelectorAll(
    '[weglot-element="wrapper"]'
  ) as NodeListOf<HTMLDivElement>;

  wrappers.forEach((wrapper: HTMLDivElement) => {
    const toggle = wrapper.querySelector('.w-dropdown-toggle') as HTMLLinkElement;
    const version = wrapper.getAttribute('weglot-version') as string;

    if (toggle?.getAttribute('lang') !== currentLang) {
      if (+version === 1) {
        const activeLangLink = wrapper?.querySelector(`[lang="${currentLang}"]`) as HTMLLinkElement;
        const toggleFlagEl = toggle?.querySelector('[weglot-element="flag"]') as HTMLDivElement;
        const activeLangFlagEl = activeLangLink.querySelector(
          '[weglot-element="flag"]'
        ) as HTMLDivElement;

        toggleFlagEl.innerHTML = activeLangFlagEl.innerHTML;
        activeLangFlagEl.innerHTML = toggleFlagEl.innerHTML;

        const toggleLang = toggle?.getAttribute('lang') as string;

        toggle.setAttribute('lang', currentLang);
        activeLangLink.setAttribute('lang', toggleLang);

        // console.log(activeLangFlagEl.innerHTML);
      }

      if (+version === 2) {
        const activeLangLink = wrapper?.querySelector(`[lang="${currentLang}"]`) as HTMLLinkElement;
        const toggleTxt = toggle?.querySelector('[weglot-element="active-lang-text"]')?.textContent;
        const activeLangLinkTxt = activeLangLink?.textContent;

        toggle.querySelector('[weglot-element="active-lang-text"]').textContent = activeLangLinkTxt;
        activeLangLink.textContent = toggleTxt;

        const lang = activeLangLink?.getAttribute('lang') as string;
        const toggleLang = toggle?.getAttribute('lang') as string;

        toggle?.setAttribute('lang', lang);
        activeLangLink?.setAttribute('lang', toggleLang);
      }
    }
  });
}
