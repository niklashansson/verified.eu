export const demoModal = function () {
  // set locale on hidden input on Demo Form 1 modal
  // get locale from first query path
  const locale: string = getLocale();

  // update hidden input with name "market"
  setFormLocale(locale);

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

function getLocale() {
  const locPath = window.location.pathname.slice(1, 3);
  let localization = '';

  if (locPath === 'no') localization = 'Norway';
  if (locPath === 'sv') localization = 'Sweden';
  if (locPath === 'fi') localization = 'Finland';
  if (locPath !== 'no' && locPath !== 'sv' && locPath !== 'fi') localization = 'International';

  return localization;
}

function setFormLocale(locale: string) {
  const hiddenLocaleField = document.querySelector('input[name="market"]') as HTMLInputElement;
  if (!hiddenLocaleField) return;

  hiddenLocaleField.value = locale;
}
