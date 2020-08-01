import React, { useEffect } from 'react';
import './App.css';

// Web Animation API
import useWebAnimations from '@wellyshen/use-web-animations';

// Images
import Car from './img/car.png';
import Wheel from './img/wheel.png';


function App() {

  const { ref: highway, getAnimation: highwayAnimation } = useWebAnimations({
    keyframes: [
      { transform: 'translateX(-3400px)', },
    ],
    timing: {
      duration: 5000,
      iterations: Infinity,
    }
  });

  const { ref: city, getAnimation: cityAnimation } = useWebAnimations({
    keyframes: [
      { transform: 'translateX(-1400px)', },
    ],
    timing: {
      duration: 20000,
      iterations: Infinity,
    }
  });
  
  const { ref: car, getAnimation: carAnimation } = useWebAnimations({
    keyframes: [
      { transform: 'translateX(-1px)', },
      { transform: 'translateX(2px)', },
      { transform: 'translateX(-1px)', },
    ],
    timing: {
      duration: 1000,
      iterations: Infinity,
    }
  });

  const { ref: wheel1, getAnimation: wheel1Animation } = useWebAnimations({
    keyframes: [
      { transform: 'rotate(360deg)', },
    ],
    timing: {
      duration: 1000,
      iterations: Infinity,
    }
  });
  
  const { ref: wheel2, getAnimation: wheel2Animation } = useWebAnimations({
    keyframes: [
      { transform: 'rotate(360deg)', },
    ],
    timing: {
      duration: 1000,
      iterations: Infinity,
    }
  });

  function start() {

  }

  function stop() {

  }

  function increase() {

  }

  function decrease() {

  }

  useEffect(() => {
    highwayAnimation().pause();
    cityAnimation().pause();
    carAnimation().pause();
    wheel1Animation().pause();
    wheel2Animation().pause();
  }, [highwayAnimation, cityAnimation, carAnimation, wheel1Animation, wheel2Animation])

  return (
    <div className="App">

      <div className="hero">
        <div ref={ highway } className="highway" id="highway" />
        <div ref={ city } className="city" id="city" />

        <div className="car">
          <img ref={ car } id="car" src={ Car } alt="car" />
        </div>

        <div className="wheel">
          <img ref={ wheel1 } id="img1" src={ Wheel } className="back-wheel" alt="wheel" />
          <img ref={ wheel2 } id="img2" src={ Wheel } className="front-wheel" alt="wheel" />
        </div>
      </div>

      
      <button onClick={ start } className="btn" id="start">Start</button>
      <button disabled onClick={ stop } className="btn" id="stop">Stop</button>
      <button disabled onClick={ increase } className="btn" id="increase">Increase</button>
      <button disabled onClick={ decrease } className="btn" id="decrease">Decrease</button>

    </div>
  );
}

export default App;
