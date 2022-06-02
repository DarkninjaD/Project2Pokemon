import React from "react";
import { render, screen } from  "@testing-library/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  NavBar  from './NavBar.js'

const pokemonList = [
    {
      name: "Charizard",
      sprites: {front_default : "placeholder"},
      isCaught:false
    },
    {
      name: "Ditto",
      sprites: {front_default : "placeholder"},
      isCaught:true
    }
]

describe("It should display a navigation bar", ()=>{
    it("should render a container with the links", ()=>{
        render(
            <Router>
                <NavBar/>
            </Router>)
        expect(screen.getByTestId("navBarTest")).toBeInTheDocument()
    })
    it("should display multiple regions to navigate to", ()=>{
        render(
            <Router>
                <NavBar/>
            </Router>)
        let regions = screen.getAllByRole("link")
        expect(regions.length > 0).toBeTruthy()

        //if tests are failing then we might have to change the order of these or go about it a different way
        expect(regions[0]).toHaveAttribute('href', '/forest')
        expect(regions[1]).toHaveAttribute('href', '/town')
        expect(regions[2]).toHaveAttribute('href', '/water')
        expect(regions[3]).toHaveAttribute('href', '/rock')
        expect(regions[4]).toHaveAttribute('href', '/gym')
        expect(regions[5]).toHaveAttribute('href', '/spooky')
        expect(regions[6]).toHaveAttribute('href', '/volcano')
    })
})