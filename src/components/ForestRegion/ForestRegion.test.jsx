import { render, screen } from "@testing-library/react";
import { ForestRegion } from "./ForestRegion";

describe("ForestRegion", () => {
  it("should load our forest background", () => {
    render(<ForestRegion />);
    expect(screen.getByTestId("background-forest")).toBeInTheDocument();
    //TODO - This need to test the Img not the tag
  });
  it("should have a pokedex button", () => {
    render(<ForestRegion />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("should have a locations container", () => {
    render(<ForestRegion />);
    expect(screen.getByTestId("locations")).toBeInTheDocument();
  });
  it("should load a random pokemon onto the grid", () => {
    render(<ForestRegion />);
    expect(screen.getAllByRole("img").length).toBe(3);
  });
});
