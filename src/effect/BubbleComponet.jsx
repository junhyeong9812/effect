import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

// 'float'라는 키프레임 애니메이션 정의
const float = keyframes`
  0% {
    transform: translateY(0) scale(1);  // 애니메이션 시작 시 원래 위치에서 크기 1배로 시작
    opacity: 1;                         // 완전한 불투명도에서 시작
  }
  100% {
    transform: translateY(-1000px) scale(1.5);  // 애니메이션 끝에서 1000px 위로 이동하고 크기는 1.5배로 커짐
    opacity: 0;                                // 투명해짐
  }
`;

// Body라는 styled-component를 정의
const Body = styled.div`
  background: linear-gradient(
    135deg,
    #1e3c72 0%,
    #2a5298 100%
  ); // 파란색 그라데이션 배경 설정
  overflow: hidden; // 컨텐츠가 넘치지 않도록 숨김
  height: 100vh; // 화면의 전체 높이를 차지
  display: flex; // 플렉스 박스를 사용하여 내부 요소 정렬
  justify-content: center; // 가로 중앙 정렬
  align-items: center; // 세로 중앙 정렬
  position: relative; // 자식 요소를 위한 상대 위치 지정
`;

// Bubble이라는 styled-component를 정의
const Bubble = styled.div`
  position: absolute; // 절대 위치 지정으로 부모 컨테이너 내에서 자유롭게 이동 가능
  bottom: -100px; // 화면 아래쪽에서 시작
  border-radius: 50%; // 완전한 원형이 되도록 테두리 반경을 50%로 설정
  background: rgba(255, 255, 255, 0.5); // 반투명 흰색 배경 설정
  animation: ${float} 5s ease-in infinite; // 'float' 애니메이션을 5초 동안 ease-in으로 무한 반복
  width: ${(props) => props.size}px; // 버블의 크기를 동적으로 설정
  height: ${(props) => props.size}px; // 버블의 크기를 동적으로 설정
  left: ${(props) =>
    props.left}vw; // 뷰포트 너비의 비율에 따라 버블의 위치를 동적으로 설정
  animation-duration: ${(props) =>
    props.duration}s; // 애니메이션 지속 시간을 동적으로 설정
`;

// BubbleComponent라는 React 컴포넌트 정의
const BubbleComponent = () => {
  const [bubbles, setBubbles] = useState([]); // 상태 변수 'bubbles'를 배열로 초기화

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newBubble = {
        id: Math.random(), // 고유 ID로 사용될 무작위 숫자 생성
        size: Math.random() * 60 + 20, // 20px에서 80px 사이의 무작위 크기 생성
        left: Math.random() * 100, // 0에서 100vw 사이의 무작위 위치 설정
        duration: Math.random() * 3 + 3, // 3초에서 6초 사이의 무작위 애니메이션 시간 설정
      };
      setBubbles((bubbles) => [...bubbles, newBubble]); // 새 버블을 기존 버블 배열에 추가
      setTimeout(() => {
        setBubbles((bubbles) =>
          bubbles.filter((bubble) => bubble.id !== newBubble.id)
        ); // 5초 후에 해당 버블을 제거하여 메모리 누수를 방지
      }, 5000);
    }, 500); // 0.5초마다 새로운 버블 생성

    return () => {
      clearInterval(intervalId); // 컴포넌트 언마운트 시 인터벌 제거
    };
  }, []);

  return (
    <Body>
      {bubbles.map((bubble) => (
        <Bubble
          key={bubble.id} // 버블의 고유 ID를 key로 사용
          size={bubble.size} // 버블의 크기를 설정
          left={bubble.left} // 버블의 위치를 설정
          duration={bubble.duration} // 버블의 애니메이션 시간을 설정
        />
      ))}
    </Body>
  );
};

export default BubbleComponent;
