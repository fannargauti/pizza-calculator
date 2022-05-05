import CounterInput from "./CounterInput";

interface DoughWeightProps {
  doughWeight: number;
  setDoughWeight: Function;
}

const maybeUpdateDoughWeight = (
  nextDoughWeight: number,
  setDoughWeight: Function
) => {
  if (nextDoughWeight > 50) {
    setDoughWeight(nextDoughWeight);
  }
};

const DoughWeight = ({ doughWeight, setDoughWeight }: DoughWeightProps) => {
  const error = doughWeight < 50 && "Are you making pizzas for ants?";

  return (
    <>
      <h2>How big should your pizzas be?</h2>
      <CounterInput
        title="Pizza weight"
        value={doughWeight}
        modifier={5}
        update={(nextDoughWeight: number) =>
          maybeUpdateDoughWeight(nextDoughWeight, setDoughWeight)
        }
      />
      {error && <p>{error}</p>}
    </>
  );
};

export default DoughWeight;
