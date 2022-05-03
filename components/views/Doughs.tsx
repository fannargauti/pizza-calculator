import CounterInput from "./CounterInput";

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
      <CounterInput
        title="Number of doughs"
        value={numberOfDoughs}
        modifier={1}
        update={(nextNumberOfDoughs: number) =>
          maybeUpdateNumberOfDoughs(nextNumberOfDoughs, setNumberOfDoughs)
        }
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default Doughs;
