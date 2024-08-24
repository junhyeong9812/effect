import React from "react";
import styled, { keyframes } from "styled-components";

const loader7Animation = keyframes`
  0% { left: -12px; top: -12px; }
  25% { left: 42px; top: -12px; }
  50% { left: 42px; top: 42px; }
  75% { left: -12px; top: 42px; }
  100% { left: -12px; top: -12px; }
`;

const loader72Animation = keyframes`
  0% { width: 0px; }
  70% { width: 40px; opacity: 1; }
  90% { opacity: 0; width: 40px; }
  100% { opacity: 0; width: 0px; }
`;

const Body = styled.div`
  background-color: #333;
  display: grid;
  height: 100vh;
  margin: 0;
  place-items: center;
`;

const Loader7 = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  background-color: #ffffff33;

  &:before {
    content: "";
    position: absolute;
    background-color: #fff;
    height: 10px;
    width: 10px;
    border-radius: 10px;
    animation: ${loader7Animation} 2s ease-in-out infinite;
  }

  &:after {
    content: "";
    position: absolute;
    background-color: #fff;
    top: 0px;
    left: 0px;
    height: 40px;
    width: 0px;
    z-index: 0;
    opacity: 1;
    animation: ${loader72Animation} 10s ease-in-out infinite;
  }
`;

const Loading2Component = () => {
  return (
    <Body>
      <Loader7 />
    </Body>
  );
};

export default Loading2Component;
