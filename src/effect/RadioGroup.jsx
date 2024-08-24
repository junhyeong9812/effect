import React, { useState } from "react";
import styled from "styled-components";

const Body = styled.div`
  padding: 50px;
  background-color: hsl(0, 0%, 20%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const RadioInput = styled.input`
  -webkit-appearance: none;
  display: block;
  margin: 10px;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  cursor: pointer;
  vertical-align: middle;
  box-shadow: hsla(0, 0%, 100%, 0.15) 0 1px 1px,
    inset hsla(0, 0%, 0%, 0.5) 0 0 0 1px;
  background-color: hsla(0, 0%, 0%, 0.2);
  background-image: -webkit-radial-gradient(
    hsla(200, 100%, 90%, 1) 0%,
    hsla(200, 100%, 70%, 1) 15%,
    hsla(200, 100%, 60%, 0.3) 28%,
    hsla(200, 100%, 30%, 0) 70%
  );
  background-repeat: no-repeat;
  -webkit-transition: background-position 0.15s cubic-bezier(0.8, 0, 1, 1),
    -webkit-transform 0.25s cubic-bezier(0.8, 0, 1, 1);
  outline: none;

  // 초기 상태에서 비어있는 스타일로 설정
  background-position: 0 24px;

  &:checked {
    background-position: 0 0;
    -webkit-transition: background-position 0.2s 0.15s
        cubic-bezier(0, 0, 0.2, 1),
      -webkit-transform 0.25s cubic-bezier(0, 0, 0.2, 1);
  }

  &:active {
    -webkit-transform: scale(1.5);
    -webkit-transition: -webkit-transform 0.1s cubic-bezier(0, 0, 0.2, 1);
  }
`;

const RadioGroup = () => {
  const [selectedValue, setSelectedValue] = useState(null); // 초기값을 null로 설정

  // 임의의 배열 생성
  const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];

  return (
    <Body>
      {options.map((option, index) => (
        <label key={index}>
          <RadioInput
            type="radio"
            name="name"
            value={option}
            checked={selectedValue === option}
            onChange={() => setSelectedValue(option)}
          />
          {option}
        </label>
      ))}
    </Body>
  );
};

export default RadioGroup;
