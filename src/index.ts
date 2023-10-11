import { fetchItems } from '$utils/fetchItems';
import { fetchResources } from '$utils/fetchResources';
import { setFormMarkets } from '$utils/formMarkets';
import { localization } from '$utils/localization';
import { navbar } from '$utils/navbar';
import { sortResources } from '$utils/sortResources';
import { globalSwiper } from '$utils/swiper';
import { vimeoPlayer } from '$utils/vimeoPlayer';
import { weglot } from '$utils/weglot';

window.Webflow ||= [];
window.Webflow.push(() => {
  // weglot();
  localization();
  setFormMarkets();
  fetchItems();
  globalSwiper();
  navbar();
  sortResources();
  fetchResources();
  vimeoPlayer();
});

/* <script defer src="https://cdn.jsdelivr.net/gh/niklashansson/verified.eu@1e0d4ee346091c17fd14736d7010970c3c4a714d/dist/index.min.js"></script> */
