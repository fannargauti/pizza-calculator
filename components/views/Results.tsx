import CountUp from "react-countup";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { IngredientAmounts, Ingredients } from "../../types/common";
import YeastTypes from "./YeastTypes";
import Header from "./Header";
import SampleRecipe from "./SampleRecipe";

interface ResultsProps {
  ingredients: Ingredients;
  proofRoomTempDuration: number;
  proofFridgeDuration: number;
  numberOfDoughs: number;
  doughWeight: number;
}

const SResults = styled.div``;

const SIngredientsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 -32px;
`;

const SIngredient = styled(motion.li)`
  list-style: none;
  flex-basis: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.blue};
  outline: 1px dashed white;
`;

const SIngredientSymbol = styled.span`
  font-size: 64px;
`;

const SIngredientName = styled.h6`
  margin: 0;
  text-transform: uppercase;
  font-style: italic;
  font-size: 16px;
  font-weight: bold;
  color: white;
`;

const SIngredientAmount = styled.p`
  font-weight: bold;
  font-size: 28px;
  color: white;
  margin: 16px;
`;

const Results = ({
  ingredients,
  proofRoomTempDuration,
  proofFridgeDuration,
  numberOfDoughs,
  doughWeight,
}: ResultsProps) => {
  const { amounts, measurement, yeastType } = ingredients;
  const { flour, water, salt, yeast } = amounts;
  return (
    <SResults>
      <Header>Dough doses</Header>
      <SIngredientsList>
        <SIngredient
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0 }}
        >
          <SIngredientSymbol>🌾</SIngredientSymbol>
          <SIngredientName>Flour</SIngredientName>
          <SIngredientAmount>
            <CountUp end={flour} decimals={0} suffix={` ${measurement}`} />
          </SIngredientAmount>
        </SIngredient>
        <SIngredient
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <SIngredientSymbol>💦</SIngredientSymbol>
          <SIngredientName>Water</SIngredientName>
          <SIngredientAmount>
            <CountUp
              end={water}
              decimals={0}
              suffix={` ${measurement}`}
              duration={2}
            />
          </SIngredientAmount>
        </SIngredient>
        <SIngredient
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          <SIngredientSymbol>🧂</SIngredientSymbol>
          <SIngredientName>Salt</SIngredientName>
          <SIngredientAmount>
            <CountUp
              end={salt}
              decimals={salt > 100 ? 0 : 1}
              suffix={` ${measurement}`}
              duration={2}
            />
          </SIngredientAmount>
        </SIngredient>
        <SIngredient
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
        >
          <SIngredientSymbol>🫧</SIngredientSymbol>
          <SIngredientName>{yeastType}</SIngredientName>
          <SIngredientAmount>
            <CountUp
              end={yeast}
              decimals={yeast > 100 ? 0 : 1}
              suffix={` ${measurement}`}
              duration={2}
            />
          </SIngredientAmount>
        </SIngredient>
      </SIngredientsList>
      <SampleRecipe
        ingredients={ingredients}
        proofRoomTempDuration={proofRoomTempDuration}
        proofFridgeDuration={proofFridgeDuration}
        numberOfDoughs={numberOfDoughs}
        doughWeight={doughWeight}
      />
    </SResults>
  );
};

export default Results;
