import styles from './footer.module.scss';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { Card, ListGroup, Col, Row } from 'react-bootstrap';

function Footer() {
    return (<>
        <Card className="footer">
            <ListGroup>
                <Card.Header className="ps-4 py-4">
                    <Row>
                        <Col className="col-6">
                            <img src={logo} height="50vh" width="50vh" className="mb-2" /><br />
                            <Link to="/" className="text-decoration-none text-dark"><h4>Ready Tutor</h4></Link>
                            <p variant="secondary">Our tutors are ready!</p>
                        </Col>
                        <Col>
                            <h4 className="mb-3">About</h4>
                            <Link to="/team" className="text-decoration-none text-dark"><p>Team</p></Link>
                            <Link to="/about" className="text-decoration-none text-dark"><p>History</p></Link>
                            <Link to="/careers" className="text-decoration-none text-dark"><p>Careers</p></Link>
                        </Col>
                        <Col>
                            <h4 className="mb-3">Privacy</h4>
                            <Link to="/privacy-policy" className="text-decoration-none text-dark"><p>Privacy Policy</p></Link>
                            <Link to="/terms-and-conditions" className="text-decoration-none text-dark"><p>Terms and Conditions</p></Link>
                            <Link to="/contact-us" className="text-decoration-none text-dark"><p>Contact Us</p></Link>
                        </Col>
                    </Row>
                </Card.Header>
                <ListGroup.Item className="text-center" variant="secondary">© 2024, Ready Tutor</ListGroup.Item>
            </ListGroup>
        </Card>
    </>);
}

export default Footer;