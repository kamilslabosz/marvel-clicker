import React from "react";
import money from "../images/money.png"

function BoxOffice(props) {
    return <div className="box-office rounded-top">
    <h1>Box Office: {props.boxOffice}$</h1> 
    <h2>Invest!</h2>
    <img src={money} alt="money" onClick={props.invest} className="round money-img"/>
    </div>
}

export default BoxOffice;