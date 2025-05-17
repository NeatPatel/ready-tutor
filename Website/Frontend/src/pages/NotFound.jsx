import styles from './notfound.module.scss';
import ContentBlock from '../components/ContentBlock.jsx';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function NotFound() {
    return (<>
        <ContentBlock mt="25" mb="5" content={<h1 className="display-2 text-dark">Error 404: Page Not Found</h1>} />
        <ContentBlock mt="0" mb="50" content={<Link to="/"><Button variant="black">Back to Home</Button></Link>} />
    </>);
}

export default NotFound;