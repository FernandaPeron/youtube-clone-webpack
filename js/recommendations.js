import createItem from './item.js';
import carousel from './carousel.js';
import edm from '@/img/thumbnail/recommendations/edm.jpg';
import trance from '@/img/thumbnail/recommendations/trance.jpg';
import offbeat from '@/img/thumbnail/recommendations/offbeat.jpg';
import metal from '@/img/thumbnail/recommendations/metal.jpg';
import alternative from '@/img/thumbnail/recommendations/alternative.jpg';
import rap from '@/img/thumbnail/recommendations/rap.jpg';
import pop from '@/img/thumbnail/recommendations/pop.jpg';
import funk from '@/img/thumbnail/recommendations/funk.jpg';
import chill from '@/img/thumbnail/recommendations/chill.jpg';
import onRoad from '@/img/thumbnail/recommendations/on-road.jpg';

const recommendations = [
  {
    thumbnail: edm,
    title: 'EDM',
    subtitle: ['Alok', 'Cat Dealers', 'Vintage Culture', 'Chris Lake'],
  },
  {
    thumbnail: trance,
    title: 'Trance',
    subtitle: ['Mandragora', 'Infected Mushroom', 'Astrix', 'Henrique Camacho'],
  },
  {
    thumbnail: offbeat,
    title: 'Offbeat',
    subtitle: ['Phaxe', 'Querox', 'Morten Granau', 'Neelix', 'Durs'],
  },
  {
    thumbnail: metal,
    title: 'Metal',
    subtitle: ['Rammstein', 'Metallica', 'Disturbed', 'Motörhead'],
  },
  {
    thumbnail: alternative,
    title: 'Alternativa',
    subtitle: ['Young the Giant', 'Arctic Monkeys', 'Imagine Dragons', 'The Neighbourhood'],
  },
  {
    thumbnail: rap,
    title: 'Rap',
    subtitle: ['Snoop Dogg', 'Eminem', 'Dr. Dre', '2Pac', 'Busta Rhymes'],
  },
  {
    thumbnail: pop,
    title: 'Pop',
    subtitle: ['The Chainsmokers', 'Halsey', 'Lady Gaga', 'Dua Lipa', 'Lana Del Rey'],
  },
  {
    thumbnail: funk,
    title: 'Funk',
    subtitle: ['Ludmilla', 'Anitta', 'MC Kevinho', 'Lexa', 'POCAH'],
  },
  {
    thumbnail: chill,
    title: 'Chill',
    subtitle: ['SOMMA', 'Regard', 'ZHU', 'Bassnectar', 'Liquid Stranger'],
  },
  {
    thumbnail: onRoad,
    title: 'On the Road',
    subtitle: ['AC/DC', 'ZZ Top', 'Mötley Crüe', 'Ozzy Osbourne', 'The Black Keys'],
  },
];

function createRecommendationsOnDOM() {
  const carouselWrapper = document.querySelector('.home__recommendations-content') || {};
  recommendations.forEach((album) => {
    const albumDiv = createItem(album);
    carouselWrapper.appendChild(albumDiv);
  });
}

function initCarousel() {
  const prevBtn = document.querySelector('.home__prev-btn.recommendations') || {};
  const nextBtn = document.querySelector('.home__next-btn.recommendations') || {};
  const wrapper = document.querySelector('.home__recommendations-wrapper') || {};
  const content = document.querySelector('.home__recommendations-content') || {};

  carousel.init(prevBtn, nextBtn, wrapper, content);
}

export default {
  init() {
    createRecommendationsOnDOM();
    initCarousel();
  },
};
