import React from "react";
import styled, { keyframes } from "styled-components";

const jump = keyframes`
  to {
    transform: rotate(180deg);
  }
`;

const moveH = keyframes`
  to {
    transform: translate(calc(var(--quarter) * -1));
  }
`;

const Body = styled.div`
  height: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  background-color: black;
`;

const LoadingContainer = styled.div`
  --size: 300px;
  --quarter: calc(var(--size) / 4);
  width: var(--size);
  height: var(--quarter);
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: calc(var(--size) / 35) solid cyan;
  border-top: none;
`;

const LoadingBall = styled.div`
  width: calc(var(--quarter) * 0.9);
  height: calc(var(--quarter) * 0.9);
  background-color: cyan;
  border-radius: 50%;
  animation-duration: 0.7s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  &:first-child {
    transform-origin: calc(var(--size) / 2 - var(--quarter) * 0.05);
    animation-name: ${jump} !important;
  }

  &:not(:first-child) {
    animation-name: ${moveH};
  }
`;

const Loading1Component = () => {
  return (
    <Body>
      <LoadingContainer>
        <LoadingBall id="first" />
        <LoadingBall />
        <LoadingBall />
        <LoadingBall />
      </LoadingContainer>
    </Body>
  );
};

export default Loading1Component;
