import React from "react";
import "./PokeDexButton.css";
import { useNavigate } from "react-router-dom";

const PokeDexButton = ({ locationName }) => {
  let navigate = useNavigate();
  return (
    <div
      className="pokedex-button"
      onClick={() => {
        navigate("/pokedex", { state: { lastLocation: locationName } });
      }}
    >
      Pokedex
    </div>
  );
};
export { PokeDexButton };
