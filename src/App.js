import "./App.css";
import DistanceAdjust from "./Components/FilterParameters/DistanceAdjustment";
import TempAdjust from "./Components/FilterParameters/TemperatureAdjustment";
import SearchBar from "./Components/FilterParameters/SearchBar";
import SearchButton from "./Components/SearchButton";
import LocateButton from "./Components/LocateButton";
import LocationCards from "./Components/LocationCards";

function App() {
  return (
    <div className="container">
      <div className="SearchBar">
        <SearchBar />
      </div>
      <div className="SearchButton">
        <SearchButton />
      </div>
      <div className="LocateButton">
        <LocateButton />
      </div>
      <div className="tempAdjust">
        <TempAdjust />
      </div>
      <div className="distanceAdjust">
        <DistanceAdjust />
      </div>
      <div className="locationCards">
        <LocationCards />
      </div>
    </div>
  );

  
}

export default App;
