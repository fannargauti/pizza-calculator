import styled from "styled-components";
import { IngredientAmounts, Ingredients } from "../../types/common";
import ChevronIcon from "./Icons/ChevronIcon";

interface ISampleRecipe {
  ingredients: Ingredients;
  proofRoomTempDuration: number;
  proofFridgeDuration: number;
  numberOfDoughs: number;
  doughWeight: number;
}

const SSampleRecipe = styled.div`
  display: flex;
  margin: 24px 0;
  justify-content: center;
`;

const SIconContainer = styled.div`
  padding: 8px 8px 0;
  align-self: flex-start;
  transform: rotate(180deg);
  transition: transform 0.2s ease-in-out;
  svg {
    fill: pink;
    height: 30px;
    width: 30px;
  }
`;
const SSummaryContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SDetails = styled.details`
  cursor: pointer;
  display: inline-block;
  &[open] ${SIconContainer} {
    transform: rotate(270deg);
  }
  ol {
    font-size: 18px;
    line-height: 24px;
    li {
      margin: 8px 0;

      span {
        margin: 2px 0;
        color: white;
        padding: 4px;
        background-color: ${(props) => props.theme.blue};
      }
    }
  }
`;

const SSummary = styled.summary`
  font-size: 32px;
  list-style: none;
  margin: 0 12px;
  &::-webkit-details-marker {
    display: none;
  }
`;

const formatAmounts = (amounts: IngredientAmounts) => {
  return {
    flour: amounts.flour.toFixed(0),
    water: amounts.water.toFixed(0),
    salt: amounts.salt.toFixed(1),
    yeast: amounts.yeast.toFixed(1),
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
    <SSampleRecipe>
      <SDetails>
        <SSummary>
          <SSummaryContent>
            <SIconContainer>
              <ChevronIcon />
            </SIconContainer>
            Sample recipe
          </SSummaryContent>
        </SSummary>
        <ol>
          {yeastType === "Fresh yeast" ? (
            <li>
              Whisk together <span>{water}</span> <>{measurement}</> of lukewarm
              water and <span>{yeast}</span> <>{measurement}</>{" "}
              <span>{yeastType.toLowerCase()}</span>.
            </li>
          ) : (
            <li>
              Whisk together <span>{water}</span> <>{measurement}</> water and{" "}
              <span>{yeast}</span> <>{measurement}</>{" "}
              <span>{yeastType.toLowerCase()}</span>.
            </li>
          )}

          <li>
            In a large bowl Mix together <span>{flour}</span> <>{measurement}</>{" "}
            flour and <span>{salt}</span> <>{measurement}</> salt.
          </li>
          <li>
            Pour the yeast mixture into the large bowl and combine into a shaggy
            dough
          </li>
          <li>
            Let dough rest for approx 15 minutes, this will help the gluten
            start to form and make the dough easier to work with
          </li>
          <li>
            Turn out to a lightly floured surface and kneed for 8-10 minutes
          </li>
          <li>
            Clean your big bowl, and drizzle lightly with olive oil. Place the
            dough back into the bowl and cover with plastic wrap
          </li>
          <li>
            Leave the bowl for <span> {proofRoomTempDuration}</span> hours or
            until the dough has doubled in size
          </li>
          {proofFridgeDuration > 0 ? (
            <>
              <li>
                Divide the bulk-proofed dough into <span>{numberOfDoughs}</span>
                x<span>{doughWeight}</span>
                pieces. Shape carefully into balls and place in an airtight box
                before putting in the fridge for{" "}
                <span>{proofFridgeDuration}</span> hours
              </li>
              <li>
                Remove dough from the fridge while you prepare your favorite
                toppings and preheat your oven.
              </li>
            </>
          ) : (
            <>
              <li>
                Divide the bulk-proofed dough into <span>{numberOfDoughs}</span>
                x<span>{doughWeight}</span>
                pieces. Shape carefully into balls and cover to rest for 15-20
                minutes(or in the fridge for up to 12 hours)
              </li>
              <li>
                While the dough balls are resting, prepare your favorite
                toppings and preheat your oven.
              </li>
            </>
          )}

          <li>
            Bake pizza, ideally in a pizza oven, or alternatively on the highest
            setting on your home oven until
          </li>
          <li>Enjoy!</li>
        </ol>
      </SDetails>
    </SSampleRecipe>
  );
};

export default SampleRecipe;
