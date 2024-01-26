import React from 'react';

interface RecipeProps {
  title: string;
  photo: string;
  path: string;
}

function Recipe(RecipeProps: RecipeProps) {
  return (
    <div className="mb-4 w-36">
      <div className="flex justify-center items-center w-32 h-32 rounded-full overflow-hidden">
        <img src={RecipeProps.photo} alt={RecipeProps.title} />
      </div>
      <span className="text-title">{RecipeProps.title}</span>
    </div>
  );
}

export default Recipe;
