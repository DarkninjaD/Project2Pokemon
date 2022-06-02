import React from "react";
import { render, screen } from  "@testing-library/react"
import  { Pokedex } from './Pokedex.js'
import { PokeContext } from "../PokeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function mockFunction() {
    const original = require.requireActual('react-router-dom');
    return {
      ...original,
      useLocation: jest.fn().mockReturnValue({
        pathname: '/pokedex',
        search: '',
        hash: '',
        state: {lastLocation:"/forest"},
      }),
    };
  }

  jest.mock('react-router-dom', () => mockFunction());

  const pokemonList = [
      {
        name: "Charizard",
        sprites: {front_default : "placeholder"}
      },
      {
        name: "Ditto",
        sprites: {front_default : "placeholder"}
      }
  ]

describe("It should display a pokedex (more description?)", ()=>{
    it("should render the pokedex container", ()=>{
        render(
            <Router>
                <Pokedex pokemonList = {pokemonList}/>
            </Router>
          );
        expect(screen.getByTestId("pokedex-container")).toBeInTheDocument()
    })
    it("should have a Pokedex header", ()=>{
        render(
            <Router>
              <Pokedex pokemonList = {pokemonList}/>
            </Router>
          );
        expect(screen.getByText("Pokedex")).toBeInTheDocument()
    })
    it("should have two different buttons", ()=>{
        render(
            <Router>
              <Pokedex pokemonList = {pokemonList}/>
            </Router>
          );
        let buttons = screen.getAllByRole("button")
        expect(buttons.length > 0).toBeTruthy()
    })
    it ("should have a background of the current location", ()=>{
        render(
            <Router>
              <Pokedex pokemonList = {pokemonList}/>
            </Router>
          );
        let images = screen.getAllByRole('img')
        expect(images.length > 0).toBeTruthy() //can check the image src
        expect (images[1].src).toBe("http://localhost/placeholder")

    })
    it ("should have a grid of pokemons", ()=>{
        render(
            <Router>
              <Pokedex pokemonList = {pokemonList}/>
            </Router>
          );
        expect (screen.getByTestId("pokedex-grid")).toBeInTheDocument()
    })
})