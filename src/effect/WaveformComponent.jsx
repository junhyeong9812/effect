import React from "react";
import styled, { keyframes } from "styled-components";

const wave = keyframes`
  0% { height: 30px; background-color: #61dafb; }
  50% { height: 100px; background-color: #ff6ec4; }
  100% { height: 50px; background-color: #3af5c8; }
`;

const Body = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1a1a1a;
`;

const Waveform = styled.div`
  display: flex;
  align-items: flex-end;
  height: 150px;
`;

const Bar = styled.div`
  width: 10px;
  height: 30px;
  margin: 0 5px;
  background-color: #61dafb;
  border-radius: 5px;
  animation: ${wave} 1s infinite ease-in-out alternate;

  &:nth-child(2) {
    animation-delay: 0.1s;
  }
  &:nth-child(3) {
    animation-delay: 0.2s;
  }
  &:nth-child(4) {
    animation-delay: 0.3s;
  }
  &:nth-child(5) {
    animation-delay: 0.4s;
  }
  &:nth-child(6) {
    animation-delay: 0.5s;
  }
  &:nth-child(7) {
    animation-delay: 0.6s;
  }
  &:nth-child(8) {
    animation-delay: 0.7s;
  }
`;

const WaveformComponent = () => (
  <Body>
    <Waveform>
      <Bar />
      <Bar />
      <Bar />
      <Bar />
      <Bar />
      <Bar />
      <Bar />
      <Bar />
    </Waveform>
  </Body>
);

export default WaveformComponent;
