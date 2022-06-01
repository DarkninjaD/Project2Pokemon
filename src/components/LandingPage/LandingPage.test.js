import React from "react";
import { render, screen } from  "@testing-library/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from './LandingPage.js'

describe ("Test for Landing Page", ()=>{
    it ("should render a default background", ()=>{
        render(<Router><LandingPage /></Router>);
        expect(screen.getByAltText("background-landing")).toBeInTheDocument()
    })

    it ("should render a pokemon logo", ()=>{
        render(<Router><LandingPage /></Router>);
        expect(screen.getByAltText("Pokémon Logo")).toBeInTheDocument()
    })

      it ("should have an enter button", ()=>{
        render(<Router><LandingPage /></Router>)
        expect(screen.getByTestId("enter button")).toBeInTheDocument()
    })
})