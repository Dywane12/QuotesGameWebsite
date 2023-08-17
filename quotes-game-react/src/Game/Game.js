import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Game = (props) => {



    return(
        <div className="components">
            <h2>Who said that quote?</h2>
            {
                props.quote ? <div>{props.quote}</div> : <p>loading...</p>
            }
            <input placeholder="Enter author here" />
            <Link to="/">
                <button>Click for home!</button>
            </Link>
        </div>
    )
}

export default Game;