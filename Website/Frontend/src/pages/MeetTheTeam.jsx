import styles from './meettheteam.module.scss';

import ContentBlock from '../components/ContentBlock.jsx';
import SplitContentBlock from '../components/SplitContentBlock.jsx';
import TripleBlock from '../components/TripleBlock.jsx';
import { useSheetData } from '../hooks/useSheetData.js';

import { Image, Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/logo.png';

function MeetTheTeam() {
    // Use the custom hook to fetch team data from the sheet
    const { data: teamData, loading, error } = useSheetData("MeetTheTeamPage");

    /**
 * Converts various types of Google Drive URLs into a direct image URL.
 *
 * @param {string} driveLink - Any Google Drive shareable link containing a file ID.
 * @returns {string|null} - A usable direct image link (for <img> or =IMAGE), or null if invalid.
 */
  function getDirectImageUrl(driveLink) {
    let fileId = null;

    // Case 1: https://drive.google.com/file/d/FILE_ID/view
    let match = driveLink.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      fileId = match[1];
    }

    // Case 2: https://drive.google.com/open?id=FILE_ID
    if (!fileId) {
      match = driveLink.match(/[?&]id=([a-zA-Z0-9_-]+)/);
      if (match && match[1]) {
        fileId = match[1];
      }
    }

    // Case 3: https://drive.google.com/uc?id=FILE_ID
    if (!fileId) {
      match = driveLink.match(/\/uc\?id=([a-zA-Z0-9_-]+)/);
      if (match && match[1]) {
        fileId = match[1];
      }
    }

    if (!fileId) {
      return driveLink;
    }

    // Construct a direct-view link (valid for =IMAGE or <img>)
    return `https://drive.google.com/thumbnail?id=${fileId}`;
  }

    // Handle image URL - use Ready Tutor logo as fallback
    const getImageUrl = (imageData) => {
        return getDirectImageUrl(imageData);
    };

    return (<>
        <ContentBlock mt="25" mb="0" content={<>
            <h1 className="display-2 text-dark">Meet The Team</h1>
        </>} />

        {/* About The Team Section - Responsive Columns */}
        <Container className="my-5">
            <Row className="g-4 align-items-center">
                <Col md={4}>
                    <h1 className="display-6 text-dark">About The Team</h1>
                </Col>
                <Col md={8}>
                    <p className="text-start text-dark">
                        Our tutoring team consists of many hard working individuals who have come as far as getting into prestigious 4 year universities, and not only working as tutors, but as time managing student-teachers.
                    </p>
                </Col>
            </Row>
        </Container>

        {/* Team Members Grid */}
        <section className="py-5">
          <div className="container">
            {loading ? (
                <div className="text-center">
                    <p className="display-6 text-dark">Loading team members...</p>
                </div>
            ) : error ? (
                <div className="text-center">
                    <p className="display-6 text-danger">Error loading team members: {error}</p>
                </div>
            ) : teamData && teamData.length > 0 ? (
                <div className="row g-4">
                    {teamData.map((member, index) => (
                        <div key={index} className="col-md-6 col-lg-4">
                            <div className="card border-0 shadow-lg h-100">
                                <div className="position-relative overflow-hidden" style={{ height: '300px' }}>
                                    <img
                                        src={getImageUrl(member.image)}
                                        alt={member.name}
                                        className="card-img-top w-100 h-100"
                                        style={{ objectFit: 'cover' }}
                                        onError={(e) => {
                                            e.target.src = logo;
                                        }}
                                    />
                                </div>
                                <div className="card-body p-4 text-center">
                                    <h5 className="card-title fw-semibold text-dark mb-2">{member.name}</h5>
                                    <p className="badge bg-danger text-white small mb-3">{member.major}</p>
                                    <p className="card-text text-muted">
                                        {member.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center">
                    <p className="display-6 text-dark">No team members found.</p>
                </div>
            )}
          </div>
        </section>
    </>);
}

export default MeetTheTeam;