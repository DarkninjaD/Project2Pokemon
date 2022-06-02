import React from "react";
import { render, screen } from  "@testing-library/react"
import  { PokemonThumbnail }  from './PokemonThumbnail.js'

const pokemonNotCaught =
    {
      name: "Ditto",
      sprites: {front_default : "placeholder"},
      isCaught : false
    }

const pokemonCaught =
    {
        name: "Ditto",
        sprites: {front_default : "placeholder"},
        isCaught : true,
        stats : [{stat: {name: "hp", base_stat : 10}}],
        height: 10,
        weight: 10,
        types : [{type: {name: "poison"}}]
    }


describe("It should display pokemon card", ()=>{

    it("should render a hidden pokemon card if the pokemon is not caught", ()=>{
        render(<PokemonThumbnail pokemon={pokemonNotCaught}/>)
        expect(screen.getByTestId("hidden")).toBeInTheDocument()
        expect(screen.getByText("?")).toBeInTheDocument()
    })

    it("should render a pokemon card container + front + back if the pokemon is caught", ()=>{
        render(<PokemonThumbnail pokemon={pokemonCaught}/>)
        expect(screen.getByTestId("not hidden")).toBeInTheDocument()
        expect(screen.getByTestId("front")).toBeInTheDocument()
        expect(screen.getByTestId("back")).toBeInTheDocument()
    })

    it ("should have the pokemon image and table with details if it is caught", ()=>{
        render(<PokemonThumbnail pokemon={pokemonCaught}/>)
        let images = screen.getAllByRole('img')
        expect(images.length > 0).toBeTruthy() //can check the image src
        expect (images[1].src).toBe("http://localhost/placeholder")
        expect(screen.getByText("Height: 39 in.")).toBeInTheDocument()
        expect(screen.getByText("Weight: 2 lbs")).toBeInTheDocument()
    })

})