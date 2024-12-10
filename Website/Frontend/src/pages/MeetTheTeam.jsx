import styles from './meettheteam.module.scss';

import ContentBlock from '../components/ContentBlock.jsx';
import SplitContentBlock from '../components/SplitContentBlock.jsx';
import TripleBlock from '../components/TripleBlock.jsx';

import { Image } from 'react-bootstrap';

import neet from '../assets/neet.jpg';
import kalena from '../assets/kalena.webp';
import jason from '../assets/jason_face.png';
import alex from '../assets/alex_face.jpg';
import sebastian_bermudez from '../assets/sebastian_bermudez.jpg';
import ronak from '../assets/ronak.webp';

function MeetTheTeam() {
    return (<>
        <ContentBlock mt="25" mb="0" content={<>
            <h1 className="display-2 text-dark">Meet The Team</h1>
        </>} />

        <SplitContentBlock mt="10" mb="0" left={<>
            <h1 className="display-6 text-dark">About The Team</h1>
        </>} right={<>
            <p className="text-start text-dark">
            Our tutoring team consists of many hard working individuals who have come as far as getting into prestigious 4 year universities, and not only working as tutors, but as time managing student-teachers.</p>
        </>} />

        <TripleBlock mt="15" mb="0" left={<>
            <Image src={alex} fluid />
            <p className="text-dark">Alex is a current tutor for ReadyTutor studying at UC Irvine. He’s majoring in PharmSci and has excelled in college level physics and chemistry.</p>
        </>} middle={<>
            <Image src={kalena} fluid />
            <p className="text-dark">Kalena is a current tutor for Ready Tutor. She is a Chemical Engineering and Applied Mathematics Major.</p>
        </>} right={<>
            <Image src={neet} fluid />
            <p className="text-dark">Neet is the founder of Ready Tutor and is currently a Computer Science and Electrical Engineering student at UC Irvine</p>
        </>} />

        <TripleBlock mt="15" mb="5" left={<>
            <Image src={jason} fluid />
            <p className="text-dark">Jason is a current tutor for Ready Tutor. He is a Computer Game Design and Computer Science double major student at UC Irvine, excelling at math, science, physics, and more!</p>
        </>} middle={<>
            <Image src={sebastian_bermudez} fluid />
            <p className="text-dark">Sebastian is a current tutor for ReadyTutor studying at UC Davis. He’s majoring in Mathematical Operations and education.</p>
        </>} right={<>
            <Image src={ronak} fluid />
            <p className="text-dark">Ronak is a current tutor for ReadyTutor and is currently a student at Canyon High School. He is leaning toward an engineering major and is passionate about math and physics!</p>
        </>} />
    </>);
}

export default MeetTheTeam;