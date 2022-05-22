import { IngredientAmounts, Ingredients } from "../../types/common";

interface ISampleRecipe {
  ingredients: Ingredients;
  proofRoomTempDuration: number;
  proofFridgeDuration: number;
  numberOfDoughs: number;
  doughWeight: number;
}

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
  //   if (yeastType === "Sourdough") {
  //     // TODO
  //     return "sourdough recipe";
  //   }
  //   if (yeastType === "Active dry yeast") {
  //     // TODO
  //     return "Active dry yeast recipe";
  //   }
  //   if (proofFridgeDuration) {
  //     // TODO
  //     return "Frigde proofing recipe";
  //   }
  return (
    <details>
      <summary>Sample recipe</summary>
      <ol>
        <li>{`Mix together ${flour} ${measurement} flour and ${salt} ${measurement} salt in a large bowl.`}</li>
        <li>{`In another bowl, whisk together ${water} ${measurement} water and ${yeast} ${measurement} yeast.`}</li>
        <li>{`Pour the yeast mixture into the large bowl and combine into a "shaggy" dough`}</li>
        <li>{`Let dough rest for approx 15 minutes, this will help the gluten start to form and make the dough easier to work with`}</li>
        <li>{`Turn out to a lightly floured surface and kneed for 8-10 minutes`}</li>
        <li>{`Clean your big bowl, and drizzle lightly with olive oil. Place the dough back into the bowl and cover with plastic wrap`}</li>
        <li>{`Leave the bowl for ${proofRoomTempDuration} hours or until the dough has doubled in size`}</li>
        <li>{`Divide the bulk-proofed dough into ${numberOfDoughs}x${doughWeight} pieces. Shape carefully into balls and cover to rest for 15-20 minutes(or in the fridge for up to 12 hours)`}</li>
        <li>{`While the dough balls are resting, prepare your favorite toppings and preheat your oven.`}</li>
        <li>{`Bake pizza, ideally in a pizza oven, or alternatively on the highest setting on your home oven until`}</li>
        <li>{`Enjoy! 🍕`}</li>
      </ol>
    </details>
  );
};

export default SampleRecipe;
