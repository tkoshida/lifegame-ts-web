const gridSizeN = import.meta.env.VITE_GRID_SIZE_N || 8;
const gridSizeM = import.meta.env.VITE_GRID_SIZE_M || 8;

const nextButton = document.getElementById('next');
const resetButton = document.getElementById('reset');
const gridContainer = document.getElementById('grid-container');

if (nextButton) {
  nextButton.addEventListener('click', () => {
    // do something
  });
}

if (resetButton) {
  resetButton.addEventListener('click', () => {
    // do something
  });
}

function renderGrid() {
  console.log(gridContainer);
  if (gridContainer) {
    gridContainer.innerHTML = '';
    gridContainer.style.gridTemplateColumns = `repeat(${gridSizeM}, 20px)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSizeN}, 20px)`;

    for (let row = 0; row < gridSizeN; row++) {
      for (let col = 0; col < gridSizeM; col++) {
        const cell = document.createElement('div');
        let isActive = Math.random() > 0.5;
        cell.className = isActive ? 'cell alive' : 'cell dead';
        gridContainer.appendChild(cell);
      }
    }
  }
}

renderGrid();
