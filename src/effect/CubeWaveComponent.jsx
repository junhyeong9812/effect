import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

// 'wave'라는 키프레임 애니메이션 정의
const wave = keyframes`
  0%, 100% {
      transform: scale(1);                   // 초기와 마지막 상태에서 크기는 1배
      background-color: #ff6ec4;             // 배경색은 핑크색 (#ff6ec4)
  }
  50% {
      transform: scale(2);                   // 애니메이션 중간에 크기를 2배로 확장
      background-color: #7873f5;             // 배경색은 보라색 (#7873f5)으로 변경
  }
`;

// Body라는 styled-component를 정의
const Body = styled.div`
  margin: 0; // 기본 마진 제거
  display: flex; // 플렉스 박스를 사용하여 내부 요소 정렬
  justify-content: center; // 가로 중앙 정렬
  align-items: center; // 세로 중앙 정렬
  height: 100vh; // 화면의 전체 높이를 차지
  background: #222; // 배경색을 어두운 회색 (#222)으로 설정
`;

// Container라는 styled-component를 정의
const Container = styled.div`
  display: grid; // 그리드 레이아웃을 사용하여 내부 요소 정렬
  grid-template-columns: repeat(5, 1fr); // 5개의 열을 균등한 너비로 설정
  gap: 20px; // 각 그리드 요소 간의 간격을 20px로 설정
`;

// Square라는 styled-component를 정의
const Square = styled.div`
  width: 50px; // 사각형의 너비 설정
  height: 50px; // 사각형의 높이 설정
  background-color: #ff6ec4; // 초기 배경색은 핑크색 (#ff6ec4)
  animation: ${wave} 3s ease-in-out infinite; // 'wave' 애니메이션을 3초 동안 반복
  transform-origin: center; // 변환 중심을 사각형의 중심으로 설정

  // 각 사각형에 대해 애니메이션 딜레이를 설정
  &:nth-child(1) {
    animation-delay: 0.2s;
  }
  &:nth-child(2) {
    animation-delay: 0.4s;
  }
  &:nth-child(3) {
    animation-delay: 0.6s;
  }
  &:nth-child(4) {
    animation-delay: 0.8s;
  }
  &:nth-child(5) {
    animation-delay: 1s;
  }
`;

// CubeWaveComponent라는 React 컴포넌트 정의
const CubeWaveComponent = () => {
  const squaresRef = useRef([]); // 사각형 요소들을 참조하기 위한 ref 배열

  useEffect(() => {
    const squares = squaresRef.current; // 모든 사각형 요소들 참조
    const colors = ["#ff6ec4", "#7873f5", "#f5b23a", "#3af5c8", "#f53a5c"]; // 사용할 색상 배열

    // 각 사각형에 대해 애니메이션 반복 시 색상을 무작위로 변경
    squares.forEach((square) => {
      square.addEventListener("animationiteration", () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)]; // 무작위 색상 선택
        square.style.backgroundColor = randomColor; // 선택된 색상으로 배경색 변경
      });
    });

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      squares.forEach((square) => {
        square.removeEventListener("animationiteration", null); // 이벤트 리스너 제거
      });
    };
  }, []);

  return (
    <Body>
      <Container>
        {[...Array(5)].map((_, index) => (
          <Square key={index} ref={(el) => (squaresRef.current[index] = el)} />
        ))}
      </Container>
    </Body>
  );
};

export default CubeWaveComponent;
