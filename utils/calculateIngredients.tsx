import { Ingredients } from "../types/common";

type IngredientInputs = {
  numberOfDoughs: number;
  doughWeight: number;
  saltPercentage: number;
  hydrationPercentage: number;
};

export function calculateIngredients(
  ingredientInputs: IngredientInputs
): Ingredients {
  const { numberOfDoughs, doughWeight, saltPercentage, hydrationPercentage } =
    ingredientInputs;
  const rawTotalDoughWeight = numberOfDoughs * doughWeight;
  const flour = (rawTotalDoughWeight / (100 + hydrationPercentage)) * 100;
  const water = rawTotalDoughWeight - flour;
  const salt = flour * (saltPercentage * 0.01);
  const yeast = rawTotalDoughWeight * 0.003;
  console.log(rawTotalDoughWeight);
  return {
    flour: flour,
    salt: salt,
    water: water,
    yeast: yeast,
    measurement: "grams",
  };
}
