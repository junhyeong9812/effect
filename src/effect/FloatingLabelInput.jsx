import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  width: min(325px, 80vw);
  display: grid;
  align-items: center;

  & > * {
    grid-column: 1;
    grid-row: 1;
    font: 1.1rem futura, helvetica, sans-serif;
    color: var(--white);
  }

  input {
    position: relative;
    border: 1.5px solid var(--white);
    border-radius: 0.25rem;
    outline: none;
    background-color: transparent;
    color: var(--white);
    padding: 1rem;
    z-index: 0;
    transition: border-color 0.5s;

    &:focus {
      border-color: var(--primary);
    }

    &:focus ~ span,
    &:not(:placeholder-shown) ~ span {
      transform: translateY(-1.8rem) scale(0.75);
      padding: 0 0.25rem;
      color: var(--white);
    }
  }

  span {
    width: max-content;
    background-color: var(--bg);
    margin-left: 1rem;
    color: var(--placeholder);
    transition: transform 0.5s;
  }
`;

const Body = styled.div`
  height: 100vh;
  height: 100svh;
  display: grid;
  place-items: center;
  background-color: var(--bg);
`;

const FloatingLabelInput = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <Body>
      <Wrapper>
        <input
          type="text"
          placeholder=""
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <span>Enter your email</span>
      </Wrapper>
    </Body>
  );
};

export default FloatingLabelInput;
