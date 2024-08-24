import React from "react";
import styled, { keyframes } from "styled-components";

const plBefore = keyframes`
  from {
    transform: rotate(0) translate(-100%, -100%) rotate(-90deg);
  }
  20% {
    transform: rotate(0) translate(-100%, -100%) rotate(90deg);
  }
  40% {
    transform: rotate(0) translate(-300%, -100%) rotate(90deg);
  }
  60% {
    transform: rotate(90deg) translate(-300%, -100%) rotate(-90deg);
  }
  80% {
    transform: rotate(90deg) translate(-100%, -100%) rotate(-90deg);
  }
  to {
    transform: rotate(90deg) translate(-100%, 100%) rotate(90deg);
  }
`;

const plAfter = keyframes`
  from, 20% {
    transform: rotate(0) scale(1, 1);
  }
  40% {
    transform: rotate(0) scale(3, 1);
  }
  60% {
    transform: rotate(90deg) scale(3, 1);
  }
  80% {
    transform: rotate(90deg) scale(1, 1);
  }
  to {
    transform: rotate(90deg) scale(1, 1) translate(0, 200%);
  }
`;

const Body = styled.div`
  color: #e3e4e8;
  background-color: #17181c;
  display: flex;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

const Loader = styled.div`
  margin: auto;
  position: relative;
  width: 8em;
  height: 8em;

  &:before,
  &:after {
    animation: ${plBefore} 2.5s cubic-bezier(0.65, 0, 0.35, 1) infinite;
    background-color: currentColor;
    content: "";
    display: block;
    position: absolute;
    top: 75%;
    left: 50%;
    width: 25%;
    height: 25%;
    transform-origin: 100% 100%;
  }

  &:after {
    animation-name: ${plAfter};
  }
`;

const Loading1Animation = () => {
  return (
    <Body>
      <Loader />
    </Body>
  );
};

export default Loading1Animation;
