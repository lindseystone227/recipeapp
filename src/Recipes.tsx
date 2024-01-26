import React from 'react';
import Recipe from './Recipe';
import Filter from './Filter';

function Recipes() {
  return (
    <>
      <h1 className="p-4 text-3xl text-title font-sans">lindsey's recipes</h1>
      <div className="flex ml-2 mr-2 mb-2">
        <Filter title={'Main'} link={'/'}/>
        <Filter title={'Side'} link={'/'}/>
        <Filter title={'Breakfast'} link={'/'}/>
        <Filter title={'Dessert'} link={'/'}/>
      </div>
      <div className="p-2 flex flex-wrap justify-evenly">
        <Recipe title={'Chickpea Curry'} photo={'/chickpeacurry.jpg'} path='/chickpeacurry' />
        <Recipe title={'Almond Flour Bread'} photo={'/almondflourbread.jpg'} path='/almondflourbread'/>
        <Recipe title={'Sweet Potato Salad'} photo={'/sweetpotatosalad.jpg'} path='/sweetpotatosalad'/>
        <Recipe title={'Pumpkin Muffins'} photo={'/pumpkinmuffins.jpg'} path='/pumpkinmuffins'/>
        <Recipe title={'Autumn Chicken'} photo={'/autumnchicken.jpg'} path='/autumnchicken'/>
        <Recipe title={'Carrot Muffins'} photo={'/carrotmuffins.jpg'} path='/carrotmuffins'/>
        <Recipe title={'Pumpkin Pie'} photo={'/pumpkinpie.jpg'} path='/pumpkinpie'/>
        <Recipe title={'Chicken Curry'} photo={'/chickencurry.jpg'} path='/chickencurry'/>
        <Recipe title={'Sausage Patties'} photo={'/sausagepatties.jpg'} path='/sausagepatties'/>
        <Recipe title={'Lemon Muffins'} photo={'/lemonmuffins.jpg'} path='/lemonmunffins'/>
        <Recipe title={'Banana Pancakes'} photo={'/bananapancakes.jpg'} path='/bananapancakes'/>
        <Recipe title={'Almond Flour Biscuits'} photo={'/biscuits.jpg'} path='/almondflourbiscuits'/>
        <Recipe title={'Cinnamon Pancakes'} photo={'/cinnamonpancakes.jpg'} path='/cinnamonpancakes'/>
        <Recipe title={'Pumpkin Pie Oatmeal'} photo={'/pumpkinpieoatmeal.jpg'} path='/pumpkinpieoatmeal'/>
      </div>
    </>
  );
}

export default Recipes;
