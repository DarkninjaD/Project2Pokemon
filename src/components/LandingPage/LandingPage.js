import "./LandingPage.css";
import BackgroundImage from '../../assets/city.jpg'
// import ForestBackground from '../../assets/Forest-Background.svg'
import Pokemon_logo from '../../assets/Pokemon-Logo.png'
import { useNavigate } from 'react-router-dom'


const LandingPage = ({ isLoading }) => {
  const navigate = useNavigate()

  return (
    <>
      <img
        className="background"
        src={BackgroundImage}
        alt="background-forest"
      />
      <img className="logo" src={Pokemon_logo} alt='Pokémon Logo' height={400}/>
      <p>Pokémon Timé</p>
      {isLoading ? (
        <button className="loading-button" data-testid="enter button" disabled>Loading, Pléase Wait</button>
      ) : (
        <>
          <button className="enter-button" data-testid="enter button" onClick = {() => navigate("/forest")}>Let me get some of those pokemon</button>
          <button className="enter-button" data-testid="enter button" onClick = {() => navigate("/location/forest")}>Test Dynamic Route</button>
        </>
      )}
    </>
  );
};
// É
// é
export { LandingPage };