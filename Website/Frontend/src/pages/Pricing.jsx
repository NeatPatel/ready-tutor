import ContentBlock from '../components/ContentBlock';
import TripleBlock from '../components/TripleBlock';
import styles from './pricing.module.scss';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Pricing() {
    return (<>
        <ContentBlock mt='25' content={<h1 className='display-1 text-dark'>Pricing</h1>}/>
        <ContentBlock mt='5' content={<h2 className='text-dark'>We offer flexible options for you to choose from</h2>}/>
        <TripleBlock mt='20'
            left={<>
                <p className='border-top mb-5'></p>
                <p className='text-dark'><b>Money Back Guarantee</b></p>
                <h1 className='mt-2 mb-5 text-dark display-6'>$40/hour</h1>
                <p className='mt-5 mb-3 text-dark'>Pass your exams, or get your money 100% back!</p>
                <p className='border-top border-secondary'></p>
                <p className='mt-3 text-dark'><Link to="/pricing/deals">more information</Link></p>
                <p className='border-bottom mt-5'></p>
                </>}
            middle={<>
                <p className='border-top mb-5'></p>
                <p className='text-dark'>One on One</p>
                <h1 className='mt-2 mb-5 text-dark display-6'>$25/hour</h1>
                <p className='mt-5 mb-3 text-dark'>A personal tutoring session with customized help to optimize your experience!</p>
                <p className='border-top border-secondary'></p>
                <p className='mt-3 text-dark'>We provide a flat fee of $25 per hour to help high school or college students alike!</p>
                <p className='border-bottom mt-5'></p>
                </>}
            right={<>
                <p className='border-top mb-5'></p>
                <p className='text-dark'>Group Session</p>
                <h1 className='mt-2 mb-5 text-dark display-6'>{"<"}$20/hour</h1>
                <p className='mt-5 mb-3 text-dark'>Come with a group of 2 or more people for help in your subject matter today!</p>
                <p className='border-top border-secondary'></p>
                <p className='text-dark mt-3' style={{marginBottom: `${8}svh`}}>The more students, the cheaper the tutoring!</p>
                <p className='border-bottom mt-4'></p>
                </>}
        />
        <TripleBlock 
            left={<>
                <br/>
                <p className='text-dark'>Game Developer Bootcamp</p>
                <h1 className='mt-2 mb-5 text-dark display-6'>FREE</h1>
                <p className='mt-5 text-dark' style={{marginBottom: `${4}svh`}}>A 3 week virtual summer program for students of ALL ages</p>
                <p className='border-top border-secondary'></p>
                <p className='mt-3 text-dark'>Developer bootcamp teaches students how to develop multiplayer video games</p>
                <p className='mt-5'></p>
                </>}
            middle={<>
                <br/>
                <p className='text-dark'>Summer Python Bootcamp</p>
                <h1 className='mt-2 mb-5 text-dark display-6'>$400</h1>
                <p className='mt-5 mb-3 text-dark'>Introductory Python course for middle school and high school students!</p>
                <p className='border-top border-secondary'></p>
                <p className='mt-3 text-dark'>Students work in small groups, and learn to develop their first video games in Python!</p>
                <p className='mt-5'></p>
                </>}
            right={<>
                <br/>
                <p className='text-dark'>College Applications</p>
                <h1 className='mt-2 mb-5 text-dark display-6'>$500</h1>
                <p className='mt-5 mb-3 text-dark'>10 private hours of college application help for students to perfect their essays and applications</p>
                <p className='border-top border-secondary'></p>
                <p className='mt-3 text-dark' style={{marginBottom: `${8}svh`}}>One-on-one sessions only for college applications</p>
                <p className='mt-5'></p>
                </>}
        />
        <ContentBlock content={<>
            <p className='border-top border-dark text-dark'></p>
            <p className='mt-5 text-dark'>SAT Prep (New)</p>
            <h1 className='text-dark display-6 mt-2 mb-3'>$400</h1>
            <p className='mt-5 mb-3 text-dark'>A 5 week intensive summer program IN PERSON for 2 sessions a week</p>
            <p className='border-top border-secondary'></p>
            <p className='mt-3 text-dark'>Referring a friend to this program gets you a $100 discount!</p>
        </>}/>
        <ContentBlock mt='30' mb='50' content={<>
            <h1 className='text-dark mb-4'>Contact us today to get started!</h1>
            <Link to='/contact-us'><Button variant="outline-danger" size="lg">Sign Up</Button></Link>
        </>}/>
    </>);
}

export default Pricing;