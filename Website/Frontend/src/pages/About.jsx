import styles from './about.module.scss';
import {Card, ListGroup, Col, Row, ListGroupItem} from 'react-bootstrap';
import SplitContentBlock from '../components/SplitContentBlock.jsx';

function About() {
    return (<>
        <h1 className= 'text-dark text-center mt-2'>About Us</h1>
        <SplitContentBlock left={<h1 className= 'text-center'>About</h1>} right={<p className= 'text-center'>Some of the hardest things that people have to go through can be things such as academia itself. The world of learning is a tough place, and navigating it can sometimes lead to a lot of stress and anxiety.

Why navigate alone? Here at Ready Tutor, we are here to help you out on your academic journey and all problems that you facing, with examples and stories to help you learn and remember everything that you need!

</p>} />
        <SplitContentBlock left={<p className= 'text-center'>From a High School Physics Club to a K-12 Virtual E-business, our business started as simple private tutoring, where the needs of students that could not understand course content were aided through our efforts.</p>} right={<h1 className= 'text-center'>Our Story</h1>} />
    </>);
}

export default About;