import ContentBlock from '../components/ContentBlock';
import TripleBlock from '../components/TripleBlock';
import styles from './pricing.module.scss';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Deals() {
    return (<>
        <ContentBlock mt='25' content={<h1 className='display-1 text-dark'>Deals & Discounts</h1>}/>
        <ContentBlock mt='10' content={<>
            <p className='border-top border-dark text-dark'></p>
            <h5 className='mt-5 text-dark'>UC Irvine Money Back Program</h5>
            <p className='mt-5 mb-3 text-dark'>We offer a money back guarantee program to UC Irvine students!</p>
            <p className='mt-5 mb-3 text-dark'>Students can have a hard time preparing for their exams, and want a<br />
            guarantee that they can get the results they want. We are offering this program<br />
            for UC Irvine students to help them pass their exams -- without the stress of losing their time and money!</p>
            <p className="mt-5 mb-3 text-dark">If students get below a passing grade on their exam (70% default), they <br />
            get their money 100% back if eligible following these rules below</p>
            <p className='border-top border-secondary'></p>
            <p className='mt-3 text-dark'>Some Rules:</p>
            <ul className="d-inline-block text-start text-dark">
                <li className="me-5">Students must have a target exam they are studying for (easy!)</li>
                <li className="me-5">If the exam is in over a month, students must do at least<br />
                3 (three) sessions with us to ensure quality and be eligible</li>
                <li className="me-5">If the exam is in 2 weeks or more, students must do at least<br />
                5 (five) sessions with us to ensure quality and be eligible</li>
                <li className="me-5">If the exam is in less than a week, students must do at least<br />
                8 (eight) sessions with us to ensure quality and be eligible</li>
            </ul>
        </>}/>
        <ContentBlock mt='20' mb='50' content={<>
            <h1 className='text-dark mb-4'>Ready to go? Let's get started!</h1>
            <Link to='/contact-us'><Button variant="outline-danger" size="lg">Sign Up</Button></Link>
        </>}/>
    </>);
}

export default Deals;