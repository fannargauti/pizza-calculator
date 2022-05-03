import { Ingredients, YeastType } from "../types/common";
import {
  FRESH_YEAST_MULTIPLIER,
  FRIDGE_TEMP_CELCIUS,
  ROOM_TEMP_ADJUSTMENT_RATE,
  ROOM_TEMP_CELCIUS,
  ROOM_TEMP_REFERENCE_HOURS,
  ROOM_TEMP_YEAST_RATE,
  SOURDOUGH_MULTIPLIER,
} from "./constants";

type IngredientInputs = {
  numberOfDoughs: number;
  doughWeight: number;
  saltPercentage: number;
  hydrationPercentage: number;
  selectedYeast: YeastType;
  proofRoomTempDuration: number;
  proofFridgeDuration: number;
};

export function calculateIngredients(
  ingredientInputs: IngredientInputs
): Ingredients {
  const {
    numberOfDoughs,
    doughWeight,
    saltPercentage,
    hydrationPercentage,
    selectedYeast,
    proofRoomTempDuration,
    proofFridgeDuration,
  } = ingredientInputs;
  const rawTotalDoughWeight = numberOfDoughs * doughWeight;
  const flour = (rawTotalDoughWeight / (100 + hydrationPercentage)) * 100;
  const water = rawTotalDoughWeight - flour;
  const salt = flour * (saltPercentage * 0.01);
  const yeast =
    rawTotalDoughWeight *
    calculateYeastPercentage(proofRoomTempDuration, proofFridgeDuration);

  return {
    flour: flour,
    salt: salt,
    water: water,
    yeast: convertToYeastType(yeast, selectedYeast),
    yeastType: selectedYeast,
    measurement: "grams",
  };
}

function convertToYeastType(yeast: number, yeastType: YeastType) {
  switch (yeastType) {
    case "Fresh yeast":
      return yeast * FRESH_YEAST_MULTIPLIER;
    case "Sourdough":
      return yeast * SOURDOUGH_MULTIPLIER;

    default:
      return yeast;
  }
}

function calculateYeastPercentage(
  proofRoomTempDuration: number,
  proofFridgeDuration: number
): number {
  const predictedRoomRate = Math.pow(Math.sin(ROOM_TEMP_CELCIUS / 36), 2.1);
  const predictedFridgeRate = Math.pow(Math.sin(FRIDGE_TEMP_CELCIUS / 36), 2.1);
  const avgRate =
    predictedRoomRate * proofRoomTempDuration +
    predictedFridgeRate * proofFridgeDuration;

  return (
    (ROOM_TEMP_YEAST_RATE *
      ROOM_TEMP_REFERENCE_HOURS *
      ROOM_TEMP_ADJUSTMENT_RATE) /
    avgRate
  );
}
