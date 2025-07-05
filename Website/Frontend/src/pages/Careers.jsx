import styles from './careers.module.scss';

import { Button, Container, Row, Col, Card } from 'react-bootstrap';

import ContentBlock from '../components/ContentBlock.jsx';
import SplitContentBlock from '../components/SplitContentBlock.jsx';
import { useSheetData } from '../hooks/useSheetData.js';

function Careers() {
    // Use the custom hook to fetch job data from the sheet
    const { data: jobData, loading, error } = useSheetData("PostedJobs");

    return (<>
        <ContentBlock mt="25" mb="10" content={<>
            <h1 className="display-2 text-dark">Careers</h1>
        </>} />

        {/* Available Positions Section */}
        <Container className="my-5 py-5">
            <Row className="mb-5">
                <Col>
                    <h2 className="display-5 text-dark text-center mb-4">Current Available Positions</h2>
                    <p className="text-center text-muted mb-5">
                        Join our team of dedicated educators and make a difference in students' academic journeys.
                    </p>
                </Col>
            </Row>

            {loading ? (
                <Row>
                    <Col className="text-center">
                        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
                            <div>
                                <div className="spinner-border text-danger mb-3" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <p className="text-muted">Loading available positions...</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            ) : error ? (
                <Row>
                    <Col className="text-center">
                        <div className="alert alert-danger" role="alert">
                            <h5 className="alert-heading">Error Loading Positions</h5>
                            <p className="mb-0">We're having trouble loading our current job openings. Please try again later or contact us directly.</p>
                        </div>
                    </Col>
                </Row>
            ) : (jobData && jobData.length > 0) && (
                <Row className="g-4">
                    {jobData.map((job, index) => (
                        <Col key={index} md={6} lg={4}>
                            <Card className="h-100 border-0 shadow-sm">
                                <Card.Body className="p-4 d-flex flex-column">
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <h5 className="card-title text-dark fw-bold mb-0">
                                            {job.positionName}
                                        </h5>
                                        {job.pay && (
                                            <span className="badge bg-success ms-2">
                                                {job.pay}
                                            </span>
                                        )}
                                    </div>
                                    
                                    {/* Time Commitment Badge */}
                                    {job.timeCommitment && (
                                        <div className="mb-3">
                                            <span className="badge text-white bg-danger text-dark">
                                                {job.timeCommitment}
                                            </span>
                                        </div>
                                    )}
                                    
                                    <p className="card-text text-muted flex-grow-1">
                                        {job.description}
                                    </p>
                                    
                                    {/* Apply button pushed to bottom */}
                                    <div className="mt-auto pt-3">
                                        <a 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            href="https://docs.google.com/forms/d/e/1FAIpQLSfP6BYptT5MpeVt3sGCzhQgn0457NerODAfqJRGM6dqbbDq0w/viewform"
                                            className="btn btn-dark rounded-pill px-4 py-3 w-100"
                                        >
                                            Apply
                                        </a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>

        {/* Careers Section - Responsive Columns */}
        <Container className="my-5 mb-5 pb-5">
            <Row className="g-4 align-items-center">
                <Col md={4}>
                    <h1 className="display-4 text-dark">Careers with Ready Tutor</h1>
                </Col>
                <Col md={8}>
                    <p className="text-start text-dark mb-4">
                        Are you an academic interested in working with our tutoring team? Look no further, because now you can apply to us today! We will get back to you with further questions as we move forward.
                    </p>
                    {/* Button positioned at bottom on mobile */}
                    <div className="d-flex justify-content-start">
                        <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSfP6BYptT5MpeVt3sGCzhQgn0457NerODAfqJRGM6dqbbDq0w/viewform">
                            <button className="btn btn-dark rounded-pill px-4 py-3">Apply</button>
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    </>);
}

export default Careers;