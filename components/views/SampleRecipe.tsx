import { motion } from "framer-motion";
import styled from "styled-components";
import { IngredientAmounts, Ingredients } from "../../types/common";

interface ISampleRecipe {
  ingredients: Ingredients;
  proofRoomTempDuration: number;
  proofFridgeDuration: number;
  numberOfDoughs: number;
  doughWeight: number;
}

const SSampleRecipe = styled(motion.article)`
  display: flex;
  margin: 24px 0;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h3 {
    margin: 14px 0 00;
    font-size: 32px;
    font-family: inherit;
  }
  ol {
    font-size: 18px;
    line-height: 32px;
    li {
      margin: 8px 0;

      span {
        margin: 1px 0;
        color: white;
        padding: 4px;
        background-color: ${(props) => props.theme.blue};
      }
    }
  }
`;

const formatAmounts = (amounts: IngredientAmounts) => {
  const decimalsLimit = 100;
  const { flour, water, salt, yeast } = amounts;
  return {
    flour: flour.toFixed(0),
    water: water.toFixed(0),
    salt: salt.toFixed(salt > decimalsLimit ? 0 : 1),
    yeast: yeast.toFixed(yeast > decimalsLimit ? 0 : 1),
  };
};

const SampleRecipe = ({
  ingredients,
  proofRoomTempDuration,
  proofFridgeDuration,
  numberOfDoughs,
  doughWeight,
}: ISampleRecipe) => {
  const { amounts, measurement, yeastType } = ingredients;
  const { flour, water, salt, yeast } = formatAmounts(amounts);

  return (
    <SSampleRecipe
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
    >
      <h3>Sample recipe</h3>
      <ol>
        {yeastType === "Fresh yeast" ? (
          <li>
            Whisk together <span>{water}</span> <>{measurement}</> of lukewarm
            water and <span>{yeast}</span> <>{measurement}</> of{" "}
            <span>{yeastType.toLowerCase()}</span>.
          </li>
        ) : (
          <li>
            Whisk together <span>{water}</span> <>{measurement}</> water and{" "}
            <span>{yeast}</span> <>{measurement}</> of{" "}
            <span>{yeastType.toLowerCase()}</span>.
          </li>
        )}

        <li>
          In a large bowl, mix together <span>{flour}</span> <>{measurement}</>{" "}
          flour and <span>{salt}</span> <>{measurement}</> salt.
        </li>
        <li>
          Pour the yeast mixture into the large bowl and mix to combine into a
          shaggy dough.
        </li>
        <li>
          Let dough rest for approx 15 minutes, this will help the gluten start
          to form and make the dough easier to work with.
        </li>
        <li>
          Turn out to a lightly floured surface and kneed for 8-10 minutes.
        </li>
        <li>
          Clean your big bowl, and drizzle with olive oil. Place the dough back
          into the bowl and cover with plastic wrap.
        </li>
        <li>
          Leave the bowl for <span> {proofRoomTempDuration}</span> hours or
          until the dough has doubled in size.
        </li>
        {proofFridgeDuration > 0 ? (
          <>
            <li>
              Divide the bulk-proofed dough into <span>{numberOfDoughs}</span>x
              <span>{doughWeight}</span> {measurement} pieces. Shape carefully
              into balls and place in an airtight box before putting in the
              fridge for <span>{proofFridgeDuration}</span> hours.
            </li>
            <li>
              Remove dough from the fridge while you prepare your favorite
              toppings and preheat your oven.
            </li>
          </>
        ) : (
          <>
            <li>
              Divide the bulk-proofed dough into <span>{numberOfDoughs}</span>x
              <span>{doughWeight}</span> {measurement} pieces. Shape carefully
              into balls and cover to rest for 15-20 minutes(or in the fridge
              for up to 12 hours).
            </li>
            <li>
              While the dough balls are resting, prepare your favorite toppings
              and preheat your oven.
            </li>
          </>
        )}

        <li>
          Bake pizza, ideally in a pizza oven, or on the highest setting on your
          home oven.
        </li>
        <li>Enjoy!</li>
      </ol>
    </SSampleRecipe>
  );
};

export default SampleRecipe;
