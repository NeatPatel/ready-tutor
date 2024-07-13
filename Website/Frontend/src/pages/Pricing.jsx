import ContentBlock from '../components/ContentBlock';
import TripleBlock from '../components/TripleBlock';
import styles from './pricing.module.scss';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Pricing() {
    return (<>
        <ContentBlock mt='25' content={<h1 className='display-1 text-light'>Pricing</h1>}/>
        <ContentBlock mt='5' content={<h2 className='text-light'>We offer flexible options for you to choose from</h2>}/>
        <TripleBlock mt='10' 
            left={<>
                <p className='border-top mb-5'></p>
                <p className='text-light'>Free Group Hour</p>
                <h1 className='mt-2 mb-5 text-light display-6'>$0/1 hour</h1>
                <p className='mt-5 mb-3 text-light'>Come with a group of 2 or more people for help in your subject matter today, getting the first hour FREE!</p>
                <p className='border-top border-secondary'></p>
                <p className='mt-3 text-light'>Referring one-on-one friends gets you another free group hour!</p>
                <p className='border-bottom mt-5'></p>
                </>}
            middle={<>
                <p className='border-top mb-5'></p>
                <p className='text-light'>One on One</p>
                <h1 className='mt-2 mb-5 text-light display-6'>$25/hour</h1>
                <p className='mt-5 mb-3 text-light'>A personal tutoring session with customized help to optimize your experience!</p>
                <p className='border-top border-secondary'></p>
                <p className='mt-3 text-light'>We provide a flat fee of $25 per hour to help high school or college students alike!</p>
                <p className='border-bottom mt-5'></p>
                </>}
            right={<>
                <p className='border-top mb-5'></p>
                <p className='text-light'>Group Session</p>
                <h1 className='mt-2 mb-5 text-light display-6'>{"<"}$20/hour</h1>
                <p className='mt-5 mb-3 text-light'>Come with a group of 2 or more people for help in your subject matter today, getting the first hour FREE!</p>
                <p className='border-top border-secondary'></p>
                <p className='text-light mt-3' style={{marginBottom: `${8}svh`}}>Pay less with larger groups, pay is split!</p>
                <p className='border-bottom mt-4'></p>
                </>}
        />
        <TripleBlock 
            left={<>
                <br/>
                <p className='text-light'>Game Developer Bootcamp</p>
                <h1 className='mt-2 mb-5 text-light display-6'>FREE</h1>
                <p className='mt-5 text-light' style={{marginBottom: `${4}svh`}}>A 3 week virtual summer program for students of ALL ages</p>
                <p className='border-top border-secondary'></p>
                <p className='mt-3 text-light'>Developer bootcamp teaches students how to develop multiplayer video games</p>
                <p className='mt-5'></p>
                </>}
            middle={<>
                <br/>
                <p className='text-light'>Summer Python Bootcamp</p>
                <h1 className='mt-2 mb-5 text-light display-6'>$400</h1>
                <p className='mt-5 mb-3 text-light'>Introductory Python course for middle school and high school students!</p>
                <p className='border-top border-secondary'></p>
                <p className='mt-3 text-light'>Students work in small groups, and learn to develop their first video games in Python!</p>
                <p className='mt-5'></p>
                </>}
            right={<>
                <br/>
                <p className='text-light'>College Applications</p>
                <h1 className='mt-2 mb-5 text-light display-6'>$500</h1>
                <p className='mt-5 mb-3 text-light'>10 private hours of college application help for students to perfect their essays and applications</p>
                <p className='border-top border-secondary'></p>
                <p className='mt-3 text-light' style={{marginBottom: `${8}svh`}}>One-on-one sessions only for college applications</p>
                <p className='mt-5'></p>
                </>}
        />
        <ContentBlock content={<>
            <p className='border-top border-light text-light'></p>
            <p className='mt-5 text-light'>SAT Prep (New)</p>
            <h1 className='text-light display-6 mt-2 mb-3'>$400</h1>
            <p className='mt-5 mb-3 text-light'>A 5 week intensive summer program IN PERSON for 2 sessions a week</p>
            <p className='border-top border-secondary'></p>
            <p className='mt-3 text-light'>Referring a friend to this program gets you a $100 discount!</p>
        </>}/>
        <ContentBlock mt='3' content={<>
            <h1 className='text-light mb-4'>Contact us today to get started!</h1>
            <Link to='/contact-us'><Button variant="outline-info" size="lg">Sign Up</Button></Link>
        </>}/>
    </>);
}

export default Pricing;