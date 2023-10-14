export const adjustMenuHeight = (menu: HTMLElement, component: HTMLElement) => {
  const bannerHeight = component.clientHeight;
  // console.log(`translateY(${-bannerHeight}px)`);
  menu.style.height = `${window.innerHeight - bannerHeight}px`;
  // menu.style.paddingTop = `${bannerHeight}px`;
  // menu.style.marginTop = `-${bannerHeight}px`;
};
