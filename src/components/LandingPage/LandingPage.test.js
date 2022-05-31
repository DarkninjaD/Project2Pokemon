import {render, screen} from  "@testing-library/react"

describe ("Test for Landing Page", ()=>{
    it ("should render a default background", ()=>{
        render(<LandingPage />);
        expect(screen.getByAltText("background-forest")).toBeInTheDocument()
    })
    it ("should render a pokemon logo", ()=>{
        render(<LandingPage />);
        expect(screen.getByAltText("pokemon-logo")).toBeInTheDocument()
    })
    it ("should render a pokemon logo", ()=>{
        render(<LandingPage />);
        expect(screen.getByText("Pokemon Time")).toBeInTheDocument()
    })
    it ("should have an enter button, "()=>{
        render(<LandingPage />)
        expect(screen.getByTestId("enter button")).toBeInTheDocument()
    })
})