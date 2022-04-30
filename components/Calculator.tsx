import { useState } from "react";

const viewOrder = [
  "noDoughs",
  "doughWeight",
  "saltPercentage",
  "hydration",
  "result",
] as const;

const Calculator = () => {
  const [viewIndex, setViewIndex] = useState(0);

  const viewMap = {
    noDoughs: <p>doughs</p>,
    doughWeight: <p>doughWeight</p>,
    saltPercentage: <p>saltPercentage</p>,
    hydration: <p>hydration</p>,
    result: <p>result</p>,
  };

  return (
    <div>
      <div>{viewMap[viewOrder[viewIndex]]}</div>
      <button onClick={() => setViewIndex(viewIndex + 1)}>next</button>
    </div>
  );
};

export default Calculator;
