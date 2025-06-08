import { InlineWidget } from 'react-calendly';

import ContentBlock from '../components/ContentBlock';
import styles from './contactus.module.scss';

function ContactUs() {
    return (<>
        <ContentBlock mt='25' mb='0' content={<>
            <h1 className= 'm-auto display-1 text-dark'>Contact Us</h1>
            <br/>
            <p className='text-center text-dark'>Thank you for your interest in Ready Tutor! We have <span className="text-danger">multiple options below</span> for you to choose from for contact:</p>
        </>}/>

        {/* Calendly Section - Full width on mobile */}
        <div className="container-fluid px-0">
            <div className="row g-0">
                <div className="col-12">
                    <div className="px-3 px-md-4 px-lg-5 py-3">
                        <p className="text-dark mb-3">Calendly not showing up? <a target="_blank" href="https://calendly.com/neetp287">Try this link instead</a></p>
                    </div>
                    
                    {/* Calendly Widget - 100% width edge-to-edge on mobile */}
                    <div className="w-100">
                        <InlineWidget 
                            styles={{
                                height: "100svh", 
                                width: "100%", 
                                margin: "0",
                                border: "none"
                            }} 
                            url="https://calendly.com/neetp287" 
                        />
                    </div>
                    
                    <div className="px-3 px-md-4 px-lg-5 py-3">
                        <hr style={{border: "3px solid #ffffff"}} />
                        <p className="text-center text-dark">OR try this:</p>
                        <p className="text-dark">Google Form not showing up? <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScbnkakgMsgrxi6WXvvhyRI09yvtmidQjLvRjq-X2QzbzqxvQ/viewform?embedded=true">Try this link instead</a></p>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Google Form - Edge to edge on mobile */}
        <div className="container-fluid px-0">
            <div className="row g-0">
                <div className="col-12">
                    <iframe 
                        src="https://docs.google.com/forms/d/e/1FAIpQLScbnkakgMsgrxi6WXvvhyRI09yvtmidQjLvRjq-X2QzbzqxvQ/viewform?embedded=true" 
                        className="w-100 border-0" 
                        style={{minHeight: "500px", height: "70vh"}}
                        title="Contact Form"
                    >
                        Loading...
                    </iframe>
                </div>
            </div>
        </div>
    </>);
}

export default ContactUs;