const gridSizeN = import.meta.env.VITE_GRID_SIZE_N || 8
const gridSizeM = import.meta.env.VITE_GRID_SIZE_M || 8

const nextButton = document.getElementById('next')
const resetButton = document.getElementById('reset')
const gridContainer = document.getElementById('grid-container')

if (nextButton) {
  nextButton.addEventListener('click', () => {
    // TODO implement next generation
  })
}

if (resetButton) {
  resetButton.addEventListener('click', () => {
    // TODO implement reset
  })
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function isActive(row: number, col: number) {
  // TODO implement isActive for the given row and col
  return Math.random() > 0.5
}

function renderGrid() {
  if (!gridContainer) {
    return
  }

  gridContainer.innerHTML = ''
  gridContainer.style.gridTemplateColumns = `repeat(${gridSizeM}, 20px)`
  gridContainer.style.gridTemplateRows = `repeat(${gridSizeN}, 20px)`

  for (let row = 0; row < gridSizeN; row++) {
    for (let col = 0; col < gridSizeM; col++) {
      const cell = document.createElement('div')
      cell.className = isActive(row, col) ? 'cell alive' : 'cell dead'
      gridContainer.appendChild(cell)
    }
  }
}

renderGrid()
