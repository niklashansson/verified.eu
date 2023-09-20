export const demoModal = function () {
  const buttons = document.querySelectorAll('a[href="#book-demo"]');
  const modal = document.querySelector('[verified-demo-element="modal"]');
  if (!buttons || !modal) return;

  const closeButtons = modal.querySelectorAll('[verified-demo-element="close-button"]');
  if (!closeButtons) return;

  buttons.forEach((btn) => {
    btn.setAttribute('href', '#/');

    btn.addEventListener('click', (e) => {
      modal.classList.add('is-active');
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      modal.classList.remove('is-active');
    });
  });
};
