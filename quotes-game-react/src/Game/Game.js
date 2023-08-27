import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Input } from 'antd';
import { LeftOutlined } from '@ant-design/icons';


const Game = () => {

    const [data, setData] = useState([]);
    const [guess, setGuess] = useState("");
    const [correct, setCorrect] = useState(false);
    const [wrong, setWrong] = useState(false);
    const [points, setPoints] = useState(0);
    const [win, setWin] = useState(false);
    const [loadingButton, setLoadingButton] = useState(false);
    const [loadingQuote, setLoadingQuote] = useState(true);


    useEffect(() => {
        axios.get('https://api.api-ninjas.com/v1/quotes?category=',{
            headers: { 'X-Api-Key': 't5uH4CHnIvhCe1J1jemWVA==oKu96FgPeJT5o3np'}
        }).then(resp => {
            console.log(resp);
            setData(resp.data);
            setLoadingQuote(false);
        })
    }, []) 

    const handleSubmit = (e) => {
        e.preventDefault();
        if(guess === data[0].author) {
                setCorrect(true);
                setWrong(false);
                setPoints(points + 1);
                if(points == 4) {
                    setWin(true);
                }
        }
        else {
            setCorrect(false);
            setWrong(true);
        }
    }

    const nextClickedHandler = () => {
        setLoadingQuote(true);
        axios.get('https://api.api-ninjas.com/v1/quotes?category=',{
            headers: { 'X-Api-Key': 't5uH4CHnIvhCe1J1jemWVA==oKu96FgPeJT5o3np'}
        }).then(resp => {
            console.log(resp);
            setData(resp.data);
            setLoadingQuote(false);
        });

        setGuess("");
        setCorrect(false);
        setWrong(false);
        setLoadingButton(false);
    }

    const playAgainHandler = () => {
        setLoadingQuote(true);
        axios.get('https://api.api-ninjas.com/v1/quotes?category=',{
            headers: { 'X-Api-Key': 't5uH4CHnIvhCe1J1jemWVA==oKu96FgPeJT5o3np'}
        }).then(resp => {
            console.log(resp);
            setData(resp.data);
            setLoadingQuote(false);
        });
        setWin(false);
        setPoints(0);
        setCorrect(false);
        setWrong(false);
        setLoadingButton(false);
        setGuess("");
    }

    return(
        <>
        <Link to="/">
            <Button icon={<LeftOutlined />} style={{margin: 20}}>Back</Button>
        </Link>
        <div style={{ margin: 20, fontSize: 22, float: "right" }}>Points: {points}</div>
        {
            !win ? 
            (
                <div style={{textAlign: "center"}}> 
                <h2 style={{margin: 25, fontSize: 25}}>Who said this quote?</h2>
                {
                    data[0] && data[0].quote && !loadingQuote ? <div style={{margin: 50, fontSize: 22}}>{data[0].quote}</div> : <p>loading...</p>
                }
                <form onSubmit={handleSubmit}>
                        <Input 
                            size="large"
                            type="text" 
                            value={guess} 
                            onChange={(e) => {setGuess(e.target.value)}}
                            placeholder="Author name" 
                            style={{maxWidth: 250, margin: "auto", display: "block"}}
                        />
                        <Button 
                        size="large"
                        htmlType="submit"
                        style={{margin: 10}}
                        loading={loadingButton}
                        onClick={() => {setLoadingButton(true)}}>Submit!</Button>
                    </form>
                { 
                    correct ? (
                                <div>
                                    <p style={{margin: 10, fontSize: 22, color: "green"}}>Correct!</p>
                                    <Button size="large" onClick={nextClickedHandler} >Next!</Button>
                                </div>
                            ) : null 
                }
                { 
                    wrong ? (
                                <div>
                                    <p style={{margin: 10, fontSize: 22, color: "red"}}>Wrong!</p>
                                    <Button size="large" onClick={nextClickedHandler} >Next!</Button>
                                </div>
                            ) : null 
                }
                
                </div>
            ) : (
            <div style={{textAlign: "center"}}>
               <h1 style={{margin: 25}}>You win!</h1>
               <Button onClick={playAgainHandler} size="large">Play again?</Button>
            </div>)
        }
        
        </>
    )
}

export default Game;