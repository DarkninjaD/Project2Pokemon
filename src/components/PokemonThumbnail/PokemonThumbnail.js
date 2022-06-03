import React from "react";
import "./PokemonThumbnail.css";

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function PlaySound(soundobj) {
  var thissound=document.getElementById(soundobj);
  thissound.volume = 0.15
  thissound.play();
}

function StopSound(soundobj) {
  var thissound = document.getElementById(soundobj);
  thissound.volume = 0.15
  thissound.pause();
  thissound.currentTime = 0;
}

const PokemonThumbnail = ({ pokemon, allPokemonCaught }) => {
  if (pokemon.name === "machamp" && allPokemonCaught) {
    return (
      <div onMouseOver={()=>{PlaySound('mySound')}}
      onMouseOut={()=>{StopSound('mySound')}} className="flip-card" /*flip-card*/ data-testid="not hidden">
        <audio id='mySound' src='./assets/ui-theme.mp3'/>
            <div className="pokemon-thumbnail-container" /*flip-card-inner*/ >
              <div className="pokemon-thumbnail-front" /*flip-card-front*/ data-testid="front" id={"ODDCHAMP"}>
                <h4 className="pokemon-name">{"ODDCHAMP"}</h4>
                <img
                  id={"ODDCHAMP"}
                  className="pkmnImage-front-shadow silhouette"
                  src={"/assets/oddchamp.png"}
                  alt="Pokemon"
                />
                <img
                  id={"ODDCHAMP"}
                  className="pkmnImage-front"
                  src={"/assets/oddchamp.png"}
                  alt="Pokemon"
                />
              </div>
              <div className={`pokemon-thumbnail-back ${"ODDCHAMP"}`} /*flip-card-back*/ data-testid="back">
                <p className={`pokemon-id ${"ODDCHAMP"}`}>#{pokemon.id}</p>
                <p className={`pokemon-name-back`}>{"ODDCHAMP"}</p>
                <img
                  id={pokemon.name}
                  className={`pkmnImage-back-shadow silhouette ${"shake"}`}
                  src={"/assets/oddchamp.png"}
                  alt="Pokemon"
                />
                <img
                  id={pokemon.name}
                  className={`pkmnImage-back ${"shake"}`}
                  src={"/assets/oddchamp.png"}
                  alt="Pokemon"
                />
                <div className={`pokemon-details`}>
                  <div className="type-container">
                    {pokemon.types.length === 1 ? "Type:" : "Types:"}
                    {pokemon.types.map((element) => {
                      return <img src={`./assets/types/${"big"}-type.png`}
                                  id={element.type.name}
                                  alt={`${element.type.name} type`}
                                  key={`${element.type.name} type`}
                                  className="pokemon-type"
                              />
                    })}
                  </div>
                  <div className="pokemon-detail-entry">Height: {"LARGE"} </div>
                  <div className="pokemon-detail-entry">Weight: {"HEAVY"}</div>
                  <table className={`stat-table ${pokemon.types[0].type.name}`}>
                    <thead className={`stat-table-header ${pokemon.types[0].type.name}`}><tr><td>Base Stats</td></tr></thead>
                    <tbody>
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
                        return <tr key={stat.stat.name} className={`stat-table-row`}>
                            <td className={`stat-table-cell ${pokemon.types[0].type.name}`}>{statName}</td>
                            <td className={`stat-table-cell ${pokemon.types[0].type.name}`}>
                              {999}</td>
                          </tr>
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
      )
  } else {
    return (
      <>
        {pokemon.isCaught ?
          <div className="flip-card" /*flip-card*/ data-testid="not hidden">
            <div className="pokemon-thumbnail-container" /*flip-card-inner*/ >
              <div className="pokemon-thumbnail-front" /*flip-card-front*/ data-testid="front" id={pokemon.name}>
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
              <div className={`pokemon-thumbnail-back ${pokemon.types[0].type.name}`} /*flip-card-back*/ data-testid="back">
                <p className={`pokemon-id ${pokemon.types[0].type.name}`}>#{pokemon.id}</p>
                <p className={`pokemon-name-back`}>{capitalize(pokemon.name)}</p>
                <img
                  id={pokemon.name}
                  className={`pkmnImage-back-shadow silhouette`}
                  src={pokemon.sprites.front_default}
                  alt="Pokemon"
                />
                <img
                  id={pokemon.name}
                  className={`pkmnImage-back`}
                  src={pokemon.sprites.front_default}
                  alt="Pokemon"
                />
                <div className={`pokemon-details`}>
                  <div className="type-container">
                    {pokemon.types.length === 1 ? "Type:" : "Types:"}
                    {pokemon.types.map((element) => {
                      return <img src={`./assets/types/${element.type.name}-type.png`}
                                  id={element.type.name}
                                  alt={`${element.type.name} type`}
                                  key={`${element.type.name} type`}
                                  className="pokemon-type"
                              />
                    })}
                  </div>
                  <div className="pokemon-detail-entry">Height: {Math.round(pokemon.height * 3.93701) + " in."} </div>
                  <div className="pokemon-detail-entry">Weight: {Math.round(pokemon.weight * 0.220462) + " lbs"}</div>
                  <table className={`stat-table ${pokemon.types[0].type.name}`}>
                    <thead className={`stat-table-header ${pokemon.types[0].type.name}`}><tr><td>Base Stats</td></tr></thead>
                    <tbody>
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
                        return <tr key={stat.stat.name} className={`stat-table-row`}>
                            <td className={`stat-table-cell ${pokemon.types[0].type.name}`}>{statName}</td>
                            <td className={`stat-table-cell ${pokemon.types[0].type.name}`}>
                              {stat.base_stat}</td>
                          </tr>
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div> :
          <div className="pokemon-thumbnail-hidden" data-testid="hidden">
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
  }
};

export { PokemonThumbnail };
