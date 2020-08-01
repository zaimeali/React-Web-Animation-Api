import React, { useEffect, useState } from 'react';
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

  const [start, setStart] = useState(false);
  const [stop, setStop] = useState(true);
  const [increase, setIncrease] = useState(true);
  const [decrease, setDecrease] = useState(true);

  const [speed, setSpeed] = useState(0);

  function startBtn() {
    highwayAnimation().play();
    cityAnimation().play();
    carAnimation().play();
    wheel1Animation().play();
    wheel2Animation().play();

    setSpeed(carAnimation().playbackRate);

    setStart(true);
    setStop(false);
    setIncrease(false);
    setDecrease(false);
  }

  function stopBtn() {
    highwayAnimation().pause();
    cityAnimation().pause();
    carAnimation().pause();
    wheel1Animation().pause();
    wheel2Animation().pause();
    
    setSpeed(0);

    setStart(false);
    setStop(true);
    setIncrease(true);
    setDecrease(true);
  }

  function increaseBtn() {
    highwayAnimation().playbackRate = highwayAnimation().playbackRate + 1;
    cityAnimation().playbackRate = cityAnimation().playbackRate + 1;
    carAnimation().playbackRate = carAnimation().playbackRate + 1;
    wheel1Animation().playbackRate = wheel1Animation().playbackRate + 1;
    wheel2Animation().playbackRate = wheel2Animation().playbackRate + 1;

    setSpeed(carAnimation().playbackRate);

    if(highwayAnimation().playbackRate > 0){
      setDecrease(false);
    }
  }

  function decreaseBtn() {
    highwayAnimation().playbackRate = highwayAnimation().playbackRate - 1;
    cityAnimation().playbackRate = cityAnimation().playbackRate - 1;
    carAnimation().playbackRate = carAnimation().playbackRate - 1;
    wheel1Animation().playbackRate = wheel1Animation().playbackRate - 1;
    wheel2Animation().playbackRate = wheel2Animation().playbackRate - 1;
    
    setSpeed(carAnimation().playbackRate);

    if(highwayAnimation().playbackRate <= 0){
      setDecrease(true);
    }
  }

  useEffect(() => {
    highwayAnimation().pause();
    cityAnimation().pause();
    carAnimation().pause();
    wheel1Animation().pause();
    wheel2Animation().pause();
  }, [highwayAnimation, cityAnimation, carAnimation, wheel1Animation, wheel2Animation]);

  return (
    <div className="App">

      <h1 className="speed">Your Speed is: <span className={ speed > 10 ? "speedRed" : speed > 5 ? "speedGreen" : "speedBlue" }>{ speed }KM/H</span></h1>

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

      
      <button disabled={ start } onClick={ startBtn } className="btn" id="start">Start</button>
      <button disabled={ stop } onClick={ stopBtn } className="btn" id="stop">Stop</button>
      <button disabled={ increase } onClick={ increaseBtn } className="btn" id="increase">Increase</button>
      <button disabled={ decrease } onClick={ decreaseBtn } className="btn" id="decrease">Decrease</button>

    </div>
  );
}

export default App;
