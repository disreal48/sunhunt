import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function LocationCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.temperature}
        </Card.Subtitle>
        <Card.Text>
          <Card.Img variant="top" src={props.picture} />
        </Card.Text>
        <div className="row justify-content-center">
          <div className="col-5">
            <Button variant="primary">Details</Button>
          </div>
          <div className=" col-5">
            <Button variant="secondary">Navigate</Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default LocationCard;
