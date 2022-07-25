import React from "react";
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
            <img src={mkImg} width="200" alt="Moon Knight" onClick={props.buyMoonKnight} />
            <h2>Moon Knight</h2>
        </Col>
        <Col>
            <img src={antImg} width="200" alt="Ant-man" />
            <h2>Ant-man</h2>
        </Col>
        <Col>
            <img src={imImg} width="200" alt="Iron Man" />
            <h2>Iron Man</h2>
        </Col>
        <Col>
            <img src={smImg} width="200" alt="Spider-man" />
            <h2>Spider-man</h2>
        </Col>
        <Col>
            <img src={avgrsImg} width="200" alt="Avengers" />
            <h2>Avengers</h2>
        </Col>
    </Row>
    </div> )
}

export default Characters;