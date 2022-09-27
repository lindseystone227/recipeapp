import React, { useState } from 'react';
import { Recipe as recipeType } from './recipeType';
import Accordion from 'react-bootstrap/Accordion';
import Double from './Double';
import findFrac from './euclid';

interface RecipeProps{
  recipe: recipeType;
}

function Recipe(props: RecipeProps) {

  const [recipe, setRecipe] = useState<recipeType>(props.recipe);

  function handleDouble(newRecipe: recipeType) {
    console.log('handleDouble', newRecipe);
    setRecipe(newRecipe);
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
              <ul>{ recipe.ingredients.map((ingredient) => 
                ( <li>{ 
                    ingredient.qty 
                      ? `${findFrac(ingredient.qty)} ${ingredient.desc}` 
                      : ingredient.desc
                 }</li> ))
                }
              </ul>
              <Double recipe={props.recipe} onChange={handleDouble}/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Instructions</Accordion.Header>
            <Accordion.Body>
              <ol>{ props.recipe.instructions.map((instruction: string) =>
                  ( <li>{ instruction }</li>)) 
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
