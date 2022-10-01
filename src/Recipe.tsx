import React, { useState } from 'react';
import { Recipe as recipeType } from './recipeType';
import Accordion from 'react-bootstrap/Accordion';
import Double from './Double';
import findFrac from './euclid';
import { Ingredient } from './helpers';

interface RecipeProps{
  recipe: recipeType;
}

function Recipe(props: RecipeProps) {

  const [doubled, setDoubled] = useState<boolean>(false);

  function handleDouble(double: boolean) {
    setDoubled(double);
  }

  function doubleIngredient(ingredient: Ingredient): Ingredient {
    let factor = 2; //change this to be a variable
    let newIngredient: Ingredient = {qty: ingredient.qty * factor, desc: ingredient.desc}
    return newIngredient;
  }

  function originalIngredient(ingredient: Ingredient): Ingredient {
    let originalIngredient: Ingredient = {qty: ingredient.qty, desc: ingredient.desc}
    return originalIngredient;
  }

  return (
    <div>
      {
        (  
          <div className="accordionParent">
          <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Ingredients</Accordion.Header>
            <Accordion.Body>
              <ul>{ props.recipe.ingredients.map(doubled ? doubleIngredient : originalIngredient ).map((ingredient) => 
                ( <li>{ 
                    ingredient.qty 
                      ? `${findFrac(ingredient.qty)} ${ingredient.desc}` 
                      : ingredient.desc
                 }</li> ))
                }
              </ul>
              <Double onChange={handleDouble}/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Instructions</Accordion.Header>
            <Accordion.Body>
              <ol>{ props.recipe.instructions.map((instruction: string) =>
                  (
                    <div className="instructions">
                      <input className="check" type="checkbox"></input>
                      <li style={{listStyleType: "none"}}>{ instruction }</li>
                    </div >
                  )) 
                }
              </ol>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion> 
        </div>   
        )
      }
    </div>
  );
}

export default Recipe;
