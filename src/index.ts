import { fetchItems } from '$utils/fetchItems';
import { fetchResources } from '$utils/fetchResources';
import { setFormMarkets } from '$utils/formMarkets';
import { localization } from '$utils/localization';
import { navbar } from '$utils/navbar';
import { resources } from '$utils/resources';
import { sortResources } from '$utils/sortResources';
import { globalSwiper } from '$utils/swiper';
import { vimeoPlayer } from '$utils/vimeoPlayer';

window.Webflow ||= [];
window.Webflow.push(() => {
  // resources();
  localization();
  setFormMarkets();
  fetchItems();
  globalSwiper();
  navbar();
  sortResources();
  fetchResources();
  vimeoPlayer();
});

/* <script defer src="https://cdn.jsdelivr.net/gh/niklashansson/verified.eu@6e51c816db2245f1558cef2dc537046f5394144f/dist/index.min.js"></script> */
