export interface Recipe {
  id: string;
  title: string;
  img: string;
  descriptionShort: string;
  ingredientNames: string[],
  ingredientQuantities: string[],
  cookingInstructions: string,
}
