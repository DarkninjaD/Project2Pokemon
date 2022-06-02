import { render, screen } from "@testing-library/react";
import { RegionHandler } from "./RegionHandler";
import React from "react";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn().mockReturnValue({ name: "forest" }),
  useNavigate: jest.fn(() => {}),
  Link: jest.fn(),
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
  it("should load a random pokemon onto the grid", () => {
    //jest.spyOn(RegionHandler, "randomNumber").mockReturnValue(() => 3);
    const randomNumber = jest.fn().mockReturnValue(3);
    render(<RegionHandler />);
    expect(screen.getAllByRole("img").length).toBe(3);
  });
});
