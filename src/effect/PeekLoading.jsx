import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

const dotAnimation = keyframes`
  0%, 55%, 100% { padding: 0 0 5.6em 0; }
  5%, 50% { padding: 2.8em 0; }
`;

const dotAnimationTwo = keyframes`
  0%, 55%, 100% { opacity: 1; transform: scale(1); }
  5%, 50% { opacity: 0.5; transform: scale(0.5); }
`;

// const PeeekLoadingContainer = styled.div`
//   background-color: #000;
//   overflow: hidden;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   height: 100%;
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
const PeeekLoadingContainer = styled.div`
  background-color: #000;
  overflow: hidden;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DotsContainer = styled.ul`
  position: absolute;
  left: calc(50% - 0.7em);
  top: calc(50% - 4.2em);
  display: inline-block;
  list-style: none;
  padding: 0;
`;

const Dot = styled.li`
  position: absolute;
  width: 1.4em;
  height: 1.4em;
  border-radius: 100%;
  top: 0;
  left: 0;
  padding-bottom: 5.6em;
  animation: ${dotAnimation} 4.5s infinite;
  transform: ${({ rotate }) => `rotate(${rotate}deg)`};
  animation-delay: ${({ delay }) => `${delay}s`};

  span {
    content: "";
    display: block;
    width: 1.4em;
    height: 1.4em;
    background-color: #fff;
    border-radius: 100%;
    animation: ${dotAnimationTwo} 4.5s infinite;
    animation-delay: ${({ delay }) => `${delay}s`};
  }
`;

const PeekLoading = () => {
  const dotCount = 10;
  const animationTime = 2.5;
  const dotsRef = useRef([]);

  useEffect(() => {
    const dots = [];
    for (let i = 1; i <= dotCount; i++) {
      dots.push({
        rotate: (i - 1) * (360 / dotCount),
        delay: (animationTime * i) / dotCount / 2,
      });
    }
    dotsRef.current = dots;
  }, []);

  return (
    <PeeekLoadingContainer>
      <DotsContainer>
        {dotsRef.current.map((dot, index) => (
          <Dot key={index} rotate={dot.rotate} delay={dot.delay}>
            <span></span>
          </Dot>
        ))}
      </DotsContainer>
    </PeeekLoadingContainer>
  );
};

export default PeekLoading;
