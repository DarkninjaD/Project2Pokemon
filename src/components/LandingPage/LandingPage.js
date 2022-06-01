import React from "react";
import "./LandingPage.css";
import BackgroundImage from "../../assets/city.jpg";
// import ForestBackground from '../../assets/Forest-Background.svg'
import Pokemon_logo from "../../assets/Pokemon-Logo.png";
import { useNavigate } from "react-router-dom";

const LandingPage = ({ isLoading }) => {
  const navigate = useNavigate();

  return (
    <>
      <img
        className="background"
        src={BackgroundImage}
        alt="background-landing"
      />
      <img
        className="logo"
        src={Pokemon_logo}
        alt="Pokémon Logo"
        height={400}
      />
      {isLoading ? (
        <button className="loading-button" data-testid="enter button" disabled>
          Loading, Pléase Wait
        </button>
      ) : (
        <>
          <button
            className="enter-button"
            data-testid="enter button"
            onClick={() => navigate("/forest")}
          >
            Énter
          </button>
        </>
      )}
    </>
  );
};
// É
// é
export { LandingPage };
