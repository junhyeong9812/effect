import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: hidden;
  background-color: #140032;
  position: relative;
`;

const Leaf = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 400px;
  height: 400px;
  animation: ${rotateAnimation} 13s linear infinite reverse;
`;

const Clover = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const Sprout = styled.div`
  width: 150px;
  height: 15px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Circle = styled.i`
  width: 15px;
  height: 15px;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  animation: ${rotateAnimation} 5s linear infinite;
`;

const RotatingCloverComponent = () => {
  const leafRef = useRef(null);

  useEffect(() => {
    const leaf = leafRef.current;

    for (let i = 0; i < 5; i++) {
      const clover = document.createElement("div");
      clover.style.transform = `rotate(${(i * 360) / 5}deg) translate(83px)`;

      for (let j = 0; j < 50; j++) {
        const sprout = document.createElement("div");
        sprout.style.transform = `rotate(${
          (j * 223) / 100
        }deg) translate(100%)`;

        const circle = document.createElement("i");
        circle.style.animationDelay = `${(-j * 9) / 20}s`;
        circle.style.backgroundColor = `hsla(${
          55 - (j * 50) / 50
        }, 100%, 50%, 1)`;

        sprout.appendChild(circle);
        clover.appendChild(sprout);
      }

      leaf.appendChild(clover);
    }
  }, []);

  return (
    <Body>
      <Leaf ref={leafRef}></Leaf>
    </Body>
  );
};

export default RotatingCloverComponent;
