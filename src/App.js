import './App.css';
import DistanceAdjust from './Components/FilterParameters/DistanceAdjustment';
import TempAdjust from './Components/FilterParameters/TemperatureAdjustment';
import CurrentLocation from './Components/FilterParameters/CurrentLocation';
import LocationCards from './Components/LocationCards';

function App() {
  return (
    <>
    <div class="row justify-content-center"> 
    <div class="col8">
    <CurrentLocation />
    </div>
    </div>
    <div class="row justify-content-center">      
      <div class="col-3">
  <TempAdjust />
  </div>
  <div class="col-3">
  <DistanceAdjust />
  </div>
  <div> 
    <div class="col8">
    <LocationCards />
    </div>
    </div>
  
 
  </div>
  </>
  );
}

export default App;
