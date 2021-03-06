import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <Navbar className='nav' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to="/" className='text-light'>React-Weather App</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="nav me-auto">
                    </Nav>
                    <Nav className='nav'>
                        <Link to="/contact" className='text-light'>Contact</Link>
                        <Link to="/about" className='text-light'>About</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}