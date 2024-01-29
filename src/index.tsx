import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Recipes from './Recipes';
import ChickpeaCurry from '../src/Details/ChickpeaCurry';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className="min-h-screen bg-background"><Recipes /></div>}/>
        <Route path="/chickpeacurry" element={<div className="min-h-screen bg-background"><ChickpeaCurry /></div>}/>
        <Route path="/almondflourbread" element={<div className="min-h-screen bg-background"><ChickpeaCurry /></div>}/>
        <Route path="/sweetpotatosalad" element={<div className="min-h-screen bg-background"><ChickpeaCurry /></div>}/>
        <Route path="/pumpkinmuffins" element={<div className="min-h-screen bg-background"><ChickpeaCurry /></div>}/>
        <Route path="/autumnchicken" element={<div className="min-h-screen bg-background"><ChickpeaCurry /></div>}/>
        <Route path="/carrotmuffins" element={<div className="min-h-screen bg-background"><ChickpeaCurry /></div>}/>
        <Route path="/pumpkinpie" element={<div className="min-h-screen bg-background"><ChickpeaCurry /></div>}/>
        <Route path="/chickencurry" element={<div className="min-h-screen bg-background"><ChickpeaCurry /></div>}/>
        <Route path="/sausagepatties" element={<div className="min-h-screen bg-background"><ChickpeaCurry /></div>}/>
        <Route path="/lemonmuffins" element={<div className="min-h-screen bg-background"><ChickpeaCurry /></div>}/>
        <Route path="/bananapancakes" element={<div className="min-h-screen bg-background"><ChickpeaCurry /></div>}/>
        <Route path="/almondflourbiscuits" element={<div className="min-h-screen bg-background"><ChickpeaCurry /></div>}/>
        <Route path="/cinnamonpancakes" element={<div className="min-h-screen bg-background"><ChickpeaCurry /></div>}/>
        <Route path="/pumpkinpieoatmeal" element={<div className="min-h-screen bg-background"><ChickpeaCurry /></div>}/>
        <Route path="/tacobowl" element={<div className="min-h-screen bg-background"><ChickpeaCurry /></div>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
