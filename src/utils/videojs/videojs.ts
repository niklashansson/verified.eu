import './videojs.css';

import videojs from 'video.js';
import type Player from 'video.js/dist/types/player';

export const videojsConfig = function () {
  const instances = document.querySelectorAll(
    '[video-player-element="instance"]'
  ) as NodeListOf<HTMLDivElement>;
  if (!instances.length) return;

  instances.forEach((instance) => {
    const playerEl = instance.querySelector('[video-player-element="video"]');
    if (!playerEl) return;
    const player: Player = videojs(playerEl);
    // instance.classList.add('vjs-custom-pause');

    console.log(player);

    player.on('play', () => {
      instance.classList.add('vjs-custom-play');
      instance.classList.remove('vjs-custom-pause');
    });
    player.on('pause', () => {
      // if (player.isS) return;
      instance.classList.add('vjs-custom-pause');
      instance.classList.remove('vjs-custom-play');
    });
  });
};
