import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { IngredientAmounts, Ingredients } from "../../types/common";

interface ResultsProps {
  ingredients: Ingredients;
}

const SResults = styled(motion.div)``;

const SIngredientsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const SIngredient = styled.li`
  list-style: none;
  border: 2px solid tomato;
  flex-basis: 50%;
`;

const formatAmounts = (amounts: IngredientAmounts) => {
  console.log(amounts);

  const formattedAmounts: { [K in keyof IngredientAmounts]: string } = {
    flour: "",
    salt: "",
    yeast: "",
    water: "",
  };

  formattedAmounts.flour = Number(amounts.flour).toFixed(0);
  formattedAmounts.water = Number(amounts.flour).toFixed(0);
  formattedAmounts.salt = Number(amounts.flour).toFixed(2);
  formattedAmounts.yeast = Number(amounts.flour).toFixed(2);

  return formattedAmounts;
};

const Results = ({ ingredients }: ResultsProps) => {
  const { amounts, measurement, yeastType } = ingredients;
  const { flour, water, salt, yeast } = formatAmounts(amounts);
  return (
    <SResults>
      <h2>Results</h2>
      <SIngredientsList>
        <SIngredient>{`Flour: ${flour} ${measurement}`}</SIngredient>
        <SIngredient>{`Water: ${water} ${measurement}`}</SIngredient>
        <SIngredient>{`Salt: ${salt} ${measurement}`}</SIngredient>
        <SIngredient>{`${yeastType}: ${yeast} ${measurement}`}</SIngredient>
      </SIngredientsList>
    </SResults>
  );
};

export default Results;
