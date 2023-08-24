import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Game = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://api.api-ninjas.com/v1/quotes?category=',{
            headers: { 'X-Api-Key': 't5uH4CHnIvhCe1J1jemWVA==oKu96FgPeJT5o3np'}
        }).then(resp => {
            console.log(resp);
            setData(resp.data);
        })
    }, []) 

    return(
        <div className="components">
            <h2>Who said this quote?</h2>
            {
                data[0] && data[0].quote ? <div>{data[0].quote}</div> : <p>loading...</p>
            }
            <form>
                <input placeholder="Enter author here" />
            </form>
            <Link to="/">
                <button>Click for home!</button>
            </Link>
        </div>
    )
}

export default Game;