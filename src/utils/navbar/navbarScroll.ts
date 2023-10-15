export const navbarScroll = () => {
  const navbar = document.querySelector('[verified-navbar-element="component"]');
  if (!navbar) return;

  const navbarClasses = navbar.classList;
  const isMode2 = navbar.getAttribute('navbar-mode') === '2';
  let lastScrollTop = 0;

  function throttleFunc(fn: any, wait: number) {
    let time = Date.now();
    let timeout: any = null;

    return function () {
      const now = Date.now();
      const remaining = wait - (now - time);

      const later = () => {
        timeout = null;
        fn();
        time = now;
      };

      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        fn();
        time = now;
      } else if (!timeout) {
        timeout = setTimeout(later, remaining);
      }
    };
  }

  function checkScrollDirection() {
    const st = window.scrollY;

    if (st > 16) {
      navbarClasses.add('is-bg');
      if (isMode2) {
        navbar?.setAttribute('navbar-mode', '1'); // change to mode 1
      }
    } else if (st <= 16) {
      navbarClasses.remove('is-bg');
      if (isMode2) {
        navbar?.setAttribute('navbar-mode', '2'); // change to mode 2
      }
    }

    if (st > lastScrollTop && st > 200) {
      navbarClasses.add('is-hidden');
      navbarClasses.remove('is-visible');
    } else if (st < lastScrollTop) {
      navbarClasses.add('is-visible');
      navbarClasses.remove('is-hidden');
    }

    lastScrollTop = st <= 0 ? 0 : st;
  }

  function checkBreakpoint() {}

  const throttledScroll = throttleFunc(checkScrollDirection, 100);
  const throttledResize = throttleFunc(checkBreakpoint, 100);
  window.addEventListener('scroll', throttledScroll);
  window.addEventListener('resize', throttledResize); // check breakpoint on resize

  checkScrollDirection();

  // Return a function to remove the event listener (useful for component unmounting or cleanup)
  return () => {
    window.removeEventListener('scroll', throttledScroll);
  };
};
