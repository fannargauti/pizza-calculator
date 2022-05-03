import { Ingredients } from "../../types/common";

interface ResultsProps {
  ingredients: Ingredients;
}

const Results = ({ ingredients }: ResultsProps) => {
  const { flour, water, salt, yeast, measurement } = ingredients;
  return (
    <div>
      <h2>Results</h2>
      <ul>
        <li>{`Flour: ${flour} ${measurement}`}</li>
        <li>{`Water: ${water} ${measurement}`}</li>
        <li>{`Salt: ${salt} ${measurement}`}</li>
        <li>{`Yeast: ${yeast} ${measurement}`}</li>
      </ul>
    </div>
  );
};

export default Results;
