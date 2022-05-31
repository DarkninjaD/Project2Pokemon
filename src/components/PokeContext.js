import React from 'react'

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
  },
  caughtPokemon: [],
  setCaughtPokemon: ()=>{},
})


export { PokeContext }