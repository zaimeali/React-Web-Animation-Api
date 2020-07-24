import React, { useRef } from 'react';
import './App.css';

// animation functions
import { nice } from './animation';

// Web Animation API
import useWebAnimations from '@wellyshen/use-web-animations';

// Images
import newRoad from './img/newRoad.jpg';



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

  const { ref: roadStrip2, getAnimation: road2Animation } = useWebAnimations({
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

  const { ref: roadStrip3, getAnimation: road3Animation } = useWebAnimations({
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

  const { ref: roadStrip4, getAnimation: road4Animation } = useWebAnimations({
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

  const { ref: roadStrip5, getAnimation: road5Animation } = useWebAnimations({
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

  const { ref: roadStrip6, getAnimation: road6Animation } = useWebAnimations({
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

  const { ref: roadStrip7, getAnimation: road7Animation } = useWebAnimations({
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

  const { ref: roadStrip8, getAnimation: road8Animation } = useWebAnimations({
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

  const { ref: roadStrip9, getAnimation: road9Animation } = useWebAnimations({
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

  const { ref: roadStrip10, getAnimation: road10Animation } = useWebAnimations({
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

  const { ref: roadStrip11, getAnimation: road11Animation } = useWebAnimations({
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

  const { ref: roadStrip12, getAnimation: road12Animation } = useWebAnimations({
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

  const { ref: roadStrip13, getAnimation: road13Animation } = useWebAnimations({
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

  const { ref: roadStrip14, getAnimation: road14Animation } = useWebAnimations({
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

  const { ref: roadStrip15, getAnimation: road15Animation } = useWebAnimations({
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

  

  const { ref: road1, getAnimation: roadAnim1 } = useWebAnimations({
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
  const { ref: road2, getAnimation: roadAnim2 } = useWebAnimations({
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
  const { ref: road3, getAnimation: roadAnim3 } = useWebAnimations({
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
  const { ref: road4, getAnimation: roadAnim4 } = useWebAnimations({
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
      <button onClick={() => {
        nice("very nice")
      }}>Click</button>

      <div className="newRoad">
        <img ref={ road1 } src={newRoad} className="img"/>
        <img ref={ road2 } src={newRoad} className="img"/>
        <img ref={ road3 } src={newRoad} className="img"/>
        <img ref={ road4 } src={newRoad} className="img"/>
      </div>

      <div className="road">
        <div ref={ roadStrip1 } className="roadStrip1"></div>
        <div ref={ roadStrip2 } className="roadStrip2"></div>
        <div ref={ roadStrip3 } className="roadStrip3"></div>
        <div ref={ roadStrip4 } className="roadStrip4"></div>
        <div ref={ roadStrip5 } className="roadStrip5"></div>
        <div ref={ roadStrip6 } className="roadStrip6"></div>
        <div ref={ roadStrip7 } className="roadStrip7"></div>
        <div ref={ roadStrip8 } className="roadStrip8"></div>
        <div ref={ roadStrip9 } className="roadStrip9"></div>
        <div ref={ roadStrip10 } className="roadStrip10"></div>
        <div ref={ roadStrip11 } className="roadStrip11"></div>
        <div ref={ roadStrip12 } className="roadStrip12"></div>
        <div ref={ roadStrip13 } className="roadStrip13"></div>
        <div ref={ roadStrip14 } className="roadStrip14"></div>
        <div ref={ roadStrip15 } className="roadStrip15"></div>
      </div>
    </div>
  );
}

export default App;
