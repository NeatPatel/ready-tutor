import styles from './summerprograms.module.scss';

import ContentBlock from '../components/ContentBlock.jsx';
import SplitContentBlock from '../components/SplitContentBlock.jsx';
import { Card, Button, Col, Row, Container } from 'react-bootstrap';

// Import images
import compSci from '../assets/comp-sci.jpg';
import people7 from '../assets/people7.jpg';

function SummerPrograms() {
    return (<>
        <ContentBlock mt='25' mb='0' content={<>
            <h1 className= "m-auto display-1 text-dark">Summer Programs</h1>
            <p className="m-auto text-dark mt-5">Ready Tutor is offering Summer programs for High School Students to be taught by UC Irvine and Emory University Students</p>
            <p className="m-auto text-dark mb-2">Students Learn about the basics of their career pathway, and strides to take to stay ahead of the career game</p>
        </>}/>

        {/* Mobile-responsive container */}
        <div className="container-fluid px-lg-5 px-md-3 px-2 my-5">
            <Row className="g-4 justify-content-center">
                <Col lg={6} className="d-flex">
                    <Card className="h-100 shadow-lg border-0 flex-fill" style={{minHeight: '60vh', display: 'flex'}}>
                        <div style={{height: '200px', overflow: 'hidden', borderTopLeftRadius: '0.375rem', borderTopRightRadius: '0.375rem'}}>
                            <img src={compSci} alt="Computer Science Bootcamp" className="w-100 h-100" style={{objectFit: 'cover'}} />
                        </div>
                        <Card.Body className="d-flex flex-column p-4 h-100">
                            <h2 className="text-center text-dark mb-3 fw-bold">Computer Science Bootcamp</h2>
                            <div className="mb-4 flex-grow-1">
                                <ul className="list-unstyled text-start">
                                    <li className="mb-2 d-flex align-items-start">
                                        <span className="text-success me-2">✓</span>
                                        <span>Basic Web Development Skills (HTML/CSS/JavaScript)</span>
                                    </li>
                                    <li className="mb-2 d-flex align-items-start">
                                        <span className="text-success me-2">✓</span>
                                        <span>Advanced Frameworks exposure and experience (React, Bootstrap, Vite, Express.js)</span>
                                    </li>
                                    <li className="mb-2 d-flex align-items-start">
                                        <span className="text-success me-2">✓</span>
                                        <span>Project Outline and version control experience (git control systems, team coordination)</span>
                                    </li>
                                    <li className="mb-2 d-flex align-items-start">
                                        <span className="text-success me-2">✓</span>
                                        <span>Finding and solving REAL world problems</span>
                                    </li>
                                    <li className="mb-2 d-flex align-items-start">
                                        <span className="text-success me-2">✓</span>
                                        <span>Learning to utilize LLM integrated IDEs</span>
                                    </li>
                                    <li className="mb-2 d-flex align-items-start">
                                        <span className="text-success me-2">✓</span>
                                        <span>Final Project Showcase by students at UC Irvine</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-auto text-center">
                                <a className="btn btn-dark rounded-pill px-4 py-3 mb-3 fw-bold" href="/summer-programs/computer-science">Learn More</a>
                                <p className="h4 text-success fw-bold mb-0">$275 per student</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6} className="d-flex">
                    <Card className="h-100 shadow-lg border-0 flex-fill" style={{minHeight: '60vh', display: 'flex'}}>
                        <div style={{height: '200px', overflow: 'hidden', borderTopLeftRadius: '0.375rem', borderTopRightRadius: '0.375rem'}}>
                            <img src={people7} alt="Students Collaborating" className="w-100 h-100" style={{objectFit: 'cover'}} />
                        </div>
                        <Card.Body className="d-flex flex-column p-4 h-100">
                            <h2 className="text-center text-dark mb-3 fw-bold">Pre Medical Bootcamp</h2>
                            <div className="mb-4 flex-grow-1">
                                <ul className="list-unstyled text-start">
                                    <li className="mb-2 d-flex align-items-start">
                                        <span className="text-success me-2">✓</span>
                                        <span>The Premedical Timeline</span>
                                    </li>
                                    <li className="mb-2 d-flex align-items-start">
                                        <span className="text-success me-2">✓</span>
                                        <span>Topic exposure of future Premed classes (i.e. Biology, Chemistry, Organic Chemistry, etc.)</span>
                                    </li>
                                    <li className="mb-2 d-flex align-items-start">
                                        <span className="text-success me-2">✓</span>
                                        <span>Basic exposure to the Premedical curriculum (including programs students should look into for the future as additional supplements)</span>
                                    </li>
                                    <li className="mb-2 d-flex align-items-start">
                                        <span className="text-success me-2">✓</span>
                                        <span>Professional Lab Report Development Experience</span>
                                    </li>
                                    <li className="mb-2 d-flex align-items-start">
                                        <span className="text-success me-2">✓</span>
                                        <span>Hands-on Organic Chemistry Laboratory Experience</span>
                                    </li>
                                    <li className="mb-2 d-flex align-items-start">
                                        <span className="text-success me-2">✓</span>
                                        <span>Final Project Showcase by students at UC Irvine</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-auto text-center">
                                <a className="btn btn-dark rounded-pill px-4 py-3 mb-3 fw-bold" href="/summer-programs/pre-medical">Learn More</a>
                                <p className="h4 text-success fw-bold mb-0">$275 per student</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    </>);
}

export default SummerPrograms;