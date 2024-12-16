const GameState = { // Define an object to store different game states
    playerXWins: 0, // State indicating Player X has won
    playerOWins: 1, // State indicating Player O has won
    draw: 2, // State indicating the game is a draw
    inProgress: 3, // State indicating the game is still ongoing
};

export default GameState; // Export the GameState object to be used in other components
