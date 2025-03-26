export default function Cell({ isAlive }: { isAlive: boolean }) {
  return <div className={`cell ${isAlive ? 'alive' : 'dead'}`} />
}
