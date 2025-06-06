import { renderCard } from '../components/Card/card.js';
import { renderHeader } from '../components/Header/header.js';
import { renderHeroSlider } from '../components/Hero/hero.js';
import { renderFilterSidebar } from '../components/FilterSidebar/filterSidebar.js';


const contentArea = document.getElementById('content-area');
const mainTitle = document.getElementById('main-title');
const subTitle = document.getElementById('subtitle');

fetch('../../dist/data/landing.json')
  .then(res => res.json())
  .then(data => {
    renderHeader(data); 
    renderHeroSlider(); 
    renderFilterSidebar();

    mainTitle.textContent = data.mainTitle;
    subTitle.textContent = data.subTitle;
  });

fetch('../../dist/data/content.json')
  .then(res => res.json())
  .then(cards => {
    cards.forEach(card => renderCard(contentArea, card));
  })
  .catch(err => console.error('Error cargando datos:', err));
