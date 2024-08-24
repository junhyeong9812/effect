import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const typing = keyframes`
  to {
    opacity: 1;
  }
`;

const blink = keyframes`
  50% {
    opacity: 1;
  }
`;

const Body = styled.div`
  margin: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #282c34;
  color: #ffffff;
  font-family: Arial, sans-serif;
  font-size: 2rem;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 8px solid #f3f3f3;
  border-top: 8px solid #61dafb;
  border-radius: 50%;
  animation: ${spin} 2s linear infinite;
  margin-bottom: 20px;
`;

const LoadingText = styled.div`
  display: flex;
`;

const Letter = styled.span`
  opacity: 0;
  animation: ${typing} 1s forwards;

  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
  &:nth-child(4) {
    animation-delay: 0.6s;
  }
  &:nth-child(5) {
    animation-delay: 0.8s;
  }
  &:nth-child(6) {
    animation-delay: 1s;
  }
  &:nth-child(7) {
    animation-delay: 1.2s;
  }
`;

const Dots = styled.div`
  display: inline-block;
  margin-left: 5px;
`;

const Dot = styled.span`
  opacity: 0;
  animation: ${blink} 1s infinite steps(1, end);

  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 0.3s;
  }
  &:nth-child(3) {
    animation-delay: 0.6s;
  }
`;

const LoadingComponent = () => {
  return (
    <Body>
      <LoadingContainer>
        <Spinner />
        <LoadingText>
          <Letter>L</Letter>
          <Letter>o</Letter>
          <Letter>a</Letter>
          <Letter>d</Letter>
          <Letter>i</Letter>
          <Letter>n</Letter>
          <Letter>g</Letter>
          <Dots>
            <Dot>.</Dot>
            <Dot>.</Dot>
            <Dot>.</Dot>
          </Dots>
        </LoadingText>
      </LoadingContainer>
    </Body>
  );
};

export default LoadingComponent;
