import styled from "styled-components";

interface CounterButtonProps {
  symbol: "-" | "+";
  handleButtonClick: Function;
}

const SButton = styled.button`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  border: none;
  background-color: ${(props) => props.theme.red};
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const CounterButton = ({ symbol, handleButtonClick }: CounterButtonProps) => {
  return (
    <SButton type="button" onClick={() => handleButtonClick()}>
      {symbol}
    </SButton>
  );
};

export default CounterButton;
