import CounterInput from "./CounterInput";

interface HydrationPercentageProps {
  hydrationPercentage: number;
  setHydrationPercentage: Function;
}

const HydrationPercentage = ({
  hydrationPercentage,
  setHydrationPercentage,
}: HydrationPercentageProps) => {
  const error =
    hydrationPercentage <= 1 && "Your dough is going to by like a clay";
  return (
    <>
      <h2>Choose hydration percentage</h2>
      <CounterInput
        title="Hydration percentage"
        value={hydrationPercentage}
        modifier={1}
        update={(nextHydrationPercentage: number) =>
          setHydrationPercentage(
            nextHydrationPercentage,
            setHydrationPercentage
          )
        }
      />
      {error && <p>{error}</p>}
    </>
  );
};

export default HydrationPercentage;
