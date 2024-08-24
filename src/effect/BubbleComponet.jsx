import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";

const float = keyframes`
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateY(-1000px) scale(1.5);
    opacity: 0;
  }
`;

const Body = styled.div`
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  overflow: hidden;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Bubble = styled.div`
  position: absolute;
  bottom: -100px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  animation: ${float} 5s ease-in infinite;
`;

const BubbleComponent = () => {
  useEffect(() => {
    function createBubble() {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");
      let size = Math.random() * 60 + 20 + "px";
      bubble.style.width = size;
      bubble.style.height = size;
      bubble.style.left = Math.random() * 100 + "vw";
      bubble.style.animationDuration = Math.random() * 3 + 3 + "s";
      document.body.appendChild(bubble);
      setTimeout(() => {
        bubble.remove();
      }, 5000);
    }

    const intervalId = setInterval(createBubble, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <Body />;
};

export default BubbleComponent;
