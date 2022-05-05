import React from "react";
import styled from "styled-components";
import CounterButton from "./CounterButton";

interface CounterInputProps {
  value: number;
  update: Function;
  modifier: number;
  title: string;
}

const SCounterInput = styled.div`
  margin: auto 0 18px;
  display: flex;
  justify-content: center;
`;

const CounterInput = ({
  value,
  update,
  modifier,
  title,
}: CounterInputProps) => {
  const maybeUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!isNaN(Number(value))) {
      update(Number(value));
    }
  };

  return (
    <SCounterInput>
      <CounterButton
        handleButtonClick={() => update(value - modifier)}
        symbol="-"
      />
      <input
        title={title}
        type="number"
        value={Number(value)}
        onChange={maybeUpdate}
      ></input>
      <CounterButton
        handleButtonClick={() => update(value + modifier)}
        symbol="+"
      />
    </SCounterInput>
  );
};

export default CounterInput;
