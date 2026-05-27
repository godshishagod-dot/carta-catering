fetch('menu.json')
  .then(response => response.json())
  .then(data => {

    const container = document.getElementById('vapes-container');

    data.vapes.forEach(category => {

      const section = document.createElement('div');
      section.classList.add('vape-category');

      section.innerHTML = `
        <h3 class="vape-title">
          ${category.category} — ${category.price}
        </h3>

        <div class="vape-grid">
          ${category.items.map(item => `
            <div class="vape-item">
              ${item}
            </div>
          `).join('')}
        </div>
      `;

      container.appendChild(section);

    });

  });
