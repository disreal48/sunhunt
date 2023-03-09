import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

let latitude = 0;
let longitude = 0;

let cords = {};

const locate = () => {
  navigator.geolocation.getCurrentPosition(function (position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    cords = {
      latitude: latitude,
      longitude: longitude,
    };
    console.log(cords);
  });
  return {
    cords,
  };
};

const LocateButton = () => {
  return (
    <div>
      <InputGroup>
        <Button variant="outline-secondary" id="button-addon2" onClick={locate}>
          Locate Me
        </Button>
      </InputGroup>
    </div>
  );
};

export default LocateButton;
