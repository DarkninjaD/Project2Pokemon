import React, { useState, useEffect, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PokeContext } from './Components/PokeContext'
import LandingPage from './Components/LandingPage'
import './App.css';


//url: https://pokeapi.co/api/v2/pokemon/?limit=151

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);

  const changePokemon = (param) => {
    setPokemon(param)
  }

  const value = [pokemon, changePokemon]

  useEffect(() => {
    fetch ('https://pokeapi.co/api/v2/pokemon/?limit=151')
      .then(res => res.json())
      .then(data => data.results)
      .then(pokemonList => Promise.all(pokemonList.map(pokemon => fetch(pokemon.url).then(response => response.json()))))
      .then(results => {
        setPokemon(results);
        setIsLoading(false);
      })
  }, [])

  return (
    <div className="App">
      <PokeContext.Provider value={value}>
        <LandingPage isLoading={isLoading}></LandingPage>
      </PokeContext.Provider>
    </div>
  );
}

export default App;
