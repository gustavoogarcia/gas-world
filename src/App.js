import { useCallback, useEffect, useState } from 'react';
import Screen from './Components/Screen';
import Player from './Components/Player';
import socketIOClient from "socket.io-client";
const socket = socketIOClient('http://localhost:3001/');

export default function Home() {
  const [playerId, setPlayerId] = useState();
  const [gameState, setGameState] = useState();
  
  useEffect(() => {
    socket.on("connect", () => {})
    socket.on('gameInitiated', ({ id, gameState }) => { setPlayerId(id); setGameState(gameState); })
    socket.on('playerAdded', ({ gameState }) => setGameState(gameState));
    socket.on('playerMoved', ({ gameState }) => setGameState(gameState));
  }, []);

  const onKeyDown = useCallback(({ key }) => {
    socket.emit('playerMove', { key, playerId })
  }, [playerId]);

  return (
    <>
      { gameState && (
        <Screen tabIndex={1} onKeyDown={onKeyDown} {...gameState.screen} >
          { Object.values(gameState.players).map(({id, ...player}) => <Player key={id} {...player} />) }
        </Screen>
      )}
    </>
  )
}
