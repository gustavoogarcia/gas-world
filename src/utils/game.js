
export const acceptedMoves = { 
  ArrowUp: ({ player }) => ({ y: Math.max(player.y - 20, 0), x: player.x }), 
  ArrowDown: ({ player, screen }) => ({ y: player.y = Math.min(player.y + 20, screen.y - 20), x: player.x }),
  ArrowLeft: ({ player }) => ({ x: player.x = Math.max(player.x - 20, 0), y: player.y }),
  ArrowRight: ({ player, screen }) =>  ({ x: player.x = Math.min(player.x + 20, screen.x - 20), y: player.y }) 
};

export const movePlayer = ({i, nextPlayerPosition, setGameState }) => {  
  setGameState((oldState) => { 
    const newState = { ...oldState }; 
    newState.players[i] = { ...newState.players[i], ...nextPlayerPosition };
    return newState; 
  })
}

export const checkCollision = ({ nextPlayerPosition, gameState: { fruits }, setGameState }) => {
  const collisionFruitIndex = fruits?.findIndex((fruit) => nextPlayerPosition?.x === fruit.x && nextPlayerPosition?.y === fruit.y)
  if(collisionFruitIndex !== -1) { removeFruit({ i: collisionFruitIndex, setGameState }) };
}

export const addPlayer = ({ player, setGameState }) => {  
  setGameState((oldState) => { 
    const newState = { ...oldState }; 
    newState.players.push(player);
    return newState; 
  })
}

export const addFruit = ({ fruit, setGameState }) => {  
  setGameState((oldState) => { 
    const newState = { ...oldState }; 
    newState.fruits.push(fruit);
    return newState; 
  })
}

export const removePlayer = ({ i, setGameState }) => {  
  setGameState((oldState) => { 
    const newState = { ...oldState }; 
    delete newState.players[i];
    return newState; 
  })
}

export const removeFruit = ({ i, setGameState }) => {  
  setGameState((oldState) => { 
    const newState = { ...oldState }; 
    newState.fruits.splice(i, 1);
    return newState; 
  })
}