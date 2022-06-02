import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (

      <div className="container" data-testid="navBarTest">
        <Link to="/forest" style={{ textDecoration: "none" }}>
          <button className="btn btn-forest">Forest Region</button>
        </Link>
        <Link to="/town" style={{ textDecoration: "none" }}>
          <button className="btn btn-town">Town Region</button>
        </Link>
        <Link to="/water" style={{ textDecoration: "none" }}>
          <button className="btn btn-water">Water Region</button>
        </Link>
        <Link to="/rock" style={{ textDecoration: "none" }}>
          <button className="btn btn-rock">Rock Region</button>
        </Link>
        <Link to="/gym" style={{ textDecoration: "none" }}>
          <button className="btn btn-gym">The Gym</button>
        </Link>
        <Link to="/spooky" style={{ textDecoration: "none" }}>
          <button className="btn btn-spooky">Spooky Region</button>
        </Link>
        <Link to="/volcano" style={{ textDecoration: "none" }}>
          <button className="btn btn-volcano">Volcano Region</button>
        </Link>
      </div>
  );
};

export default NavBar;
