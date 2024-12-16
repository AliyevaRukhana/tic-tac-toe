import GameState from "./GameState"; // Import the GameState constants to check the game status

function Reset({ gameState, onReset }) { // "gameState" determines the current game state, "onReset" is the function to reset the game
    if (gameState === GameState.inProgress) { // If the game is still in progress, don't show the reset button
        return; // Return nothing if the game is still ongoing
    }
    return ( // If the game has ended (win or draw), render the reset button
        <button onClick={onReset} className="reset-button"> 
            Play Again
        </button>
    );
}

export default Reset; // Export the Reset component to use it in other parts of the app
