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
                        {/* <Link to="/features" className='text-light'>Features</Link>
                        <Link to="/pricing" className='text-light'>Pricing</Link> */}
                    {/* <NavDropdown title="Tools" id="collasible-nav-dropdown">
                        <Link to="/features">Features</Link>
                        <NavDropdown.Divider />
                        <Link to="/features">Features</Link>
                    </NavDropdown> */}
                    </Nav>
                    <Nav className='nav'>
                        <Link to="/features" className='text-light'>About</Link>
                        <Link to="/pricing" className='text-light'>Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}