interface CounterButtonProps {
  symbol: "-" | "+";
  handleButtonClick: Function;
}

const CounterButton = ({ symbol, handleButtonClick }: CounterButtonProps) => {
  return (
    <button type="button" onClick={() => handleButtonClick()}>
      {symbol}
    </button>
  );
};

export default CounterButton;
