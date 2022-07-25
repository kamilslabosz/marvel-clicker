import React from "react";
import money from "../images/money.png"

function BoxOffice(props) {
    return <div>
    <h1>Box Office: {props.boxOffice}$</h1> 
    <h2>Invest!</h2>
    <img src={money} alt="money" onClick={props.invest} />
    </div>
}

export default BoxOffice;