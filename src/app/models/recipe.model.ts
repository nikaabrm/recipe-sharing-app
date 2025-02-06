export interface Recipe {
  id: string; // json-server requires to be string
  title: string;
  image: string;
  descriptionShort: string;
  ingredients:Ingredient[];
  description: string;
}

export interface Ingredient{
  name:string;
  amount:number;
  dimension:string;
}
