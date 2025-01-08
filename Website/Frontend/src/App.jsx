import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import FloatButton from './components/FloatButton.jsx';
import { Nbar as Navbar } from './components/Nbar.jsx';

import NotFound from './pages/NotFound.jsx';
import TermsConditions from './pages/TermsConditions.jsx';
import ContactUs from './pages/ContactUs.jsx';
import About from './pages/About.jsx';
import Pricing from './pages/Pricing.jsx';
import MeetTheTeam from './pages/MeetTheTeam.jsx';
import Careers from './pages/Careers.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import Home from './pages/Home.jsx';
import Schools from './pages/Schools.jsx';
import UCI_school from './pages/UCI_school.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="about" element={<About />} />
            <Route path="team" element={<MeetTheTeam />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="careers" element={<Careers />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-and-conditions" element={<TermsConditions />} />
            <Route path="schools" element={<Schools />} />
            <Route path="uci-school" element={<UCI_school />} />
            <Route path="not-found" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/*<FloatButton content={<>
        <p className="text-end text-dark">Read our partner's blog!</p>
        <a target="_blank" href="https://www.modd.io/blog/introducing-partnership-with-readytutor/"><Button variant="outline-danger">Partner Blog</Button></a>
      </>} />*/}
    </>
  )
}

export default App
