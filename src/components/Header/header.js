export function renderHeader(data) {
  const header = document.createElement('header');
  header.className = 'header';

  header.innerHTML = `
    <nav class="nav">
      <img src="src/images/header-logo.svg" alt="header-logo" />
      <ul class="nav__list">
        <li class="nav__item">
          <a href="#" class="nav__link">
            <i data-lucide="mountain"></i>
            <span>${data.nav1}</span>
          </a>
        </li>
        <li class="nav__item">
          <a href="#" class="nav__link">
            <i data-lucide="globe"></i>
            <span>${data.nav2}</span>
          </a>
        </li>
        <li class="nav__item">
          <a href="#" class="nav__link">
            <i data-lucide="hotel"></i>
            <span>${data.nav3}</span>
          </a>
        </li>
        <li class="nav__item">
          <a href="#" class="nav__link">
            <i data-lucide="info"></i>
            <span>${data.nav4}</span>
          </a>
        </li>
      </ul>
      <button class="button button--secondary">Reserva</button>
    </nav>
  `;

  document.getElementById('header').appendChild(header);
  lucide.createIcons();
}
