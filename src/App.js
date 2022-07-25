import './App.css';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BoxOffice from "./components/BoxOffice";
import Movies from "./components/Movies";
import Characters from "./components/Characters";

function App() {

  const [boxOffice, setBoxOffice] = useState(0);
  const [moonKnight, setMoonKnight] = useState([]);
  const [antMan, setAntMan] = useState([]);
  const [ironMan, setIronMan] = useState([]);
  const [spiderMan, setSpiderMan] = useState([]);
  const [avengers, setAvengers] = useState([]);

  function invest() {
    setBoxOffice(prevValue => prevValue + 1);
  }
  
  setTimeout(() => {
    console.log('Hello, World!')
    console.log(moonKnight.length)
    setBoxOffice(prevValue => prevValue + (moonKnight.length * 0.5))
    console.log(boxOffice);
  }, 5000);

  // function PassiveIncome() {
  //   setBoxOffice(prevValue => prevValue + (moonKnight * 5))
  // }

  function BuyMoonKnight() {
    setMoonKnight(prevValue => [...prevValue,  1])
    setBoxOffice(prevValue => prevValue - 50)
  }

  return (
    <div className="">
      <BoxOffice boxOffice={boxOffice} invest={invest}></BoxOffice>
      <Characters
      buyMoonKnight={BuyMoonKnight}
      ></Characters>
      <Movies 
      moonKnight={moonKnight}
      ></Movies>
    </div>
  );
}

export default App;
