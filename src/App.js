import React, { useState, useEffect } from 'react';
import orel from './img/orel.png';
import reshka from './img/reshka.png';
import preloader from './img/coin.gif';

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const coinflipstart = () => {
    setLoading(true);
    setTimeout(() => {
      const rand = Math.random();
      const newValue = rand < 0.5 ? 'orel' : 'reshka';
      setResult(newValue);
      setLoading(false);
    }, 1000); // 2 секунды
  };

  useEffect(() => {
    // сброс результата при перезагрузке компонента
    setResult(null);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <img className="images" src={preloader} alt="Loading..." />
      ) : (
        <>
          {result && (
            <div className="result">
              <p className="resultVal">{result}</p>
              <img className="images" src={result === 'orel' ? orel : reshka} alt={result} />
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
