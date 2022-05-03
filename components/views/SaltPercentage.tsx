interface SaltPercentageProps {
  saltPercentage: number;
  setSaltPercentage: Function;
}

const maybeUpdateSaltPercentage = (
  nextSaltPercentage: number,
  setSaltPercentage: Function
) => {
  console.log(nextSaltPercentage);
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
    <div>
      <h2>Choose salt percentage</h2>
      <button
        onClick={() =>
          maybeUpdateSaltPercentage(saltPercentage - 0.1, setSaltPercentage)
        }
      >
        -
      </button>
      <input
        title="noDoughs"
        type="number"
        min="50"
        value={saltPercentage.toFixed(1)}
      />
      <button
        onClick={() =>
          maybeUpdateSaltPercentage(saltPercentage + 0.1, setSaltPercentage)
        }
      >
        +
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SaltPercentage;
