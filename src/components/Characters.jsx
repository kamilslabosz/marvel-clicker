import React from "react";
import antImg from "../images/ant.png"
import mkImg from "../images/mk.png"
import smImg from "../images/sm.png"
import imImg from "../images/im.png"
import avgrsImg from "../images/avgrs.png"

function Characters(props) {
    return <div>
    <h1>Characters:</h1> 

    <img src={mkImg} alt="Moon Knight" />

    <img src={antImg} alt="Ant-man" />

    <img src={imImg} alt="Iron Man" />

    <img src={smImg} alt="Spider-man" />

    <img src={avgrsImg} alt="Avengers" />
    </div> 
}

export default Characters;