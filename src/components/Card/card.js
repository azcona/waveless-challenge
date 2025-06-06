export function renderCard(container, data) {
  const card = document.createElement('article');
  card.className = 'card';

  card.innerHTML = `
    <span class="badge">${data.badge}</span>
    <div class="card__top" style="background-image: url(${data.image})" alt="${data.title}"></div>
    <section class="card__body">
      <p class="card__subtitle">${data.subtitle}</p>
      <h3 class="card__title">${data.title}</h3>
    </section>
    <div class="card__footer">
        <div class="card__price">
          <span class="price__top">${data.starting}</span>
          <span class="price">${data.price}</span>
          <a href="#" class="price__bottom">${data.more}</span>
        </div>
        <button class="button button--outline">Reservar</button>
    </div>
  `;
  container.appendChild(card);
}
