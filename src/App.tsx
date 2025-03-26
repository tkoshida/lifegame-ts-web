import { useCallback, useEffect, useState } from 'react'
import './App.css'
import Grid from './components/Grid'
import Cell from './components/Cell'
import type { CellInfo } from './types'
import { createInitialCells } from './utils'

const gridRows = parseInt(import.meta.env.VITE_GRID_ROWS || '8', 10)
const gridColumns = parseInt(import.meta.env.VITE_GRID_COLUMNS || '8', 10)

function App() {
  const [cells, setCells] = useState<CellInfo[]>([])

  const handleNext = useCallback(() => {
    console.warn(
      'TODO: Implement the logic to calculate the next generation of cells'
    )
  }, [])

  const handleReset = useCallback(() => {
    console.warn(
      'TODO: Implement the logic to reset the cells to their initial state'
    )
  }, [])

  useEffect(() => {
    setCells(createInitialCells(gridRows, gridColumns))
  }, [])

  return (
    <>
      <Grid rows={gridRows} cols={gridColumns}>
        {cells.map((cell, i) => (
          <Cell key={i} isAlive={cell.isAlive} />
        ))}
      </Grid>
      <div className="controls">
        <button onClick={handleNext}>Next</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  )
}

export default App
