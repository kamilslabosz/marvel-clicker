import React from "react";
import antImg from "../images/ant.png";
import mkImg from "../images/mk.png";
import smImg from "../images/sm.png";
import imImg from "../images/im.png";
import avgrsImg from "../images/avgrs.png";


function Movies(props) {
    return <div>
    <h1>Movies:</h1> 
    {props.moonKnight.map((movies, index) => {
        return (
            <img width="50" key={index} id={index} src={mkImg} alt="Moon Knight"/>  
        )
    })}
    <br></br>
    {props.antMan.map((movies, index) => {
        return (
            <img width="50" key={index} id={index} src={antImg} alt="Ant-man"/>  
        )
    })}
    <br></br>
    {props.ironMan.map((movies, index) => {
        return (
            <img width="50" key={index} id={index} src={imImg} alt="Iron Man"/>  
        )
    })}
    <br></br>
    {props.spiderMan.map((movies, index) => {
        return (
            <img width="50" key={index} id={index} src={smImg} alt="Spider-man"/>  
        )
    })}
    <br></br>
    {props.avengers.map((movies, index) => {
        return (
            <img width="50" key={index} id={index} src={avgrsImg} alt="Avengers"/>  
        )
    })}
    </div> 
}

export default Movies;