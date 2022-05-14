import { Badge } from 'react-bootstrap';


export default function About() {
    return (
        <div className="about-container bg-dark">
            <p className='text-light'>Tools used:</p>
            <div className='tools-used-container'>
                <Badge bg="primary">REACT</Badge>
                <Badge bg="success">HTML</Badge> 
                <Badge bg="danger">CSS</Badge>
                <Badge bg="warning" text="dark">JAVASCRIPT</Badge>
                <Badge bg="light" text="dark">BOOTSTRAP</Badge>
            </div>
            <p className='text-light'>API used:</p>
            <Badge bg="secondary">OPEN WEATHER MAP</Badge>
        </div>
    )
}
