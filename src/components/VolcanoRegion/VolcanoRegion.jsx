// import mokePoke from "../../mock/pokeExample";
// import mokeImg from "../../mock/mockImage.png";
import { PokeDexButton } from "../ToolBar/PokeDexButton";
import { PokeContext } from "../PokeContext";

import "./VolcanoRegion.css";
import NavBar from "../NavBar/NavBar.js";
import React, { useContext } from "react";

const VolcanoRegion = () => {
  const { pokemon, sortedPokemon, setPokemon } = useContext(PokeContext);

  const randomNumber = () => {
    // 3 to 5 random positions on page?
    return Math.floor(Math.random() * (6 - 3) + 3);
  };

  //Create a random pokemon array with length of the random number
  //Pokemon are pulled from volcano pokemon
  const genRandomPokemonArray = (volcanoPokemon) => {
    const randNum = randomNumber();
    const randomPokemonArray = [];
    // get random item
    for (var i = 0; i <= randNum; i++) {
      const randomIndex = Math.floor(Math.random() * volcanoPokemon.length);
      randomPokemonArray.push(volcanoPokemon[randomIndex]);
    }
    return randomPokemonArray;
  };

  const randPokemonArray = genRandomPokemonArray(sortedPokemon.volcano); //
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

  const clickHandler = (e) => {
    //tempPokemon is current pokemon, find in the pokemon array
    let tempArray = JSON.parse(JSON.stringify(pokemon));
    tempArray.forEach((object) => {
      if (object.name === e.id) {
        object.isCaught = true;
      }
    });
    setPokemon(tempArray);
  };

  return (
    <div className="body bg-volcano" data-testid="background-volcano">
      <div className="row">
        <div className="base-grid">
          {[...insertRandomPokemon(makediv, randPokemonArray)].map(
            (elm, index) => {
              return (
                <div className="gridContainer" key={index}>
                  {elm !== undefined ? (
                    <img
                      id={elm.name}
                      src={elm.sprites.front_default}
                      alt="temp"
                      onClick={(event) => {
                        event.preventDefault();
                        clickHandler(event.target);
                      }}
                      style={{
                        position: "relative",
                        right: `${Math.floor(Math.random() * 100)}px`,
                        bottom: `${Math.floor(Math.random() * 100)}px`,
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
        <NavBar />
      </div>
    </div>
  );
};
export { VolcanoRegion };
