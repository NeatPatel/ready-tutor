import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import ContentBlock from '../components/ContentBlock.jsx';

// Import images
import people7 from '../assets/people7.jpg';
import people5 from '../assets/people5.jpg';
import people6 from '../assets/people6.jpg';
import people3 from '../assets/people3.jpg';

function PreMedicalProgram() {
    return (<>
        <ContentBlock mt='25' mb='25' content={<>
            <h1 className="display-1 text-center text-dark mb-5">Pre Medical Bootcamp</h1>
            
            {/* Hero Image - Full width on mobile */}
            <div className="text-center mb-5 px-2">
                <img src={people7} alt="Medical Students Collaboration" className="img-fluid rounded shadow-lg w-100" style={{maxHeight: '400px', objectFit: 'cover'}} />
            </div>
            
            {/* Mobile-responsive container */}
            <div className="container-fluid px-lg-5 px-md-3 px-2">
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <Card className="shadow-lg border-0 mb-5">
                            <Card.Body className="p-lg-5 p-3">
                                <Row>
                                    <Col md={8}>
                                        <h2 className="text-dark mb-4 fw-bold">Program Description</h2>
                                        <p className="lead text-dark mb-4 text-start">
                                            Our Pre-Medical Bootcamp provides high school students with comprehensive exposure to the medical field and essential preparation for their pre-medical journey. Students will gain insight into the rigorous timeline and requirements of medical school preparation while developing practical laboratory skills.
                                        </p>
                                        <p className="text-dark mb-4 text-start">
                                            Throughout this intensive program, students will explore core pre-medical subjects including Biology, Chemistry, and Organic Chemistry, while learning the fundamentals that will prepare them for future coursework. They'll gain hands-on experience in organic chemistry laboratory techniques and develop professional lab report writing skills that are essential for scientific communication.
                                        </p>
                                        <p className="text-dark text-start">
                                            Students will receive guidance on the pre-medical timeline, understanding the steps necessary to build a competitive medical school application. The program culminates in a final project showcase at UC Irvine where students will present their research and laboratory work to peers, instructors, and healthcare professionals.
                                        </p>
                                    </Col>
                                    <Col md={4} className="mt-3 mt-md-0">
                                        <img src={people5} alt="Science Laboratory Work" className="img-fluid rounded shadow w-100" style={{height: '250px', objectFit: 'cover'}} />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                        <Card className="shadow-lg border-0 mb-5">
                            <Card.Body className="p-lg-5 p-3">
                                <Row>
                                    <Col md={4} className="mb-3 mb-md-0">
                                        <img src={people6} alt="Students in Medical Setting" className="img-fluid rounded shadow w-100" style={{height: '200px', objectFit: 'cover'}} />
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
                                                <span className="text-start">Students must have interest in Pre-Medical studies</span>
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
                                                <span className="text-start">Program requires $200 deposit, and 50% is returned if program is completed (if student completes showcase)</span>
                                            </li>
                                            <li className="mb-3 d-flex align-items-start text-start">
                                                <span className="text-success me-3 fw-bold">✓</span>
                                                <span className="text-start">Students must be able to come to UC Irvine approximately 1-2 times total for final showcase and for laboratory time</span>
                                            </li>
                                            <li className="mb-3 d-flex align-items-start text-start">
                                                <span className="text-success me-3 fw-bold">✓</span>
                                                <span className="text-start">No prior experience in medical fields is necessary</span>
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

                        <Card className="shadow-lg border-0 mb-5">
                            <Card.Body className="p-lg-5 p-3">
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

                        <Card className="shadow-lg border-0 mb-5">
                            <Card.Body className="p-lg-5 p-3">
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
                                                <span className="text-start">Sessions are Weekly for 2 hours per session</span>
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
                                                <span className="text-start">Calendar of topics will be released</span>
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col md={4} className="mt-3 mt-md-0">
                                        <img src={people3} alt="Medical Program Students" className="img-fluid rounded shadow w-100" style={{height: '200px', objectFit: 'cover'}} />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                        <div className="text-center mb-5">
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

export default PreMedicalProgram; 