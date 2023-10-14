import './navbar.css';

import { closeDropdown, NAVBAR_CSS_CLASSES } from '@finsweet/ts-utils';

import { navbarScroll } from './navbarScroll';
import { adjustMenuHeight } from './navbarUtilities';
navbarScroll();

export const navbar = function () {
  if (window.innerWidth >= 992) return;

  const component = document.querySelector(
    '[verified-navbar-element="component"]'
  ) as HTMLDivElement;
  const menu = document.querySelector('[verified-navbar-element="menu"]') as HTMLMenuElement;
  const toggleButton = document.querySelector(
    '[verified-navbar-element="button"]'
  ) as HTMLButtonElement;
  const overlay = component.querySelector('.w-nav-overlay');
  const dropdownCloseBtns = document.querySelectorAll(
    '[verified-navbar-element="close-dropdown"]'
  ) as NodeListOf<HTMLButtonElement>;
  if (!menu || !component || !toggleButton) return;

  // initial adjustment
  adjustMenuHeight(menu, component);

  toggleButton.addEventListener('click', () => adjustMenuHeight(menu, component));

  // close dropdown when return link is clicked
  dropdownCloseBtns.forEach((link) => {
    link.addEventListener('click', (e) => {
      const dropdown = link.closest('.w-dropdown') as HTMLDivElement;
      e.preventDefault();
      closeDropdown(dropdown);
    });
  });
};
