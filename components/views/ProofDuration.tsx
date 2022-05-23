import Counter from "./Counter";
import Header from "./Header";

interface DoughWeightProps {
  proofRoomTempDuration: number;
  proofFridgeDuration: number;
  setProofRoomTempDuration: Function;
  setProofFridgeDuration: Function;
}

const maybeUpdateRoomTempProofTime = (
  proofDuration: number,
  setProofTime: Function
) => {
  if (proofDuration > 0) {
    setProofTime(proofDuration);
  }
};

const maybeUpdateFridgeProofTime = (
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
  return (
    <>
      <Header>Proofing duration</Header>
      <Counter
        label="Room temp proofing"
        title="Room temp proofing"
        value={proofRoomTempDuration}
        modifier={1}
        measurement="h"
        update={(nextProofDuration: number) =>
          maybeUpdateRoomTempProofTime(
            nextProofDuration,
            setProofRoomTempDuration
          )
        }
      />
      <Counter
        label="Fridge proofing"
        title="Fridge proofing"
        value={proofFridgeDuration}
        modifier={1}
        measurement="h"
        update={(nextProofDuration: number) =>
          maybeUpdateFridgeProofTime(nextProofDuration, setProofFridgeDuration)
        }
      />
    </>
  );
};

export default ProofDuration;
