import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";
import { Ingredients, ViewType, YeastType } from "../../types/common";
import Doughs from "./Doughs";
import Percentages from "./Percentages";
import ProofDuration from "./ProofDuration";
import Results from "./Results";
import YeastTypes from "./YeastTypes";

const SView = styled.div`
  height: "100%";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

interface ViewsProps {
  numberOfDoughs: number;
  doughWeight: number;
  saltPercentage: number;
  hydrationPercentage: number;
  proofRoomTempDuration: number;
  proofFridgeDuration: number;
  viewIndex: number;
  viewOrder: Readonly<string[]>;
  ingredients: Ingredients;
  selectedYeast: YeastType;
  setProofRoomTempDuration: Function;
  setNumberOfDoughs: Function;
  setDoughWeight: Function;
  setSaltPercentage: Function;
  setHydrationPercentage: Function;
  setSelectedYeastType: Function;
  setProofFridgeDuration: Function;
  isInitialRender: boolean;
  navigationDirection: "forward" | "backward";
}

const Views = ({
  numberOfDoughs,
  setNumberOfDoughs,
  doughWeight,
  setDoughWeight,
  saltPercentage,
  setSaltPercentage,
  hydrationPercentage,
  setHydrationPercentage,
  selectedYeast,
  proofRoomTempDuration,
  proofFridgeDuration,
  setSelectedYeastType,
  setProofRoomTempDuration,
  setProofFridgeDuration,
  ingredients,
  viewIndex,
  viewOrder,
  isInitialRender,
  navigationDirection,
}: ViewsProps) => {
  useEffect;
  const viewAnimations = {
    initial: {
      x: navigationDirection === "forward" ? "100%" : "-100%",
      opacity: 0,
    },
    animate: { x: 0, opacity: 1 },
    exit: {
      x: navigationDirection === "forward" ? "-100%" : "100%",
      opacity: 0,
    },
    transition: { type: "spring", stiffness: 120, damping: 15 },
  };

  const viewMap = {
    noDoughs: (
      <motion.div key={"noDoughs"} {...viewAnimations}>
        <Doughs
          numberOfDoughs={numberOfDoughs}
          doughWeight={doughWeight}
          setNumberOfDoughs={setNumberOfDoughs}
          setDoughWeight={setDoughWeight}
          viewType={viewOrder[viewIndex] as ViewType}
          isInitialRender={isInitialRender}
        />
      </motion.div>
    ),
    percentages: (
      <motion.div key={"percentages"} {...viewAnimations}>
        <Percentages
          saltPercentage={saltPercentage}
          setSaltPercentage={setSaltPercentage}
          hydrationPercentage={hydrationPercentage}
          setHydrationPercentage={setHydrationPercentage}
        />
      </motion.div>
    ),

    yeastTypes: (
      <motion.div key={"yeastTypes"} {...viewAnimations}>
        <YeastTypes
          selectedYeast={selectedYeast}
          setSelectedYeastType={setSelectedYeastType}
        />
      </motion.div>
    ),
    proofDuration: (
      <motion.div key={"proofDuration"} {...viewAnimations}>
        <ProofDuration
          proofRoomTempDuration={proofRoomTempDuration}
          proofFridgeDuration={proofFridgeDuration}
          setProofRoomTempDuration={setProofRoomTempDuration}
          setProofFridgeDuration={setProofFridgeDuration}
        />
      </motion.div>
    ),
    result: (
      <motion.div key={"result"} {...viewAnimations}>
        <Results ingredients={ingredients} />,
      </motion.div>
    ),
  };

  return (
    <AnimatePresence>
      <SView>{viewMap[viewOrder[viewIndex] as ViewType]}</SView>
    </AnimatePresence>
  );
};

export default Views;
