import { render, screen } from "@testing-library/react";
import { RegionHandler } from "./RegionHandler";
// import helpers from './RegionHandler';
import React from "react";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn().mockReturnValue({ name: "forest" }),
  useNavigate: jest.fn(() => {}),
  Link: jest.fn(),
}));
//  jest.spyOn(Math, "floor").mockReturnValue(3);

// let spy = jest.spyOn(RegionHandler, "randomNumber").mockImplementation(()=> 3);

let test = jest.mock('./RegionHandler', () => ({
  ...jest.requireActual('./RegionHandler.jsx'),
}));


describe("RegionHandler", () => {
  it("when useParam returns 'forest' should load our background forest", () => {
    render(<RegionHandler />);
    expect(screen.getByTestId("background-forest")).toBeInTheDocument();
  });
  it("should have a pokedex button", () => {
    render(<RegionHandler />);
    expect(screen.getByText("Pokedex")).toBeInTheDocument();
  });
  it("should have a locations container", () => {
    render(<RegionHandler />);
    expect(screen.getByTestId("locations")).toBeInTheDocument();
  });
  it.skip("should load a random pokemon onto the grid", () => {
    render(<RegionHandler />)
    screen.debug();
    // expect(screen.findAllByRole("img").length).toBe(3);
  }
  );
});
