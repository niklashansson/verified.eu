export const navbar = function () {
  /* Utility functions */
  function closeWebflowDropdown(webflowDropdown) {
    const toggleEl = webflowDropdown.firstChild;

    webflowDropdown.classList.remove('w--open');
  }

  function closeNavDropdown(link) {
    const webflowDropdown = link?.closest('nav');
    closeWebflowDropdown(webflowDropdown);
  }

  // Event listeners //
  const closeDropdownLinks = document.querySelectorAll('[navbar-element="closedropdown"]');

  closeDropdownLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      closeNavDropdown(link);
      console.log(link);
    });
  });
};
