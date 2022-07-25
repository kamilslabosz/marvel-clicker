import React, { useState } from "react";
import antImg from "../images/ant.png";
import mkImg from "../images/mk.png";
import smImg from "../images/sm.png";
import imImg from "../images/im.png";
import avgrsImg from "../images/avgrs.png";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Characters(props) {

    return (<div>
    <h1>Characters:</h1> 
    <Row className="align-items-center">
        <Col>
            <input type="image" src={mkImg} width="200" alt="Moon Knight" onClick={props.buyMoonKnight} disabled={props.boxOffice >= 50? false : true}/>
            <h2>Moon Knight</h2>
            <h2>50$</h2>
        </Col>
        <Col>
            <input type="image" src={antImg} width="200" alt="Ant-man" onClick={props.buyAntMan} disabled={props.boxOffice >= 200? false : true} />
            <h2>Ant-man</h2>
            <h2>200$</h2>
        </Col>
        <Col>
            <input type="image" src={imImg} width="200" alt="Iron Man" onClick={props.buyIronMan} disabled={props.boxOffice >= 1000? false : true}/>
            <h2>Iron Man</h2>
            <h2>1000$</h2>
        </Col>
        <Col>
            <input type="image" src={smImg} width="200" alt="Spider-man" onClick={props.buySpiderMan} disabled={props.boxOffice >= 100000? false : true}/>
            <h2>Spider-man</h2>
            <h2>100 000$</h2>
        </Col>
        <Col>
            <input type="image" src={avgrsImg} width="200" alt="Avengers" onClick={props.buyAvengers} disabled={props.boxOffice >= 500000? false : true}/>
            <h2>Avengers</h2>
            <h2>500 000$</h2>
        </Col>
    </Row>
    </div> )
}

export default Characters;