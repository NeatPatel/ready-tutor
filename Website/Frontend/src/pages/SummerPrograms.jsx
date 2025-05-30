import styles from './summerprograms.module.scss';

import ContentBlock from '../components/ContentBlock.jsx';
import SplitContentBlock from '../components/SplitContentBlock.jsx';
import { Card, Button, Col } from 'react-bootstrap';

function SummerPrograms() {
    return (<>
        <ContentBlock mt='25' mb='0' content={<>
            <h1 className= "m-auto display-1 text-dark">Summer Programs</h1>
            <p className="m-auto text-dark mt-5">Ready Tutor is offering Summer programs for High School Students to be taught by UC Irvine and Emory University Students</p>
            <p className="m-auto text-dark mb-2">Students Learn about the basics of their career pathway, and strides to take to stay ahead of the career game</p>
        </>}/>

        <ContentBlock mt='0' mb='10' content={<>
            a
        </>} />

        <SplitContentBlock mt='0' mb='10' left={<>
            <Button variant="outline-light">
                <h2>Game Developer Bootcamp</h2>
                <p>A 3 week virtual summer program for students of ALL ages. Students work in groups to develop multiplayer video games</p>
                <button className="btn btn-dark rounded-pill px-4 py-3 m-auto mb-5 d-inline-block" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScMiJ8LKHU15qR80KdD3SKPFfYjnX1zzuDYd7ww-rvkk8FHQg/viewform?usp=preview">Learn More</button>
                <p>FREE!</p>
            </Button>
        </>} right={<>
            <Button variant="outline-light">
                <h2>Python Summer Bootcamp</h2>
                <p>Introductory Python course for middle school and high school students! Students work in small groups, and learn to develop their first video games in Python!</p>
                <button className="btn btn-dark rounded-pill px-4 py-3 m-auto mb-5 d-inline-block" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScMiJ8LKHU15qR80KdD3SKPFfYjnX1zzuDYd7ww-rvkk8FHQg/viewform?usp=preview">Learn More</button>
                <p>$400</p>
            </Button>
        </>} />
    </>);
}

export default SummerPrograms;