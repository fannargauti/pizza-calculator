import Counter from "./Counter";
import Header from "./Header";

interface IPercantages {
  hydrationPercentage: number;
  setHydrationPercentage: Function;
  saltPercentage: number;
  setSaltPercentage: Function;
}

const getSaltyInfo = (saltPecentage: number) => {
  if (saltPecentage > 5) {
    return "Warning: very salty pizzas incoming";
  }
  if (saltPecentage < 1) {
    return "Salt gives dough its flavour";
  }
  return null;
};

const getHydrationInfo = (hydrationPercentage: number) => {
  if (hydrationPercentage > 80) {
    return "Warning: this dough is going to be hard to work with";
  }
  if (hydrationPercentage < 50) {
    return "Your pizzas will be very dry when hydration is this low";
  }
  return null;
};

const maybeUpdateSaltPercentage = (
  nextSaltPercentage: number,
  setSaltPercentage: Function
) => {
  if (nextSaltPercentage > 0) {
    setSaltPercentage(Number(nextSaltPercentage.toFixed(1)));
  }
};

const maybeUpdateHydrationPercentage = (
  nextHydrationPercentage: number,
  setHydrationPercentage: Function
) => {
  if (nextHydrationPercentage >= 30) {
    setHydrationPercentage(Number(nextHydrationPercentage.toFixed(1)));
  }
};

const Percentages = ({
  saltPercentage,
  setSaltPercentage,
  hydrationPercentage,
  setHydrationPercentage,
}: IPercantages) => {
  const saltyInfo = getSaltyInfo(saltPercentage);
  const hydrationInfo = getHydrationInfo(hydrationPercentage);

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
        extraInfo={saltyInfo}
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
        extraInfo={hydrationInfo}
        update={(nextHydrationPercentage: number) =>
          maybeUpdateHydrationPercentage(
            nextHydrationPercentage,
            setHydrationPercentage
          )
        }
      />
    </>
  );
};

export default Percentages;
