import styles from './meettheteam.module.scss';

import ContentBlock from '../components/ContentBlock.jsx';
import SplitContentBlock from '../components/SplitContentBlock.jsx';
import TripleBlock from '../components/TripleBlock.jsx';

import { Image } from 'react-bootstrap';

import neet from '../assets/neet.jpg';
import kalena from '../assets/kalena.webp';
import jason from '../assets/jason_face.png';
import alex from '../assets/alex_face.jpg';
import sebastian_bermudez from '../assets/sebastian_bermudez.jpg';
import ronak from '../assets/ronak.webp';

function MeetTheTeam() {
    return (<>
        <ContentBlock mt="25" mb="0" content={<>
            <h1 className="display-2 text-dark">Meet The Team</h1>
        </>} />

        <SplitContentBlock mt="10" mb="0" left={<>
            <h1 className="display-6 text-dark">About The Team</h1>
        </>} right={<>
            <p className="text-start text-dark">
            Our tutoring team consists of many hard working individuals who have come as far as getting into prestigious 4 year universities, and not only working as tutors, but as time managing student-teachers.</p>
        </>} />

        {/* Team Members Grid */}
        <section className="py-5">
          <div className="container">
            <div className="row g-4">
              {/* Alex */}
              <div className="col-md-6 col-lg-4">
                <div className="card border-0 shadow-lg h-100">
                  <div className="position-relative overflow-hidden" style={{ height: '300px' }}>
                    <img
                      src={alex}
                      alt="Alex"
                      className="card-img-top w-100 h-100"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="card-body p-4 text-center">
                    <h5 className="card-title fw-semibold text-dark mb-2">Alex</h5>
                    <p className="badge bg-danger text-white small mb-3">PharmSci Major, UC Irvine</p>
                    <p className="card-text text-muted">
                      Alex is a current tutor for ReadyTutor studying at UC Irvine. He's majoring in PharmSci and has excelled in college level physics and chemistry.
                    </p>
                  </div>
                </div>
              </div>

              {/* Kalena */}
              <div className="col-md-6 col-lg-4">
                <div className="card border-0 shadow-lg h-100">
                  <div className="position-relative overflow-hidden" style={{ height: '300px' }}>
                    <img
                      src={kalena}
                      alt="Kalena"
                      className="card-img-top w-100 h-100"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="card-body p-4 text-center">
                    <h5 className="card-title fw-semibold text-dark mb-2">Kalena</h5>
                    <p className="badge bg-danger text-white small mb-3">Chemical Engineering & Applied Math</p>
                    <p className="card-text text-muted">
                      Kalena is a current tutor for Ready Tutor. She is a Chemical Engineering and Applied Mathematics Major.
                    </p>
                  </div>
                </div>
              </div>

              {/* Neet */}
              <div className="col-md-6 col-lg-4">
                <div className="card border-0 shadow-lg h-100">
                  <div className="position-relative overflow-hidden" style={{ height: '300px' }}>
                    <img
                      src={neet}
                      alt="Neet"
                      className="card-img-top w-100 h-100"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="card-body p-4 text-center">
                    <h5 className="card-title fw-semibold text-dark mb-2">Neet</h5>
                    <p className="badge bg-danger text-light small mb-3">Electrical Engineering, UC Irvine</p>
                    <p className="card-text text-muted">
                      Neet is the founder of Ready Tutor and is currently a Computer Science and Electrical Engineering student at UC Irvine.
                    </p>
                  </div>
                </div>
              </div>

              {/* Jason */}
              <div className="col-md-6 col-lg-4">
                <div className="card border-0 shadow-lg h-100">
                  <div className="position-relative overflow-hidden" style={{ height: '300px' }}>
                    <img
                      src={jason}
                      alt="Jason"
                      className="card-img-top w-100 h-100"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="card-body p-4 text-center">
                    <h5 className="card-title fw-semibold text-dark mb-2">Jason</h5>
                    <p className="badge bg-danger text-white small mb-3">Game Design & Computer Science, UC Irvine</p>
                    <p className="card-text text-muted">
                      Jason is a current tutor for Ready Tutor. He is a Computer Game Design and Computer Science double major student at UC Irvine, excelling at math, science, physics, and more!
                    </p>
                  </div>
                </div>
              </div>

              {/* Sebastian */}
              <div className="col-md-6 col-lg-4">
                <div className="card border-0 shadow-lg h-100">
                  <div className="position-relative overflow-hidden" style={{ height: '300px' }}>
                    <img
                      src={sebastian_bermudez}
                      alt="Sebastian"
                      className="card-img-top w-100 h-100"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="card-body p-4 text-center">
                    <h5 className="card-title fw-semibold text-dark mb-2">Sebastian</h5>
                    <p className="badge bg-danger text-white small mb-3">Mathematical Operations, UC Davis</p>
                    <p className="card-text text-muted">
                      Sebastian is a current tutor for ReadyTutor studying at UC Davis. He's majoring in Mathematical Operations and education.
                    </p>
                  </div>
                </div>
              </div>

              {/* Ronak */}
              <div className="col-md-6 col-lg-4">
                <div className="card border-0 shadow-lg h-100">
                  <div className="position-relative overflow-hidden" style={{ height: '300px' }}>
                    <img
                      src={ronak}
                      alt="Ronak"
                      className="card-img-top w-100 h-100"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="card-body p-4 text-center">
                    <h5 className="card-title fw-semibold text-dark mb-2">Ronak</h5>
                    <p className="badge bg-success text-white small mb-3">High School Student, Canyon High</p>
                    <p className="card-text text-muted">
                      Ronak is a current tutor for ReadyTutor and is currently a student at Canyon High School. He is leaning toward an engineering major and is passionate about math and physics!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>);
}

export default MeetTheTeam;