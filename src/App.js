import React, { useState, useEffect } from 'react';
import orel from './img/orel.png';
import reshka from './img/reshka.png';
import preloader from './img/flip.gif';

function App() {
  const [result, setResult] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const coinflipstart = () => {
    setLoading(true);
    setTimeout(() => {
      const rand = Math.random();
      const newValue = rand < 0.5 ? 'orel' : 'reshka';
      setLoading(false);
      if (newValue === 'orel')
      {
        setImage(orel);
        setResult('Орел / Heads');
      }
      else {
        setImage(reshka);
        setResult('Решка / Tails');
      }
    }, 1000); // 2 секунды
  };

  useEffect(() => {
    // сброс результата при перезагрузке компонента
    setResult(null);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="result">
        <p className="resultVal">Loading...</p>
        <img className="images" src={preloader} alt="Loading..." />
        <button className="coinflipstartloading">
        🔄 LOADING... 🔄
        </button>
        </div>   
      ) : (
        <>
          {result && (
            <div className='wrapper'> 
              <div className="result">
              <p className="resultVal">{result}</p>
              <img className="images" src={image} alt={result} />
              </div> 
          </div>
          )}
          <button onClick={coinflipstart} className="coinflipstart">
          🍀 GET SIGNAL 🍀
          </button>
        </>
      )}
    </div>
  );
}

export default App;
