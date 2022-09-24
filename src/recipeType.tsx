import { Ingredient } from './helpers';

interface Recipe {
  id: number;
  title: string;
  ingredients: Ingredient[];
  instructions: string[];
  photo: string;
}

export type { Recipe }
