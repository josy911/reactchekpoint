import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function SubmitButton() {
  return (
    <Container>
      <div className="mb-2">
        <Button variant="secondary" size="lg">
          Submit
        </Button>
      </div>
    </Container>
  );
}

export default SubmitButton;
