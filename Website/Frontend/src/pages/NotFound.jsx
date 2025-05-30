import styles from './notfound.module.scss';
import ContentBlock from '../components/ContentBlock.jsx';
import { Link } from 'react-router-dom';

function NotFound() {
    return (<>
        <ContentBlock mt="25" mb="0" content={<h1 className="display-1 text-dark">404 Page Not Found</h1>} />
        <ContentBlock mt="0" mb="50" content={<Link to="/"><button className="btn btn-dark rounded-pill px-4 py-3">Back to Home</button></Link>} />
    </>);
}

export default NotFound;