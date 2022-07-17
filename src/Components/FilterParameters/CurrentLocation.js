import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const CurrentLocation = () => {
  return (
   
    <div class="container text-primary">
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Where are you right now?"
          aria-label="Where are you right now?"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Search
        </Button>
      </InputGroup>
   </div>
  )
}

export default CurrentLocation