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
    const ingredients = JSON.parse(localStorage.getItem("ingredients") || "");
    if (!isValidIngredients(ingredients, fallback)) {
      return fallback;
    }
    return ingredients;
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
