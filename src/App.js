import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Recipe from './components/Recipes';
import Axios from 'axios';

function App() {
  const [search, setSearch] = useState('');
  const [recipe, setRecipes] = useState([]);

  async function getResponse() {
    const result = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
    );
    console.log(result);
    setRecipes(result.data.hits);
  }

  const APP_ID = '306ee0a6';
  const APP_KEY = 'ff8fecf5cafc82c5e6d4b568e632d6d8';

  useEffect(() => {
    getResponse();
  }, []);

  const onInputChange = (e) => {
    setSearch(e.target.value)
  }
  const onSearchClick = (e) => {
    getResponse();
  }
  return (
    <div className='App'>
      <Header search={search} onInputChange={onInputChange} onSearchClick={onSearchClick} />
      <br/>
      <div className='container'>
        <Recipe recipes={recipe} />
      </div>
    </div>
  );
}

export default App;
