import React from 'react';

interface FilterProps {
  title: string;
  link: string;
}

function Filter(FilterProps: FilterProps) {
  return (
    <div className="rounded-full bg-title text-background w-28 flex justify-center ml-1 mr-1 mb-4">
      <p>{FilterProps.title}</p>
    </div>
  );
}

export default Filter;
