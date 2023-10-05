import { fetchItems } from '$utils/fetchItems';
import { fetchResources } from '$utils/fetchResources';
import { setFormMarkets } from '$utils/formMarkets';
import { navbar } from '$utils/navbar';
import { sortResources } from '$utils/sortResources';
import { globalSwiper } from '$utils/swiper';
import { vimeoPlayer } from '$utils/vimeoPlayer';
import { weglot } from '$utils/weglot';

window.Webflow ||= [];
window.Webflow.push(() => {
  // weglot();
  setFormMarkets();
  fetchItems();
  globalSwiper();
  navbar();
  sortResources();
  fetchResources();
  vimeoPlayer();
});

/* <script defer src="https://cdn.jsdelivr.net/gh/niklashansson/verified.eu@0093e33ffaef9fa5bf739258bd5bf492e63a0e95/dist/index.min.js"></script> */
