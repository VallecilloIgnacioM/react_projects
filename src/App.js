import React, {useEffect, useState} from 'react';
import './App.css';

const GIFS = ['https://media0.giphy.com/media/SDogLD4FOZMM8/200.webp',
'https://media0.giphy.com/media/xUjSOWCndCdECCyOEY/giphy.gif?cid=ecf05e474b744a2eb18fb773eb1ba82ccb097bb2f4c77c59&rid=giphy.gif&ct=g']
const DIFFERENT_GIFS = ['https://media4.giphy.com/media/Do5GRTYRIhSFy/giphy.gif?cid=ecf05e47mp58m3fmr0hh6tgae6juv0xxrucn5e8e3nfrh4w7&rid=giphy.gif&ct=g','https://media0.giphy.com/media/3o7TKLSqjNPNs19nDG/giphy.webp',]

function App() {
  const [gifs, setGifs] = useState(GIFS)

  useEffect(function () {
    setGifs(DIFFERENT_GIFS)
  }, [])

  return (
    <div className="App">
      <section className="App-content">
      {
        gifs.map(singleGif => <img src={singleGif} /> )
      }
      <button onClick={()=> setGifs(DIFFERENT_GIFS) }>Change Gifs</button>
       </section>
    </div>
  );
}

export default App;
