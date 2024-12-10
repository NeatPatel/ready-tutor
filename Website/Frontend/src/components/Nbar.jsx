import styles from './navbar.module.scss';
import { Link, Outlet } from 'react-router-dom';
import logo from '../assets/oglogo.png';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Footer from './Footer.jsx';

function Nbar() {
    return (<>
        <Navbar variant="light" fixed="top" className="mx-4 navbar-light bg-light border-primary" expand="lg">
            <Container fluid>
                <Navbar.Brand>
                    <Link to="/" className="nav-link"><img src={logo} height="50vh" className="d-inline-block align-items-center" /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="mainNavPanel" />
                <Navbar.Collapse className="text-end" id="mainNavPanel">
                    <Nav className="ms-auto align-items-center" navbarScroll>
                        <Link to="/about" className="nav-link">About</Link>
                        <Link to="/pricing" className="nav-link">Pricing</Link>
                        <Link to="/contact-us" className="nav-link"><Button variant="outline-danger">Book Appointment</Button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <Outlet />

        <Footer />
    </>);
}

export { Nbar };