import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import { useInterval } from 'usehooks-ts'
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

  async function invest() {
    setBoxOffice(prevValue => prevValue + 1);
  }
  
  useInterval(()=>{
    setBoxOffice(boxOffice + (moonKnight.length * 5) + (antMan.length * 20) + (ironMan.length * 100) + (spiderMan.length * 1000) + (avengers.length * 50000))
  },[1000]
  )


  function BuyMoonKnight() {
    setMoonKnight(prevValue => [...prevValue,  1])
    setBoxOffice(prevValue => prevValue - 50)
  }

  function BuyAntMan() {
    setAntMan(prevValue => [...prevValue,  1])
    setBoxOffice(prevValue => prevValue - 200)
  }

  function BuyIronMan() {
    setIronMan(prevValue => [...prevValue,  1])
    setBoxOffice(prevValue => prevValue - 1000)
  }

  function BuySpiderMan() {
    setSpiderMan(prevValue => [...prevValue,  1])
    setBoxOffice(prevValue => prevValue - 100000)
  }

  function BuyAvengers() {
    setAvengers(prevValue => [...prevValue,  1])
    setBoxOffice(prevValue => prevValue - 500000)
  }

  return (
    <div className='main-container'>
      <BoxOffice boxOffice={boxOffice} invest={invest}></BoxOffice>
      <Characters
      buyMoonKnight={BuyMoonKnight}
      buyAntMan={BuyAntMan}
      buyIronMan={BuyIronMan}
      buySpiderMan={BuySpiderMan}
      buyAvengers={BuyAvengers}
      boxOffice={boxOffice}
      ></Characters>
      <Movies 
      moonKnight={moonKnight}
      antMan={antMan}
      ironMan={ironMan}
      spiderMan={spiderMan}
      avengers={avengers}
      ></Movies>
    </div>
  );
}

export default App;
