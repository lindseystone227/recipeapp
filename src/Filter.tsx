import React from 'react';

interface FilterProps {
  title: string;
  link: string;
  onClick: () => void;
  filterOn: boolean;
}

function Filter(FilterProps: FilterProps){
  return (
    <div 
      className={FilterProps.filterOn ? "rounded-full bg-title text-background w-28 flex justify-center ml-1 mr-1 mb-4" : "rounded-full bg-background text-title w-28 flex justify-center ml-1 mr-1 mb-4 border border-title !important border-solid"}
      onClick={FilterProps.onClick}
    >
      <p>{FilterProps.title}</p>
    </div>
  );
}

export default Filter;
