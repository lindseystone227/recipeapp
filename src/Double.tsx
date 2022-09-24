import React from 'react';
import { Recipe as recipeType } from './recipeType';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';

interface RecipeProps{
  recipe: recipeType;
}

function Double(props: RecipeProps) {
  function doubleRecipe() {
    props.recipe.ingredients.map((ingredient) => (
      console.log(ingredient.qty ? `${ingredient.qty * 2} ${ingredient.desc}` : `${ingredient.desc}`)
    ));
  }
  
  return (
    <BootstrapSwitchButton 
      checked={false}
      onlabel='Show original recipe' 
      offlabel='Show doubled recipe'
      onstyle='secondary' 
      onChange={doubleRecipe}
      width={200}
      // Is there a way to see a list of all the possible blue things?
    />
  );
}

export default Double;
