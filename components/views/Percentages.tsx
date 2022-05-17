import Counter from "./Counter";
import Label from "./Label";

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
      <Label htmlFor="Salt percentage">Choose salt percentage</Label>
      <Counter
        title="Salt percentage"
        value={saltPercentage}
        modifier={0.1}
        measurement="%"
        update={(nextSaltPercentage: number) =>
          maybeUpdateSaltPercentage(nextSaltPercentage, setSaltPercentage)
        }
      />
      <Label htmlFor="Hydration percentage">Choose hydration percentage</Label>
      <Counter
        title="Hydration percentage"
        value={hydrationPercentage}
        modifier={1}
        measurement="%"
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
