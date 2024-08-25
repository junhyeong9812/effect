import React, { useEffect, useRef } from "react";
import styled from "styled-components";

// Body라는 styled-component를 정의
const Body = styled.div`
  margin: 0; // 기본 마진 제거
  overflow: hidden; // 컨텐츠가 넘치지 않도록 숨김
  background-color: #222; // 배경색을 어두운 회색 (#222)으로 설정
  position: relative; // 자식 요소를 위한 상대 위치 지정
  width: 100vw; // 뷰포트의 전체 너비를 차지
  height: 100vh; // 뷰포트의 전체 높이를 차지
`;

// Ball이라는 styled-component를 정의
const Ball = styled.div`
  position: absolute; // 절대 위치 지정으로 부모 컨테이너 내에서 자유롭게 이동 가능
  width: 50px; // 공의 너비를 50px로 설정
  height: 50px; // 공의 높이를 50px로 설정
  border-radius: 50%; // 완전한 원형이 되도록 테두리 반경을 50%로 설정
  background-color: #fff; // 배경색을 흰색으로 설정
`;

const BouncingBalls = () => {
  const bodyRef = useRef(null); // Body 요소에 접근하기 위한 ref 생성
  const width = window.innerWidth; // 브라우저 창의 너비 저장
  const height = window.innerHeight; // 브라우저 창의 높이 저장
  const numBalls = 30; // 생성할 공의 개수를 30개로 설정

  // 무작위 색상을 생성하는 함수
  const getRandomColor = () => {
    return `hsl(${Math.random() * 360}, 70%, 50%)`; // 무작위 색상의 hsl 값을 반환
  };

  // 새로운 공을 생성하는 함수
  const createBall = () => {
    const ball = document.createElement("div"); // 새로운 div 요소 생성
    ball.classList.add("ball"); // "ball" 클래스 추가
    ball.style.left = `${Math.random() * (width - 50)}px`; // 화면 내 임의의 위치에 공을 배치 (너비 범위)
    ball.style.top = `${Math.random() * (height - 50)}px`; // 화면 내 임의의 위치에 공을 배치 (높이 범위)
    ball.style.backgroundColor = getRandomColor(); // 공의 배경색을 무작위 색상으로 설정
    return ball; // 생성된 공을 반환
  };

  // 공을 애니메이션하는 함수
  const animateBall = (ball) => {
    let dx = (Math.random() - 0.5) * 8; // 공의 가로 방향 속도 설정 (무작위 값)
    let dy = (Math.random() - 0.5) * 8; // 공의 세로 방향 속도 설정 (무작위 값)

    const moveBall = () => {
      let x = parseFloat(ball.style.left); // 현재 공의 가로 위치
      let y = parseFloat(ball.style.top); // 현재 공의 세로 위치

      // 공이 가로 경계를 넘으면 반대 방향으로 이동하고 색상 변경
      if (x + dx > width - 50 || x + dx < 0) {
        dx = -dx;
        ball.style.backgroundColor = getRandomColor();
      }
      // 공이 세로 경계를 넘으면 반대 방향으로 이동하고 색상 변경
      if (y + dy > height - 50 || y + dy < 0) {
        dy = -dy;
        ball.style.backgroundColor = getRandomColor();
      }

      ball.style.left = `${x + dx}px`; // 새로운 가로 위치로 공 이동
      ball.style.top = `${y + dy}px`; // 새로운 세로 위치로 공 이동

      requestAnimationFrame(moveBall); // 애니메이션 프레임 요청 (무한 루프)
    };

    moveBall(); // 공 이동 시작
  };

  // 컴포넌트가 처음 렌더링될 때 실행되는 useEffect 훅
  useEffect(() => {
    const balls = [];
    for (let i = 0; i < numBalls; i++) {
      // numBalls 만큼의 공을 생성
      const ball = createBall(); // 공 생성
      balls.push(ball); // 생성된 공을 배열에 추가
      if (bodyRef.current) {
        // Body 요소가 존재하는 경우
        bodyRef.current.appendChild(ball); // Body 요소에 공 추가
      }
      animateBall(ball); // 공 애니메이션 시작
    }

    // 컴포넌트가 언마운트될 때 실행되는 정리 함수
    return () => {
      balls.forEach((ball) => {
        // 각 공에 대해
        if (ball.parentNode) {
          ball.parentNode.removeChild(ball); // Body 요소에서 공 제거
        }
      });
    };
  }, []); // 빈 배열을 전달하여 한 번만 실행되도록 설정

  return <Body ref={bodyRef} />; // Body 요소에 ref 연결하여 반환
};

export default BouncingBalls;
