import React from "react";
import styled, { keyframes } from "styled-components";

const rotateCube = keyframes`
  0%, 100% {
      transform: rotateX(0deg) rotateY(0deg);
  }
  20% {
      transform: rotateX(45deg) rotateY(45deg);
  }
  40% {
      transform: rotateX(0deg) rotateY(90deg) scaleX(0.7) scaleY(0.7) scaleZ(1.2);
      background-color: #ff6ec4;
  }
  60% {
      transform: rotateX(-45deg) rotateY(135deg) scaleX(1) scaleY(0.7) scaleZ(0.7);
      background-color: #f5b23a;
  }
  80% {
      transform: rotateX(0deg) rotateY(180deg) scale(1);
      background-color: #3af5c8;
  }
`;

const Body = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1a1a1a;
  perspective: 1000px;
`;

const Scene = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
  transform-style: preserve-3d;
  animation: ${rotateCube} 8s infinite ease-in-out;
`;

const Face = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  background-color: #61dafb;
  border: 2px solid #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  backface-visibility: hidden;
`;

const Front = styled(Face)`
  transform: rotateY(0deg) translateZ(75px);
`;

const Back = styled(Face)`
  transform: rotateY(180deg) translateZ(75px);
`;

const Left = styled(Face)`
  transform: rotateY(-90deg) translateZ(75px);
`;

const Right = styled(Face)`
  transform: rotateY(90deg) translateZ(75px);
`;

const Top = styled(Face)`
  transform: rotateX(90deg) translateZ(75px);
`;

const Bottom = styled(Face)`
  transform: rotateX(-90deg) translateZ(75px);
`;

const CubeComponent = () => (
  <Body>
    <Scene>
      <Front />
      <Back />
      <Left />
      <Right />
      <Top />
      <Bottom />
    </Scene>
  </Body>
);

export default CubeComponent;
