import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MathBackground from '../components/MathBackground';

import people from '../assets/people2.jpg';
import jack from '../assets/jack.jpg';
import alex from '../assets/alex.png';

// AnimatedSubjectText Component
function AnimatedSubjectText() {
  const subjects = [
    { name: "Economics", emoji: "📊" },
    { name: "Calculus", emoji: "🧮" },
    { name: "Chemistry", emoji: "🧪" },
    { name: "Physics", emoji: "⚛️" },
    { name: "Literature", emoji: "📚" },
    { name: "Biology", emoji: "🔬" },
    { name: "History", emoji: "📜" },
    { name: "Computer Science", emoji: "💻" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const timeoutRef = useRef(null);

  const cycleSubject = () => {
    setIsVisible(false);
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % subjects.length);
      setIsVisible(true);
      timeoutRef.current = setTimeout(cycleSubject, 4000);
    }, 500);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(cycleSubject, 4000);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const currentSubject = subjects[currentIndex];

  return (
    <h1 style={{ marginTop: "25vh" }} className="text-4xl text-md-5xl font-weight-normal mb-4 text-center">
      Is{" "}
      <span
        className={`text-danger font-weight-medium d-inline-block transition-all ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          transition: 'all 0.5s ease-in-out',
          transform: isVisible ? 'none' : 'translateY(-8px)'
        }}
      >
        {currentSubject.name}
      </span>{" "}
      kicking your butt?
    </h1>
  );
}

// TestimonialCard Component
function TestimonialCard({ quote }) {
  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="d-flex card-body align-items-center p-3">
        <p className="lead small my-2">"{quote}"</p>
      </div>
    </div>
  );
}

// TutorCard Component
function TutorCard({ name, image, subjects, rating, major, gpa, description, studentsHelped }) {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`full-${i}`} className="text-warning" width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="text-warning" width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="half-fill">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path fill="url(#half-fill)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="text-secondary" width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <div className="card border-0 shadow-lg h-100" style={{ transition: 'box-shadow 0.3s ease' }}>
      <div className="position-relative" style={{ height: '256px', overflow: 'hidden' }}>
        <img
          src={image || "#"}
          alt={name}
          className="card-img-top w-100 h-100"
          style={{ objectFit: 'cover', transition: 'transform 0.3s ease' }}
        />
        <div className="position-absolute top-0 end-0 m-3 bg-white rounded-pill px-2 py-1 shadow-sm">
          <div className="d-flex align-items-center">
            {renderStars(rating)}
            <span className="ms-1 small fw-medium">{rating}</span>
          </div>
        </div>
      </div>
      <div className="card-body p-4">
        <div className="mb-3">
          <h5 className="fw-semibold mb-1">{name}</h5>
          <p className="text-muted small">{major}</p>
        </div>

        <div className="d-flex align-items-center gap-3 mb-3 small">
          <div className="d-flex align-items-center gap-1">
            <span className="text-warning">🏆</span>
            <span className="text-muted">GPA: {gpa}</span>
          </div>
          <div className="text-muted">
            {studentsHelped} students helped
          </div>
        </div>

        <div className="mb-3">
          <div className="d-flex flex-wrap gap-2">
            {subjects.map((subject, index) => (
              <span
                key={index}
                className="badge text-danger small"
                style={{ backgroundColor: '#fef2f2', fontSize: '0.75rem' }}
              >
                {subject}
              </span>
            ))}
          </div>
        </div>

        <p className="text-muted small mb-3" style={{ 
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {description}
        </p>

        <button className="btn btn-dark w-100 rounded-pill">
          Book session
        </button>
      </div>
    </div>
  );
}

function Home() {
  const [activeTab, setActiveTab] = useState('find');

  return (
    <div className="d-flex flex-column min-vh-100 bg-white">
      <main className="flex-grow-1">
        {/* Hero Section */}
        <section className="py-5" style={{ paddingTop: '6rem', paddingBottom: '8rem', position: 'relative', overflow: 'hidden' }}>
          {/* Math Background - positioned behind everything */}
          <div className="position-absolute top-0 start-0 w-100 h-100">
            <MathBackground />
          </div>

          {/* Subtle highlight behind content */}
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ pointerEvents: 'none' }}>
            <div 
              className="w-100 opacity-25 rounded-circle"
              style={{
                maxWidth: '48rem',
                height: '16rem',
                background: 'linear-gradient(to bottom, #fef2f2, transparent)',
                filter: 'blur(48px)',
                zIndex: 1
              }}
            ></div>
          </div>

          <div className="container position-relative" style={{ zIndex: 10 }}>
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <AnimatedSubjectText />
                <p className="text-muted mb-4 fs-5" style={{ maxWidth: '32rem', margin: '0 auto 2.5rem' }}>
                  Connect with expert tutors who specialize in your specific subjects. Get help with assignments, exam prep,
                  and understanding complex concepts.
                </p>
                <Link to="/contact-us"><Button 
                  size="lg" 
                  className="btn btn-dark rounded-pill px-4 py-3 shadow-lg mb-5"
                  style={{ transition: 'all 0.3s ease' }}
                >
                  Find a tutor
                </Button></Link>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-5" style={{ background: 'linear-gradient(to bottom, white, #f8f9fa)' }}>
          <div className="container">
            <h2 className="display-5 fw-normal mb-3 text-center">How it works</h2>
            <div 
              className="bg-danger mx-auto mb-5 rounded-pill"
              style={{ width: '5rem', height: '4px' }}
            ></div>

            <div className="row justify-content-center">
              <div className="col-lg-10">
                <ul className="nav nav-pills justify-content-center mb-5 bg-white p-1 shadow-sm rounded-pill border">
                  <li className="nav-item flex-fill">
                    <button
                      className={`nav-link text-center w-100 py-3 rounded-pill small ${activeTab === 'find' ? 'bg-dark text-white' : 'text-dark'}`}
                      onClick={() => setActiveTab('find')}
                      style={{ transition: 'all 0.3s ease' }}
                    >
                      Talk to Us
                    </button>
                  </li>
                  <li className="nav-item flex-fill">
                    <button
                      className={`nav-link text-center w-100 py-3 rounded-pill small ${activeTab === 'schedule' ? 'bg-dark text-white' : 'text-dark'}`}
                      onClick={() => setActiveTab('schedule')}
                      style={{ transition: 'all 0.3s ease' }}
                    >
                      Schedule
                    </button>
                  </li>
                  <li className="nav-item flex-fill">
                    <button
                      className={`nav-link text-center w-100 py-3 rounded-pill small ${activeTab === 'learn' ? 'bg-dark text-white' : 'text-dark'}`}
                      onClick={() => setActiveTab('learn')}
                      style={{ transition: 'all 0.3s ease' }}
                    >
                      Learn
                    </button>
                  </li>
                </ul>

                {/* Tab Content */}
                {activeTab === 'find' && (
                  <div className="row align-items-center g-5">
                    <div className="col-md-6">
                      <div 
                        className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4"
                        style={{ width: '3rem', height: '3rem', backgroundColor: '#fef2f2' }}
                      >
                        <svg className="text-danger" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="11" cy="11" r="8" />
                          <path d="m21 21-4.35-4.35" />
                        </svg>
                      </div>
                      <h3 className="fs-4 fw-normal mb-3">Tell us what you need</h3>
                      <p className="text-muted mb-4">
                        Have a quick constulation with us ASAP to talk about what you and how fast!
                      </p>
                      <ul className="list-unstyled">
                        <li className="d-flex align-items-start mb-3 small text-muted">
                          <div 
                            className="bg-danger rounded-circle me-3 flex-shrink-0"
                            style={{ width: '6px', height: '6px', marginTop: '8px' }}
                          ></div>
                          <span>Talk with us immediately</span>
                        </li>
                        <li className="d-flex align-items-start mb-3 small text-muted">
                          <div 
                            className="bg-danger rounded-circle me-3 flex-shrink-0"
                            style={{ width: '6px', height: '6px', marginTop: '8px' }}
                          ></div>
                          <span>Flexible immediate booking</span>
                        </li>
                        <li className="d-flex align-items-start small text-muted">
                          <div 
                            className="bg-danger rounded-circle me-3 flex-shrink-0"
                            style={{ width: '6px', height: '6px', marginTop: '8px' }}
                          ></div>
                          <span>Get YOUR problems solved</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <img
                        src={jack}
                        alt="Find tutor interface"
                        className="img-fluid rounded shadow-lg"
                        style={{ width: '500px', height: '400px', objectFit: 'cover', backgroundColor: '#f8f9fa' }}
                      />
                    </div>
                  </div>
                )}

                {activeTab === 'schedule' && (
                  <div className="row align-items-center g-5">
                    <div className="col-md-6">
                      <div 
                        className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4"
                        style={{ width: '3rem', height: '3rem', backgroundColor: '#fef2f2' }}
                      >
                        <svg className="text-danger" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" x2="16" y1="2" y2="6" />
                          <line x1="8" x2="8" y1="2" y2="6" />
                          <line x1="3" x2="21" y1="10" y2="10" />
                        </svg>
                      </div>
                      <h3 className="fs-4 fw-normal mb-3">Schedule your session</h3>
                      <p className="text-muted mb-4">
                        Book sessions at times that work for you. Our tutors are available 7 days a week, including
                        evenings and weekends for your convenience.
                      </p>
                      <ul className="list-unstyled">
                        <li className="d-flex align-items-start mb-3 small text-muted">
                          <div 
                            className="bg-danger rounded-circle me-3 flex-shrink-0"
                            style={{ width: '6px', height: '6px', marginTop: '8px' }}
                          ></div>
                          <span>Flexible scheduling 7 days a week</span>
                        </li>
                        <li className="d-flex align-items-start mb-3 small text-muted">
                          <div 
                            className="bg-danger rounded-circle me-3 flex-shrink-0"
                            style={{ width: '6px', height: '6px', marginTop: '8px' }}
                          ></div>
                          <span>Book sessions to get you ready for your exam</span>
                        </li>
                        <li className="d-flex align-items-start small text-muted">
                          <div 
                            className="bg-danger rounded-circle me-3 flex-shrink-0"
                            style={{ width: '6px', height: '6px', marginTop: '8px' }}
                          ></div>
                          <span>Instant confirmation and feedback with us</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <img
                        src={alex}
                        alt="Schedule interface"
                        className="img-fluid rounded shadow-lg"
                        style={{ width: '500px', height: '400px', objectFit: 'cover', backgroundColor: '#f8f9fa' }}
                      />
                    </div>
                  </div>
                )}

                {activeTab === 'learn' && (
                  <div className="row align-items-center g-5">
                    <div className="col-md-6">
                      <div 
                        className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4"
                        style={{ width: '3rem', height: '3rem', backgroundColor: '#fef2f2' }}
                      >
                        <svg className="text-danger" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                        </svg>
                      </div>
                      <h3 className="fs-4 fw-normal mb-3">Learn and improve</h3>
                      <p className="text-muted mb-4">
                        Get personalized attention in your one-on-one session. Work through problems, clarify concepts,
                        and track your progress with detailed session notes.
                      </p>
                      <ul className="list-unstyled">
                        <li className="d-flex align-items-start mb-3 small text-muted">
                          <div 
                            className="bg-danger rounded-circle me-3 flex-shrink-0"
                            style={{ width: '6px', height: '6px', marginTop: '8px' }}
                          ></div>
                          <span>Interactive whiteboard and screen sharing</span>
                        </li>
                        <li className="d-flex align-items-start mb-3 small text-muted">
                          <div 
                            className="bg-danger rounded-circle me-3 flex-shrink-0"
                            style={{ width: '6px', height: '6px', marginTop: '8px' }}
                          ></div>
                          <span>Complete content immersion</span>
                        </li>
                        <li className="d-flex align-items-start small text-muted">
                          <div 
                            className="bg-danger rounded-circle me-3 flex-shrink-0"
                            style={{ width: '6px', height: '6px', marginTop: '8px' }}
                          ></div>
                          <span>Progress tracking and personalized tips</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <img
                        src={people}
                        alt="Learning interface"
                        className="img-fluid rounded shadow-lg"
                        style={{ width: '500px', height: '400px', objectFit: 'cover', backgroundColor: '#f8f9fa' }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-5 bg-light">
          <div className="container">
            <h2 className="fs-1 fw-normal mb-3 text-center">Simple, transparent pricing</h2>
            <p className="text-center text-muted mb-5 mx-auto" style={{ maxWidth: '32rem' }}>
              Choose the option that works best for your needs and budget.
            </p>

            <div className="row g-4 justify-content-center">
              
              {/* 10 Hour Package */}
              <div className="col-md-4">
                <div className="card border-0 shadow-lg h-100 position-relative bg-white">
                  <div className="position-absolute top-0 start-50 translate-middle">
                    <span className="badge bg-danger text-white small py-1 px-3 rounded-pill">Best Value</span>
                  </div>
                  <div className="card-body p-4">
                    <div className="mb-4">
                      <h3 className="fs-5 fw-medium mb-1">10 Hour Package</h3>
                      <p className="small text-muted">For comprehensive one-on-one support</p>
                    </div>
                    <div className="mb-4">
                      <span className="display-6 fw-normal">$25</span>
                      <span className="text-muted">/hour</span>
                      <div className="small text-success mt-1">$250/package - Save $10 per hour!</div>
                    </div>
                    <ul className="list-unstyled mb-4">
                      <li className="d-flex align-items-start mb-2 small text-muted">
                        <svg className="text-danger me-2 flex-shrink-0" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginTop: '2px' }}>
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span>10 hours of personalized tutoring</span>
                      </li>
                      <li className="d-flex align-items-start mb-2 small text-muted">
                        <svg className="text-danger me-2 flex-shrink-0" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginTop: '2px' }}>
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Consistent tutor availability</span>
                      </li>
                      <li className="d-flex align-items-start mb-2 small text-muted">
                        <svg className="text-danger me-2 flex-shrink-0" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginTop: '2px' }}>
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Perfect for semester support</span>
                      </li>
                      <li className="d-flex align-items-start small text-muted">
                        <svg className="text-danger me-2 flex-shrink-0" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginTop: '2px' }}>
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Best savings per hour</span>
                      </li>
                    </ul>
                    <Link to="/contact-us"><button className="btn btn-dark w-100 rounded-pill">
                      Choose plan
                    </button></Link>
                  </div>
                </div>
              </div>

              {/* 5 Hour Package */}
              <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <div className="mb-4">
                      <h3 className="fs-5 fw-medium mb-1">5 Hour Package</h3>
                      <p className="small text-muted">For focused exam preparation</p>
                    </div>
                    <div className="mb-4">
                      <span className="display-6 fw-normal">$30</span>
                      <span className="text-muted">/hour</span>
                      <div className="small text-success mt-1">$150/package - Save $5 per hour!</div>
                    </div>
                    <ul className="list-unstyled mb-4">
                      <li className="d-flex align-items-start mb-2 small text-muted">
                        <svg className="text-danger me-2 flex-shrink-0" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginTop: '2px' }}>
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span>5 hours of intensive tutoring</span>
                      </li>
                      <li className="d-flex align-items-start mb-2 small text-muted">
                        <svg className="text-danger me-2 flex-shrink-0" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginTop: '2px' }}>
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Targeted subject mastery</span>
                      </li>
                      <li className="d-flex align-items-start mb-2 small text-muted">
                        <svg className="text-danger me-2 flex-shrink-0" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginTop: '2px' }}>
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Great for exam prep</span>
                      </li>
                      <li className="d-flex align-items-start small text-muted">
                        <svg className="text-danger me-2 flex-shrink-0" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginTop: '2px' }}>
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Focused learning sessions</span>
                      </li>
                    </ul>
                    <Link to="/contact-us"><button className="btn btn-outline-dark w-100 rounded-pill">
                      Choose plan
                    </button></Link>
                  </div>
                </div>
              </div>

              {/* Money Back Guarantee */}
              <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <div className="mb-4">
                      <h3 className="fs-5 fw-medium mb-1">Money Back Guarantee</h3>
                      <p className="small text-muted">For high-stakes exam preparation</p>
                    </div>
                    <div className="mb-4">
                      <span className="display-6 fw-normal">$50</span>
                      <span className="text-muted">/hour</span>
                    </div>
                    <ul className="list-unstyled mb-4">
                      <li className="d-flex align-items-start mb-2 small text-muted">
                        <svg className="text-danger me-2 flex-shrink-0" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginTop: '2px' }}>
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Pass your exams or get money back</span>
                      </li>
                      <li className="d-flex align-items-start mb-2 small text-muted">
                        <svg className="text-danger me-2 flex-shrink-0" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginTop: '2px' }}>
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Premium tutoring service</span>
                      </li>
                      <li className="d-flex align-items-start mb-2 small text-muted">
                        <svg className="text-danger me-2 flex-shrink-0" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginTop: '2px' }}>
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Risk-free learning</span>
                      </li>
                      <li className="d-flex align-items-start small text-muted">
                        <svg className="text-danger me-2 flex-shrink-0" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginTop: '2px' }}>
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span><Link to="/pricing/deals">Learn More</Link></span>
                      </li>
                    </ul>
                    <Link to="/contact-us"><button className="btn btn-outline-dark w-100 rounded-pill">
                      Get started
                    </button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-5">
          <div className="container">
            <h2 className="fs-1 fw-normal mb-5 text-center">What students say</h2>

            <div className="row g-4 justify-content-center">
              <div className="col-md-4">
                <TestimonialCard
                  quote="The concepts were presented clearly and helped jog my memory."
                />
              </div>
              <div className="col-md-4">
                <TestimonialCard
                  quote="Really simplified the material."
                />
              </div>
              <div className="col-md-4">
                <TestimonialCard
                  quote="I really liked how he gave us an in depth explanation on everything we needed help with."
                />
              </div>
              <div className="col-md-4">
                <TestimonialCard
                  quote="We went over questions that I needed help with a lot."
                />
              </div>
              <div className="col-md-4">
                <TestimonialCard
                  quote="There wasn't really anything I didn't enjoy."
                />
              </div>
              <div className="col-md-4">
                <TestimonialCard
                  quote="It was at a really good pace! I finally get cross products!!"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-5 bg-light">
          <div className="container text-center">
            <div className="mx-auto" style={{ maxWidth: '32rem' }}>
              <h2 className="fs-1 fw-normal mb-3">Ready to get started?</h2>
              <p className="text-muted mb-4">
                Find the perfect tutor for your needs and start improving your grades today.
              </p>
              <Link to="/contact-us"><button className="btn btn-dark rounded-pill px-4 py-2">Find a tutor</button></Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default Home;