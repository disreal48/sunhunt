import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const SearchBar = () => {
  return (
    <div>
      <InputGroup>
        <Form.Control
          placeholder="Where are you right now?"
          aria-label="Where are you right now?"
          aria-describedby="basic-addon2"
        />
      </InputGroup>
    </div>
  );
};

export default SearchBar;
