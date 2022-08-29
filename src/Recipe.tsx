import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Recipe as recipeType } from './recipeType';
import Accordion from 'react-bootstrap/Accordion';
import { fetchee } from './helpers';

function Recipe() {
  const params = useParams();
  const [recipe, setRecipe] = useState<recipeType | null>(null);

  useEffect(() => {
    fetchee(`http://localhost:3001/recipes/${params.id}`).then((result) =>
      result.json()
    ).then((result) => {
      setRecipe(result);
    });
  }, [ params.id ]);
  return (
    <div>
      {
        recipe && (  
          <Accordion defaultActiveKey={['0']} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Ingredients</Accordion.Header>
            <Accordion.Body>
              <ul>{ recipe.ingredients.map((ingredient: string) => 
                ( <li>{ ingredient }</li> ))
              }
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Instructions</Accordion.Header>
            <Accordion.Body>
              <ol>{ recipe.instructions.map((instruction: string) =>
                  ( <li>{ instruction }</li>)) 
                }
                </ol>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>    
        )
      }
    </div>
  );
}

export default Recipe;
