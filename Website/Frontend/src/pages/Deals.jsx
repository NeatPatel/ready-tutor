import ContentBlock from '../components/ContentBlock';
import styles from './pricing.module.scss';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Deals() {
    return (<>
        <ContentBlock mt='25' content={<h1 className='display-1 text-dark'>Deals & Discounts</h1>}/>
        <ContentBlock mt='5' content={<h2 className='text-dark'>Exclusive offers for our students</h2>}/>
        
        {/* UC Irvine Money Back Program Card */}
        <section className="py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card border-0 shadow-lg">
                  <div className="card-body p-5">
                    <div className="text-center mb-4">
                      <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-danger text-white mb-3" style={{ width: '60px', height: '60px' }}>
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <h3 className="display-6 fw-medium text-dark mb-2">UC Irvine Money Back Program</h3>
                      <p className="text-muted">100% money back guarantee for UC Irvine students</p>
                    </div>
                    
                    <div className="text-center mb-4">
                      <p className="lead text-dark">
                        We offer a money back guarantee program to UC Irvine students!
                      </p>
                      <p className="text-muted mb-3">
                        Students can have a hard time preparing for their exams, and want a guarantee that they can get the results they want. We are offering this program for UC Irvine students to help them pass their exams, without the stress of losing their time and money!
                      </p>
                      <div className="alert alert-info border-0 bg-light">
                        <p className="mb-0 fw-medium">
                          <strong>If students get below a passing grade on their exam (70% default), they get their money 100% back if eligible following the rules below</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rules Section */}
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="text-center mb-5">
                  <h3 className="display-6 text-dark mb-3">Program Rules</h3>
                  <p className="text-muted">Please review these requirements to ensure eligibility</p>
                </div>
                
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body p-4">
                        <div className="d-flex align-items-start">
                          <div className="flex-shrink-0 me-3">
                            <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-success text-white" style={{ width: '40px', height: '40px' }}>
                              <span className="fw-bold">1</span>
                            </div>
                          </div>
                          <div>
                            <h5 className="fw-medium text-dark mb-2">Target Exam Required</h5>
                            <p className="text-muted mb-0">Students must have a specific target exam they are studying for (easy!)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body p-4">
                        <div className="d-flex align-items-start">
                          <div className="flex-shrink-0 me-3">
                            <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-warning text-dark" style={{ width: '40px', height: '40px' }}>
                              <span className="fw-bold">2</span>
                            </div>
                          </div>
                          <div>
                            <h5 className="fw-medium text-dark mb-2">Over 1 Month Away</h5>
                            <p className="text-muted mb-0">If the exam is in over a month, students must complete at least <strong>3 sessions</strong> with us to ensure quality and be eligible</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body p-4">
                        <div className="d-flex align-items-start">
                          <div className="flex-shrink-0 me-3">
                            <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-info text-white" style={{ width: '40px', height: '40px' }}>
                              <span className="fw-bold">3</span>
                            </div>
                          </div>
                          <div>
                            <h5 className="fw-medium text-dark mb-2">2+ Weeks Away</h5>
                            <p className="text-muted mb-0">If the exam is in 2 weeks or more, students must complete at least <strong>5 sessions</strong> with us to ensure quality and be eligible</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body p-4">
                        <div className="d-flex align-items-start">
                          <div className="flex-shrink-0 me-3">
                            <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-danger text-white" style={{ width: '40px', height: '40px' }}>
                              <span className="fw-bold">4</span>
                            </div>
                          </div>
                          <div>
                            <h5 className="fw-medium text-dark mb-2">Less Than 1 Week</h5>
                            <p className="text-muted mb-0">If the exam is in less than a week, students must complete at least <strong>8 sessions</strong> with us to ensure quality and be eligible</p>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Deals;