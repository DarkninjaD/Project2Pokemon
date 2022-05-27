import mokePoke from "../../mock/pokeExample";
import { PokeDexButton } from "../ToolBar/PokeDexButton";
import ForestBackground from "../../assets/Forest-Background.svg";
import "./ForestRegion.css";
import { LocationContainer } from "../LocationContainer/LocationContainer";

const ForestRegion = () => {
  return (
    <div className="base-grid">
      <img
        className="background"
        src={ForestBackground}
        alt="background-forest"
      />
      <LocationContainer />
      <PokeDexButton className="pokedex-button" />
    </div>
  );
};
export { ForestRegion };
