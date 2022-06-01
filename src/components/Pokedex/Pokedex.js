import React, { useState } from "react";
import { PokemonThumbnail } from "../PokemonThumbnail/PokemonThumbnail";
import { useNavigate, useLocation } from 'react-router-dom'
import { PokeContext } from "../PokeContext"
import "./Pokedex.css";

const Pokedex = ({ pokemonList }) => {
  const [viewPokemon, setViewPokemon] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  let lastLocation = location.state.lastLocation;
  if (lastLocation === undefined) {lastLocation='forest'}

  return (
    <>
      <img
        className="background"
        src={`/assets/${lastLocation}-bg.png`}
        alt={`background-${lastLocation}`}
      />
      <div className="pokedex-container">
        {/* <button onclick="history.back()">Go back</button> */}
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
  )
};

export { Pokedex };