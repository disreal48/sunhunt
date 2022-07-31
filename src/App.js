import './App.css';
import DistanceAdjust from './Components/FilterParameters/DistanceAdjustment';
import TempAdjust from './Components/FilterParameters/TemperatureAdjustment';
import CurrentLocation from './Components/FilterParameters/CurrentLocation';
import LocationCards from './Components/LocationCards';

function App() {
  return (
    <div className='d-grid gap-5'>
      <div className='row justify-content-center'>
        <CurrentLocation />
      </div>
      <div className='row justify-content-center'>
        <TempAdjust />

        <DistanceAdjust />
      </div>
      <div className='p-row justify-content-center'>
        <LocationCards />
      </div>
    </div>
  );
}

export default App;
