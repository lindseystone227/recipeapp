import React from 'react';
import { Recipe as recipeType } from './recipeType';
import Accordion from 'react-bootstrap/Accordion';
import doubleRecipe from './doubleRecipe';

interface RecipeProps{
  recipe: recipeType;
}

function Recipe(props: RecipeProps) {

  return (
    <div>
      {
         (  
          <div className="accordionParent">
          <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Ingredients</Accordion.Header>
            <Accordion.Body>
              <ul>{ props.recipe.ingredients.map((ingredient: string) => 
                ( <li>{ ingredient }</li> ))
              }
              </ul>
              <button onClick={doubleRecipe}>Double recipe</button>
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
