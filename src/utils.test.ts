import { createInitialCells } from './utils'

describe('createInitialCells', () => {
  it('should create an array of CellInfo objects', () => {
    const gridRows = 2
    const gridColumns = 3
    const cells = createInitialCells(gridRows, gridColumns)

    expect(cells).toHaveLength(gridRows * gridColumns)

    cells.forEach((cell) => {
      expect(cell).toHaveProperty('isAlive')
    })
  })
})
