import mokePoke from "../../mock/pokeExample";
import { PokeDexButton } from "../ToolBar/PokeDexButton";
import { PokeContext } from "../PokeContext"
import { useContext } from 'react'
import NavBar from '../NavBar/NavBar.js'

import ForestBackground from "../../assets/Forest-Background.svg";
import "./ForestRegion.css";
import { LocationContainer } from "../LocationContainer/LocationContainer";

const ForestRegion = () => {
  const { pokemon, sortedPokemon } = useContext(PokeContext);

  console.log(sortedPokemon)

  return (
    <div className="base-grid">
      <img
        className="background"
        src="/assets/Forest-Background.svg"
        alt="background-forest"
      />
      <LocationContainer />
      <PokeDexButton className="pokedex-button" />
      <NavBar />
    </div>
  );
};
export { ForestRegion };
