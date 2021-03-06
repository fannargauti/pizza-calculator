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
  max-width: 646px;
  flex: 1;
  display: flex;
`;

const SViewContainer = styled(motion.div)`
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
  yeastType: YeastType;
  setProofRoomTempDuration: Function;
  setNumberOfDoughs: Function;
  setDoughWeight: Function;
  setSaltPercentage: Function;
  setHydrationPercentage: Function;
  setyeastTypeType: Function;
  setProofFridgeDuration: Function;
  firstRender: boolean;
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
  yeastType,
  proofRoomTempDuration,
  proofFridgeDuration,
  setyeastTypeType,
  setProofRoomTempDuration,
  setProofFridgeDuration,
  ingredients,
  viewIndex,
  viewOrder,
  firstRender,
  navigationDirection,
}: ViewsProps) => {
  const viewAnimations = !firstRender && {
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
      <SViewContainer key={"noDoughs"} {...viewAnimations}>
        <Doughs
          numberOfDoughs={numberOfDoughs}
          doughWeight={doughWeight}
          setNumberOfDoughs={setNumberOfDoughs}
          setDoughWeight={setDoughWeight}
          viewType={viewOrder[viewIndex] as ViewType}
          firstRender={firstRender}
        />
      </SViewContainer>
    ),
    percentages: (
      <SViewContainer key={"percentages"} {...viewAnimations}>
        <Percentages
          saltPercentage={saltPercentage}
          setSaltPercentage={setSaltPercentage}
          hydrationPercentage={hydrationPercentage}
          setHydrationPercentage={setHydrationPercentage}
        />
      </SViewContainer>
    ),

    yeastTypes: (
      <SViewContainer key={"yeastTypes"} {...viewAnimations}>
        <YeastTypes yeastType={yeastType} setyeastTypeType={setyeastTypeType} />
      </SViewContainer>
    ),
    proofDuration: (
      <SViewContainer key={"proofDuration"} {...viewAnimations}>
        <ProofDuration
          proofRoomTempDuration={proofRoomTempDuration}
          proofFridgeDuration={proofFridgeDuration}
          setProofRoomTempDuration={setProofRoomTempDuration}
          setProofFridgeDuration={setProofFridgeDuration}
        />
      </SViewContainer>
    ),
    result: (
      <SViewContainer key={"results"} {...viewAnimations}>
        <Results
          ingredients={ingredients}
          proofRoomTempDuration={proofRoomTempDuration}
          proofFridgeDuration={proofFridgeDuration}
          numberOfDoughs={numberOfDoughs}
          doughWeight={doughWeight}
        />
      </SViewContainer>
    ),
  };

  return (
    <AnimatePresence>
      <SView>{viewMap[viewOrder[viewIndex] as ViewType]}</SView>
    </AnimatePresence>
  );
};

export default Views;
