import React from "react";
import styled, { keyframes } from "styled-components";

// rotateCube라는 키프레임 애니메이션 정의
const rotateCube = keyframes`
  0%, 100% {
      transform: rotateX(0deg) rotateY(0deg);  // 초기 상태와 마지막 상태는 회전 없음
  }
  20% {
      transform: rotateX(45deg) rotateY(45deg);  // X와 Y축을 각각 45도 회전
  }
  40% {
      transform: rotateX(0deg) rotateY(90deg) scaleX(0.7) scaleY(0.7) scaleZ(1.2);  // X축은 회전 없음, Y축은 90도 회전, 크기 조정
      background-color: #ff6ec4;  // 배경색을 핑크(#ff6ec4)로 변경
  }
  60% {
      transform: rotateX(-45deg) rotateY(135deg) scaleX(1) scaleY(0.7) scaleZ(0.7);  // X축을 -45도, Y축을 135도 회전하고 크기 조정
      background-color: #f5b23a;  // 배경색을 오렌지(#f5b23a)로 변경
  }
  80% {
      transform: rotateX(0deg) rotateY(180deg) scale(1);  // X축 회전 없음, Y축을 180도 회전, 원래 크기로 복귀
      background-color: #3af5c8;  // 배경색을 민트색(#3af5c8)으로 변경
  }
`;

// Body라는 styled-component를 정의
const Body = styled.div`
  margin: 0; // 기본 마진 제거
  display: flex; // 플렉스 박스를 사용하여 내부 요소 정렬
  justify-content: center; // 가로 중앙 정렬
  align-items: center; // 세로 중앙 정렬
  height: 100vh; // 화면의 전체 높이를 차지
  background-color: #1a1a1a; // 배경색을 어두운 회색(#1a1a1a)으로 설정
  perspective: 1000px; // 3D 효과를 위한 원근법 설정
`;

// Scene이라는 styled-component를 정의
const Scene = styled.div`
  width: 150px; // 큐브의 너비 설정
  height: 150px; // 큐브의 높이 설정
  position: relative; // 자식 요소를 위한 상대 위치 지정
  transform-style: preserve-3d; // 자식 요소들을 3D로 유지
  animation: ${rotateCube} 8s infinite ease-in-out; // 'rotateCube' 애니메이션을 8초 동안 반복
`;

// Face라는 styled-component를 정의 (큐브의 각 면을 위한 기본 스타일)
const Face = styled.div`
  position: absolute; // 절대 위치 지정으로 부모 컨테이너 내에서 자유롭게 이동 가능
  width: 150px; // 각 면의 너비 설정
  height: 150px; // 각 면의 높이 설정
  background-color: #61dafb; // 기본 배경색을 밝은 파란색(#61dafb)으로 설정
  border: 2px solid #fff; // 흰색 테두리 추가
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); // 약간의 그림자 효과 추가
  backface-visibility: hidden; // 뒤쪽 면이 보이지 않도록 설정
`;

// 큐브의 앞면 정의
const Front = styled(Face)`
  transform: rotateY(0deg) translateZ(75px); // 앞면을 Z축으로 75px 이동
`;

// 큐브의 뒷면 정의
const Back = styled(Face)`
  transform: rotateY(180deg) translateZ(75px); // 뒷면을 Y축으로 180도 회전하고 Z축으로 75px 이동
`;

// 큐브의 왼쪽 면 정의
const Left = styled(Face)`
  transform: rotateY(-90deg) translateZ(75px); // 왼쪽 면을 Y축으로 -90도 회전하고 Z축으로 75px 이동
`;

// 큐브의 오른쪽 면 정의
const Right = styled(Face)`
  transform: rotateY(90deg) translateZ(75px); // 오른쪽 면을 Y축으로 90도 회전하고 Z축으로 75px 이동
`;

// 큐브의 윗면 정의
const Top = styled(Face)`
  transform: rotateX(90deg) translateZ(75px); // 윗면을 X축으로 90도 회전하고 Z축으로 75px 이동
`;

// 큐브의 아랫면 정의
const Bottom = styled(Face)`
  transform: rotateX(-90deg) translateZ(75px); // 아랫면을 X축으로 -90도 회전하고 Z축으로 75px 이동
`;

// CubeComponent라는 React 컴포넌트 정의
const CubeComponent = () => (
  <Body>
    <Scene>
      <Front />
      <Back />
      <Left />
      <Right />
      <Top />
      <Bottom />
    </Scene>
  </Body>
);

export default CubeComponent;
