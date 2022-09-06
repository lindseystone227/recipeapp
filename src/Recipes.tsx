import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import { Link } from 'react-router-dom';
import { Recipe } from './recipeType';
import { Search } from './Search';
import { fetche } from './helpers';
import Recipee from './Recipe';

function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [currentRecipe, setCurrentRecipe] = useState<Recipe | null>(null); 

  useEffect(() => {
    fetche('http://localhost:3001/recipes').then((result) =>
      result.json()
    ).then((result: Recipe[]) => {
      setRecipes(result);
    });
  }, []);
  return (
    <>
    <Search />
    <Carousel 
      interval={null} 
      onSlide={(eventKey: number, direction: 'end' | 'start') => {
        setCurrentRecipe(recipes[eventKey])
      }}
    >
      {recipes.map((recipe: Recipe) => (
        <Carousel.Item key={recipe.id}>
        <div className="imageParent">
        <img
          src={recipe.photo}
          alt={recipe.title}
          className="photo"
        />
        </div>
        <Carousel.Caption>
          <div className="flex"><h3>{recipe.title}</h3></div>
        </Carousel.Caption>
      </Carousel.Item>
      ))}
    </Carousel>
    {currentRecipe && <Recipee recipe={currentRecipe}/>}
    </>
  );
}

export default Recipes;

// set the currentRecipe as soon as the carousel loads so it's not blank on the first load
