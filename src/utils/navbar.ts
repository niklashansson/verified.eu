export const navbar = function () {
  const closeDropdownLinks = document.querySelectorAll('[navbar-element="closedropdown"]');

  function closeWebflowDropdown(webflowDropdown) {
    if (!webflowDropdown) return;
    webflowDropdown.classList.remove('w--open');
  }

  function closeNavDropdown(link: Element) {
    const webflowDropdown = link?.closest('nav');
    closeWebflowDropdown(webflowDropdown);
  }

  closeDropdownLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      closeNavDropdown(link);
    });
  });
};
