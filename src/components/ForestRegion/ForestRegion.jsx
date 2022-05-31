import mokePoke from "../../mock/pokeExample";
import { PokeDexButton } from "../ToolBar/PokeDexButton";
import "./ForestRegion.css";
import { LocationContainer } from "../LocationContainer/LocationContainer";
import { useState } from "react";
import mokeImg from "../../mock/mockImage.png";

const ForestRegion = () => {
  const makediv = 24;
  console.log(mokePoke);
  console.log(mokePoke[0].sprites);
  console.log(mokePoke[0].sprites.front_default);
  return (
    <body>
      <div className="row">
        <div className="base-grid">
          {[...Array(makediv)].map((elm, index) => {
            return (
              <div className="gridContainer">
                <img src={mokeImg} alt="temp" />
              </div>
            );
          })}
        </div>
        <div class="text-center">
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
