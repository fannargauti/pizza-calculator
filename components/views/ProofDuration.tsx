import { YeastType } from "../../types/common";
import Counter from "./Counter";

interface DoughWeightProps {
  proofRoomTempDuration: number;
  proofFridgeDuration: number;
  selectedYeast: YeastType;
  setSelectedYeastType: Function;
  setProofRoomTempDuration: Function;
  setProofFridgeDuration: Function;
}

const maybeUpdateProofTime = (
  proofDuration: number,
  setProofTime: Function
) => {
  if (proofDuration >= 0) {
    setProofTime(proofDuration);
  }
};

const ProofDuration = ({
  proofRoomTempDuration,
  proofFridgeDuration,
  selectedYeast,
  setSelectedYeastType,
  setProofRoomTempDuration,
  setProofFridgeDuration,
}: DoughWeightProps) => {
  const error =
    proofRoomTempDuration < 2 &&
    proofFridgeDuration < 6 &&
    "Your dough does not have enough time to proof";

  const YEAST_TYPES: Array<YeastType> = [
    "Active dry yeast",
    "Fresh yeast",
    "Sourdough",
  ];

  return (
    <>
      <h2>For how long to you want to proof your dough?</h2>
      {YEAST_TYPES.map((yeast) => {
        return (
          <>
            <label htmlFor={yeast}>{yeast}</label>
            <input
              title="Yeast type"
              type="radio"
              checked={selectedYeast === yeast}
              onChange={() => setSelectedYeastType(yeast)}
            />
          </>
        );
      })}
      <Counter
        title="Room temp proof duration"
        value={proofRoomTempDuration}
        modifier={1}
        update={(nextProofDuration: number) =>
          maybeUpdateProofTime(nextProofDuration, setProofRoomTempDuration)
        }
      />
      <Counter
        title="Fridge proof duration"
        value={proofFridgeDuration}
        modifier={1}
        update={(nextProofDuration: number) =>
          maybeUpdateProofTime(nextProofDuration, setProofFridgeDuration)
        }
      />
      {error && <p>{error}</p>}
    </>
  );
};

export default ProofDuration;
