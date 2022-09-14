import React, { useRef, useState } from 'react';
import { Recipe } from './recipeType';
import { Link } from 'react-router-dom';
import { fetche } from './helpers';

interface SearchProps {
  onSearch?: (recipe: Recipe) => void;
}

function Search(props: SearchProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searches, setSearches] = useState<Recipe[]>([]); 

  function doSearch() {
    fetche('http://localhost:3001/recipes').then((result) =>
      result.json()
    ).then((recipes: Recipe[]) => {
      let searchResults = recipes.filter((recipe: Recipe) => (
        recipe.title.toLowerCase().includes(inputRef!.current!.value.toLowerCase())
      ));
      setSearches(searchResults);
    });
  }

  return (
    <div className="search">
    <input type='text' placeholder="Search" ref={inputRef} onInput={() => doSearch()}/>
    <div className="searchResults">{
      searches.map((recipe: Recipe) => {
        return <div 
          className="searchResult" 
          key={recipe.id}>
          <div onClick={() => {props.onSearch && props.onSearch(recipe);}}>{recipe.title}</div>
        </div>;
      })
    }</div>
    </div>
  )
}

//HW: get rid of the search results after one is clicked

export { Search };
