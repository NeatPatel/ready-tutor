import styles from './summerprograms.module.scss';

import ContentBlock from '../components/ContentBlock.jsx';
import SplitContentBlock from '../components/SplitContentBlock.jsx';
import { Card, Button } from 'react-bootstrap';

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
                <Card className="px-3">
                    <p className="m-auto text-dark mt-5 mb-3">Computer Science Readiness Program</p>
                    <Button variant="black" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScMiJ8LKHU15qR80KdD3SKPFfYjnX1zzuDYd7ww-rvkk8FHQg/viewform?usp=preview" className="m-auto mb-5 d-inline-block">Learn More</Button>
                </Card>
            </Button>
        </>} right={<>
            <Button variant="outline-light">
                <Card className="px-3">
                    <p className="m-auto text-dark mt-5 mb-3">Pre-Medical Readiness Program</p>
                    <Button variant="black" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScMiJ8LKHU15qR80KdD3SKPFfYjnX1zzuDYd7ww-rvkk8FHQg/viewform?usp=preview" className="m-auto mb-5 d-inline-block">Learn More</Button>
                </Card>
            </Button>
        </>} />
    </>);
}

export default SummerPrograms;