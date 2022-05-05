import { viewOrder } from "../utils/constants";

export type Ingredients = {
  flour: number;
  salt: number;
  water: number;
  yeast: number;
  yeastType: YeastType;
  measurement: "grams" | "oz";
};

export type YeastType = "Active dry yeast" | "Fresh yeast" | "Sourdough";

export type ViewType = typeof viewOrder[number];
