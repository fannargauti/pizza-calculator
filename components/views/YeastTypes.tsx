import styled from "styled-components";
import { YeastType } from "../../types/common";

interface TYeastTypes {
  selectedYeast: YeastType;
  setSelectedYeastType: Function;
}

interface IStyledYeastButton {
  selected: boolean;
}

const SYeastButton = styled.button<IStyledYeastButton>`
  color: ${(props) => (props.selected ? "white" : props.theme.blue)};
  background-color: ${(props) => (props.selected ? props.theme.blue : "white")};
  font-size: 32px;
  border: none;
  outline: 2px solid ${(props) => props.theme.blue};
  transition: all 0.1s ease-in-out;
  padding: 32px;
`;

const SYeastButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
`;

const YeastTypes = ({ selectedYeast, setSelectedYeastType }: TYeastTypes) => {
  const YEAST_TYPES: Array<YeastType> = [
    "Active dry yeast",
    "Fresh yeast",
    "Sourdough",
  ];
  return (
    <>
      <h2>Select your yeast type</h2>
      <SYeastButtonsContainer>
        {YEAST_TYPES.map((yeast) => {
          return (
            <>
              <SYeastButton
                title="Yeast type"
                selected={selectedYeast === yeast}
                onClick={() => setSelectedYeastType(yeast)}
              >
                {yeast}
              </SYeastButton>
            </>
          );
        })}
      </SYeastButtonsContainer>
    </>
  );
};

export default YeastTypes;
