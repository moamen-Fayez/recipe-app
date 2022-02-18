
import './App.css';
import { React, useState, useEffect } from 'react';
import Recipe from './Recipe';

function App() {

const APP_ID = "f3b064c6";
const APP_KEY = "03827f0d2af2486ac2aced00a15fa27d";

const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState('');
const [query, setQeury] = useState('chicken')

useEffect( () => {getRecipe()  },[query])



/*const gerRecipe = () => {
fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
.then(response => response.json())
  .then(data => console.log(data));
}*/
const getRecipe = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
  const data = await response.json();
  setRecipes(data.hits)
}
const updateSearch = e => {setSearch(e.target.value); console.log(search)};
const getSearch = e => {
  e.preventDefault();
   setQeury(search);
   setSearch('')
  }

  return (
    <div className="App">
      <form className='search-form' onSubmit={getSearch}>
        <input className='search-bar' type="text" value={search} onChange={updateSearch}/>
        <button  className='search-button' type='submit'>Search</button>
      </form>
         <div className='recipes'> {recipes.map(recipe => (<Recipe  key={recipe.recipe.label} title={recipe.recipe.label} calories = {recipe.recipe.calories} 
      image={recipe.recipe.image} ingredients={recipe.recipe.ingredients}
      />)
        )}</div>
     
    </div>
  );
}

export default App;
