import { useState } from 'react'
import { Recipe as recipeType } from './recipeType';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import findFrac from './euclid'

interface RecipeProps{
  recipe: recipeType;
}

function Double(props: RecipeProps) {

  const [showDoubled, setShowDoubled] = useState<boolean>(false);

  function doubleRecipe() {
    props.recipe.ingredients.map((ingredient) => (
      console.log(ingredient.qty 
        ? `${findFrac(ingredient.qty * 2)} ${ingredient.desc}` 
        : `${ingredient.desc}`
      )
    ));
  }
  
  return (
    <BootstrapSwitchButton 
      checked={false}
      onlabel='Show original recipe' 
      offlabel='Show doubled recipe'
      onstyle='secondary' 
      onChange={(checked: boolean)=> {
        setShowDoubled(checked ? false : true);
        showDoubled ? doubleRecipe() : console.log('not doubled');
      }}
      width={200}
    />
  );
}

export default Double;
