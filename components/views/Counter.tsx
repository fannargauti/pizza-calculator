import React from "react";
import styled from "styled-components";
import Button from "./Button";

interface CounterProps {
  value: number;
  update: Function;
  modifier: number;
  title: string;
}

const SCounter = styled.div`
  margin: 18px;
  display: flex;
  justify-content: center;
`;

const SCounterInput = styled.input`
  border: none;
  text-align: center;
  font-size: 32px;
  width: 70px;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
  }
`;

const SButtonContainer = styled.div`
  button {
    border-radius: 8%;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    font-size: 32px;
  }
`;

const Counter = ({ value, update, modifier, title }: CounterProps) => {
  const maybeUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!isNaN(Number(value))) {
      update(Number(value));
    }
  };

  return (
    <SCounter>
      <SButtonContainer>
        <Button onClick={() => update(value - modifier)}>−</Button>
      </SButtonContainer>
      <SCounterInput
        title={title}
        type="number"
        value={Number(value)}
        onChange={maybeUpdate}
      />
      <SButtonContainer>
        <Button onClick={() => update(value + modifier)}>+</Button>
      </SButtonContainer>
    </SCounter>
  );
};

export default Counter;
