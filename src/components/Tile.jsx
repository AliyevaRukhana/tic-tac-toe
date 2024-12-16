function Tile({ className, value, onClick, playerTurn }) {
    let hoverClass = null; // Initialize hoverClass to null
    if(value == null && playerTurn != null) { // If tile is empty and a player is set
        hoverClass = `${playerTurn.toLowerCase()}-hover`; // Set hover class based on the current player's turn
    }
    return (
        <div onClick={onClick} className={`tile ${className} ${hoverClass} `}>
            {value}
        </div>
    );
}

// Export Tile component for use elsewhere
export default Tile;