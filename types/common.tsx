export type Ingredients = {
  flour: number;
  salt: number;
  water: number;
  yeast: number;
  yeastType: YeastType;
  measurement: "grams" | "oz";
};

export type YeastType = "Active dry yeast" | "Fresh yeast" | "Sourdough";
