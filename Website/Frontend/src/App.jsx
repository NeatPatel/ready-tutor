import { HashRouter, Routes, Route } from 'react-router-dom';
import { Nbar as Navbar } from './components/Nbar.jsx';
import NotFound from './pages/NotFound.jsx';
import TermsConditions from './pages/TermsConditions.jsx';
import ContactUs from './pages/ContactUs.jsx';
import About from './pages/About.jsx';
import Pricing from './pages/Pricing.jsx';
import MeetTheTeam from './pages/MeetTheTeam.jsx';
import Careers from './pages/Careers.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="about" element={<About />} />
            <Route path="team" element={<MeetTheTeam />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="careers" element={<Careers />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-and-conditions" element={<TermsConditions />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
