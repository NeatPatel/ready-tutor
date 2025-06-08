import styles from './careers.module.scss';

import { Button, Container, Row, Col } from 'react-bootstrap';

import ContentBlock from '../components/ContentBlock.jsx';
import SplitContentBlock from '../components/SplitContentBlock.jsx';

function Careers() {
    return (<>
        <ContentBlock mt="25" mb="10" content={<>
            <h1 className="display-2 text-dark">Careers</h1>
        </>} />

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