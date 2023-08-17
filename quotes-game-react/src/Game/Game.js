import React from "react";
import { Link } from "react-router-dom";

const Game = () => {
    return(
        <div className="components">
            Game!
            <Link to="/">
                <button>Click for home!</button>
            </Link>
        </div>
    )
}

export default Game;