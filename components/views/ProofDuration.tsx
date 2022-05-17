import Counter from "./Counter";

interface DoughWeightProps {
  proofRoomTempDuration: number;
  proofFridgeDuration: number;
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
  setProofRoomTempDuration,
  setProofFridgeDuration,
}: DoughWeightProps) => {
  const error =
    proofRoomTempDuration < 2 &&
    proofFridgeDuration < 6 &&
    "Your dough does not have enough time to proof";

  return (
    <>
      <Counter
        label="Room temp proof duration"
        title="Room temp proof duration"
        value={proofRoomTempDuration}
        modifier={1}
        measurement="h"
        update={(nextProofDuration: number) =>
          maybeUpdateProofTime(nextProofDuration, setProofRoomTempDuration)
        }
      />
      <Counter
        label="Fridge proof duration"
        title="Fridge proof duration"
        value={proofFridgeDuration}
        modifier={1}
        measurement="h"
        update={(nextProofDuration: number) =>
          maybeUpdateProofTime(nextProofDuration, setProofFridgeDuration)
        }
      />
      {error && <p>{error}</p>}
    </>
  );
};

export default ProofDuration;
