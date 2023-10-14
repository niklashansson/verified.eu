import { fetchItems } from '$utils/fetchItems';
import { fetchResources } from '$utils/fetchResources';
import { setFormMarkets } from '$utils/formMarkets';
import { localization } from '$utils/localization';
import { navbar } from '$utils/navbar/navbar';
import { sortResources } from '$utils/sortResources';
import { globalSwiper } from '$utils/swiper';
import { videojsConfig } from '$utils/videojs/videojs';

window.Webflow ||= [];
window.Webflow.push(() => {
  videojsConfig();
  localization();
  setFormMarkets();
  fetchItems();
  globalSwiper();
  navbar();
  sortResources();
  fetchResources();
});

/* <script defer src="https://cdn.jsdelivr.net/gh/niklashansson/verified.eu@226422bfd04da234eb0e0fbc1a85e6fb76063912/dist/index.min.js"></script> */

/* <link href="https://cdn.jsdelivr.net/gh/niklashansson/verified.eu@f401be0b356720438be03e7ec41c2e54991a858b/dist/index.css" rel="stylesheet" type="text/css"/> */
