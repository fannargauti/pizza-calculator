import { Ingredients } from "../../types/common";

interface ResultsProps {
  ingredients: Ingredients;
}

const Results = ({ ingredients }: ResultsProps) => {
  const { flour, water, salt, yeast, measurement, yeastType } = ingredients;
  return (
    <>
      <label>Results</label>
      <ul>
        <li>{`Flour: ${flour} ${measurement}`}</li>
        <li>{`Water: ${water} ${measurement}`}</li>
        <li>{`Salt: ${salt} ${measurement}`}</li>
        <li>{`${yeastType}: ${yeast} ${measurement}`}</li>
      </ul>
    </>
  );
};

export default Results;
