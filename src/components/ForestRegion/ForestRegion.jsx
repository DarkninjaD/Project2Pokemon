import mokePoke from "../../mock/pokeExample";
import { PokeDexButton } from "../ToolBar/PokeDexButton";
import { PokeContext } from "../PokeContext"
import { useContext } from 'react'
import NavBar from '../NavBar/NavBar.js'

import ForestBackground from "../../assets/Forest-Background.svg";
import "./ForestRegion.css";
import { LocationContainer } from "../LocationContainer/LocationContainer";
import React, { useState } from "react";
import mokeImg from "../../mock/mockImage.png";
import styled from "styled-components";

// import { PokeContext } from "../PokeContext"

const ForestRegion = () => {
  // const { pokemon, sortedPokemon } = useContext(PokeContext);
  // sortedPokemon.forest

  const randomNumber = () => {
    // 3 to 5 random positions on page?
    return Math.floor(Math.random() * (6 - 3) + 3);
  };

  //Create a random pokemon array with length of the random number
  //Pokemon are pulled from forest pokemon
  const genRandomPokemonArray = (forestPokemon) => {
    const randNum = randomNumber();
    const randomPokemonArray = [];
    // get random item
    for (var i = 0; i <= randNum; i++) {
      const randomIndex = Math.floor(Math.random() * forestPokemon.length);
      randomPokemonArray.push(forestPokemon[randomIndex]);
    }
    return randomPokemonArray;
  };

  const randPokemonArray = genRandomPokemonArray(mokePoke); //
  // [50] => [5]
  // [23] <= [5]
  // makediv => empy24 => [emp, index,emp, index]

  const makediv = new Array(24);

  const insertRandomPokemon = (makediv, randPokemonArray) => {
    for (var i = 0; i <= randPokemonArray.length; i) {
      const hodar = Math.floor(Math.random() * 2);
      if (hodar) {
        const randomindex = Math.floor(Math.random() * makediv.length - 1);
        makediv[randomindex] = randPokemonArray[i];
        i++;
      }
    }
    return makediv;
  };

  return (
    <body data-testid="background-forest">
      <div className="row">
        <div className="base-grid">
          {[...insertRandomPokemon(makediv, randPokemonArray)].map(
            (elm, index) => {
              return (
                <div className="gridContainer">
                  {elm !== undefined ? (
                    <img
                      src={elm.sprites.front_default}
                      alt="temp"
                      style={{
                        position: "relative",
                        left: `${Math.floor(Math.random() * 200)}px`,
                        top: `${Math.floor(Math.random() * 200)}px`,
                        right: `${Math.floor(Math.random() * 200)}px`,
                        bottom: `${Math.floor(Math.random() * 200)}px`,
                      }}
                    />
                  ) : (
                    <></>
                  )}
                </div>
              );
            }
          )}
        </div>
        <div className="text-center">
          <PokeDexButton className="pokedex-button" />
        </div>
      </div>
      <div className="locations-box">
        <LocationContainer />
      </div>
    </body>
  );
};
export { ForestRegion };
