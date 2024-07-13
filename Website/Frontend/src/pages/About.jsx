import styles from './about.module.scss';
import {Card, ListGroup, Col, Row, ListGroupItem, Image} from 'react-bootstrap';
import SplitContentBlock from '../components/SplitContentBlock.jsx';
import waggImg from '../assets/wagg.jpg';

function About() {
    return (<>
        <h1 className= 'text-light text-center mt-2 text-light'>About Us</h1>
        <SplitContentBlock mt='25' mb='30' left={<h2 className= 'text-center m-auto text-light'>About</h2>} right={<p className= 'text-center m-auto text-light'>Some of the hardest things that people have to go through can be things such as academia itself. The world of learning is a tough place, and navigating it can sometimes lead to a lot of stress and anxiety.

Why navigate alone? Here at Ready Tutor, we are here to help you out on your academic journey and all problems that you facing, with examples and stories to help you learn and remember everything that you need!

</p>} />
        <SplitContentBlock mt='35' mb='30' left={<p className= 'text-center m-auto text-light'>From a High School Physics Club to a K-12 Virtual E-business, our business started as simple private tutoring, where the needs of students that could not understand course content were aided through our efforts.</p>} right={<h1 className= 'text-center m-auto text-light'>Our Story</h1>} />
        <SplitContentBlock mt='30' mb='25' left={<h2 className= 'text-center m-auto text-light'>Why Wait? Get a Free Consultation Today!</h2>} right={<Image src={waggImg} fluid />}/>
        </>);
}

export default About;