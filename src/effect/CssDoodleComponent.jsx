import React from "react";
import styled from "styled-components";

const Body = styled.div`
  height: 100%;
  margin: 0;
  background: #000;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CssDoodleComponent = () => {
  return (
    <Body>
      <css-doodle>
        {`
          :doodle {
            @grid: 12 / 50vmin 80vmin;
            perspective: 90vmin;
            perspective-origin: 0% -140%;
            transform: scale(.6);
          }
          :container {
            transform-style: preserve-3d;
            animation: camera 5s ease-in-out infinite;
            animation-direction: alternate-reverse;
          }
          --ds: @r(1.5s, 6s, .1);
          --size: @r(1, 9);
          --z: calc(@i() * .0001px + var(--size) * .1px);
          animation:
            move var(--ds) linear infinite,
            opacity var(--ds) linear infinite;
          animation-delay:
            calc((@row() - @size-row()) * var(--ds) / @size-row() - @r(@size()) * .1s);
          :after {
            content: '';
            @size: calc(var(--size) * 10%);
            background: @p(#00b8a9, #f8f3d4, #f6416c, #ffde7d);
          }
          position: absolute;
          left: calc(@col() * 100% / @size-row());
          @size: calc(100% / @size-row());
          @keyframes move {
            0% {
              transform:
                translate3d(0, 0, calc(var(--z) - 15vmin))
                rotateX(180deg) scaleY(.01);
            }
            10% {
              transform:
                translate3d(0, calc(10% * @size-row()), var(--z))
                rotateX(0) scaleY(.8);
            }
            90% {
              transform:
                translate3d(0, calc(90% * @size-row()), var(--z))
                scale(1);
            }
            100% {
              transform:
                translate3d(0, calc(100% * @size-row()), calc(var(--z) + 5vmin))
                scale(.5);
            }
          }
          @keyframes opacity {
            0%, 100% { opacity: 0; }
            10%, 90% { opacity: .9; }
          }
          @keyframes camera {
            from {
              transform: rotateX(-45deg) rotate(140deg) translateY(-10%);
            }
            to {
              transform: rotateX(-45deg) rotate(220deg) translateY(-10%);
            }
          }
        `}
      </css-doodle>
    </Body>
  );
};

export default CssDoodleComponent;
