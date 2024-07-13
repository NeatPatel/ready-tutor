import styles from './home.module.scss';
import ContentBlock from '../components/ContentBlock.jsx';
import { Button } from 'react-bootstrap';
import img from '../assets/logo.png'

function Home() {
    return (<>
        <ContentBlock mt="25" mb="25" content={<h1 className="text-light">An educational experience like none other</h1>} />
        <ContentBlock mt="25" mb="25" content={<Button variant="outline-info">An educational experience like none other</Button>} />
        <ContentBlock mt="25" mb="25" content={<img src={img} alt="An educational experience like none other" width="200vh" height="auto" />} />
    </>);
}

export default Home;