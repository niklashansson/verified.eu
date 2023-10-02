import { closeDropdown } from '@finsweet/ts-utils';

export const weglot = function () {
  const currentLang = Weglot.getCurrentLang();
  updateLangSwitcher(currentLang);

  const instances = document.querySelectorAll(
    '[weglot-element="wrapper"]'
  ) as NodeListOf<HTMLDivElement>;

  instances.forEach((instance) => {
    const links = instance.querySelectorAll('[lang]') as NodeListOf<Element>;

    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        const lang = link.getAttribute('lang');

        Weglot.switchTo(lang);
        updateLangSwitcher(lang);

        const dropdownEl = instance.querySelector('[weglot-element="dropdown"]') as HTMLDivElement;

        closeDropdown(dropdownEl);
      });
    });
  });
};

function updateLangSwitcher(currentLang) {
  const wrappers = document.querySelectorAll(
    '[weglot-element="wrapper"]'
  ) as NodeListOf<HTMLDivElement>;

  wrappers.forEach((wrapper: HTMLDivElement) => {
    const toggle = wrapper.querySelector('.w-dropdown-toggle') as HTMLLinkElement;

    if (toggle?.getAttribute('lang') !== currentLang) {
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
  });

  //   if (toggle?.getAttribute('lang') !== currentLang) {
  //     const activeLangLink = wrapper?.querySelector(`[lang="${currentLang}"]`);
  //     const toggleTxt = toggle?.querySelector('[weglot-element="active-lang-text"]')?.textContent;
  //     const activeLangLinkTxt = activeLangLink?.textContent;

  //     toggle.querySelector('[weglot-element="active-lang-text"]').textContent = activeLangLinkTxt;
  //     activeLangLink.textContent = toggleTxt;

  //     const lang = activeLangLink?.getAttribute('lang');
  //     const toggleLang = toggle?.getAttribute('lang');

  //     toggle?.setAttribute('lang', lang);
  //     activeLangLink?.setAttribute('lang', toggleLang);
  //   }
}
