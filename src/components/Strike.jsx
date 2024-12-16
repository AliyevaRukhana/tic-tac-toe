function Strike({ strikeClass }) {
    return <div className={`strike ${strikeClass}`}></div>; // Render div with dynamic strike style
}

export default Strike; // Export for use in other components