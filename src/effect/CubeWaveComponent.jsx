import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

const wave = keyframes`
  0%, 100% {
      transform: scale(1);
      background-color: #ff6ec4;
  }
  50% {
      transform: scale(2);
      background-color: #7873f5;
  }
`;

const Body = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #222;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
`;

const Square = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ff6ec4;
  animation: ${wave} 3s ease-in-out infinite;
  transform-origin: center;

  &:nth-child(1) {
    animation-delay: 0.2s;
  }
  &:nth-child(2) {
    animation-delay: 0.4s;
  }
  &:nth-child(3) {
    animation-delay: 0.6s;
  }
  &:nth-child(4) {
    animation-delay: 0.8s;
  }
  &:nth-child(5) {
    animation-delay: 1s;
  }
`;

const CubeWaveComponent = () => {
  const squaresRef = useRef([]);

  useEffect(() => {
    const squares = squaresRef.current;
    const colors = ["#ff6ec4", "#7873f5", "#f5b23a", "#3af5c8", "#f53a5c"];

    squares.forEach((square) => {
      square.addEventListener("animationiteration", () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        square.style.backgroundColor = randomColor;
      });
    });

    return () => {
      squares.forEach((square) => {
        square.removeEventListener("animationiteration", null);
      });
    };
  }, []);

  return (
    <Body>
      <Container>
        {[...Array(5)].map((_, index) => (
          <Square key={index} ref={(el) => (squaresRef.current[index] = el)} />
        ))}
      </Container>
    </Body>
  );
};

export default CubeWaveComponent;
