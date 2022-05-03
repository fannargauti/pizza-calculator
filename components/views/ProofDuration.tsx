import { YeastType } from "../../types/common";

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
    <div>
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
      <button
        onClick={() =>
          maybeUpdateProofTime(
            proofRoomTempDuration - 1,
            setProofRoomTempDuration
          )
        }
      >
        -
      </button>
      <input
        title="Room temp duration"
        type="number"
        min="50"
        value={`${proofRoomTempDuration.toString()}`}
      />
      <button
        onClick={() =>
          maybeUpdateProofTime(
            proofRoomTempDuration + 1,
            setProofRoomTempDuration
          )
        }
      >
        +
      </button>{" "}
      <button
        onClick={() =>
          maybeUpdateProofTime(proofFridgeDuration - 1, setProofFridgeDuration)
        }
      >
        -
      </button>
      <input
        title="Fridge duration"
        type="number"
        min="50"
        value={`${proofFridgeDuration.toString()}`}
      />
      <button
        onClick={() =>
          maybeUpdateProofTime(proofFridgeDuration + 1, setProofFridgeDuration)
        }
      >
        +
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default ProofDuration;
