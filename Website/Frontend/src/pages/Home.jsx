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
        <ContentBlock mt="25" mb="0" content={<h1 className="display-5 text-light">An educational <span className="text-info">experience</span><br /> like no other</h1>} />
        
        <ContentBlock mt="0" mb="0" content={<p className="text-light">
            Ready Tutor is a virtual educational service for K-12 and college students looking to <br />further their 
            educational experience right here, right now.</p>} />
        
        <ContentBlock mt="5" mb="25" content={<Link to="/pricing"><Button variant="outline-info" size="lg">Get Started</Button></Link>} />
        
        <ContentBlock mt="35" mb="25" content={<Image src={alex_cover} className="w-75 pe-none" alt="An educational experience like none other" fluid rounded />} />
        
        <ContentBlock mt="35" mb="0" content={<>
            <h2 className="display-4 text-light">⁕</h2>
            <h1 className="display-3 text-light">A <span className="text-info">virtual army</span> of tutors</h1>
            <p className="text-light">Our professional tutoring services range across a wide variety of subjects, <br />from electrodynamical physics to 18th century world history.</p>
        </>} />
        
        <TripleBlock mt="0" mb="0" left={<>
            <h1 className="text-start text-light">⁕</h1>
            <h5 className="text-start text-light mb-3">Supportive Environment</h5>
            <p className="text-start text-light">Come into a constant fostering and creative environment where student needs are our priority.</p>
        </>} middle={<>
            <h1 className="text-start text-light">⁕</h1>
            <h5 className="text-start text-light mb-3">Constant Feedback</h5>
            <p className="text-start text-light">Every question has meaning. Our tutors help students to find the meaning to all questions posed.</p>
        </>} right={<>
            <h1 className="text-start text-light">⁕</h1>
            <h5 className="text-start text-light mb-3">Independent Critical Thinking</h5>
            <p className="text-start text-light">Students working with our tutors will learn to critically think and dissect every aspect of their problems.</p>
        </>} />

        <TripleBlock mt="0" mb="25" left={<>
            <h1 className="text-start text-light">⁕</h1>
            <h5 className="text-start text-light mb-3">Consulting</h5>
            <p className="text-start text-light">We provide a free consultation to all students and parents looking for academic help.</p>
        </>} middle={<>
            <h1 className="text-start text-light">⁕</h1>
            <h5 className="text-start text-light mb-3">FREE Group Hour</h5>
            <p className="text-start text-light">We Provide one FREE hour to a group virtual study session, whether it be before a midterm or a final AP Exam Review!</p>
        </>} right={<>
            <h1 className="text-start text-light">⁕</h1>
            <h5 className="text-start text-light mb-3">Flexible Scheduling</h5>
            <p className="text-start text-light">We provide a flexible schedule that fits all students needs based on when they are most able to learn.</p>
        </>} />

        <ContentBlock mt="25" mb="10" content={<>
            <h1 className="display-1 text-light">⁕</h1>
            <h1 className="display-3 text-light">A Powerful Working <span className="text-info">Team</span></h1>
            <p className="text-light">Our team of tutors works together to ensure that every student understands<br />the toughest questions, no matter how challenging.</p>
        </>} />

        <SplitContentBlock mt="0" mb="10" left={<>
            <h1 className="text-start text-light">⁕</h1>
            <h1 className="text-start text-light">Virtual Tutoring</h1>
            <ul className="text-start text-light">
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
            <h1 className="text-end text-light">⁕</h1>
            <h1 className="text-end text-light">Get a FREE<br/>Group Hour today!</h1>
        </>} />

        <ContentBlock mt="0" mb="50" content={<>
            <h3 className="text-light">“Tutoring with Ready Tutor is an amazing challenging experience<br/>
            that I get to use to help students <span className="text-info">unlock their potential</span>”</h3>
            <Image className="mt-5 mb-3" src={jason_face} height="60vh" width="60vh" fluid roundedCircle />
            <p className="text-light">Jason<br/>Tutor, Ready Tutor</p>
        </>} />
    </>);
}

export default Home;