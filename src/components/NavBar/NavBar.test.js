import React from "react";
import { render, screen } from  "@testing-library/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  NavBar  from './NavBar.js'

describe("It should display a navigation bar", ()=>{
    it("should render a container with the links", ()=>{
        render(<NavBar/>)
        expect(screen.getByTestId("navBarTest")).toBeInTheDocument()
    })
    it("should display multiple regions to navigate to", ()=>{

    })
})