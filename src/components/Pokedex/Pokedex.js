import React, { useState, useContext } from "react";
import { PokemonThumbnail } from "../PokemonThumbnail/PokemonThumbnail";
import { useLocation } from "react-router-dom";
import "./Pokedex.css";

const Pokedex = ({ pokemonList }) => {
  const { pokemon, setPokemon } = useContext(PokeContext);
  const [viewPokemon, setViewPokemon] = useState([]);
  console.log(viewPokemon);
  const location = useLocation();
  let lastLocation = location.state.lastLocation;
  if (lastLocation === undefined) { lastLocation = 'forest' }

  const giveMeAllOfThosePokemon = () => {
    let temp = pokemon
    temp.forEach(element => {
      element.isCaught = true;
    })
    setPokemon(temp);
    setViewPokemon();
  }


  return (
    <>
      <img
        className="background"
        src={`/assets/${lastLocation}-bg.png`}
        alt={`background-${lastLocation}`}
      />
      <div className="pokedex-container">
        <button className="debug" onClick={() => { giveMeAllOfThosePokemon() }}>give me all of those pokemon</button>
        <button className="back-to-catching-those-pokemon" onClick={() => { navigate(-1) }}>get back to those pokemans</button>
        <h4 className="pokedex-header">Pokedex</h4>
        <div className="pokedex-grid">
          {pokemonList.map((pokemon) => {
            return (
              <PokemonThumbnail
                key={pokemon.name}
                pokemon={pokemon}
                setViewPokemon={setViewPokemon}
              />
            );
          })};
        </div>
      </div>
    </>
  );
};

export { Pokedex };
