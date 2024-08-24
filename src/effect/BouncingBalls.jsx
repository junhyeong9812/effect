import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Body = styled.div`
  margin: 0;
  overflow: hidden;
  background-color: #222;
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const Ball = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
`;

const BouncingBalls = () => {
  const bodyRef = useRef(null);
  const width = window.innerWidth;
  const height = window.innerHeight;
  const numBalls = 30;

  const getRandomColor = () => {
    return `hsl(${Math.random() * 360}, 70%, 50%)`;
  };

  const createBall = () => {
    const ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.left = `${Math.random() * (width - 50)}px`;
    ball.style.top = `${Math.random() * (height - 50)}px`;
    ball.style.backgroundColor = getRandomColor();
    return ball;
  };

  const animateBall = (ball) => {
    let dx = (Math.random() - 0.5) * 8;
    let dy = (Math.random() - 0.5) * 8;

    const moveBall = () => {
      let x = parseFloat(ball.style.left);
      let y = parseFloat(ball.style.top);

      if (x + dx > width - 50 || x + dx < 0) {
        dx = -dx;
        ball.style.backgroundColor = getRandomColor();
      }
      if (y + dy > height - 50 || y + dy < 0) {
        dy = -dy;
        ball.style.backgroundColor = getRandomColor();
      }

      ball.style.left = `${x + dx}px`;
      ball.style.top = `${y + dy}px`;

      requestAnimationFrame(moveBall);
    };

    moveBall();
  };

  useEffect(() => {
    const balls = [];
    for (let i = 0; i < numBalls; i++) {
      const ball = createBall();
      balls.push(ball);
      if (bodyRef.current) {
        bodyRef.current.appendChild(ball);
      }
      animateBall(ball);
    }

    return () => {
      balls.forEach((ball) => {
        if (ball.parentNode) {
          ball.parentNode.removeChild(ball);
        }
      });
    };
  }, []);

  return <Body ref={bodyRef} />;
};

export default BouncingBalls;
