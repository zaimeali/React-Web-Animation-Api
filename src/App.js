import React, { useRef } from 'react';
import './App.css';

// Web Animation API
import useWebAnimations from '@wellyshen/use-web-animations';

// Images
import Car from './img/car.png';
import Wheel from './img/wheel.png';


function App() {

  const ref = useRef();

  const { ref: roadStrip1, getAnimation: road1Animation } = useWebAnimations({
    keyframes: [
      { transform: 'translateX(0)' },
      { transform: 'translateX(-2500px)' }
    ],
    timing: {
      duration: 12000,
      iterations: Infinity,
      direction: "normal"
    }
  });

  return (
    <div className="App">

      {/* <div className="road">
        <div ref={ roadStrip1 } className="roadStrip1"></div>
      </div> */}

      <div className="hero">
        <div className="highway" id="highway" />
        <div className="city" id="city" />

        <div className="car">
          <img id="car" src={ Car } alt="car" />
        </div>

        <div className="wheel">
          <img id="img1" src={ Wheel } className="back-wheel" alt="wheel" />
          <img id="img2" src={ Wheel } className="front-wheel" alt="wheel" />
        </div>
      </div>

      
      <button onClick="start()" class="btn" id="start">Start</button>
      <button disabled onClick="stop()" class="btn" id="stop">Stop</button>
      <button disabled onClick="increase()" class="btn" id="increase">Increase</button>
      <button disabled onClick="decrease()" class="btn" id="decrease">Decrease</button>

    </div>
  );
}

export default App;
