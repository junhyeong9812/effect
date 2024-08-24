import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";

const rotateScale = keyframes`
  0% {
    transform: scale(0.5) rotate(0deg);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.5) rotate(180deg);
    opacity: 1;
  }
  100% {
    transform: scale(0.5) rotate(360deg);
    opacity: 0.7;
  }
`;

const Body = styled.div`
  margin: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle at center, #ffb6c1, #8a2be2);
  overflow: hidden;
  position: relative;
`;

const Starburst = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background: linear-gradient(45deg, #ffd700, #ff6347);
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  animation: ${rotateScale} 3s infinite ease-in-out;
`;

const StarburstComponent = () => {
  useEffect(() => {
    const createStarburst = () => {
      const starburst = document.createElement("div");
      starburst.className = "starburst";
      starburst.style.left = Math.random() * 100 + "vw";
      starburst.style.top = Math.random() * 100 + "vh";
      starburst.style.animationDuration = Math.random() * 2 + 3 + "s";
      document.body.appendChild(starburst);
      setTimeout(() => {
        starburst.remove();
      }, 3000);
    };

    const intervalId = setInterval(createStarburst, 700);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <Body />;
};

export default StarburstComponent;
