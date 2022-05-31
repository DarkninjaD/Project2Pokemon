import { PokeDexButton } from "../ToolBar/PokeDexButton";
import { PokeContext } from "../PokeContext"
import { useState, useEffect, useContext } from 'react'

import NavBar from '../NavBar/NavBar.js'

import ForestBackground from "../../assets/Forest-Background.svg";
import { LocationContainer } from "../LocationContainer/LocationContainer";
import { useNavigate, useParams } from 'react-router-dom';

const LocationDisplay = ({ isLoading }) => {
  const navigate = useNavigate()
  const { pokemon, sortedPokemon } = useContext(PokeContext);

  let locationName = useParams().name;

  const getNewPokemon = () => {
    let randomIndex = Math.floor(Math.random() * (sortedPokemon[locationName].length - 0 + 1) + 0)
    setTempPokemon(sortedPokemon[locationName][randomIndex])
  }

  useEffect(() => {
    if (isLoading === true) {
      navigate('/')
    }
    getNewPokemon()
  }, [])

  const [tempPokemon, setTempPokemon] = useState({
    sprites: {
      front_default:""
    }
  });


  console.log(tempPokemon)
  return (
    <div className="base-grid">
      <img
        className="background"
        src={`/assets/${locationName}-bg.svg`}
        alt={`background-${locationName}`}
      />
      {/* Random Pokemon from this location */}
      <img src={tempPokemon.sprites.front_default} onClick={() => {getNewPokemon()}}/>
      <LocationContainer />
      <PokeDexButton className="pokedex-button" />
      <NavBar />
    </div>
  );
}

export { LocationDisplay } ;

  // console.log('Current Location:', locationName)
  // console.log('Pokemon at this Location:', sortedPokemon[locationName])