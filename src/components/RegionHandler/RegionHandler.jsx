// import mokePoke from "../../mock/pokeExample";
// import mokeImg from "../../mock/mockImage.png";
import { PokeDexButton } from "../ToolBar/PokeDexButton";
import { PokeContext } from "../PokeContext";

import "./RegionHandler.css";
import NavBar from "../NavBar/NavBar.js";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";


// const exportFunctions = {
//   randomNumber,
// };

const RegionHandler = () => {
  const { pokemon, sortedPokemon, setPokemon } = useContext(PokeContext);
  const currentRegion = useParams().name;

  const randomNumber = () => {
    // 3 to 5 random positions on page?
    return Math.floor(Math.random() * (6 - 3) + 3);
  };

  //Create a random pokemon array with length of the random number
  //Pokemon are pulled from forest pokemon
  const genRandomPokemonArray = (currentRegionPokemon) => {
    const randNum = randomNumber();
    const randomPokemonArray = [];
    // get random item
    for (var i = 0; i <= randNum; i++) {
      const randomIndex = Math.floor(
        Math.random() * currentRegionPokemon.length
      );
      randomPokemonArray.push(currentRegionPokemon[randomIndex]);
    }
    return randomPokemonArray;
  };

  // forest => CurrentRegion
  // usePram => 3000/{forest} => CurrentRegion
  const randPokemonArray = genRandomPokemonArray(sortedPokemon[currentRegion]); //
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
    <div
      className={`body bg-${currentRegion}`}
      data-testid={`background-${currentRegion}`}
    >
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
                      className="animations"
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
        <div className="pokedex-button-container">
          <PokeDexButton
            className="pokedex-button"
            locationName={currentRegion}
          />
        </div>
      </div>
      <div className="locations-box" data-testid="locations">
        <NavBar />
      </div>
      <img
        className="background"
        src={`/assets/${currentRegion}-bg.png`}
        alt={`background-${currentRegion}`}
      />
    </div>
  );
};
export { RegionHandler };
// export default exportFunctions;
