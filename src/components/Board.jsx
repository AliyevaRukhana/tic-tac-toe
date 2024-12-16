import Strike from "./Strike";  // Import Strike component for displaying the winning line
import Tile from "./Tile"; // Import Tile component to display individual cells on the board

function Board({ tiles, onTileClick, playerTurn, strikeClass }) {
    return (
    <div className="board">
        <Tile 
            playerTurn={playerTurn} // Pass current player's turn
            onClick={()=> onTileClick(0)} // Click handler for tile 0
            value={tiles[0]} // Value for tile 0 (X or O)
            className="right-border bottom-border" // Classes for the tile's border styling
        />

        <Tile 
            playerTurn={playerTurn}
            onClick={()=> onTileClick(1)} 
            value={tiles[1]} 
            className="right-border bottom-border" 
        />

        <Tile 
            playerTurn={playerTurn}
            onClick={()=> onTileClick(2)} 
            value={tiles[2]} 
            className=" bottom-border"
        />

        <Tile 
            playerTurn={playerTurn}
            onClick={()=> onTileClick(3)} 
            value={tiles[3]} 
            className="right-border bottom-border" 
        />

        <Tile 
            playerTurn={playerTurn}
            onClick={()=> onTileClick(4)} 
            value={tiles[4]} 
            className="right-border bottom-border" 
        />

        <Tile 
            playerTurn={playerTurn}
            onClick={()=> onTileClick(5)} 
            value={tiles[5]} 
            className=" bottom-border" 
        />

        <Tile 
            playerTurn={playerTurn}
            onClick={()=> onTileClick(6)} 
            value={tiles[6]} 
            className="right-border" 
        />

        <Tile 
            playerTurn={playerTurn}
            onClick={()=> onTileClick(7)} 
            value={tiles[7]} 
            className="right-border" 
        />

        <Tile 
            playerTurn={playerTurn}
            onClick={()=> onTileClick(8)}
            value={tiles[8]} 
        />

        <Strike strikeClass={strikeClass} />
    </div>
    );
}

// Export the Board component
export default Board; 