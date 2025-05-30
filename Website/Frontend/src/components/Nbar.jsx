import styles from './navbar.module.scss';
import { Link, Outlet } from 'react-router-dom';
import logo from '../assets/oglogo.png';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Footer from './Footer.jsx';
import { useState } from 'react';

function Nbar() {
    const [ toggle, setToggle ] = useState(false); // Set toggle for the collapse on Navbar

    const toggled = (isToggled) => {
        setToggle(isToggled);
    };

    window.addEventListener("click", (e) => {
        if(e.target.tagName != "SPAN" && e.target.id != "navBarIdTogglePiece") {
            setToggle(false);
        }
    });

    return (<>
        <Navbar id="mainNavBar" onToggle={toggled} expanded={toggle} variant="light" fixed="top" className="navbar-light bg-light border-danger" expand="lg">
            <Container className="mx-4" fluid>
                <Navbar.Brand>
                    <Link to="/" className="nav-link"><img src={logo} height="50vh" className="d-inline-block align-self-center" /></Link>
                </Navbar.Brand>
                <Navbar.Toggle id="navBarIdTogglePiece" aria-controls="mainNavPanel" />
                <Navbar.Collapse className="text-end" id="mainNavPanel">
                    <Nav className="ms-auto d-inline my-auto" navbarScroll>
                        <Link to="/about" className="nav-link my-auto d-inline-block">About{/*Summer Programs*/}</Link>
                        <span className="mx-1" />
                        <Link to="/final-exam-sessions" className="nav-link my-auto d-inline-block">Final Review</Link>
                        <span className="mx-1" />
                        <Link to="/pricing" className="nav-link my-auto d-inline-block">Pricing</Link>
                        <span className="mx-1" />
                        <Link to="/contact-us" className="nav-link d-inline-block"><button className="btn btn-outline-dark rounded-pill px-3 py-1">Contact Us</button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <Outlet />

        <Footer />
    </>);
}

export { Nbar };