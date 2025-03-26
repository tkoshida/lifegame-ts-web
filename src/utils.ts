import type { CellInfo } from './types'

export const createInitialCells = (
  gridRows: number,
  gridColumns: number
): CellInfo[] => {
  return Array.from({ length: gridRows * gridColumns }, () => ({
    isAlive: Math.random() < 0.5,
  }))
}
