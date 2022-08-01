import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const CurrentLocation = () => {
  return (
   
    <div>
        <InputGroup>
        <Form.Control
          placeholder="Where are you right now?"
          aria-label="Where are you right now?"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-primary" id="button-addon1">
          Search
        </Button>
        <Button variant="outline-secondary" id="button-addon2">
          Locate Me
        </Button>
      </InputGroup>
   </div>
  )
}

export default CurrentLocation