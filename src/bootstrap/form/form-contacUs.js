import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ContactForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label style={{color:"#15151591"}}>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label style={{color:"#15151591"}}>Your Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary">Send</Button>
    </Form>
  );
}

export default ContactForm;