import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

    return(
        <div className="components">
            <Link to="/game">
                <button>Click for game!</button>
            </Link>
            Home!
        </div>
    )
}

export default Home;