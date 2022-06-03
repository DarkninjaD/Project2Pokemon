import React, {useState} from "react";
import "./LandingPage.css";
import { motion, AnimatePresence } from "framer-motion/dist/es/index";
// import BackgroundImage from "../../assets/field.png";
// import ForestBackground from '../../assets/Forest-Background.svg'
import Pokemon_logo from "../../assets/Pokemon-Logo.png";
import { useNavigate } from "react-router-dom";
import Modal from "../Model-Framer/Modal"

const LandingPage = ({ isLoading }) => {
  const navigate = useNavigate();

  const [testthing, settestThing] = useState(false)

  return (
    <>
      <img
        className="background"
        src="/assets/field.png"
        alt="background-landing"
      />
      <div className="logo-container">
        <p className="logo-text">HUNT</p>
        <img
          className="logo"
          src={Pokemon_logo}
          alt="Pokémon Logo"
        />
        <img
          className="logo-shadow silhouette"
          src={Pokemon_logo}
          alt="Pokémon Logo Shadow"
        />
      </div>
      <motion.button whileHover={{scale: 1.1}} whileTap={{scale: .9}} onClick={()=> settestThing(true)} hidden> Test button please don't click me unless you </motion.button>
      <AnimatePresence>
      {testthing && <Modal modalOpen={testthing} handleClose={() => settestThing(false)} />}
      </AnimatePresence>
      <div className="button-container">
        {isLoading ? (
          <button className="enter-button" data-testid="enter button" disabled>
            LOADING, PLEASE WAIT
          </button>
        ) : (
          <>
            <button
              className="enter-button"
              data-testid="enter button"
              onClick={() => navigate("/forest")}
            >
              ENTER
            </button>
          </>
        )}
      </div>
    </>
  );
};
// É
// é
export { LandingPage };
