import styled from "styled-components";
import { Ingredients, ViewType, YeastType } from "../../types/common";
import Doughs from "./Doughs";
import DoughWeight from "./DoughWeight";
import HydrationPercentage from "./HydrationPercentage";
import ProofDuration from "./ProofDuration";
import Results from "./Results";
import SaltPercentage from "./SaltPercentage";

const SView = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
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
}: ViewsProps) => {
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

  return <SView>{viewMap[viewOrder[viewIndex] as ViewType]}</SView>;
};

export default Views;
