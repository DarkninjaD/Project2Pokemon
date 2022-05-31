import React from 'react'
// const PokeContext = React.createContext({pokemon : [], setPokemon : ()=>{}, forestPokemon : [], townPokemon : [], rockPokemon : [], spookyPokemon : [], waterPokemon : [], volcanoPokemon : []})

const PokeContext = React.createContext({
  pokemon : [],
  setPokemon : ()=>{},
  sortedPokemon : {
    forest : [],
    town : [],
    water: [],
    rock : [],
    spooky : [],
    volcano : []
  }
})


export { PokeContext }