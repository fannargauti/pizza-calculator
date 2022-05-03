import React, { SyntheticEvent } from "react";

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
      update(value);
    }
  };

  return (
    <div>
      <button type="button" onClick={() => update(value - modifier)}>
        -
      </button>
      <input
        title={title}
        type="number"
        value={value}
        onChange={maybeUpdate}
      ></input>
      <button type="button" onClick={() => update(value + modifier)}>
        +
      </button>
    </div>
  );
};

export default CounterInput;
