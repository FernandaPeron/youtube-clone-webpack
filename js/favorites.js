import createItem from './item.js';
import carousel from './carousel.js';
import rammstein from '../img/thumbnail/favorites/rammstein.jpg';
import metallica from '../img/thumbnail/favorites/metallica.jpg';
import auraVortex from '../img/thumbnail/favorites/aura-vortex.jpg';
import blazy from '../img/thumbnail/favorites/blazy.jpg';
import eminem from '../img/thumbnail/favorites/eminem.jpg';
import alok from '../img/thumbnail/favorites/alok.jpg';

const artists = [
  {
    thumbnail: rammstein,
    title: 'Rammstein',
    subtitle: '5,68 mi de inscritos',
  },
  {
    thumbnail: metallica,
    title: 'Metallica',
    subtitle: '7,44 mi de inscritos',
  },
  {
    thumbnail: auraVortex,
    title: 'Aura Vortex',
    subtitle: '5,82 mil inscritos',
  },
  {
    thumbnail: blazy,
    title: 'Blazy',
    subtitle: '53,3 mil inscritos',
  },
  {
    thumbnail: eminem,
    title: 'Eminem',
    subtitle: '48,3 mi de inscritos',
  },
  {
    thumbnail: alok,
    title: 'Alok',
    subtitle: '6,05 mi de inscritos',
  },
];

function initCarousel() {
  const prevBtn = document.querySelector('.home__prev-btn.favorites') || {};
  const nextBtn = document.querySelector('.home__next-btn.favorites') || {};
  const wrapper = document.querySelector('.home__favorites-wrapper') || {};
  const content = document.querySelector('.home__favorites-content') || {};

  carousel.init(prevBtn, nextBtn, wrapper, content);
}

function createFavoritesOnDOM() {
  const carouselWrapper = document.querySelector('.home__favorites-content') || {};
  artists.forEach((artist) => {
    const artistDiv = createItem(artist);
    artistDiv.classList.add('artist');
    carouselWrapper.appendChild(artistDiv);
  });
}

export default {
  init() {
    createFavoritesOnDOM();
    initCarousel();
  },
};
