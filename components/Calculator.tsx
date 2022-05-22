import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
import { Ingredients, YeastType } from "../types/common";
import { calculateIngredients } from "../utils/calculateIngredients";
import { viewOrder } from "../utils/constants";
import Button from "./views/Button";
import Views from "./views/Views";
import ChevronIcon from "./views/Icons/ChevronIcon";

const initIngredients: Ingredients = {
  amounts: { flour: 0, salt: 0, water: 0, yeast: 0 },
  yeastType: "Active dry yeast",
  measurement: "grams",
};

const initInputs = {
  numberOfDoughs: 5,
  doughWeight: 250,
  saltPercentage: Number((3).toFixed(1)),
  hydrationPercentage: 60,
  yeastType: "Active dry yeast" as YeastType,
  proofRoomTempDuration: 4,
  proofFridgeDuration: 18,
};

const SCalculator = styled.div`
  padding: 32px;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 13px 27px -5px rgba(50, 50, 93, 0.25),
    0px 8px 16px -8px rgba(0, 0, 0, 0.3),
    0px -6px 16px -6px rgba(0, 0, 0, 0.025);
  overflow: scroll;
`;

const SBackButton = styled.button`
  align-self: flex-start;
  border: none;
  background-color: transparent;
  height: 30px;
  width: 30px;
  display: flex;
  fill: ${(props) => props.theme.blue};
`;

const SButtonNextWrapper = styled.div`
  margin-top: 18px;
`;

const Calculator = () => {
  const [isInitialRender, setIsInitialRenderer] = useState(true);

  const [viewIndex, setViewIndex] = useState(0);

  const [navigationDirection, setNavigationDirection] = useState<
    "forward" | "backward"
  >("forward");

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
    setIsInitialRenderer(false);
  }, []);

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
      {viewIndex > 0 && (
        <SBackButton
          onClick={() => {
            setNavigationDirection("backward");
            setViewIndex(viewIndex - 1);
          }}
        >
          <ChevronIcon />
        </SBackButton>
      )}
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
        isInitialRender={isInitialRender}
        navigationDirection={navigationDirection}
      />
      {viewIndex < viewOrder.length - 1 && (
        <SButtonNextWrapper>
          <Button
            onClick={() => {
              setNavigationDirection("forward");
              setViewIndex(viewIndex + 1);
            }}
          >
            next
          </Button>
        </SButtonNextWrapper>
      )}
    </SCalculator>
  );
};

export default Calculator;
