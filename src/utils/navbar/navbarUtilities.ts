export const adjustMenuHeight = (menu: HTMLElement, component: HTMLElement) => {
  const bannerHeight = component.clientHeight;
  menu.style.height = `${window.innerHeight}px`;
  menu.style.paddingTop = `${bannerHeight}px`;
};
