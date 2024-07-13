import styles from './navbar.module.scss';
import { Link, Outlet } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Footer from './Footer.jsx';

function Nbar() {
    return (<>
        <Navbar variant="dark" className="navbar-dark bg-dark border-primary" expand="lg">
            <Container fluid>
                <Navbar.Brand>
                    <Link to="/" className="nav-link"><img src={logo} height="100vh" width="100vh" className="d-inline-block align-items-center" />{' '}Ready Tutor</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="mainNavPanel" />
                <Navbar.Collapse className="text-end" id="mainNavPanel">
                    <Nav className="ms-auto" navbarScroll>
                        <Link to="/about" className="nav-link">About</Link>
                        <Link to="/pricing" className="nav-link">Pricing</Link>
                        <Link to="/contact-us" className="nav-link">Book Appointment</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <Outlet />

        <Footer />
    </>);
}

export { Nbar };