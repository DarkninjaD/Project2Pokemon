import React, { useState, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import { PokeContext } from "./components/PokeContext";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { ForestRegion } from "./components/ForestRegion/ForestRegion";
import { LocationDisplay } from "./components/LocationDisplay/LocationDisplay";
import "./App.css";

//url: https://pokeapi.co/api/v2/pokemon/?limit=151

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [sortedPokemon, setSortedPokemon] = useState({
    forest: [],
    town: [],
    water: [],
    gym: [],
    rock: [],
    spooky: [],
    volcano: [],
  });
  const [caughtPokemon, setCaughtPokemon] = useState([]);
  const changePokemon = (param) => {
    setPokemon(param);
  };

  const sortPokemon = (data) => {
    // takes in a list of pokemon and sorts by expected location, based on their types
    //assumes that the context will have a forest pokemon, town pokemon, rock pokemon etc arrays with the pokemon of the respective typees
    setSortedPokemon({
      forest: data.filter((obj) => {
        let types = obj.types.map((x) => x.type.name);
        return (
          types.includes("grass") ||
          types.includes("bug") ||
          types.includes("flying") ||
          types.includes("fairy") ||
          types.includes("poison")
        );
      }),
      town: data.filter((obj) => {
        let types = obj.types.map((x) => x.type.name);
        return types.includes("normal") || types.includes("electric");
      }),
      water: data.filter((obj) => {
        let types = obj.types.map((x) => x.type.name);
        return (
          types.includes("water") ||
          types.includes("ice") ||
          types.includes("dragon")
        );
      }),
      gym: data.filter((obj) => {
        return (
          obj.name === "machop" ||
          obj.name === "machoke" ||
          obj.name === "machamp"
        );
      }),
      rock: data.filter((obj) => {
        let types = obj.types.map((x) => x.type.name);
        return (
          types.includes("rock") ||
          types.includes("fighting") ||
          types.includes("ground")
        );
      }),
      spooky: data.filter((obj) => {
        let types = obj.types.map((x) => x.type.name);
        return (
          types.includes("ghost") ||
          types.includes("psychic") ||
          types.includes("darj")
        );
      }),
      volcano: data.filter((obj) => {
        let types = obj.types.map((x) => x.type.name);
        return (
          types.includes("fire") ||
          types.includes("ground") ||
          types.includes("steel")
        );
      }),
    });
  };

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
      .then((data) => {
        data.forEach((elem) => {
          elem.isCaught = false;
        });

        return data;
      })
      .then((results) => {
        setPokemon(results);
        sortPokemon(results);
        setIsLoading(false);
      });
  }, []);

  return (
    <PokeContext.Provider
      value={{
        pokemon,
        setPokemon,
        sortedPokemon,
        caughtPokemon,
        setCaughtPokemon,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage isLoading={isLoading} />} />
          <Route path="/forest" element={<ForestRegion />} />
          <Route
            path="/location/:name"
            element={<LocationDisplay isLoading={isLoading} />}
          />
          <Route path="/*" element={<LandingPage isLoading={isLoading} />} />
          {/* <Route path = '/location/:name' element={<{className'Region'}/>} regionPokemon={sortedPokemon[{}]}/>}/> */}
          {/* <Route path = '/location/:name' element={<{}} regionPokemon={sortedPokemon[{}]}/>}/> */}
        </Routes>
      </Router>
    </PokeContext.Provider>
  );
}

export default App;
