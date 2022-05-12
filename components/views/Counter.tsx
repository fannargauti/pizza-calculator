import React from "react";
import styled from "styled-components";
import CounterButton from "./CounterButton";

interface CounterProps {
  value: number;
  update: Function;
  modifier: number;
  title: string;
}

const SCounter = styled.div`
  margin: 0 18px;
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

const Counter = ({ value, update, modifier, title }: CounterProps) => {
  const maybeUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!isNaN(Number(value))) {
      update(Number(value));
    }
  };

  return (
    <SCounter>
      <CounterButton
        handleButtonClick={() => update(value - modifier)}
        symbol="-"
      />
      <SCounterInput
        title={title}
        type="number"
        value={Number(value)}
        onChange={maybeUpdate}
      />
      <CounterButton
        handleButtonClick={() => update(value + modifier)}
        symbol="+"
      />
    </SCounter>
  );
};

export default Counter;
