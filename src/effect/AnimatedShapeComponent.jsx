import React from "react";
import styled, { keyframes } from "styled-components";

// 'moveMorph'라는 키프레임 애니메이션 정의
const moveMorph = keyframes`
  0% {
    transform: translate(0, 0) rotate(0deg);  // 원래 위치에서 시작하고 회전 없음
    background-color: #ff6347;               // 초기 배경색은 토마토색 (#ff6347)
    border-radius: 0;                         // 테두리 반경 없음, 따라서 모양은 사각형
    box-shadow: 0 0 10px #ff6347, 0 0 20px #ff6347, 0 0 30px #ff6347;  // 동일한 색상의 그림자 효과로 글로우 효과 적용
  }
  25% {
    transform: translate(100px, 0) rotate(45deg);  // 오른쪽으로 100px 이동하고 45도 회전
    background-color: #ffa07a;                    // 배경색을 라이트살몬색 (#ffa07a)으로 변경
    border-radius: 25%;                           // 모서리를 약간 둥글게 설정
    box-shadow: 0 0 10px #ffa07a, 0 0 20px #ffa07a, 0 0 30px #ffa07a;  // 새로운 색상에 맞춘 그림자 효과
  }
  50% {
    transform: translate(100px, 100px) rotate(90deg);  // 오른쪽 아래로 100px 이동하고 90도 회전
    background-color: #20b2aa;                        // 배경색을 라이트시안색 (#20b2aa)으로 변경
    border-radius: 50%;                               // 모서리를 완전히 둥글게 설정 (원형)
    box-shadow: 0 0 10px #20b2aa, 0 0 20px #20b2aa, 0 0 30px #20b2aa;  // 새로운 색상에 맞춘 그림자 효과
  }
  75% {
    transform: translate(0, 100px) rotate(135deg);    // 왼쪽으로 100px 이동하고 135도 회전
    background-color: #3cb371;                        // 배경색을 미디엄시그린색 (#3cb371)으로 변경
    border-radius: 25%;                               // 모서리를 다시 약간 둥글게 설정
    box-shadow: 0 0 10px #3cb371, 0 0 20px #3cb371, 0 0 30px #3cb371;  // 새로운 색상에 맞춘 그림자 효과
  }
  100% {
    transform: translate(0, 0) rotate(180deg);        // 원래 위치로 돌아가고 180도 회전
    background-color: #ff6347;                       // 배경색을 다시 토마토색 (#ff6347)으로 변경
    border-radius: 0;                                 // 테두리 반경 없음, 모양이 다시 사각형으로 변환
    box-shadow: 0 0 10px #ff6347, 0 0 20px #ff6347, 0 0 30px #ff6347;  // 원래 색상에 맞춘 그림자 효과
  }
`;

// Body라는 styled-component를 정의
const Body = styled.div`
  margin: 0;
  height: 100vh; // 화면의 전체 높이를 차지
  display: flex; // 플렉스 박스를 사용하여 내부 요소 정렬
  justify-content: center; // 가로 중앙 정렬
  align-items: center; // 세로 중앙 정렬
  background-color: #1e1e1e; // 배경색을 어두운 회색 (#1e1e1e)으로 설정
  overflow: hidden; // 컨텐츠가 넘치지 않도록 숨김
`;

// Container라는 styled-component를 정의
const Container = styled.div`
  position: relative; // 자식 요소를 위한 상대 위치 지정
  width: 200px;
  height: 200px;
`;

// Shape라는 styled-component를 정의
const Shape = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ff6347; // 초기 배경색은 토마토색 (#ff6347)
  position: absolute; // 절대 위치 지정으로 부모 컨테이너 내에서 자유롭게 이동 가능
  animation: ${moveMorph} 5s infinite alternate ease-in-out; // 'moveMorph' 애니메이션을 5초 동안 무한 반복, 애니메이션은 앞뒤로 진행
`;

// React 컴포넌트 정의
const AnimatedShapeComponent = () => {
  return (
    <Body>
      <Container>
        <Shape />
      </Container>
    </Body>
  );
};

export default AnimatedShapeComponent;
