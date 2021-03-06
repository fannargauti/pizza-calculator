import React, { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import styled, { useTheme } from "styled-components";
import Button from "./Button";
import Label from "./Label";

interface CounterProps {
  value: number;
  update: Function;
  modifier: number;
  title: string;
  label: string;
  tooltip?: string;
  measurement?: string;
  extraInfo?: string | null | undefined;
}

const SCounter = styled.div`
  margin: 18px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  align-items: center;
`;

const STooltipIndicator = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  margin-left: 4px;
  border: 1px solid ${(props) => props.theme.blue};
  border-radius: 50%;
  color: ${(props) => props.theme.blue};
  text-align: center;
`;

const SCounterInput = styled.input`
  border: none;
  text-align: center;
  font-size: 32px;
  font-family: inherit;
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
  align-items: center;
`;

const SExtraInfo = styled.p`
  text-align: center;
  color: #707070;

  margin: 0;
`;

const Counter = ({
  value,
  update,
  modifier,
  title,
  label,
  tooltip,
  measurement = "",
  extraInfo,
}: CounterProps) => {
  const [isMounted, setMount] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <SCounter>
      <Label htmlFor={title}>
        {label}
        {isMounted && tooltip && (
          <div>
            <STooltipIndicator data-tip data-for={title}>
              <pre>i</pre>
            </STooltipIndicator>
            <ReactTooltip
              // @ts-ignore: Todo type styled-component theme
              backgroundColor={theme.blue}
              place="top"
              effect="solid"
              id={title}
            >
              {tooltip}
            </ReactTooltip>
          </div>
        )}
      </Label>
      <SCounterToggles>
        <SButtonContainer>
          <Button onClick={() => update(value - modifier)}>???</Button>
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
      {extraInfo && <SExtraInfo>{extraInfo}</SExtraInfo>}
    </SCounter>
  );
};

export default Counter;
