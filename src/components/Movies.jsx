import React from "react";
import mkImg from "../images/mk.png";


function Movies(props) {
    return <div>
    <h1>Movies:</h1> 
    {props.moonKnight.map((movies, index) => {
        return (
            <img width="50" key={index} id={index} src={mkImg} alt="Moon Knight"/>  
        )
    })}
    </div> 
}

export default Movies;