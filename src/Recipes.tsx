import React, { useState } from 'react';
import Recipe from './Recipe';
import Filter from './Filter';

function Recipes() {
  const [mainFilter, setMainFilter] = useState(false);
  const [sideFilter, setSideFilter] = useState(false);
  const [breakfastFilter, setBreakfastFilter] = useState(false);
  const [dessertFilter, setDessertFilter] = useState(false);

  const useMainFilter = () => {
    setMainFilter(!mainFilter);
  }
  
  const useSideFilter = () => {
    setSideFilter(!sideFilter);
  }
  
  const useBreakfastFilter = () => {
    setBreakfastFilter(!breakfastFilter);
  }
  
  const useDessertFilter = () => {
    setDessertFilter(!dessertFilter);
  }

  const filters = [mainFilter, sideFilter, breakfastFilter, dessertFilter]
  
  return (
    <>
      <h1 className="p-4 text-3xl text-title font-sans">lindsey's recipes</h1>
      <div className="flex ml-2 mr-2 mb-2">
        <Filter title={'Main'} link={'/'} onClick={useMainFilter} filterOn={mainFilter}/>
        <Filter title={'Side'} link={'/'} onClick={useSideFilter} filterOn={sideFilter}/>
        <Filter title={'Breakfast'} link={'/'} onClick={useBreakfastFilter} filterOn={breakfastFilter}/>
        <Filter title={'Dessert'} link={'/'} onClick={useDessertFilter} filterOn={dessertFilter}/>
      </div>
      <div className="p-2 flex flex-wrap justify-evenly">
        <Recipe title={'Chickpea Curry'} photo={'/chickpeacurry.jpg'} filter={mainFilter} filters={filters}/>
        <Recipe title={'Almond Flour Bread'} photo={'/almondflourbread.jpg'} filter={sideFilter} filters={filters}/>
        <Recipe title={'Sweet Potato Salad'} photo={'/sweetpotatosalad.jpg'} filter={sideFilter} filters={filters}/>
        <Recipe title={'Pumpkin Muffins'} photo={'/pumpkinmuffins.jpg'} filter={sideFilter} filters={filters}/>
        <Recipe title={'Autumn Chicken'} photo={'/autumnchicken.jpg'} filter={mainFilter} filters={filters}/>
        <Recipe title={'Carrot Muffins'} photo={'/carrotmuffins.jpg'} filter={sideFilter} filters={filters}/>
        <Recipe title={'Pumpkin Pie'} photo={'/pumpkinpie.jpg'} filter={dessertFilter} filters={filters}/>
        <Recipe title={'Chicken Curry'} photo={'/chickencurry.jpg'} filter={mainFilter} filters={filters}/>
        <Recipe title={'Sausage Patties'} photo={'/sausagepatties.jpg'} filter={breakfastFilter} filters={filters}/>
        <Recipe title={'Lemon Muffins'} photo={'/lemonmuffins.jpg'} filter={sideFilter} filters={filters}/>
        <Recipe title={'Banana Pancakes'} photo={'/bananapancakes.jpg'} filter={breakfastFilter} filters={filters}/>
        <Recipe title={'Almond Flour Biscuits'} photo={'/almondflourbiscuits.jpg'} filter={sideFilter} filters={filters}/>
        <Recipe title={'Cinnamon Pancakes'} photo={'/cinnamonpancakes.jpg'} filter={breakfastFilter} filters={filters}/>
        <Recipe title={'Pumpkin Pie Oatmeal'} photo={'/pumpkinpieoatmeal.jpg'} filter={breakfastFilter} filters={filters}/>
        <Recipe title={'Taco Bowl'} photo={'/tacobowl.jpg'} filter={mainFilter} filters={filters}/>
      </div>
    </>
  );
}

export default Recipes;
