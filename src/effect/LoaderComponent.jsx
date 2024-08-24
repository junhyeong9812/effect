import React from "react";
import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
  0% {
    rotate: -36deg;
  }
  to {
    rotate: 36deg;
  }
`;

const translateAnimation = keyframes`
  0% {
    translate: -174% 0;
  }
  to {
    translate: 174% 0;
  }
`;

const Loader = styled.div`
  display: inline-grid;
  width: 50vmin;
  aspect-ratio: 2;
  box-shadow: 0 2vmin yellow;
  overflow: hidden;

  &:before {
    content: "";
    margin: 0 25%;
    background: yellowgreen;
    clip-path: polygon(
      97.55% 65.45%,
      50% 100%,
      2.45% 65.45%,
      20.61% 9.55%,
      79.39% 9.55%
    );
    transform-origin: bottom;
    animation: ${rotateAnimation} 0.5s linear infinite,
      ${translateAnimation} 3s steps(6) infinite;
  }
`;

const Body = styled.div`
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-content: center;
  background-color: #000000;
`;

const LoaderComponent = () => {
  return (
    <Body>
      <Loader />
    </Body>
  );
};

export default LoaderComponent;
