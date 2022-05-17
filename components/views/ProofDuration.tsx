import Counter from "./Counter";
import Label from "./Label";

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
      <Label htmlFor="Room temp proof duration">Room temp proof duration</Label>
      <Counter
        title="Room temp proof duration"
        value={proofRoomTempDuration}
        modifier={1}
        measurement="h"
        update={(nextProofDuration: number) =>
          maybeUpdateProofTime(nextProofDuration, setProofRoomTempDuration)
        }
      />
      <Label htmlFor="Fridge proof duration">Fridge proof duration</Label>
      <Counter
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
