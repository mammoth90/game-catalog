import GameCard from '@/entities/GameCard'

const GameList = ({ games }) => {
  return (
    <>
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </>
  )
}

export default GameList
