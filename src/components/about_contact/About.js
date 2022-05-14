import { Badge } from 'react-bootstrap';

export default function About() {
    return (
        <div className="about-container bg-dark">
            <h2 className='text-light'>Tools used:</h2>
            <div className='tools-used-container'>
                <Badge bg="primary">REACT</Badge>
                <Badge bg="success">HTML</Badge> 
                <Badge bg="danger">CSS</Badge>
                <Badge bg="warning" text="dark">JAVASCRIPT</Badge>
                <Badge bg="light" text="dark">BOOTSTRAP</Badge>
            </div>
            <h2 className='text-light'>API used:</h2>
                <Badge bg="secondary">OPEN WEATHER MAP</Badge>
        </div>
    )
}