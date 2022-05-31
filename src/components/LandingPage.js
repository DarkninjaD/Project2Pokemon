const LandingPage = ({ isLoading }) => {
  return (
    <>
      <img src=""></img>
      <p>Pokemon Time</p>
      {isLoading ? (
        <button>Hey</button>
      ) : (
        <button>Enter</button>
      )}
    </>
  );
};

export default LandingPage;
