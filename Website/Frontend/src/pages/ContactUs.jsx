import ContentBlock from '../components/ContentBlock';
import SplitContentBlock from '../components/SplitContentBlock';
import styles from './contactus.module.scss';

function ContactUs() {
    return (<>
        <ContentBlock mt='25' mb='25' content={<><h1 className= 'm-auto display-1 text-light'>Contact Us</h1><br/><p className='text-center text-light'>Thank you for your interest in Ready Tutor! You can set up a quick meeting or a one-one-one free consultation today with quick and easy calendar process!</p></>}/>
    </>);
}

export default ContactUs;