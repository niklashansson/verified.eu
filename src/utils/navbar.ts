import { closeDropdown } from '@finsweet/ts-utils';

export const navbar = function () {
  if (window.innerWidth >= 992) return;

  const component = document.querySelector(
    '[verified-navbar-element="component"]'
  ) as HTMLDivElement;
  const menu = document.querySelector('[verified-navbar-element="menu"]') as HTMLMenuElement;
  const button = document.querySelector('[verified-navbar-element="button"]') as HTMLButtonElement;
  const dropdownCloseBtns = document.querySelectorAll(
    '[verified-navbar-element="close-dropdown"]'
  ) as NodeListOf<HTMLButtonElement>;
  if (!menu || !component || !dropdownCloseBtns || !button) return;

  setMenuHeight(window.innerHeight);

  function setMenuHeight(height: number) {
    // 1) get banner height
    const bannerHeight = getBannerHeight();

    // 2) set menu height to screen - banner height
    menu.style.height = `${height - bannerHeight}px`;
  }

  function getBannerHeight() {
    return component?.clientHeight;
  }

  button?.addEventListener('click', () => {
    setMenuHeight(window.innerHeight);
  });

  window.addEventListener('resize', (e) => {
    const screenHeight = e.currentTarget.innerHeight;
    setMenuHeight(screenHeight);
  });

  // Close dropdown when return link is clicked
  dropdownCloseBtns.forEach((link) => {
    link.addEventListener('click', (e) => {
      const dropdown = link.closest('.w-dropdown') as HTMLDivElement;
      e.preventDefault();
      closeDropdown(dropdown);
      // window.Webflow.require('dropdown').preview();
      // window.Webflow.require('dropdown').design();
    });
  });
};
