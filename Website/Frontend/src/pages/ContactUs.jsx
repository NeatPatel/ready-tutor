import { useLocation } from 'react-router-dom';
import { InlineWidget } from 'react-calendly';

import ContentBlock from '../components/ContentBlock';
import styles from './contactus.module.scss';

let didThisRun = false;

function ContactUs() {
    const { pathName } = useLocation();

    return (<>
        <ContentBlock mt='25' mb='0' content={<><h1 className= 'm-auto display-1 text-light'>Contact Us</h1><br/><p className='text-center text-light'>Thank you for your interest in Ready Tutor! You can set up a quick meeting or a one-on-one free consultation today with quick and easy calendar process!</p></>}/>

        <ContentBlock mt="0" mb="0" content={<>
            <p className="text-light">Calendly not showing up? <a href="https://calendly.com/neetp287">Try this link instead</a></p>
            <InlineWidget url="https://calendly.com/neetp287" />
        </>} />
    </>);
}

export default ContactUs;