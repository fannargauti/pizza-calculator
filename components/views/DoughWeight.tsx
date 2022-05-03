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
    <div>
      <h2>How big should your pizzas be?</h2>
      <button
        onClick={() => maybeUpdateDoughWeight(doughWeight - 5, setDoughWeight)}
      >
        -
      </button>
      <input
        title="noDoughs"
        type="number"
        min="50"
        value={doughWeight.toString()}
      />
      <button
        onClick={() => maybeUpdateDoughWeight(doughWeight + 5, setDoughWeight)}
      >
        +
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default DoughWeight;
