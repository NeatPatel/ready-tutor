import ContentBlock from '../components/ContentBlock';
import styles from './pricing.module.scss';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Pricing() {
    return (<>
        <ContentBlock mt='25' content={<h1 className='display-1 text-dark'>Pricing</h1>}/>
        <ContentBlock mt='5' content={<h2 className='text-dark'>We offer flexible options for you to choose from</h2>}/>
        
        {/* Main Pricing Cards */}
        <section className="py-5">
          <div className="container">
            <div className="row g-4 justify-content-center">
              <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100 d-flex flex-column">
                  <div className="card-body p-4 d-flex flex-column">
                    <div className="mb-4">
                      <h3 className="fs-5 fw-medium mb-1">Group Sessions</h3>
                      <p className="small text-muted">For comprehensive Group help</p>
                    </div>
                    <div className="mb-4">
                      <span className="display-6 fw-normal">&lt;$20</span>
                      <span className="text-muted">/hour each</span>
                    </div>
                    <p className="text-muted mb-3">Come with a group of 2 or more people for help in your subject matter today!</p>
                    <p className="text-muted mb-4 flex-grow-1">The more students, the cheaper the tutoring!</p>
                    <Link to="/contact-us" className="mt-auto">
                      <button className="btn btn-outline-dark w-100 rounded-pill mb-2">
                        Choose plan
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card border-0 shadow-lg h-100 position-relative bg-white d-flex flex-column">
                  <div className="position-absolute top-0 start-50 translate-middle">
                    <span className="badge bg-danger text-white small py-1 px-3 rounded-pill">Popular</span>
                  </div>
                  <div className="card-body p-4 d-flex flex-column">
                    <div className="mb-4">
                      <h3 className="fs-5 fw-medium mb-1">One on One</h3>
                      <p className="small text-muted">For regular one on one support</p>
                    </div>
                    <div className="mb-4">
                      <span className="display-6 fw-normal">$30</span>
                      <span className="text-muted">/hour</span>
                    </div>
                    <p className="text-muted mb-3">A personal tutoring session with customized help to optimize your experience!</p>
                    <p className="text-muted mb-4 flex-grow-1">We provide a flat fee of $30 per hour to help high school or college students alike!</p>
                    <Link to="/contact-us" className="mt-auto">
                      <button className="btn btn-dark w-100 rounded-pill mb-2">Choose plan</button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100 d-flex flex-column">
                  <div className="card-body p-4 d-flex flex-column">
                    <div className="mb-4">
                      <h3 className="fs-5 fw-medium mb-1"><b>Money Back Guarantee</b></h3>
                      <p className="small text-muted">For occasional help</p>
                    </div>
                    <div className="mb-4">
                      <span className="display-6 fw-normal">$40</span>
                      <span className="text-muted">/hour</span>
                    </div>
                    <p className="text-muted mb-3">Pass your exams, or get your money 100% back!</p>
                    <p className="text-muted mb-4 flex-grow-1"><Link to="/pricing/deals">more information</Link></p>
                    <Link to="/contact-us" className="mt-auto">
                      <button className="btn btn-outline-dark w-100 rounded-pill mb-2">
                        Get started
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services Cards */}
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row g-4 justify-content-center">
              <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100 d-flex flex-column">
                  <div className="card-body p-4 d-flex flex-column">
                    <div className="mb-4">
                      <h3 className="fs-5 fw-medium mb-1">Computer Science Bootcamp</h3>
                      <p className="small text-muted">Summer programming intensive</p>
                    </div>
                    <div className="mb-4">
                      <span className="display-6 fw-normal">$250</span>
                      <span className="text-muted">/student</span>
                    </div>
                    <p className="text-muted mb-3">Comprehensive web development program covering HTML, CSS, JavaScript, React, and modern frameworks</p>
                    <p className="text-muted mb-4 flex-grow-1">Students work on real-world projects and showcase their work at UC Irvine</p>
                    <Link to="/summer-programs" className="mt-auto">
                      <button className="btn btn-outline-dark w-100 rounded-pill mb-2">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100 d-flex flex-column">
                  <div className="card-body p-4 d-flex flex-column">
                    <div className="mb-4">
                      <h3 className="fs-5 fw-medium mb-1">Pre Medical Bootcamp</h3>
                      <p className="small text-muted">Medical preparation program</p>
                    </div>
                    <div className="mb-4">
                      <span className="display-6 fw-normal">$250</span>
                      <span className="text-muted">/student</span>
                    </div>
                    <p className="text-muted mb-3">Pre-medical timeline preparation with hands-on laboratory experience in Biology, Chemistry, and Organic Chemistry</p>
                    <p className="text-muted mb-4 flex-grow-1">Professional lab report development and final project showcase at UC Irvine</p>
                    <Link to="/summer-programs" className="mt-auto">
                      <button className="btn btn-outline-dark w-100 rounded-pill mb-2">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100 d-flex flex-column">
                  <div className="card-body p-4 d-flex flex-column">
                    <div className="mb-4">
                      <h3 className="fs-5 fw-medium mb-1">College Applications</h3>
                      <p className="small text-muted">One-on-one application help</p>
                    </div>
                    <div className="mb-4">
                      <span className="display-6 fw-normal">$500</span>
                      <span className="text-muted">/student</span>
                    </div>
                    <p className="text-muted mb-3">10 private hours of college application help for students to perfect their essays and applications</p>
                    <p className="text-muted mb-4 flex-grow-1">One-on-one sessions only for college applications</p>
                    <Link to="/contact-us" className="mt-auto">
                      <button className="btn btn-outline-dark w-100 rounded-pill mb-2">
                        Get Started
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SAT Prep Special Section */}
        <section className="py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="card border-0 shadow-lg">
                  <div className="card-body p-5 text-center">
                    <div className="mb-4">
                      <h3 className="fs-4 fw-medium mb-1">SAT Prep</h3>
                      <p className="text-muted">5 week intensive program</p>
                    </div>
                    <div className="mb-4">
                      <span className="display-5 fw-normal">$400</span>
                      <span className="text-muted">/student</span>
                    </div>
                    <p className="text-muted mb-3">A 5 week intensive summer program IN PERSON for 2 sessions a week</p>
                    <p className="text-muted mb-4">Referring a friend to this program gets you a $100 discount!</p>
                    <Link to="/contact-us">
                      <button className="btn btn-dark rounded-pill px-4 py-2 mb-2">
                        Register Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContentBlock mt='30' mb='50' content={<>
            <h1 className='text-dark mb-4'>Contact us today to get started!</h1>
            <Link to='/contact-us'><button className="btn btn-dark rounded-pill px-4 py-3">Sign Up</button></Link>
        </>}/>
    </>);
}

export default Pricing;