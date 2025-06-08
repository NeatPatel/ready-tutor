import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import ContentBlock from '../components/ContentBlock.jsx';

// Import images
import compSci from '../assets/comp-sci.jpg';
import people1 from '../assets/people1.jpg';
import people2 from '../assets/people2.jpg';
import people4 from '../assets/people4.jpg';

function ComputerScienceProgram() {
    return (<>
        <ContentBlock mt='25' mb='25' content={<>
            <h1 className="display-1 text-center text-dark mb-5">Computer Science Bootcamp</h1>
            
            {/* Hero Image - Full width edge-to-edge on mobile */}
            <div className="text-center mb-5">
                <img src={compSci} alt="Computer Science Technology" className="img-fluid w-100" style={{maxHeight: '400px', objectFit: 'cover'}} />
            </div>
            
            {/* Mobile-responsive container - Edge to edge on mobile */}
            <div className="container-fluid px-0 px-md-3 px-lg-5">
                <Row className="justify-content-center g-0 g-md-4">
                    <Col lg={10}>
                        <Card className="shadow-lg border-0 mb-3 mb-md-5 rounded-0 rounded-md-3">
                            <Card.Body className="p-3 p-md-4 p-lg-5">
                                <Row>
                                    <Col md={8}>
                                        <h2 className="text-dark mb-4 fw-bold">Program Description</h2>
                                        <p className="lead text-dark mb-4 text-start">
                                            Our Computer Science Bootcamp is designed to give high school students a comprehensive introduction to modern web development and software engineering practices. Students will gain hands-on experience with industry-standard tools and technologies while working on real-world projects.
                                        </p>
                                        <p className="text-dark mb-4 text-start">
                                            Throughout this intensive program, students will master the fundamentals of web development, including HTML, CSS, and JavaScript, before advancing to modern frameworks like React, Bootstrap, and Vite. They'll also learn essential development practices including version control with Git, team coordination, and project management - skills that are crucial in today's tech industry.
                                        </p>
                                        <p className="text-dark text-start">
                                        Students will have the unique opportunity to work with LLM-integrated development environments and tackle real-world problems, culminating in a final project showcase at UC Irvine where they'll present their work to peers and instructors.
                                        </p>
                                    </Col>
                                    <Col md={4} className="mt-3 mt-md-0">
                                        <img src={people2} alt="Students Learning Together" className="img-fluid rounded shadow w-100" style={{height: '250px', objectFit: 'cover'}} />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                        <Card className="shadow-lg border-0 mb-3 mb-md-5 rounded-0 rounded-md-3">
                            <Card.Body className="p-3 p-md-4 p-lg-5">
                                <Row>
                                    <Col md={4} className="mb-3 mb-md-0">
                                        <img src={people1} alt="Collaborative Learning" className="img-fluid rounded shadow w-100" style={{height: '200px', objectFit: 'cover'}} />
                                    </Col>
                                    <Col md={8}>
                                        <h2 className="text-dark mb-4 fw-bold">Eligibility Requirements</h2>
                                        <ul className="list-unstyled text-start">
                                            <li className="mb-3 d-flex align-items-start text-start">
                                                <span className="text-success me-3 fw-bold">✓</span>
                                                <span className="text-start">Students must be in High School (grades 9 - 12)</span>
                                            </li>
                                            <li className="mb-3 d-flex align-items-start text-start">
                                                <span className="text-success me-3 fw-bold">✓</span>
                                                <span className="text-start">Students must have interest in Computer Science</span>
                                            </li>
                                            <li className="mb-3 d-flex align-items-start text-start">
                                                <span className="text-success me-3 fw-bold">✓</span>
                                                <span className="text-start">Students must have motivation to learn and work hard outside of class</span>
                                            </li>
                                            <li className="mb-3 d-flex align-items-start text-start">
                                                <span className="text-success me-3 fw-bold">✓</span>
                                                <span className="text-start">Approximately 10 hour commitment of classwork and homework outside of sessions</span>
                                            </li>
                                            <li className="mb-3 d-flex align-items-start text-start">
                                                <span className="text-success me-3 fw-bold">✓</span>
                                                <span className="text-start">50% of paid price is returned if program is completed (if student completes showcase)</span>
                                            </li>
                                            <li className="mb-3 d-flex align-items-start text-start">
                                                <span className="text-success me-3 fw-bold">✓</span>
                                                <span className="text-start">Students must be able to come to UC Irvine approximately 1-2 times total for final showcase and for build time</span>
                                            </li>
                                            <li className="mb-3 d-flex align-items-start text-start">
                                                <span className="text-success me-3 fw-bold">✓</span>
                                                <span className="text-start">No prior experience in Computer Science is necessary</span>
                                            </li>
                                            <li className="mb-3 d-flex align-items-start text-start">
                                                <span className="text-success me-3 fw-bold">✓</span>
                                                <span className="text-start">Students must have device access remotely and portable to UC Irvine</span>
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                        <Card className="shadow-lg border-0 mb-3 mb-md-5 rounded-0 rounded-md-3">
                            <Card.Body className="p-3 p-md-4 p-lg-5">
                                <h2 className="text-dark mb-4 fw-bold">How to Get Started</h2>
                                <ul className="list-unstyled text-start">
                                    <li className="mb-3 d-flex align-items-start text-start">
                                        <span className="text-dark me-3 fw-bold">1.</span>
                                        <span className="text-start">Contact Us via our contact page</span>
                                    </li>
                                    <li className="mb-3 d-flex align-items-start text-start">
                                        <span className="text-dark me-3 fw-bold">2.</span>
                                        <span className="text-start">Ask any questions you have about the program</span>
                                    </li>
                                    <li className="mb-3 d-flex align-items-start text-start">
                                        <span className="text-dark me-3 fw-bold">3.</span>
                                        <span className="text-start">Must sign up prior to June 21st</span>
                                    </li>
                                </ul>
                                <div className="text-center mt-4">
                                    <Button variant="dark" size="lg" className="rounded-pill px-4 py-3 fw-bold" href="/contact-us">
                                        Contact Us to Get Started
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>

                        <Card className="shadow-lg border-0 mb-3 mb-md-5 rounded-0 rounded-md-3">
                            <Card.Body className="p-3 p-md-4 p-lg-5">
                                <Row>
                                    <Col md={8}>
                                        <h2 className="text-dark mb-4 fw-bold">Program Information</h2>
                                        <ul className="list-unstyled text-start">
                                            <li className="mb-3 d-flex align-items-start text-start">
                                                <span className="text-dark me-3 fw-bold">•</span>
                                                <span className="text-start">Program will start June 22nd remotely at 3pm PST</span>
                                            </li>
                                            <li className="mb-3 d-flex align-items-start text-start">
                                                <span className="text-dark me-3 fw-bold">•</span>
                                                <span className="text-start">Sessions are twice a week for 1 hour per session on each weekend day (1 hour Saturday, 1 hour Sunday)</span>
                                            </li>
                                            <li className="mb-3 d-flex align-items-start text-start">
                                                <span className="text-dark me-3 fw-bold">•</span>
                                                <span className="text-start">Program terminates on the week of August 10th</span>
                                            </li>
                                            <li className="mb-3 d-flex align-items-start text-start">
                                                <span className="text-dark me-3 fw-bold">•</span>
                                                <span className="text-start">Students are expected to do homework outside of class to keep up with course pacing</span>
                                            </li>
                                            <li className="mb-3 d-flex align-items-start text-start">
                                                <span className="text-dark me-3 fw-bold">•</span>
                                                <span className="text-start">Program is hybrid, with virtual sessions coupled with in-person final presentation, laboratory, and build hour days</span>
                                            </li>
                                            <li className="mb-3 d-flex align-items-start text-start">
                                                <span className="text-dark me-3 fw-bold">•</span>
                                                <span className="text-start">Calendar of topics will be released</span>
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col md={4} className="mt-3 mt-md-0">
                                        <img src={people4} alt="Students Working on Projects" className="img-fluid rounded shadow w-100" style={{height: '200px', objectFit: 'cover'}} />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                        <div className="text-center mb-3 mb-md-5">
                            <Button variant="dark" size="lg" className="rounded-pill px-5 py-3 fw-bold" href="/contact-us">
                                Contact Us Today
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </>}/>
    </>);
}

export default ComputerScienceProgram; 