import React from "react";
import styled, { keyframes } from "styled-components";

// 'bounce'라는 키프레임 애니메이션 정의
const bounce = keyframes`
  0%, 100% {
    top: 0;                                // 애니메이션 시작과 끝에서 공은 원래 위치 (위쪽) 에 있음
    animation-timing-function: ease-in;    // 시작과 끝 부분의 애니메이션 속도를 조절하여 부드럽게 시작
  }
  50% {
    top: 200px;                            // 애니메이션 중간에 공이 200px 아래로 이동
    animation-timing-function: ease-out;   // 중간 부분에서 애니메이션 속도를 조절하여 부드럽게 끝남
  }
`;

// Body라는 styled-component를 정의
const Body = styled.div`
  display: flex; // 플렉스 박스를 사용하여 내부 요소 정렬
  justify-content: center; // 가로 중앙 정렬
  align-items: center; // 세로 중앙 정렬
  height: 100vh; // 화면의 전체 높이를 차지
  margin: 0; // 기본 마진 제거
  background-color: #000000; // 배경색을 검정색으로 설정
  overflow: hidden; // 컨텐츠가 넘치지 않도록 숨김
`;

// Ball이라는 styled-component를 정의
const Ball = styled.div`
  width: 50px; // 공의 너비를 50px로 설정
  height: 50px; // 공의 높이를 50px로 설정
  background-color: #ff6347; // 배경색을 토마토색 (#ff6347)으로 설정
  border-radius: 50%; // 완전한 원형이 되도록 테두리 반경을 50%로 설정
  position: relative; // 상대 위치 지정으로 상하로 이동할 수 있게 함
  animation: ${bounce} 2s infinite; // 'bounce' 애니메이션을 2초 동안 무한 반복
`;

// React 컴포넌트 정의
const BouncingBall = () => {
  return (
    <Body>
      <Ball />
    </Body>
  );
};

export default BouncingBall;
