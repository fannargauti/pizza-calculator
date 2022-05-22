import styled from "styled-components";
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

const SContent = styled.div`
  margin-top: auto;
`;

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
      <SContent>
        <Counter
          label="Number of pizzas"
          title="Number of doughs"
          value={numberOfDoughs}
          modifier={1}
          update={(nextNumberOfDoughs: number) =>
            maybeUpdateNumberOfDoughs(nextNumberOfDoughs, setNumberOfDoughs)
          }
        />
        <Counter
          label="Doughball weight"
          title="Pizza weight"
          value={doughWeight}
          modifier={5}
          measurement="gr"
          update={(nextDoughWeight: number) =>
            maybeUpdateDoughWeight(nextDoughWeight, setDoughWeight)
          }
        />
      </SContent>
      {error && <p>{error}</p>}
    </>
  );
};

export default Doughs;
