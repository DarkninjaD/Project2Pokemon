import { render, screen } from "@testing-library/react";
import { ForestRegion } from "./ForestRegion";

describe("ForestRegion", () => {
  it("should load our forest background", () => {
    render(<ForestRegion />);
    expect(screen.getByAltText("background-forest")).toBeInTheDocument();
  });
  it("should have a pokedex button", () => {
    render(<ForestRegion />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("should have a locations container", () => {
    render(<ForestRegion />);
    expect(screen.getByTestId("locations")).toBeInTheDocument();
  });
});
