import { useEffect, useState } from "react";
import styled from "styled-components";
import { Ingredients, YeastType } from "../types/common";
import { calculateIngredients } from "../utils/calculateIngredients";
import { viewOrder } from "../utils/constants";
import Views from "./views/Views";

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
  padding: 32px;
  height: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const SButtonContinue = styled.button`
  margin-top: auto;
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

  return (
    <SCalculator>
      <button onClick={() => setViewIndex(viewIndex - 1)}>{"<"}</button>
      <h1>Pizza calculator</h1>
      <Views
        numberOfDoughs={numberOfDoughs}
        setNumberOfDoughs={setNumberOfDoughs}
        doughWeight={doughWeight}
        setDoughWeight={setDoughWeight}
        saltPercentage={saltPercentage}
        setSaltPercentage={setSaltPercentage}
        hydrationPercentage={hydrationPercentage}
        setHydrationPercentage={setHydrationPercentage}
        selectedYeast={selectedYeast}
        proofRoomTempDuration={proofRoomTempDuration}
        proofFridgeDuration={proofFridgeDuration}
        setSelectedYeastType={setSelectedYeastType}
        setProofRoomTempDuration={setProofRoomTempDuration}
        setProofFridgeDuration={setProofFridgeDuration}
        viewIndex={viewIndex}
        viewOrder={viewOrder}
        ingredients={ingredients}
      />

      <SButtonContinue onClick={() => setViewIndex(viewIndex + 1)}>
        next
      </SButtonContinue>
    </SCalculator>
  );
};

export default Calculator;
