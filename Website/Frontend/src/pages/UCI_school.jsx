import styles from './about.module.scss';
import {Card, ListGroup, Col, Row, ListGroupItem, Image, Button} from 'react-bootstrap';
import SplitContentBlock from '../components/SplitContentBlock.jsx';
import {Link} from 'react-router-dom';
import waggImg from '../assets/wagg.jpg';
import ContentBlock from '../components/ContentBlock.jsx';
import TripleBlock from '../components/TripleBlock.jsx';

function UCI_school() {
    return (<>
        <ContentBlock mt='25' content={<h1 className= 'display-1 text-dark text-center mt-2 text-dark'>Hello World</h1>}/>
        
        </>);
}

export default UCI_school;