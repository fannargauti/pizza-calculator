import { IngredientInputs } from "../types/common";

export function saveIngredientsToLocalStorage(ingredients: IngredientInputs) {
  if (typeof window !== "undefined") {
    localStorage.setItem("ingredients", JSON.stringify(ingredients));
  }
}

export function loadIngredientsFromLocalStorage({
  fallback,
}: {
  fallback: IngredientInputs;
}): IngredientInputs {
  if (typeof window !== "undefined") {
    const storedIngredients = localStorage.getItem("ingredients");
    if (storedIngredients) {
      const parsedIngredients = JSON.parse(storedIngredients);
      if (isValidIngredients(parsedIngredients, fallback)) {
        return parsedIngredients;
      }
    }
    return fallback;
  }
  return fallback;
}

function isValidIngredients(
  ingredients: any,
  fallback: IngredientInputs
): boolean {
  for (const [key, value] of Object.entries(ingredients)) {
    if (typeof value !== typeof fallback[key as keyof IngredientInputs]) {
      return false;
    }
  }
  return true;
}
