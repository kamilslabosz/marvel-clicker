import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BoxOffice from "./components/BoxOffice";
import Movies from "./components/Movies";
import Characters from "./components/Characters";

function App() {

  const [boxOffice, setBoxOffice] = useState(0);
  const [moonKnight, setMoonKnight] = useState(0);
  const [antMan, setAntMan] = useState(0);
  const [ironMan, setIronMan] = useState(0);
  const [spiderMan, setSpiderMan] = useState(0);
  const [avengers, setAvengers] = useState(0);

  return (
    <div className="">
      <BoxOffice boxOffice={boxOffice}></BoxOffice>
      <Characters></Characters>
      <Movies></Movies>
    </div>
  );
}

export default App;
