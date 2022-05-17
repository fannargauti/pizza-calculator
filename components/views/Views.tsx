import styled from "styled-components";
import { Ingredients, ViewType, YeastType } from "../../types/common";
import Doughs from "./Doughs";
import Percentages from "./Percentages";
import ProofDuration from "./ProofDuration";
import Results from "./Results";
import YeastTypes from "./YeastTypes";

const SView = styled.div`
  height: 100%;
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
}: ViewsProps) => {
  const viewMap = {
    noDoughs: (
      <Doughs
        numberOfDoughs={numberOfDoughs}
        doughWeight={doughWeight}
        setNumberOfDoughs={setNumberOfDoughs}
        setDoughWeight={setDoughWeight}
        viewType={viewOrder[viewIndex] as ViewType}
        isInitialRender={isInitialRender}
      />
    ),
    percentages: (
      <Percentages
        saltPercentage={saltPercentage}
        setSaltPercentage={setSaltPercentage}
        hydrationPercentage={hydrationPercentage}
        setHydrationPercentage={setHydrationPercentage}
      />
    ),

    yeastTypes: (
      <YeastTypes
        selectedYeast={selectedYeast}
        setSelectedYeastType={setSelectedYeastType}
      />
    ),
    proofDuration: (
      <ProofDuration
        proofRoomTempDuration={proofRoomTempDuration}
        proofFridgeDuration={proofFridgeDuration}
        setProofRoomTempDuration={setProofRoomTempDuration}
        setProofFridgeDuration={setProofFridgeDuration}
      />
    ),
    result: <Results ingredients={ingredients} />,
  };

  return <SView>{viewMap[viewOrder[viewIndex] as ViewType]}</SView>;
};

export default Views;
