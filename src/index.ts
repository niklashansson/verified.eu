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
  weglot();
  setFormMarkets();
  fetchItems();
  globalSwiper();
  navbar();
  sortResources();
  fetchResources();
  vimeoPlayer();
});

/* <script defer src="https://cdn.jsdelivr.net/gh/niklashansson/verified.eu@52885d3e574ff12509a53b529163110030c80032/dist/index.min.js"></script> */
