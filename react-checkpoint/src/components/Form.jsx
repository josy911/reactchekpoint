import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import SubmitButton from "./Button";

function CustomForm() {
  return (
    <Container className="pt-5">
      <h1>Your Feedback</h1>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Input Text</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <SubmitButton />
      </Form>
    </Container>
  );
}

export default CustomForm;
