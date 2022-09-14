import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Recipe } from './recipeType';
import { Search } from './Search';
import { fetche } from './helpers';
import Recipee from './Recipe';

function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [currentRecipe, setCurrentRecipe] = useState<Recipe | null>(); 
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    fetche('http://localhost:3001/recipes').then((result) =>
      result.json()
    ).then((result: Recipe[]) => {
      setRecipes(result);
      setCurrentRecipe(result[0]);
    });
  }, []);
  return (
    <>
    <Search onSearch={(recipe: Recipe) => {
      setCurrentSlide(recipes.indexOf(recipe))
    }} />
    <br></br>
    <br></br>
    <Carousel
      interval={null} 
      onSlide={(eventKey: number, direction: 'end' | 'start') => {
        setCurrentRecipe(recipes[eventKey])
      }}
      activeIndex={currentSlide}
      onSelect={(eventKey: number, event: Record<string, unknown> | null) => {setCurrentSlide(eventKey)}}
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
