import { useEffect } from 'react';

import ContentBlock from '../components/ContentBlock';
import SplitContentBlock from '../components/SplitContentBlock';
import styles from './contactus.module.scss';

let didThisRun = false;

function ContactUs() {
    useEffect(() => {
        if(!didThisRun) {
            Calendly.initInlineWidget({ url: 'https://calendly.com/neetp287',
                parentElement: document.getElementById('calendly-embed')
                });
            
            didThisRun = true;
        }
    }, [])

    return (<>
        <ContentBlock mt='25' mb='10' content={<><h1 className= 'm-auto display-1 text-light'>Contact Us</h1><br/><p className='text-center text-light'>Thank you for your interest in Ready Tutor! You can set up a quick meeting or a one-one-one free consultation today with quick and easy calendar process!</p></>}/>

        <ContentBlock mt="0" mb="0" content={<>
            <p className="text-light">Calendly not showing up? <a href="https://calendly.com/neetp287">Try this link instead</a></p>
            <div id="calendly-embed" style={{maxHeight: "200vh", minWidth: "auto", height: "200vh"}}></div>
        </>} />
    </>);
}

export default ContactUs;