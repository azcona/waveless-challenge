export function renderFilterSidebar() {
  fetch('../../dist/data/filter.json')
    .then(res => res.json())
    .then(filterData => {
      const sidebar = document.createElement('aside');
      sidebar.className = 'sidebar';

      sidebar.innerHTML = `
        <div class="sidebar__header">
          <h3 class="sidebar__title">Filtrar mi búsqueda</h3>
          <hr class="sidebar__divider" />
        </div>
      `;

      sidebar.innerHTML += filterData.map((section, index) => `
        <div class="filter-group">
          <button class="filter-group__item" data-index="${index}">
            <span class="flex">
              <i data-lucide="${section.icon}"></i> 
              ${section.title}
            </span>
            <i data-lucide="chevron-down"></i>
          </button>
          <div class="filter-group__options" data-visible="true">
            ${section.options.map(option => `
              <label class="checkbox">
                <input type="checkbox" name="${section.title}" value="${option}" />
                <span class="checkbox__label">${option}</span>
              </label>
            `).join('')}
          </div>
        </div>
      `).join('');

      // Interactividad para expandir/collapse
      sidebar.querySelectorAll('.filter-group__item').forEach(button => {
        button.addEventListener('click', () => {
          const options = button.nextElementSibling;
          const isVisible = options.getAttribute('data-visible') === 'true';
          options.setAttribute('data-visible', !isVisible);
          options.style.display = isVisible ? 'flex' : 'none';

          const chevronIcon = button.querySelector('[data-lucide="chevron-down"]');
          if (chevronIcon) {
            chevronIcon.classList.toggle('rotated', !isVisible);
          }
        });
      });

      // Vacía el contenedor y lo añade limpio
      const filtersContainer = document.querySelector('.filters');
      if (filtersContainer) {
        filtersContainer.innerHTML = ''; // Limpia antes de añadir
        filtersContainer.appendChild(sidebar);
      }

      lucide.createIcons();
    })
    .catch(err => console.error('Error cargando filtros:', err));
}
