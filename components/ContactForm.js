import { Form, Row, Col, Container, Button } from "react-bootstrap";
const ContactForm = () => {
    return (
        <Container className="w-75">
        <Form action="https://formsubmit.co/da90547b3209f6824e741d340a4c68d0" method="POST">
            <Row className="mb-3">
            <Col xs={12} lg={4}>
            <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="Naam" placeholder="John Doe"/>
            </Form.Group>
            </Col>
            <Col xs={12} lg={4}>
            <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="Email" placeholder="john.doe@gmail.com" required/>
            </Form.Group>
            </Col>
            <Col xs={12} lg={4}>
            <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Telephone</Form.Label>
                    <Form.Control type="tel" name="Telefoon" placeholder="+32 81 00 00 00" required/>
            </Form.Group>
            </Col>
            </Row>
            <Row className="mb-3">
            <Col xs={12}>
            <Form.Group className="textarea" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={4} name="Bericht" placeholder="Hello, i have a question..." required/>
            </Form.Group>
            </Col>
            </Row>
            <Container className="text-center">
            <Button variant="light" type="submit">
                Submit
            </Button>
            </Container>
        </Form>
        </Container>
     );
}


export default ContactForm;