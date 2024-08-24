import React from "react";
import styled, { keyframes } from "styled-components";

const moveMorph = keyframes`
  0% {
    transform: translate(0, 0) rotate(0deg);
    background-color: #ff6347;
    border-radius: 0;
    box-shadow: 0 0 10px #ff6347, 0 0 20px #ff6347, 0 0 30px #ff6347;
  }
  25% {
    transform: translate(100px, 0) rotate(45deg);
    background-color: #ffa07a;
    border-radius: 25%;
    box-shadow: 0 0 10px #ffa07a, 0 0 20px #ffa07a, 0 0 30px #ffa07a;
  }
  50% {
    transform: translate(100px, 100px) rotate(90deg);
    background-color: #20b2aa;
    border-radius: 50%;
    box-shadow: 0 0 10px #20b2aa, 0 0 20px #20b2aa, 0 0 30px #20b2aa;
  }
  75% {
    transform: translate(0, 100px) rotate(135deg);
    background-color: #3cb371;
    border-radius: 25%;
    box-shadow: 0 0 10px #3cb371, 0 0 20px #3cb371, 0 0 30px #3cb371;
  }
  100% {
    transform: translate(0, 0) rotate(180deg);
    background-color: #ff6347;
    border-radius: 0;
    box-shadow: 0 0 10px #ff6347, 0 0 20px #ff6347, 0 0 30px #ff6347;
  }
`;

const Body = styled.div`
  margin: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1e1e1e;
  overflow: hidden;
`;

const Container = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`;

const Shape = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ff6347;
  position: absolute;
  animation: ${moveMorph} 5s infinite alternate ease-in-out;
`;

const AnimatedShapeComponent = () => {
  return (
    <Body>
      <Container>
        <Shape />
      </Container>
    </Body>
  );
};

export default AnimatedShapeComponent;
