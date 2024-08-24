import React, { useEffect, useState } from "react";
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
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  left: ${(props) => props.left}vw;
  animation-duration: ${(props) => props.duration}s;
`;

const BubbleComponent = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newBubble = {
        id: Math.random(),
        size: Math.random() * 60 + 20,
        left: Math.random() * 100,
        duration: Math.random() * 3 + 3,
      };
      setBubbles((bubbles) => [...bubbles, newBubble]);
      setTimeout(() => {
        setBubbles((bubbles) =>
          bubbles.filter((bubble) => bubble.id !== newBubble.id)
        );
      }, 5000);
    }, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Body>
      {bubbles.map((bubble) => (
        <Bubble
          key={bubble.id}
          size={bubble.size}
          left={bubble.left}
          duration={bubble.duration}
        />
      ))}
    </Body>
  );
};

export default BubbleComponent;
