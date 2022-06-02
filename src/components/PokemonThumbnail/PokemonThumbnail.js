import React from "react";
import "./PokemonThumbnail.css";

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const PokemonThumbnail = ({ pokemon }) => {
  return (
    <>
      {pokemon.isCaught ?
        <div className="flip-card" /*flip-card*/ >
          <div className="pokemon-thumbnail-container" /*flip-card-inner*/ >
            <div className="pokemon-thumbnail-front" /*flip-card-front*/ >
              <h4 className="pokemon-name">{capitalize(pokemon.name)}</h4>
              <img
                id={pokemon.name}
                className="pkmnImage-front-shadow silhouette"
                src={pokemon.sprites.front_default}
                alt="Pokemon"
              />
              <img
                id={pokemon.name}
                className="pkmnImage-front"
                src={pokemon.sprites.front_default}
                alt="Pokemon"
              />

            </div>
            <div className={`pokemon-thumbnail-back ${pokemon.types[0].type.name}`} /*flip-card-back*/ >
              <p className={`pokemon-id ${pokemon.types[0].type.name}`}>#{pokemon.id}</p>
              <p className={`pokemon-name-back`}> {capitalize(pokemon.name)} </p>
              <img
                id={pokemon.name}
                className="pkmnImage-back-shadow silhouette"
                src={pokemon.sprites.front_default}
                alt="Pokemon"
              />
              <img
                id={pokemon.name}
                className="pkmnImage-back"
                src={pokemon.sprites.front_default}
                alt="Pokemon"
              />
              <div className="pokemon-details">
                <div className="type-container">
                  {pokemon.types.length === 1 ? "Type:" : "Types:"}
                  {pokemon.types.map((element) => {
                    return <img src={`./assets/types/${element.type.name}-type.png`}
                                id={element.type.name}
                                className="pokemon-type"
                            />
                  })}
                </div>
                <div className="pokemon-detail-entry">Height: {Math.round(pokemon.height * 3.93701)} in.</div>
                <div className="pokemon-detail-entry">Weight: {Math.round(pokemon.weight * 0.220462)} lbs</div>
                <table className={`stat-table ${pokemon.types[0].type.name}`}>
                  <th className={`stat-table-header ${pokemon.types[0].type.name}`}>Base Stats</th>
                    {pokemon.stats.map(stat => {
                      let statName = stat.stat.name;
                      if (statName === "hp") {
                        statName = "HP"
                      }
                      if (statName === "attack") {
                        statName = "Atk"
                      }if (statName === "defense") {
                        statName = "Def"
                      }
                      if (statName === "speed") {
                        statName = "Spd"
                      }
                      if (statName === "special-attack") {
                        statName = "Sp-Atk"
                      }
                      if (statName === "special-defense") {
                        statName = "Sp-Def"
                      }
                      return <tr className={`stat-table-row`}>
                          <td className={`stat-table-cell ${pokemon.types[0].type.name}`}>{statName}</td>
                          <td className={`stat-table-cell ${pokemon.types[0].type.name}`}>{stat.base_stat}</td>
                        </tr>
                    })}
                </table>
              </div>
            </div>
          </div>
        </div> :
        <div className="pokemon-thumbnail-hidden">
          <div className="pokemon-thumbnail-silhouette">
            <h4 className="pokemon-name">?</h4>
            <img
              id={pokemon.name}
              className="pkmnImage silhouette"
              src={pokemon.sprites.front_default}
              alt="Pokemon"
              height={144}
              width={144}
            />
          </div>
        </div>
      }
    </>
  );
};

export { PokemonThumbnail };
