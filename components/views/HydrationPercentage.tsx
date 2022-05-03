interface HydrationPercentageProps {
  hydrationPercentage: number;
  setHydrationPercentage: Function;
}

const maybeUpdateHydrationPercentage = (
  nextHydrationPercentage: number,
  setHydrationPercentage: Function
) => {
  if (nextHydrationPercentage >= 1) {
    setHydrationPercentage(nextHydrationPercentage);
  }
};

const HydrationPercentage = ({
  hydrationPercentage,
  setHydrationPercentage,
}: HydrationPercentageProps) => {
  const error =
    hydrationPercentage <= 1 && "Your dough is going to by like a clay";
  return (
    <div>
      <h2>Choose hydration percentage</h2>
      <button
        onClick={() =>
          maybeUpdateHydrationPercentage(
            hydrationPercentage - 1,
            setHydrationPercentage
          )
        }
      >
        -
      </button>
      <input
        title="noDoughs"
        type="number"
        min="50"
        value={hydrationPercentage}
      />
      <button
        onClick={() =>
          maybeUpdateHydrationPercentage(
            hydrationPercentage + 1,
            setHydrationPercentage
          )
        }
      >
        +
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default HydrationPercentage;
