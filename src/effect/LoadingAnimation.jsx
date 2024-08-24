import React from "react";
import styled, { keyframes } from "styled-components";

const waveAnimation = keyframes`
  0% {
    background-position-x: 740px;
  }
  100% {
    background-position-x: 0px;
  }
`;

const rotateMoveAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(1turn);
  }
`;

const Body = styled.div`
  padding: 0;
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: black;
  overflow: hidden;
  filter: brightness(1) sepia(1) saturate(9) hue-rotate(95deg);
`;

const Scene = styled.div`
  --w: 300px;
  --wave: url('data:image/svg+xml,<svg width="1440" height="490" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" transform="rotate(0deg)" version="1.1"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop offset="0%" stop-color="rgba(49, 96, 133, 1)"/><stop offset="100%" stop-color="rgba(49, 96, 133, 1)"/></linearGradient></defs><g class="layer"><title>Layer 1</title><path d="m-9638,343l80,-40.8c80,-41.2 240,-122.2 400,-106.2c160,16 320,131 480,155.2c160,24.8 320,-41.2 480,-40.9c160,-0.3 320,65.7 480,57.2c160,-8.5 320,-89.5 480,-122.5c160,-33 320,-16 480,-40.8c160,-24.2 320,-90.2 480,-65.4c160,24.2 320,139.2 480,187.9c160,49.3 320,32.3 480,-24.5c160,-57.2 320,-155.2 480,-196c160,-41.2 320,-24.2 480,-24.5c160,0.3 320,-16.7 480,-24.5c160,-8.2 320,-8.2 480,16.3c160,24.5 320,73.5 480,98c160,24.5 320,24.5 480,40.8c160,16.7 320,48.7 480,73.5c160,24.2 320,41.2 480,65.4c160,24.8 366,165.8 480,16.3c114,-149.5 309,-98.5 480,-179.7c171,-81.2 256,67.8 465,78.5c210,4.7 305,-94.9 495,-13.1c190,81.8 400,7.4 527,-27.4c127,-34.8 255,76.2 452,42.9c197,-33.3 301,9.3 381,-7.4l80,-16.3l0,245l-80,0c-80,0 -240,0 -400,0c-160,0 -320,0 -480,0c-160,0 -320,0 -480,0c-160,0 -320,0 -480,0c-160,0 -320,0 -480,0c-160,0 -320,0 -480,0c-160,0 -320,0 -480,0c-160,0 -320,0 -480,0c-160,0 -320,0 -480,0c-160,0 -320,0 -480,0c-160,0 -320,0 -480,0c-160,0 -320,0 -480,0c-160,0 -320,0 -480,0c-160,0 -320,0 -480,0c-160,0 -320,0 -480,0c-160,0 -320,0 -480,0c-160,0 -320,0 -480,0c-160,0 -320,0 -480,0c-160,0 -320,0 -480,0c-160,0 -320,0 -400,0l-80,0l0,-147z" fill="white" id="svg_1"/></g></svg>');
  position: relative;
  width: var(--w);
  aspect-ratio: 1;
  border-radius: 50%;
  background-image: var(--wave);
  background-repeat: repeat-x;
  background-position: bottom;
  background-size: 740px;
  animation: ${waveAnimation} 2.5s linear infinite;
`;

const Move = styled.div`
  position: absolute;
  width: var(--w);
  aspect-ratio: 1;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  animation: ${rotateMoveAnimation} 10s linear infinite;
  mix-blend-mode: difference;
`;

const Dot = styled.i`
  --degree: 130px;
  --deg: 360deg;
  --cos: cos((var(--i) * var(--deg) / var(--total)));
  --sin: sin((var(--i) * var(--deg) / var(--total)));
  --transform: calc(var(--cos) * var(--degree)),
    calc(var(--sin) * var(--degree));
  position: absolute;
  width: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: white;
  display: block;
  transform: translate(var(--transform));
`;

const LoadingAnimation = () => {
  const totalDots = 25;
  return (
    <Body>
      <Scene style={{ "--total": totalDots }}>
        <Move>
          {[...Array(totalDots)].map((_, i) => (
            <Dot key={i} style={{ "--i": i }} />
          ))}
        </Move>
      </Scene>
    </Body>
  );
};

export default LoadingAnimation;
