import React from "react";
import "./PokemonThumbnail.css";

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const PokemonThumbnail = ({ pokemon }) => {
  return (
    <div className="pokemon-thumbnail-container">
      <div className="pokemon-thumbnail">
        {pokemon.isCaught ? (
          <>
            <h4 className="pokemon-name">{capitalize(pokemon.name)}</h4>
            <img
              src={pokemon.sprites.front_default}
              alt="Pokemon"
              height={144}
              width={144}
            />
          </>
        ) : (
          <>
            <h4 className="pokemon-name">?</h4>
            <img
              className="silhouette"
              src={pokemon.sprites.front_default}
              alt="Pokemon"
              height={144}
              width={144}
            />
          </>
        )}
      </div>
    </div>
  );
};

export { PokemonThumbnail };
