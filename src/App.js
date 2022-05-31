import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import { PokeContext } from "./components/PokeContext";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { ForestRegion } from "./components/ForestRegion/ForestRegion"
import { LocationDisplay } from "./components/LocationDisplay/LocationDisplay"
import "./App.css";

//url: https://pokeapi.co/api/v2/pokemon/?limit=151

function App() {
  let townPokemon, rockPokemon, spookyPokemon, waterPokemon, volcanoPokemon
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [sortedPokemon, setSortedPokemon] = useState({
    forest : [],
    town : [],
    water: [],
    rock : [],
    spooky : [],
    volcano : []
  })
  const changePokemon = (param) => {
    setPokemon(param);
  };

  const sortPokemon = (data) =>{
    // takes in a list of pokemon and sorts by expected location, based on their types
    //assumes that the context will have a forest pokemon, town pokemon, rock pokemon etc arrays with the pokemon of the respective typees
    setSortedPokemon({
      forest : data.filter((obj) => {
        let types = obj.types.map((x) => x.type.name)
        return types.includes("grass") || types.includes("bug") || types.includes("flying") || types.includes("fairy") || types.includes("poison")
      }),
      town : data.filter((obj) => {
        let types = obj.types.map((x) => x.type.name)
        return types.includes("normal") || types.includes("electric")
      }),
      water: data.filter ((obj) => {
        let types = obj.types.map((x) => x.type.name)
        return types.includes("water") || types.includes("ice") || types.includes("dragon")
      }),
      rock : data.filter((obj) => {
        let types = obj.types.map((x) => x.type.name)
        return types.includes("rock") || types.includes("fighting") || types.includes("ground")
      }),
      spooky : data.filter ((obj) => {
        let types = obj.types.map((x) => x.type.name)
        return types.includes("ghost") || types.includes("psychic") || types.includes("darj")
      }),
      volcano : data.filter ((obj) => {
        let types = obj.types.map((x) => x.type.name)
        return types.includes("fire") || types.includes("ground") || types.includes("steel")
      })
    })
  }

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => res.json())
      .then((data) => data.results)
      .then((pokemonList) =>
        Promise.all(
          pokemonList.map((pokemon) =>
            fetch(pokemon.url).then((response) => response.json())
          )
        )
      )
      .then((results) => {
        setPokemon(results);
        sortPokemon(results);
        setIsLoading(false);
      })
  }, []);

  console.log(pokemon)

  const value = [pokemon, changePokemon];

  return (
    <PokeContext.Provider value={{pokemon, sortedPokemon}}>
      <Router>
        <Routes>
          <Route path = '/' element = {<LandingPage isLoading={isLoading}/>}/>
          <Route path = '/forest' element = {<ForestRegion/>}/>
          <Route path = '/location/:name' element={<LocationDisplay isLoading={isLoading}/>}/>
          {/* <Route path = '/location/:name' element={<{className'Region'}/>} regionPokemon={sortedPokemon[{}]}/>}/> */}
          {/* <Route path = '/location/:name' element={<{}} regionPokemon={sortedPokemon[{}]}/>}/> */}
        </Routes>
      </Router>
    </PokeContext.Provider>
  );
}

export default App;

/*
 //just sort the pokemon
  const sortPokemon = () =>{
    //assumes that the context will have a forest pokemon, town pokemon, rock pokemon etc arrays with the pokemon of the respective typees
    setForestPokemon(pokemon.filter ((obj) => {
      let types = obj.types.map((x) => x.type.name)
      return types.includes("grass") || types.includes("bug") || types.includes("flying") || types.includes("fairy") || types.includes("poison")
    }))

    townPokemon = pokemon.filter ((obj) => {
      let types = obj.types.map((x) => x.type.name)
      return types.includes("normal") || types.includes("electric")
    })

    waterPokemon = pokemon.filter ((obj) => {
      let types = obj.types.map((x) => x.type.name)
      return types.includes("water") || types.includes("ice") || types.includes("dragon")
    })

    rockPokemon = pokemon.filter ((obj) => {
      let types = obj.types.map((x) => x.type.name)
      return types.includes("rock") || types.includes("fighting") || types.includes("ground")
    })

    spookyPokemon  = pokemon.filter ((obj) => {
      let types = obj.types.map((x) => x.type.name)
      return types.includes("ghost") || types.includes("psychic") || types.includes("darj")
    })

    volcanoPokemon  = pokemon.filter ((obj) => {
      let types = obj.types.map((x) => x.type.name)
      return types.includes("fire") || types.includes("ground") || types.includes("steel")
    })

  }
*/