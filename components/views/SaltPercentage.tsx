import CounterInput from "./CounterInput";

interface SaltPercentageProps {
  saltPercentage: number;
  setSaltPercentage: Function;
}

const maybeUpdateSaltPercentage = (
  nextSaltPercentage: number,
  setSaltPercentage: Function
) => {
  if (nextSaltPercentage >= 1) {
    setSaltPercentage(Number(nextSaltPercentage.toFixed(1)));
  }
};

const SaltPercentage = ({
  saltPercentage,
  setSaltPercentage,
}: SaltPercentageProps) => {
  const error =
    saltPercentage <= 1 &&
    "Are you sure you want your pizza to taste like paper?";
  return (
    <>
      <h2>Choose salt percentage</h2>
      <CounterInput
        title="Salt percentage"
        value={saltPercentage}
        modifier={0.1}
        update={(nextSaltPercentage: number) =>
          maybeUpdateSaltPercentage(nextSaltPercentage, setSaltPercentage)
        }
      />
      {error && <p>{error}</p>}
    </>
  );
};

export default SaltPercentage;
