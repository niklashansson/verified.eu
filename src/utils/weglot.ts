// import { closeDropdown } from '@finsweet/ts-utils';

// export const weglot = function () {
//   const currentLang = Weglot.getCurrentLang();
//   updateLangSwitchers(currentLang);

//   const instances = document.querySelectorAll(
//     '[weglot-element="wrapper"]'
//   ) as NodeListOf<HTMLDivElement>;

//   instances.forEach((instance) => {
//     const links = instance.querySelectorAll('[lang]') as NodeListOf<Element>;

//     links.forEach((link) => {
//       link.addEventListener('click', (e) => {
//         e.preventDefault();

//         const lang = link.getAttribute('lang') as string;

//         Weglot.switchTo(lang);

//         updateLangSwitchers(currentLang);
//       });
//     });
//   });
// };

// function updateLangSwitchers(currentLang: string) {
//   const wrappers = document.querySelectorAll(
//     '[weglot-element="wrapper"]'
//   ) as NodeListOf<HTMLDivElement>;

//   wrappers.forEach((wrapper: HTMLDivElement) => {
//     const toggle = wrapper.querySelector('.w-dropdown-toggle') as HTMLLinkElement;
//     const version = wrapper.getAttribute('weglot-version') as string;

//     if (toggle?.getAttribute('lang') !== currentLang) {
//       if (+version === 1) {
//         // selects the current (new) lang's link in the dropdown list
//         const currentLangLink = wrapper?.querySelector(
//           `[lang="${currentLang}"]`
//         ) as HTMLLinkElement;
//         // selects the current (new) lang's div with flag svg in it
//         const currentLangFlagEl = currentLangLink.querySelector(
//           '[weglot-element="flag"]'
//         ) as HTMLDivElement;
//         const currentLangFlagSvg = currentLangFlagEl.innerHTML;
//         // selects the current (new) lang's text
//         const currentLangTxtEl = currentLangLink.querySelector(
//           '[weglot-element="lang-text"]'
//         ) as HTMLDivElement;

//         const currentLangText = currentLangTxtEl.textContent as string;

//         // selects the toggles (previous) lang's div with flag svg in it
//         const toggleFlagEl = toggle?.querySelector('[weglot-element="flag"]') as HTMLDivElement;
//         const toggleFlagSvg = toggleFlagEl.innerHTML;
//         // selects the toggles (previous) lang's hidden text
//         const toggleLangTxtEl = toggle?.querySelector(
//           '[weglot-element="lang-text"]'
//         ) as HTMLDivElement;
//         const toggleLangTxt = toggleLangTxtEl.textContent as string;

//         // 1) update toggle values (flag svg, hidden text, attribute)
//         toggleFlagEl.innerHTML = currentLangFlagSvg;
//         toggleLangTxtEl.textContent = currentLangText;

//         // 2) replace current lang's values with old lang (flag svg, text, attribute)
//         currentLangFlagEl.innerHTML = toggleFlagSvg;
//         currentLangTxtEl.textContent = toggleLangTxt;

//         // 3) update attribute values for both
//         const toggleLangAttr = toggle?.getAttribute('lang') as string;
//         currentLangLink.setAttribute('lang', toggleLangAttr);
//         toggle.setAttribute('lang', currentLang);
//       }

//       if (+version === 2) {
//         const activeLangLink = wrapper?.querySelector(`[lang="${currentLang}"]`) as HTMLLinkElement;
//         const toggleTxt = toggle?.querySelector('[weglot-element="active-lang-text"]')?.textContent;
//         const activeLangLinkTxt = activeLangLink?.textContent;

//         toggle.querySelector('[weglot-element="active-lang-text"]').textContent = activeLangLinkTxt;
//         activeLangLink.textContent = toggleTxt;

//         const lang = activeLangLink?.getAttribute('lang') as string;
//         const toggleLang = toggle?.getAttribute('lang') as string;

//         toggle?.setAttribute('lang', lang);
//         activeLangLink?.setAttribute('lang', toggleLang);
//       }
//     }
//   });
// }
