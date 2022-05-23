import styled from "styled-components";
import { YeastType } from "../../types/common";
import Header from "./Header";

interface TYeastTypes {
  yeastType: YeastType;
  setyeastTypeType: Function;
}

interface IStyledYeastButton {
  selected: boolean;
}

const SYeastButton = styled.button<IStyledYeastButton>`
  color: ${(props) => (props.selected ? "white" : props.theme.blue)};
  background-color: ${(props) => (props.selected ? props.theme.blue : "white")};
  font-size: 28px;
  border: none;
  border-style: intial;
  transition: all 0.1s ease-in-out;
  padding: 32px;
  margin: 0;
  border: 2px solid ${(props) => props.theme.blue};
  border-bottom: none;
  font-family: inherit;

  &:last-child {
    border-bottom: 2px solid ${(props) => props.theme.blue};
  }
`;

const SYeastButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const YeastTypes = ({ yeastType, setyeastTypeType }: TYeastTypes) => {
  const YEAST_TYPES: Array<YeastType> = [
    "Active dry yeast",
    "Fresh yeast",
    "Sourdough",
  ];
  return (
    <>
      <Header>Yeast type</Header>
      <SYeastButtonsContainer>
        {YEAST_TYPES.map((yeast) => {
          return (
            <SYeastButton
              key={yeast}
              title="Yeast type"
              selected={yeastType === yeast}
              onClick={() => setyeastTypeType(yeast)}
            >
              {yeast}
            </SYeastButton>
          );
        })}
      </SYeastButtonsContainer>
    </>
  );
};

export default YeastTypes;
