import styles from './home.module.scss';
import ContentBlock from '../components/ContentBlock.jsx';
import { Button } from 'react-bootstrap';
import img from '../assets/logo.png'

function Home() {
    return (<>
        <ContentBlock mt="25" mb="0" content={<h1 className="display-5 text-light">An educational <span className="text-info">experience</span><br /> like no other</h1>} />
        <ContentBlock mt="0" mb="25" content={<p className="text-light">
            Ready Tutor is a virtual educational service for K-12 and college students looking to <br />further their 
            educational experience right here, right now.</p>} />
        <ContentBlock mt="25" mb="25" content={<Button variant="outline-info">An educational experience like none other</Button>} />
        <ContentBlock mt="25" mb="25" content={<img src={img} alt="An educational experience like none other" width="200vh" height="auto" />} />
    </>);
}

export default Home;