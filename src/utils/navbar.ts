export const navbar = function () {
  if (window.innerWidth >= 992) return;

  const menuEl: HTMLDivElement = document.querySelector('.navbar_menu_wrap');
  const bannerEl = document.querySelector('.navbar--bg1');
  const button = document.querySelector('.navbar_button');
  const dropdownCloseBtns = document.querySelectorAll('.navbar_dd_link_close');
  if (!menuEl) return;

  setMenuHeight(window.innerHeight);

  function setMenuHeight(height: number) {
    // 1) get banner height
    const bannerHeight = getBannerHeight();

    // 2) set menu height to screen - banner height
    menuEl.style.height = `${height - bannerHeight}px`;
  }

  function getBannerHeight() {
    if (!bannerEl) return;

    return bannerEl?.clientHeight;
  }

  button?.addEventListener('click', (e) => {
    setMenuHeight(window.innerHeight);
  });

  window.addEventListener('resize', (e) => {
    const screenHeight = e.currentTarget.innerHeight;
    setMenuHeight(screenHeight);
  });

  // Close dropdown when return link is clicked
  dropdownCloseBtns.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      window.Webflow.require('dropdown').preview();
      window.Webflow.require('dropdown').design();
    });
  });
};
