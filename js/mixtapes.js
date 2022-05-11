import createItem from './item.js';
import carousel from './carousel.js';
import replayMix from '../img/thumbnail/mixtapes/replay-mix.jpg';
import superMix from '../img/thumbnail/mixtapes/supermix.jpg';
import mix1 from '../img/thumbnail/mixtapes/mix1.jpg';
import mix2 from '../img/thumbnail/mixtapes/mix2.jpg';
import mix3 from '../img/thumbnail/mixtapes/mix3.jpg';
import mix4 from '../img/thumbnail/mixtapes/mix4.jpg';
import mix5 from '../img/thumbnail/mixtapes/mix5.jpg';

const mixtapes = [
  {
    thumbnail: replayMix,
    title: 'Replay mix',
    subtitle: ['Phaxe', 'Alpha Portal', 'Emok', 'Ranji'],
  },
  {
    thumbnail: superMix,
    title: 'Minha supermix',
    subtitle: ['Mad Tribe', 'Alok', 'Rave & Crave', 'Ümmet Özcan'],
  },
  {
    thumbnail: mix1,
    title: 'Minha mix 1',
    subtitle: ['Rammstein', 'Lindemann', 'Megadeth', 'Metallica'],
  },
  {
    thumbnail: mix2,
    title: 'Minha mix 2',
    subtitle: ['Astrix', 'Mandragora', 'Special M', 'Bliss', 'Infected Mushroom'],
  },
  {
    thumbnail: mix3,
    title: 'Minha mix 3',
    subtitle: ['Imagine Dragons', 'Travis Scott', 'Benny Benassi', 'Linkin Park'],
  },
  {
    thumbnail: mix4,
    title: 'Minha mix 4',
    subtitle: ['Alpha Portal', 'Phaxe', 'Emok'],
  },
  {
    thumbnail: mix5,
    title: 'Minha mix 5',
    subtitle: ['Alok', 'System Of A Down', 'SAINt JHN', 'Aaron Smith'],
  },
];

function initCarousel() {
  const prevBtn = document.querySelector('.home__prev-btn.mixtapes') || {};
  const nextBtn = document.querySelector('.home__next-btn.mixtapes') || {};
  const wrapper = document.querySelector('.home__mixtapes-wrapper') || {};
  const content = document.querySelector('.home__mixtapes-content') || {};

  carousel.init(prevBtn, nextBtn, wrapper, content);
}

function createMixtapesOnDOM() {
  const carouselWrapper = document.querySelector('.home__mixtapes-content') || {};
  mixtapes.forEach((album) => {
    const albumDiv = createItem(album);
    carouselWrapper.appendChild(albumDiv);
  });
}

export default {
  init() {
    createMixtapesOnDOM();
    initCarousel();
  },
};
