import LocationCard from "./LocationCard";

function LocationCards() {
  return (
    <div className="row justify-content-center">  
      <LocationCard tytle="Berlin" temperature="27 degree" picture="https://cdn.pixabay.com/photo/2013/04/02/13/06/beach-99388_960_720.jpg"/>
      <LocationCard tytle="Warsaw" temperature="20 degree" picture="https://cdn.pixabay.com/photo/2015/03/09/18/34/beach-666122_960_720.jpg"/>
      <LocationCard tytle="Madrid" temperature="34 degree" picture="https://cdn.pixabay.com/photo/2022/06/09/10/13/beach-7252178_960_720.jpg"/>
      <LocationCard tytle="Paris" temperature="26 degree" picture="https://cdn.pixabay.com/photo/2017/03/29/15/18/tianjin-2185510_960_720.jpg"/>
  
      </div>
      );
}

export default LocationCards;