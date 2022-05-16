import { useEffect, useState } from "react";
import { ViewType } from "../../types/common";
import Counter from "./Counter";
import DoughFigures from "./DoughFigures";

interface DoughsProps {
  numberOfDoughs: number;
  doughWeight: number;
  setNumberOfDoughs: Function;
  setDoughWeight: Function;
  viewType: ViewType;
  isInitialRender: boolean;
}

const maybeUpdateNumberOfDoughs = (
  nextNumberOfDoughs: number,
  setNumberOfDoughs: Function
) => {
  if (nextNumberOfDoughs > -1) {
    setNumberOfDoughs(nextNumberOfDoughs);
  }
};

const maybeUpdateDoughWeight = (
  nextDoughWeight: number,
  setDoughWeight: Function
) => {
  if (nextDoughWeight > 50) {
    setDoughWeight(nextDoughWeight);
  }
};

const Doughs = ({
  numberOfDoughs,
  setNumberOfDoughs,
  doughWeight,
  setDoughWeight,
  isInitialRender,
}: DoughsProps) => {
  const error = numberOfDoughs === 0 && "Making zero pizzas is no fun";

  return (
    <>
      <DoughFigures
        numberOfDoughs={numberOfDoughs}
        doughWeight={doughWeight}
        isInitialRender={isInitialRender}
      />
      <label>How many pizzas do you want to make?</label>
      <Counter
        title="Number of doughs"
        value={numberOfDoughs}
        modifier={1}
        update={(nextNumberOfDoughs: number) =>
          maybeUpdateNumberOfDoughs(nextNumberOfDoughs, setNumberOfDoughs)
        }
      />
      <label>How big should your pizzas be?</label>
      <Counter
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

export default Doughs;
