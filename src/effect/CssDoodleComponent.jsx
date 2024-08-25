import React from "react";
import styled from "styled-components";

// Body라는 styled-component를 정의
const Body = styled.div`
  height: 100%; // 화면의 전체 높이를 차지
  margin: 0; // 기본 마진 제거
  background: #000; // 배경색을 검정색으로 설정
  overflow: hidden; // 컨텐츠가 넘치지 않도록 숨김
  display: flex; // 플렉스 박스를 사용하여 내부 요소 정렬
  align-items: center; // 세로 중앙 정렬
  justify-content: center; // 가로 중앙 정렬
`;

// CssDoodleComponent라는 React 컴포넌트 정의
const CssDoodleComponent = () => {
  return (
    <Body>
      <css-doodle>
        {`
          :doodle {
            @grid: 12 / 50vmin 80vmin;           // 12x12 그리드 설정, 각 셀의 크기를 50vmin x 80vmin으로 지정
            perspective: 90vmin;                 // 3D 투시 원근법 설정
            perspective-origin: 0% -140%;        // 원근법의 기준점을 설정 (x: 0%, y: -140%)
            transform: scale(.6);                // 전체 크기를 60%로 축소
          }
          :container {
            transform-style: preserve-3d;        // 자식 요소들을 3D로 유지
            animation: camera 5s ease-in-out infinite;  // 'camera' 애니메이션을 5초 동안 반복, 부드럽게 시작 및 끝남
            animation-direction: alternate-reverse;     // 애니메이션 방향을 번갈아가며 역방향으로 실행
          }
          --ds: @r(1.5s, 6s, .1);                // 각 셀의 애니메이션 지속 시간을 무작위로 설정
          --size: @r(1, 9);                      // 셀의 크기를 무작위로 설정
          --z: calc(@i() * .0001px + var(--size) * .1px); // 셀의 z-index 위치를 계산
          animation:
            move var(--ds) linear infinite,      // 'move' 애니메이션을 무한 반복
            opacity var(--ds) linear infinite;   // 'opacity' 애니메이션을 무한 반복
          animation-delay:
            calc((@row() - @size-row()) * var(--ds) / @size-row() - @r(@size()) * .1s);  // 애니메이션 딜레이를 계산하여 설정
          :after {
            content: '';                         // 비어 있는 콘텐츠를 추가
            @size: calc(var(--size) * 10%);      // 셀의 크기를 계산하여 설정
            background: @p(#00b8a9, #f8f3d4, #f6416c, #ffde7d); // 무작위 색상 선택
          }
          position: absolute;                    // 절대 위치 지정으로 부모 컨테이너 내에서 자유롭게 이동 가능
          left: calc(@col() * 100% / @size-row()); // 셀의 가로 위치를 계산하여 설정
          @size: calc(100% / @size-row());       // 셀의 크기를 계산하여 설정
          @keyframes move {
            0% {
              transform:
                translate3d(0, 0, calc(var(--z) - 15vmin))  // 처음에는 셀이 약간 뒤로 이동
                rotateX(180deg) scaleY(.01);                 // X축으로 180도 회전하고 Y축으로 축소
            }
            10% {
              transform:
                translate3d(0, calc(10% * @size-row()), var(--z)) // 셀이 앞으로 이동
                rotateX(0) scaleY(.8);                            // 회전 복귀 및 크기 확대
            }
            90% {
              transform:
                translate3d(0, calc(90% * @size-row()), var(--z)) // 셀이 계속 이동
                scale(1);                                         // 원래 크기로 확장
            }
            100% {
              transform:
                translate3d(0, calc(100% * @size-row()), calc(var(--z) + 5vmin)) // 셀이 앞으로 더 이동
                scale(.5);                                          // 다시 축소
            }
          }
          @keyframes opacity {
            0%, 100% { opacity: 0; }           // 처음과 끝에서는 투명
            10%, 90% { opacity: .9; }          // 중간 부분에서는 약간 불투명
          }
          @keyframes camera {
            from {
              transform: rotateX(-45deg) rotate(140deg) translateY(-10%); // 카메라 초기 위치 및 회전
            }
            to {
              transform: rotateX(-45deg) rotate(220deg) translateY(-10%); // 카메라 최종 위치 및 회전
            }
          }
        `}
      </css-doodle>
    </Body>
  );
};

export default CssDoodleComponent;
