export function renderHeroSlider() {
  const heroData = [
    {
      image: '../../src/images/travel-3.jpg',
      title: 'Ruta por Australia',
      text: 'Si te va la aventura, no te lo puedes perder',
      button: 'Más información',
    },
    {
      image: '../../src/images/travel-2.jpg',
      title: 'Viaja por viajar',
      text: 'Descubre nuevos destinos',
      button: 'Más información',
    },
    {
      image: '../../src/images/travel-1.jpg',
      title: 'Los mejores destinos',
      text: 'Si te va la aventura, no te lo puedes perder',
      button: 'Más información',
    },
  ];

  const section = document.createElement('section');
  section.className = 'hero';

  section.innerHTML = `
    <div class="hero__slider">
      ${heroData.map((item, i) => `
        <div class="hero__slide${i === 0 ? ' active' : ''}">
          <img src="${item.image}" alt="Slide ${i + 1}" class="hero__image">
          <section class="hero__info">
            <div class="hero__title">${item.title}</div>
            <span class="hero__text">${item.text}</span>
            <button class="button button--primary">${item.button}</button>
          </section>
        </div>`).join('')}
      <button class="hero__btn hero__btn--prev">&#9664;</button>
      <button class="hero__btn hero__btn--next">&#9654;</button>
      <div class="hero__dots">
        ${heroData.map((_, i) => `<span class="hero__dot${i === 0 ? ' active' : ''}" data-index="${i}"></span>`).join('')}
      </div>
    </div>
  `;

  document.body.prepend(section);

  const slides = section.querySelectorAll('.hero__slide');
  const dots = section.querySelectorAll('.hero__dot');
  let current = 0;

  function updateSlider(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
      dots[i].classList.toggle('active', i === index);
    });
    current = index;
  }

  section.querySelector('.hero__btn--prev').addEventListener('click', () => {
    const next = (current - 1 + slides.length) % slides.length;
    updateSlider(next);
  });

  section.querySelector('.hero__btn--next').addEventListener('click', () => {
    const next = (current + 1) % slides.length;
    updateSlider(next);
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => updateSlider(Number(dot.dataset.index)));
  });

    document.getElementById('hero').appendChild(section);
}
