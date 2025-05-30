import styles from './about.module.scss';
import {Card, ListGroup, Col, Row, ListGroupItem, Image, Button} from 'react-bootstrap';
import SplitContentBlock from '../components/SplitContentBlock.jsx';
import {Link} from 'react-router-dom';
import waggImg from '../assets/wagg.jpg';
import ContentBlock from '../components/ContentBlock.jsx';
import TripleBlock from '../components/TripleBlock.jsx';

function About() {
    return (<>
        <ContentBlock mt='25' content={<h1 className='display-1 text-dark text-center mt-2'>About Us</h1>}/>
        
        {/* Three Card Sections */}
        <section className="py-5">
          <div className="container">
            <div className="row g-4 justify-content-center">
              
              {/* About Card */}
              <div className="col-md-4">
                <div className="card border-0 shadow-lg h-100">
                  <div className="card-body p-5 text-center">
                    <div className="mb-4">
                      <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-danger text-white mb-3" style={{ width: '60px', height: '60px' }}>
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <h3 className="fs-4 fw-medium mb-3 text-dark">About</h3>
                    </div>
                    <p className="text-muted">
                      Some of the hardest things that people have to go through can be things such as academia itself. The world of learning is a tough place, and navigating it can sometimes lead to a lot of stress and anxiety.
                    </p>
                    <p className="text-muted">
                      Why navigate alone? Here at Ready Tutor, we are here to help you out on your academic journey and all problems that you're facing, with examples and stories to help you learn and remember everything that you need!
                    </p>
                  </div>
                </div>
              </div>

              {/* Our Story Card */}
              <div className="col-md-4">
                <div className="card border-0 shadow-lg h-100">
                  <div className="card-body p-5 text-center">
                    <div className="mb-4">
                      <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-danger text-white mb-3" style={{ width: '60px', height: '60px' }}>
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <h3 className="fs-4 fw-medium mb-3 text-dark">Our Story</h3>
                    </div>
                    <p className="text-muted">
                      From a High School Physics Club to a whole business, Ready Tutor started as simple private tutoring, where the needs of students that could not understand course content were aided through our efforts.
                    </p>
                    <p className="text-muted">
                      We've grown from helping a few classmates to supporting hundreds of students across multiple universities and subjects.
                    </p>
                  </div>
                </div>
              </div>

              {/* Get Started Card */}
              <div className="col-md-4">
                <div className="card border-0 shadow-lg h-100 d-flex flex-column">
                  <div className="card-body p-5 text-center d-flex flex-column">
                    <div className="mb-4">
                      <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-danger text-white mb-3" style={{ width: '60px', height: '60px' }}>
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
                        </svg>
                      </div>
                      <h3 className="fs-4 fw-medium mb-3 text-dark">Why Wait?</h3>
                    </div>
                    <p className="text-muted mb-4 flex-grow-1">
                      Get a Free Consultation Today! Start your academic success journey with us and see the difference personalized tutoring can make.
                    </p>
                    <div className="mt-auto">
                      <Link to='/contact-us'>
                        <button className="btn btn-dark rounded-pill px-4 py-3 mb-2">Get Started</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image Section */}
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2 className="display-6 fw-normal text-dark mb-4">Ready to Transform Your Academic Experience?</h2>
                <p className="text-muted fs-5 mb-4">
                  Join hundreds of students who have already discovered the power of personalized tutoring with Ready Tutor.
                </p>
                <Link to='/contact-us'>
                  <button className="btn btn-dark rounded-pill px-4 py-3 mb-2">Get Started</button>
                </Link>
              </div>
              <div className="col-md-6">
                <Image src={waggImg} fluid rounded className="shadow-lg" />
              </div>
            </div>
          </div>
        </section>
    </>);
}

export default About;