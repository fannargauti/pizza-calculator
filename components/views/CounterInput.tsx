import React, { SyntheticEvent } from "react";
import CounterButton from "./CounterButton";

interface CounterInputProps {
  value: number;
  update: Function;
  modifier: number;
  title: string;
}

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
    <div>
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
    </div>
  );
};

export default CounterInput;
