import { useEffect, useState } from "react";
import styled from "styled-components";
import { Ingredients, YeastType } from "../types/common";
import { calculateIngredients } from "../utils/calculateIngredients";
import Doughs from "./views/Doughs";
import DoughWeight from "./views/DoughWeight";
import HydrationPercentage from "./views/HydrationPercentage";
import ProofDuration from "./views/ProofDuration";
import Results from "./views/Results";
import SaltPercentage from "./views/SaltPercentage";

const viewOrder = [
  "noDoughs",
  "doughWeight",
  "saltPercentage",
  "hydration",
  "proofDuration",
  "result",
] as const;

const initIngredients: Ingredients = {
  flour: 100,
  salt: 0,
  water: 0,
  yeast: 10,
  yeastType: "Active dry yeast",
  measurement: "grams",
};

const initInputs = {
  numberOfDoughs: 4,
  doughWeight: 250,
  saltPercentage: Number((3).toFixed(1)),
  hydrationPercentage: 60,
  yeastType: "Active dry yeast" as YeastType,
  proofRoomTempDuration: 4,
  proofFridgeDuration: 18,
};

const SCalculator = styled.div`
  padding: 48px;
  height: 500px;
  width: 300px;
  background-color: ${(props) => props.theme.offWhite};
`;

const Calculator = () => {
  const [viewIndex, setViewIndex] = useState(0);
  const [numberOfDoughs, setNumberOfDoughs] = useState(
    initInputs.numberOfDoughs
  );
  const [doughWeight, setDoughWeight] = useState(initInputs.doughWeight);
  const [saltPercentage, setSaltPercentage] = useState(
    initInputs.saltPercentage
  );
  const [hydrationPercentage, setHydrationPercentage] = useState(
    initInputs.hydrationPercentage
  );
  const [selectedYeast, setSelectedYeastType] = useState(initInputs.yeastType);
  const [proofRoomTempDuration, setProofRoomTempDuration] = useState(
    initInputs.proofRoomTempDuration
  );
  const [proofFridgeDuration, setProofFridgeDuration] = useState(
    initInputs.proofFridgeDuration
  );
  const [ingredients, setIngredients] = useState(initIngredients);

  useEffect(() => {
    if (viewIndex === viewOrder.length - 1) {
      setIngredients(
        calculateIngredients({
          numberOfDoughs,
          doughWeight,
          saltPercentage,
          hydrationPercentage,
          selectedYeast,
          proofRoomTempDuration,
          proofFridgeDuration,
        })
      );
    }
  }, [
    viewIndex,
    numberOfDoughs,
    doughWeight,
    saltPercentage,
    hydrationPercentage,
    selectedYeast,
    proofRoomTempDuration,
    proofFridgeDuration,
  ]);
  const viewMap = {
    noDoughs: (
      <Doughs
        numberOfDoughs={numberOfDoughs}
        setNumberOfDoughs={setNumberOfDoughs}
      />
    ),
    doughWeight: (
      <DoughWeight doughWeight={doughWeight} setDoughWeight={setDoughWeight} />
    ),
    saltPercentage: (
      <SaltPercentage
        saltPercentage={saltPercentage}
        setSaltPercentage={setSaltPercentage}
      />
    ),
    hydration: (
      <HydrationPercentage
        hydrationPercentage={hydrationPercentage}
        setHydrationPercentage={setHydrationPercentage}
      />
    ),
    proofDuration: (
      <ProofDuration
        selectedYeast={selectedYeast}
        proofRoomTempDuration={proofRoomTempDuration}
        proofFridgeDuration={proofFridgeDuration}
        setSelectedYeastType={setSelectedYeastType}
        setProofRoomTempDuration={setProofRoomTempDuration}
        setProofFridgeDuration={setProofFridgeDuration}
      />
    ),
    result: <Results ingredients={ingredients} />,
  };

  return (
    <SCalculator>
      <h1>Pizza calculator</h1>
      <div>{viewMap[viewOrder[viewIndex]]}</div>
      <button onClick={() => setViewIndex(viewIndex - 1)}>prev</button>
      <button onClick={() => setViewIndex(viewIndex + 1)}>next</button>
    </SCalculator>
  );
};

export default Calculator;
