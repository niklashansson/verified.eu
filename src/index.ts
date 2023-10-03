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

/* <script defer src="https://cdn.jsdelivr.net/gh/niklashansson/verified.eu@caee19494f5ab65857f87036ceba280d8e6d96d2/dist/index.min.js"></script> */
