import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { Recipe } from './recipeType';
import { Search } from './Search';
import { fetche } from './helpers';

function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

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
    <Carousel interval={null}>
      {recipes.map((recipe: Recipe) => (
        <Carousel.Item key={recipe.id}>
        <img
          src={recipe.photo}
          alt={recipe.title}
          className="photo"
        />
        <Carousel.Caption>
          <h3><Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link></h3>
        </Carousel.Caption>
      </Carousel.Item>
      ))}
    </Carousel>
    </>
  );
}

export default Recipes;
