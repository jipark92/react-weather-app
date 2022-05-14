import { Form, Button } from 'react-bootstrap';

export default function Contact() {
    return (
        <div className="contact-container bg-dark text-light">
            <h1>Contact</h1>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="full name" />
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="email" placeholder="555-555-5555" />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Feedback</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button variant="primary" size="lg">Submit</Button>
                </div>
            </Form>
        </div>
    )
}
