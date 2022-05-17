import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Label from "./Label";

interface CounterProps {
  value: number;
  update: Function;
  modifier: number;
  title: string;
  label: string;
  measurement?: string;
}

const SCounter = styled.div`
  margin: 18px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  align-items: center;
`;

const SCounterInput = styled.input`
  border: none;
  text-align: center;
  font-size: 32px;
  width: 126px;
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

const SCounterToggles = styled.div`
  display: flex;
`;

const Counter = ({
  value,
  update,
  modifier,
  title,
  label,
  measurement = "",
}: CounterProps) => {
  const maybeUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!isNaN(Number(value))) {
      update(Number(value));
    }
  };

  return (
    <SCounter>
      <Label htmlFor={title}>{label}</Label>
      <SCounterToggles>
        <SButtonContainer>
          <Button onClick={() => update(value - modifier)}>−</Button>
        </SButtonContainer>
        <SCounterInput
          title={title}
          type="text"
          value={`${Number(value)}${measurement}`}
          readOnly
        />
        <SButtonContainer>
          <Button onClick={() => update(value + modifier)}>+</Button>
        </SButtonContainer>
      </SCounterToggles>
    </SCounter>
  );
};

export default Counter;
