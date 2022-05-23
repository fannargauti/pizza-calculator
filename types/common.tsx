import { viewOrder } from "../utils/constants";

export type Ingredients = {
  amounts: IngredientAmounts;
  yeastType: YeastType;
  measurement: "grams" | "oz";
};

export type IngredientAmounts = {
  flour: number;
  salt: number;
  water: number;
  yeast: number;
};

export type YeastType = "Active dry yeast" | "Fresh yeast" | "Sourdough";

export type ViewType = typeof viewOrder[number];

export type IngredientInputs = {
  numberOfDoughs: number;
  doughWeight: number;
  saltPercentage: number;
  hydrationPercentage: number;
  yeastType: YeastType;
  proofRoomTempDuration: number;
  proofFridgeDuration: number;
};
