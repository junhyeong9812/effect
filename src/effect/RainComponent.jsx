import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";

const fall = keyframes`
  to {
    margin-top: 900px;
  }
`;

const Body = styled.div`
  height: 100%;
  background: #0d343a;
  background: -webkit-gradient(
    linear,
    0% 0%,
    0% 100%,
    from(#0d343a),
    to(#000000)
  );
  overflow: hidden;
  position: relative;
`;

const Drop = styled.div`
  background: -webkit-gradient(
    linear,
    0% 0%,
    0% 100%,
    from(#0d343a),
    to(#ffffff99)
  );
  width: 1px;
  height: 89px;
  position: absolute;
  bottom: 200px;
  -webkit-animation: ${fall} 0.63s linear infinite;
  -moz-animation: ${fall} 0.63s linear infinite;
`;

const Rain = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const RainComponent = () => {
  const nbDrop = 858;

  const randRange = (minNum, maxNum) => {
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  };

  useEffect(() => {
    const rainContainer = document.querySelector(".rain");

    for (let i = 1; i < nbDrop; i++) {
      let dropLeft = randRange(0, 1600);
      let dropTop = randRange(-1000, 1400);

      const drop = document.createElement("div");
      drop.className = "drop";
      drop.style.left = `${dropLeft}px`;
      drop.style.top = `${dropTop}px`;

      rainContainer.appendChild(drop);
    }
  }, []);

  return (
    <Body>
      <Rain className="rain" />
    </Body>
  );
};

export default RainComponent;
