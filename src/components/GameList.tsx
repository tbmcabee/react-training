import React from 'react'

interface Props {
    gameList: object[];
}

const GameList = ({gameList}: Props) => {
  return (
    <>
    <div>GameList</div>
    <ul>
        {gameList.map((player, id) => <li key={id}>{player}</li>)}
    </ul>
    </>
    
    
  )
}

export default GameList