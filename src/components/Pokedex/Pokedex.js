import React, { useState, useContext } from "react";
import { PokemonThumbnail } from "../PokemonThumbnail/PokemonThumbnail";
import { useNavigate, useLocation } from "react-router-dom";
import { PokeContext } from "../PokeContext";
import "./Pokedex.css";

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Pokedex = ({ pokemonList }) => {
  const { pokemon, setPokemon } = useContext(PokeContext);
  const [ , setTemp ] = useState([]);
  const location = useLocation();

  let lastLocation = location.state.lastLocation;
  if (lastLocation === undefined) { lastLocation = 'forest' }
  let navigate = useNavigate();

  const giveMeAllOfThosePokemon = () => {
    let temp = pokemon
    temp.forEach(element => {
      element.isCaught = true;
    })
    setPokemon(temp);
    setTemp()
  }

  return (
    <>
      <img
        className="background"
        src={`/assets/${lastLocation}-bg.png`}
        alt={`background-${lastLocation}`}
      />
      <div className="pokedex-container" data-testid = "pokedex-container">
        <div className="pokedex-navbar">
          <button className="debug" onClick={() => { giveMeAllOfThosePokemon() }}>Debug</button>
          <button className={`back-to-catching-those-pokemon ${lastLocation}-region`} onClick={() => { navigate(-1) }}>Back to the {`${capitalize(lastLocation)} Region`}</button>
          <h4 className="pokedex-header">Pokedex</h4>
        </div>
        <div className="pokedex-grid" data-testid="pokedex-grid">
          {pokemonList.map((pokemon) => {
            return (
              <PokemonThumbnail
                key={pokemon.name}
                pokemon={pokemon}
              />
            );
          })}{";)"}
        </div>
      </div>
    </>
  );
};

export { Pokedex };
