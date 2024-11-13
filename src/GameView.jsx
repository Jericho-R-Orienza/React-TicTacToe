import React, { useEffect, useRef } from 'react';
import { initGame } from './TTT'; // Ensure the path is correct based on your project structure

const GameView = () => {
    const gameContainerRef = useRef(null);

    useEffect(() => {
        if (gameContainerRef.current) {
            initGame(gameContainerRef.current);
        }
    }, []);

    return (
      <div>
        <div ref={gameContainerRef} style={{ width: '100%', height: '100%' }}>
            {/* This div is the container where the Tic-Tac-Toe game will be rendered */}
        </div>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <input type="text" placeholder="Type something..." style={{ width: '80%', padding: '10px' }} />
        </div>
      </div>
    );
}

export default GameView;



