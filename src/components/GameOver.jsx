import GameState from "./GameState"; // Import the GameState constants to handle different game states

function GameOver({ gameState }) {
    switch (gameState) {
        // If the game is still in progress, return nothing
        case GameState.inProgress:
            return <></>;

        // If player O wins, display "O Wins"
        case GameState.playerOWins:
            return <div className="game-over">O Wins</div>;
        
        // If player X wins, display "X Wins"
        case GameState.playerXWins:
            return <div className="game-over">X Wins</div>;

        // If the game is a draw, display "Draw"
        case GameState.draw:
            return <div className="game-over">Draw</div>;

        // Default case (in case of invalid state) returns nothing
        default:
            return <></>;
    }
}

 // Export the GameOver component
export default GameOver;