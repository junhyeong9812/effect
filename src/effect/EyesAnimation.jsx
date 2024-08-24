import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

const eyelidAnimation = keyframes`
  0% {
    --eyelid: -50%;
    --eyelid2: 50%;
  }
  3% {
    --eyelid: 0%;
    --eyelid2: 0%;
  }
  6% {
    --eyelid: -50%;
    --eyelid2: 50%;
  }
  9%, 100% {
    --eyelid: 0%;
    --eyelid2: 0%;
  }
`;

const Body = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: black;
`;

const EyesContainer = styled.div`
  width: 250px;
  padding-block: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Eye = styled.div`
  position: relative;
  width: 90px;
  aspect-ratio: 1;
  background: white;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 116%;
    height: 165%;
    left: 50%;
    animation: ${eyelidAnimation} 5s ease-in-out infinite;
    z-index: 1;
  }

  &:before {
    top: 0;
    border-radius: 0% 0% 40% 40%;
    transform: translateY(var(--eyelid)) translateX(-50%);
    border-bottom: 40px solid black;
  }

  &:after {
    bottom: 0;
    border-radius: 40% 40% 0% 0%;
    transform: translateY(var(--eyelid2)) translateX(-50%);
    border-top: 40px solid black;
  }
`;

const Pupil = styled.i`
  position: absolute;
  width: 60px;
  aspect-ratio: 1;
  background: black;
  border-radius: 50%;
`;

const EyesAnimation = () => {
  const eyesRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const eyesContainer = eyesRef.current;
      const eyes = eyesContainer.querySelectorAll("div");

      if (!eyesContainer || eyes.length !== 2) return;

      const containerRect = eyesContainer.getBoundingClientRect();
      const containerCenterX = containerRect.left + containerRect.width / 2;
      const containerCenterY = containerRect.top + containerRect.height / 2;

      const angle = Math.atan2(
        e.clientY - containerCenterY,
        e.clientX - containerCenterX
      );
      const distance = Math.min(
        eyes[0].offsetWidth / 4,
        Math.sqrt(
          Math.pow(e.clientX - containerCenterX, 2) +
            Math.pow(e.clientY - containerCenterY, 2)
        )
      );

      const moveX = Math.cos(angle) * distance;
      const moveY = Math.sin(angle) * distance;

      eyes.forEach((eye) => {
        const eyeBall = eye.querySelector("i");
        eyeBall.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Body>
      <EyesContainer ref={eyesRef}>
        <Eye>
          <Pupil />
        </Eye>
        <Eye>
          <Pupil />
        </Eye>
      </EyesContainer>
    </Body>
  );
};

export default EyesAnimation;
