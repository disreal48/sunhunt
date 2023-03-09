import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

const SearchButton = () => {
  return (
    <div>
      <InputGroup>
        <Button variant="outline-primary" id="button-addon1">
          Search
        </Button>
      </InputGroup>
    </div>
  );
};

export default SearchButton;
