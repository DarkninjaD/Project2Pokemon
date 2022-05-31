import React from "react";
const LandingPage = ({ isLoading }) => {
  return (
    <>
      <img src=""></img>
      <p>Pokemon Time</p>
      {isLoading ? (
        <button>Loading, Please Wait</button>
      ) : (
        <button>Enter</button>
      )}
    </>
  );
};

export default LandingPage;
