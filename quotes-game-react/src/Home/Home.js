import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'antd';


const Home = () => {

    return(
        <div style={{textAlign: "center"}}>
            <h1>Welcome to "Guess the quote"</h1>
            <p style={{fontSize: 20}}>In this game, a random quote appears on the screen. <br />What you have to do is guess the author of that quote. <br />To win, you must get 5 total points. For every correct answer you get one point.<br />Enjoy the game!<br />Click the button below to play! </p>
            <Link to="/game">
                <Button size="large">Play!</Button>
            </Link>
        </div>
    )
}

export default Home;