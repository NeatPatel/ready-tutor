import { InlineWidget } from 'react-calendly';

import ContentBlock from '../components/ContentBlock';
import styles from './contactus.module.scss';

function ContactUs() {
    return (<>
        <ContentBlock mt='25' mb='0' content={<><h1 className= 'm-auto display-1 text-light'>Contact Us</h1><br/><p className='text-center text-light'>Thank you for your interest in Ready Tutor! We have <span className="text-info">multiple options below</span> for you to choose from for contact:</p></>}/>

        <ContentBlock mt="0" mb="0" content={<>
            <p className="text-light">Calendly not showing up? <a href="https://calendly.com/neetp287">Try this link instead</a></p>
            <InlineWidget styles={{height: "100svh", width: "75swh", margin: "auto"}} url="https://calendly.com/neetp287" />
            <hr style={{border: "3px solid #ffffff"}} />
            <p className="text-center text-light">OR try this:</p>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScbnkakgMsgrxi6WXvvhyRI09yvtmidQjLvRjq-X2QzbzqxvQ/viewform?embedded=true" className="m-auto" width="85%" height="500svh">Loading...</iframe>
        </>} />
    </>);
}

export default ContactUs;