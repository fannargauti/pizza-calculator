interface DoughsProps {
  numberOfDoughs: number;
  setNumberOfDoughs: Function;
}

const maybeUpdateNumberOfDoughs = (
  nextNumberOfDoughs: number,
  setNumberOfDoughs: Function
) => {
  if (nextNumberOfDoughs > -1) {
    setNumberOfDoughs(nextNumberOfDoughs);
  }
};

const Doughs = ({ numberOfDoughs, setNumberOfDoughs }: DoughsProps) => {
  const error = numberOfDoughs === 0 && "Making zero pizzas is no fun";

  return (
    <div>
      <h2>How many pizzas do you want to make?</h2>
      <button
        onClick={() =>
          maybeUpdateNumberOfDoughs(numberOfDoughs - 1, setNumberOfDoughs)
        }
      >
        -
      </button>
      <input
        title="noDoughs"
        type="number"
        min="0"
        value={numberOfDoughs.toString()}
      />
      <button
        onClick={() =>
          maybeUpdateNumberOfDoughs(numberOfDoughs + 1, setNumberOfDoughs)
        }
      >
        +
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Doughs;
