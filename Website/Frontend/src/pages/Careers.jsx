import styles from './careers.module.scss';

import { Button } from 'react-bootstrap';

import ContentBlock from '../components/ContentBlock.jsx';
import SplitContentBlock from '../components/SplitContentBlock.jsx';

function Careers() {
    return (<>
        <ContentBlock mt="25" mb="10" content={<>
            <h1 className="display-2 text-dark">Careers</h1>
        </>} />

        <SplitContentBlock mt="0" mb="50" left={<>
            <h1 className="display-4 text-dark">Careers with Ready Tutor</h1>
        </>} right={<>
            <p className="text-start text-dark">Are you an academic interested in working with our tutoring team? Look no further, because now you can apply to us today! We will get back to you with further questions as we move forward.</p>
            <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfP6BYptT5MpeVt3sGCzhQgn0457NerODAfqJRGM6dqbbDq0w/viewform"><Button variant="outline-danger">Apply</Button></a>
        </>} />
    </>);
}

export default Careers;