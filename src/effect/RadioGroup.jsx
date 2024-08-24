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

  &:checked {
    -webkit-transition: background-position 0.2s 0.15s
        cubic-bezier(0, 0, 0.2, 1),
      -webkit-transform 0.25s cubic-bezier(0, 0, 0.2, 1);
  }

  &:active {
    -webkit-transform: scale(1.5);
    -webkit-transition: -webkit-transform 0.1s cubic-bezier(0, 0, 0.2, 1);
  }

  &:checked,
  &:active {
    background-position: 0 24px;
  }

  &:checked {
    background-position: 0 0;
  }

  &:checked ~ &,
  &:checked ~ &:active {
    background-position: 0 -24px;
  }
`;

const RadioGroup = () => {
  const [selectedValue, setSelectedValue] = useState(0);

  return (
    <Body>
      {[...Array(5)].map((_, index) => (
        <RadioInput
          key={index}
          type="radio"
          name="name"
          checked={selectedValue === index}
          onChange={() => setSelectedValue(index)}
        />
      ))}
    </Body>
  );
};

export default RadioGroup;
