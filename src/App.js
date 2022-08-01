import './App.css';
import DistanceAdjust from './Components/FilterParameters/DistanceAdjustment';
import TempAdjust from './Components/FilterParameters/TemperatureAdjustment';
import CurrentLocation from './Components/FilterParameters/CurrentLocation';
import LocationCards from './Components/LocationCards';

function App() {
  return (
    <div className='container'>
      <div className='currentLocation'>
        <CurrentLocation />
      </div>
      <div className='tempAdjust'>
        <TempAdjust />
</div>
<div className='distanceAdjust'>
        <DistanceAdjust />
      </div>
      <div className='locationCards'>
        <LocationCards />
      </div>
    </div>
  );
}

export default App;
