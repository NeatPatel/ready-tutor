import styles from './navbar.module.scss';
import { Link, Outlet } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Nbar() {
    return (<>
        <Navbar variant="dark" className="navbar-dark bg-dark">
            <Container>
                <Navbar.Brand>
                    <Link to="/" className="nav-link"><img src={logo} height="100vh" width="100vh" className="d-inline-block align-items-center" />{' '}Ready Tutor</Link>
                </Navbar.Brand>

                <Nav className="ms-auto">
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/pricing" className="nav-link">Pricing</Link>
                    <Link to="/contact-us" className="nav-link">Book Appointment</Link>
                </Nav>
            </Container>
        </Navbar>

        <Outlet />
    </>);
}

export { Nbar };