import Card from 'react-bootstrap/Card';

function LocationCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.tytle}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.temperature}</Card.Subtitle>
        <Card.Text>
          <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/11/24/00/58/sunset-1855191_960_720.jpg" />
        </Card.Text>
        <Card.Link href="#">Navigate</Card.Link>
        <Card.Link href="#">Weather details</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default LocationCard;