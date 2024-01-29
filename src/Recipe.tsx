import React from 'react';

interface RecipeProps {
  title: string;
  photo: string;
  filter: boolean;
  filters: boolean[];
}

function Recipe(RecipeProps: RecipeProps) {
  const noFiltersSelected = RecipeProps.filters.every((filter) => filter === false);

  const clickRecipe = () => {
    window.location.href=`/${RecipeProps.title.toLowerCase().replace(/ /g, '')}`;
  }

  return (
    <div 
      className={(RecipeProps.filter || noFiltersSelected) ? "mb-4 w-36" : "hidden"}
      onClick={clickRecipe}
    >
      <div className="flex justify-center items-center w-32 h-32 rounded-full overflow-hidden">
        <img src={RecipeProps.photo} alt={RecipeProps.title} />
      </div>
      <span className="text-title">{RecipeProps.title}</span>
    </div>
  );
}

export default Recipe;
