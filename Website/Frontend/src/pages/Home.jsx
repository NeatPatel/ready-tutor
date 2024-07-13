import styles from './home.module.scss';
import ContentBlock from '../components/ContentBlock.jsx';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import alex_cover from '../assets/alex.png';

function Home() {
    return (<>
        <ContentBlock mt="25" mb="0" content={<h1 className="display-5 text-light">An educational <span className="text-info">experience</span><br /> like no other</h1>} />
        <ContentBlock mt="0" mb="0" content={<p className="text-light">
            Ready Tutor is a virtual educational service for K-12 and college students looking to <br />further their 
            educational experience right here, right now.</p>} />
        <ContentBlock mt="5" mb="25" content={<Link to="/pricing"><Button variant="outline-info" size="lg">Get Started</Button></Link>} />
        <ContentBlock mt="20" mb="25" content={<Image src={alex_cover} alt="An educational experience like none other" fluid rounded />} />
        <ContentBlock mt="25" mb="25" content={<>
            <h2 className="display-5 text-light">⁕</h2>
            <h1 className="display-4 text-light">A <span className="text-info">virtual army</span> of tutors</h1>
            <p className="text-light">Our professional tutoring services range across a wide variety of subjects, <br />from electrodynamical physics to 18th century world history.</p>
        </>} />
    </>);
}

export default Home;