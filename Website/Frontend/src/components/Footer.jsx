import styles from './footer.module.scss';
import logo from '../assets/oglogo.png';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Card, ListGroup, Col, Row, Image, Button } from 'react-bootstrap';

import instagram_logo from "../assets/instagram_logo.png";

function Footer() {
    const pathName = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathName]);

    return (<>
        <div className="mb-5" />
        <Card className={"position-relative mt-auto bg-light border-0"}>
            <ListGroup>
                <Card.Header className="ps-4 py-4">
                    <Row>
                        <Col className="col-6">
                            <Link to="/" className="text-decoration-none text-dark d-inline-block"><img src={logo} height="50vh" className="mb-2" /></Link><br />
                            <Link to="/" className="text-decoration-none text-dark"><h4>Ready Tutor</h4></Link>
                            <a className="text-decoration-none text-dark" target="_blank" href="https://www.instagram.com/ready.tutor/">Follow Instagram! <img className="pe-none" src={instagram_logo} alt="Instagram" width="7%" />
                            <p>We post Free Materials and Review Content!</p></a>
                        </Col>
                        <Col>
                            <h4 className="text-dark mb-3">About</h4>
                            <Link to="/team/" className="text-decoration-none text-dark"><p>Team</p></Link>
                            <Link to="/about" className="text-decoration-none text-dark"><p>About Us</p></Link>
                            <Link to="/careers" className="text-decoration-none text-dark"><p>Careers</p></Link>
                        </Col>
                        <Col>
                            <h4 className="text-dark mb-3">Privacy</h4>
                            <Link to="/privacy-policy" className="text-decoration-none text-dark"><p>Privacy Policy</p></Link>
                            <Link to="/terms-and-conditions" className="text-decoration-none text-dark"><p>Terms and Conditions</p></Link>
                            <Link to="/contact-us" className="text-decoration-none text-dark"><p>Contact Us</p></Link>
                        </Col>
                    </Row>
                </Card.Header>
                <ListGroup.Item className="text-center text-dark" variant="dark">© 2024, Ready Tutor</ListGroup.Item>
            </ListGroup>
        </Card>
    </>);
}

export default Footer;