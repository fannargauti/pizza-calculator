import Counter from "./Counter";
import Header from "./Header";

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
      <Header>Percentages</Header>
      <Counter
        label="Salt percentage"
        title="Salt percentage"
        tooltip="Salt percentage of total dough weight"
        value={saltPercentage}
        modifier={0.1}
        measurement="%"
        update={(nextSaltPercentage: number) =>
          maybeUpdateSaltPercentage(nextSaltPercentage, setSaltPercentage)
        }
      />
      <Counter
        label="Dough hydration"
        title="Hydration percentage"
        tooltip="Water to flour ratio. The higher the hydration, the harder it is to work with the dough"
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
