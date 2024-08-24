import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";

const infinity = keyframes`
  25% {
    transform: scale(4) rotate(180deg);
  }
  50% {
    transform: scale(1) rotate(360deg);
  }
  75% {
    transform: scale(4) rotate(540deg);
  }
  100% {
    transform: scale(0.25) rotate(720deg);
  }
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #140032;
  position: relative;
`;

const StyledDiv = styled.div`
  position: absolute;
  inset: 0;
  margin: auto;
  width: 200px;
  height: 200px;
  border-left: 10px ridge transparent;
  border-right: 10px ridge transparent;
  border-radius: 25%;
  transform: scale(0.25) rotate(0deg);
  animation: ${infinity} 12s ease-in-out infinite;
`;

const InfinityAnimation = () => {
  useEffect(() => {
    const numDivs = 48;
    const body = document.querySelector("body");

    for (let i = 1; i <= numDivs; i++) {
      const div = document.createElement("div");
      div.className = "s";
      const delay = (i * 3) / 48;
      const hue = 360 - (i * 360) / 48;
      const borderColor = `hsla(${hue}, 100%, 50%, 1)`;
      div.style.animationDelay = `${delay}s`;
      div.style.borderColor = borderColor;
      body.appendChild(div);
    }
  }, []);

  return <Body />;
};

export default InfinityAnimation;
