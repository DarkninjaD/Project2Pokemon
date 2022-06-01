import React from "react";
import "./PokeDexButton.css"
import mokePoke from "../../mock/pokeExample";
import { useNavigate, useLocation } from 'react-router-dom'

const PokeDexButton = ({ locationName }) => {
  let navigate = useNavigate();
  const location = useLocation();
  return (

    <div className="pokedex-button" onClick={() => {navigate("/pokedex", {state :{lastLocation: locationName}})}}>
      Pokedex
    </div>

  );
};
export { PokeDexButton };
