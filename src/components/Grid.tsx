export default function Grid({
  rows,
  cols,
  children,
}: {
  rows: number
  cols: number
  children: React.ReactNode
}) {
  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${cols}, 20px)`,
        gridTemplateRows: `repeat(${rows}, 20px)`,
      }}
    >
      {children}
    </div>
  )
}
