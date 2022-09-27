import { useState } from 'react'
import { Recipe as recipeType } from './recipeType';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import findFrac from './euclid';
import { Ingredient } from './helpers';

interface RecipeProps{
  recipe: recipeType
  onChange: (recipe: recipeType) => void;
}

function Double(props: RecipeProps) {

  const [showDoubled, setShowDoubled] = useState<boolean>(false);

  function doubleIngredients() {
    // make this function return the array of doubled ingredients
    let doubledIngredientsArray : Ingredient[] = [];
    props.recipe.ingredients.map((ingredient) => (
      ingredient.qty 
      ? doubledIngredientsArray.push(
          {qty: 0, desc: `${findFrac(ingredient.qty * 2)} ${ingredient.desc}`}
        )
      : doubledIngredientsArray.push({qty: 0, desc: ingredient.desc})
    ));

    return doubledIngredientsArray
  }
  
  return (
    <BootstrapSwitchButton 
      checked={false}
      onlabel='Show original recipe' 
      offlabel='Show doubled recipe'
      onstyle='secondary' 
      onChange={(checked: boolean)=> {
        setShowDoubled(checked ? false : true);
        let newRecipe : recipeType = {
          id: 1231231, 
          title: 'thetitle', 
          ingredients: [], 
          instructions: [], 
          photo: ''
        };
        newRecipe.ingredients = showDoubled 
          ? doubleIngredients() 
          : props.recipe.ingredients;
        props.onChange(newRecipe);
      }}
      width={200}
    />
  );
}

export default Double;
