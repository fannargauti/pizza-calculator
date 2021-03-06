import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
import { IngredientInputs, Ingredients, YeastType } from "../types/common";
import { calculateIngredients } from "../utils/calculateIngredients";
import { viewOrder } from "../utils/constants";
import Button from "./views/Button";
import Views from "./views/Views";
import ChevronIcon from "./views/Icons/ChevronIcon";
import { useFirstRender } from "../utils/hooks/useFirstRender";
import {
  loadIngredientsFromLocalStorage,
  saveIngredientsToLocalStorage,
} from "../utils/localStorage";

const initIngredients: Ingredients = {
  amounts: { flour: 0, salt: 0, water: 0, yeast: 0 },
  yeastType: "Active dry yeast",
  measurement: "grams",
};

const initInputs = loadIngredientsFromLocalStorage({
  fallback: {
    numberOfDoughs: 5,
    doughWeight: 250,
    saltPercentage: Number((3).toFixed(1)),
    hydrationPercentage: 60,
    yeastType: "Active dry yeast" as YeastType,
    proofRoomTempDuration: 4,
    proofFridgeDuration: 18,
  },
});

const SCalculator = styled.div`
  padding: 32px;
  height: 100%;
  width: 100%;
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
  display: flex;
  justify-content: center;
  align-items: center;
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
  const firstRender = useFirstRender();

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
  const [yeastType, setyeastTypeType] = useState(initInputs.yeastType);
  const [proofRoomTempDuration, setProofRoomTempDuration] = useState(
    initInputs.proofRoomTempDuration
  );
  const [proofFridgeDuration, setProofFridgeDuration] = useState(
    initInputs.proofFridgeDuration
  );
  const [ingredients, setIngredients] = useState(initIngredients);

  const onEnterLastStep = (ingredients: IngredientInputs) => {
    saveIngredientsToLocalStorage(ingredients);
    setIngredients(calculateIngredients(ingredients));
  };

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
        yeastType={yeastType}
        proofRoomTempDuration={proofRoomTempDuration}
        proofFridgeDuration={proofFridgeDuration}
        setyeastTypeType={setyeastTypeType}
        setProofRoomTempDuration={setProofRoomTempDuration}
        setProofFridgeDuration={setProofFridgeDuration}
        viewIndex={viewIndex}
        viewOrder={viewOrder}
        ingredients={ingredients}
        firstRender={firstRender}
        navigationDirection={navigationDirection}
      />
      {viewIndex < viewOrder.length - 1 && (
        <SButtonNextWrapper>
          <Button
            onClick={() => {
              setNavigationDirection("forward");
              setViewIndex(viewIndex + 1);

              if (viewIndex + 1 === viewOrder.length - 1) {
                onEnterLastStep({
                  numberOfDoughs,
                  doughWeight,
                  saltPercentage,
                  hydrationPercentage,
                  yeastType,
                  proofRoomTempDuration,
                  proofFridgeDuration,
                });
              }
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
