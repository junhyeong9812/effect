import React from "react";
import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 100% {
    top: 0;
    animation-timing-function: ease-in;
  }
  50% {
    top: 200px;
    animation-timing-function: ease-out;
  }
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #000000;
  overflow: hidden;
`;

const Ball = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ff6347;
  border-radius: 50%;
  position: relative;
  animation: ${bounce} 2s infinite;
`;

const BouncingBall = () => {
  return (
    <Body>
      <Ball />
    </Body>
  );
};

export default BouncingBall;
