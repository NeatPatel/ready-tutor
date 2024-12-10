import styles from './home.module.scss';

import ContentBlock from '../components/ContentBlock.jsx';
import SplitContentBlock from '../components/SplitContentBlock.jsx';
import TripleBlock from '../components/TripleBlock.jsx';

import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import alex_cover from '../assets/alex.png';
import jack_cover from '../assets/jack.jpg';
import jason_cover from '../assets/jason.jpg';
import jason_face from '../assets/jason_face.png';

function Home() {
    return (<>
        <ContentBlock mt="25" mb="0" content={<h1 className="display-5 text-dark">An educational <span className="text-danger">experience</span><br /> like no other</h1>} />
        
        <ContentBlock mt="0" mb="0" content={<p className="text-dark">
            Ready Tutor is a virtual educational service for K-12 and college students looking to <br />further their 
            educational experience right here, right now.</p>} />
        
        <ContentBlock mt="5" mb="25" content={<Link to="/pricing"><Button variant="outline-danger" size="lg">Get Started</Button></Link>} />
        
        <ContentBlock mt="35" mb="25" content={<Image src={alex_cover} className="w-75 pe-none" alt="Ready Tutor" fluid rounded />} />
        
        <ContentBlock mt="35" mb="0" content={<>
            <h2 className="display-4 text-dark">⁕</h2>
            <h1 className="display-3 text-dark">A <span className="text-danger">virtual army</span> of tutors</h1>
            <p className="text-dark">Our professional tutoring services range across a wide variety of subjects, <br />from electrodynamical physics to 18th century world history.</p>
        </>} />
        
        <TripleBlock mt="0" mb="0" left={<>
            <h1 className="text-start text-dark">⁕</h1>
            <h5 className="text-start text-dark mb-3">Supportive Environment</h5>
            <p className="text-start text-dark">Come into a constant fostering and creative environment where student needs are our priority.</p>
        </>} middle={<>
            <h1 className="text-start text-dark">⁕</h1>
            <h5 className="text-start text-dark mb-3">Constant Feedback</h5>
            <p className="text-start text-dark">Every question has meaning. Our tutors help students to find the meaning to all questions posed.</p>
        </>} right={<>
            <h1 className="text-start text-dark">⁕</h1>
            <h5 className="text-start text-dark mb-3">Independent Critical Thinking</h5>
            <p className="text-start text-dark">Students working with our tutors will learn to critically think and dissect every aspect of their problems.</p>
        </>} />

        <TripleBlock mt="0" mb="25" left={<>
            <h1 className="text-start text-dark">⁕</h1>
            <h5 className="text-start text-dark mb-3">Consulting</h5>
            <p className="text-start text-dark">We provide a free consultation to all students and parents looking for academic help.</p>
        </>} middle={<>
            <h1 className="text-start text-dark">⁕</h1>
            <h5 className="text-start text-dark mb-3">FREE Group Hour</h5>
            <p className="text-start text-dark">We Provide one FREE hour to a group virtual study session, whether it be before a midterm or a final AP Exam Review!</p>
        </>} right={<>
            <h1 className="text-start text-dark">⁕</h1>
            <h5 className="text-start text-dark mb-3">Flexible Scheduling</h5>
            <p className="text-start text-dark">We provide a flexible schedule that fits all students needs based on when they are most able to learn.</p>
        </>} />

        <ContentBlock mt="25" mb="10" content={<>
            <h1 className="display-1 text-dark">⁕</h1>
            <h1 className="display-3 text-dark">A Powerful Working <span className="text-danger">Team</span></h1>
            <p className="text-dark">Our team of tutors works together to ensure that every student understands<br />the toughest questions, no matter how challenging.</p>
        </>} />

        <SplitContentBlock mt="0" mb="10" left={<>
            <h1 className="text-start text-dark">⁕</h1>
            <h1 className="text-start text-dark">Virtual Tutoring</h1>
            <ul className="text-start text-dark">
                <li>Flexible tutoring sessions.</li>
                <li>Understand course content.</li>
                <li >Interactive and memorable.</li>
            </ul>
        </>} right={<>
            <Image src={jack_cover} alt="Cover Image" fluid rounded />
        </>} />

        <SplitContentBlock mt="0" mb="50" left={<>
            <Image src={jason_cover} alt="Cover Image" fluid rounded />
        </>} right={<>
            <h1 className="text-end text-dark">⁕</h1>
            <h1 className="text-end text-dark">Get a FREE<br/>Group Hour today!</h1>
        </>} />

        <ContentBlock mt="0" mb="50" content={<>
            <h3 className="text-dark"><i>“Tutoring with Ready Tutor is an amazing challenging experience<br/>
            that I get to use to help students <span className="text-danger">unlock their potential</span>”</i></h3>
            <Image className="mt-5 mb-3" src={jason_face} height="60vh" width="60vh" fluid roundedCircle />
            <p className="text-dark">Jason<br/>Tutor, Ready Tutor</p>
        </>} />

        <ContentBlock mt="0" mb="50" content={<>
            <h1 className="display-2 text-dark">Join Us Today</h1>
            <p className="text-dark">We Provide a Free Consultation to answer all your questions,<br/>
            or get started with a FREE group session!</p>
            <Link to="/contact-us"><Button variant="outline-danger">Sign Up</Button></Link>
        </>} />
    </>);
}

export default Home;