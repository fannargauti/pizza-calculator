import Counter from "./Counter";

interface IPercantages {
  hydrationPercentage: number;
  setHydrationPercentage: Function;
  saltPercentage: number;
  setSaltPercentage: Function;
}

const maybeUpdateSaltPercentage = (
  nextSaltPercentage: number,
  setSaltPercentage: Function
) => {
  if (nextSaltPercentage >= 1) {
    setSaltPercentage(Number(nextSaltPercentage.toFixed(1)));
  }
};

const Percentages = ({
  saltPercentage,
  setSaltPercentage,
  hydrationPercentage,
  setHydrationPercentage,
}: IPercantages) => {
  return (
    <>
      <label>Choose salt percentage</label>
      <Counter
        title="Salt percentage"
        value={saltPercentage}
        modifier={0.1}
        update={(nextSaltPercentage: number) =>
          maybeUpdateSaltPercentage(nextSaltPercentage, setSaltPercentage)
        }
      />
      <label>Choose hydration percentage</label>
      <Counter
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
    </>
  );
};

export default Percentages;
