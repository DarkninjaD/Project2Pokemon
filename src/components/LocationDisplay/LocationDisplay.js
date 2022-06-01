import { PokeDexButton } from "../ToolBar/PokeDexButton";
import { PokeContext } from "../PokeContext"
import React, { useState, useEffect, useContext } from 'react'

import NavBar from '../NavBar/NavBar.js'
import ForestBackground from "../../assets/Forest-Background.svg";
import { LocationContainer } from "../LocationContainer/LocationContainer";
import { useNavigate, useParams } from 'react-router-dom';
import './LocationDisplay.css'

const LocationDisplay = ({ isLoading }) => {
  const navigate = useNavigate()
  const { pokemon, setPokemon, sortedPokemon, caughtPokemon, setCaughtPokemon } = useContext(PokeContext);

  const [tempPokemon, setTempPokemon] = useState({
    sprites: {
      front_default: ""
    }
  });

  let locationName = useParams().name;

  const getNewPokemon = async () => {
    let randomIndex = Math.floor(Math.random() * (sortedPokemon[locationName].length))

    let test = document.getElementsByClassName('pokemonDisplay')[0]
    test.style.top = `50vh`
    test.style.left = `50vw`
    // test.style.top = `${Math.floor(Math.random() * (80 - 35 + 1) + 35)}vh`
    // test.style.left = `${Math.floor(Math.random() * (65 - 35 + 1) + 35)}vw`
    await setTempPokemon(sortedPokemon[locationName][randomIndex])
  }

  useEffect(() => {
    if (isLoading === true) {
      navigate('/')
    }
    getNewPokemon()
  }, [locationName])

  // console.log(`/assets/${locationName}-bg.png`)

  const clickHandler = (e) => {
    console.log(e.id);
    //tempPokemon is current pokemon, find in the pokemon array
    let tempArray = JSON.parse(JSON.stringify(pokemon));
    tempArray.forEach(object => {
      if(object.name === e.id){
          object.isCaught = true
      }
    });
    setPokemon(tempArray)
    e.hidden = false;
  }

  return (
    <>
      <div className="base-grid">
      </div>
      <img
        className="background"
        src={`/assets/${locationName}-bg.png`}
        alt={`background-${locationName}`}
      />
      {/* Random Pokemon from this location */}
      <img id={tempPokemon.name} className="pokemonDisplay" src={tempPokemon.sprites.front_default} onClick={(e) => {
        e.target.disabled=true;
        clickHandler(e.target)

        getNewPokemon()
      }} />
      <LocationContainer />
      <PokeDexButton locationName={locationName} />
      <NavBar />
    </>
  );
}

export { LocationDisplay };

  // console.log('Current Location:', locationName)
  // console.log('Pokemon at this Location:', sortedPokemon[locationName])