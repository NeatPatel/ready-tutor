import styles from './finalreviewsessions.module.scss';

import ContentBlock from '../components/ContentBlock.jsx';
import { Table, Button } from 'react-bootstrap';
import { useSheetData } from '../hooks/useSheetData.js';

/*
    Update School Term every year

    sessionJSONList information format:

    {
        courseCode: the course code (Example: COMPSCI 161),
        courseDescription: brief course description (Example: Data Structures and Algorithms)
        finalReviewDate: final exam review date (Example: August 15th, 2035)
        finalReviewTime: final exam review time (Example: 5pm - 6pm)
        location: the location of the session (Example: Engineering Lecture Hall)
    }
*/

function FinalReviewSessions() {
    // Data processing function to handle virtual links in location field
    const processFinalsData = (data) => {
        return data.map(item => ({
            ...item,
            location: item.link && item.link.trim() !== '' 
                ? <a target="_blank" href={item.link}>{item.location}</a>
                : item.location
        }));
    };

    // Use the custom hook to fetch and process data
    const { data: finalsInfo, loading, error } = useSheetData("FinalReviewData", processFinalsData);

    return <>
        <ContentBlock mt='25' mb='0' content={<>
            <h1 className= "m-auto display-1 text-dark">Final Exam Review Sessions</h1>
            <p className= "m-auto text-dark">Below are FREE Final Examination Review Sessions Schedule at the University of California, Irvine (UCI) to be held to help students learn material better. For more information, contact <a href="mailto:readytutor01@gmail.com">readytutor01@gmail.com</a></p>
            <p className="m-auto text-dark mb-2">Register below for fast entrance to the session!</p>
            <p className="m-auto text-dark mb-2">NOTE: ALL listed courses below WILL BE OFFERED for the current school term</p>
            <a target="_blank" href="https://script.google.com/macros/s/AKfycbzGjj8UH5cpTGnFS2-vy1P7Kz0CAECXLmW_alkPr94tTWXTro_4W5jgNY2SYtZejmynCA/exec"><button className="btn btn-dark rounded-pill px-4 py-3 m-auto mb-5 d-inline-block">Register</button></a>
        </>}/>
        
        {loading ? (
            <p className="mt-5 text-dark m-auto text-center display-6">Loading final review sessions...</p>
        ) : error ? (
            <p className="mt-5 text-danger m-auto text-center display-6">Error loading sessions: {error}</p>
        ) : finalsInfo != null ? finalsInfo.length == 0 ? (
            <p className="mt-5 text-danger m-auto text-center display-6">No final review sessions for this school yet!</p>
        ) : (
            <div className="table-responsive">
                <Table className="m-auto text-center w-75" striped bordered hover variant="secondary">
                    <thead>
                        <tr>
                            <th>Course Code</th>
                            <th>Course Description</th>
                            <th>Final Review Session Date</th>
                            <th>Final Review Session Time</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {finalsInfo.map((item, index) => (
                            <tr key={index}>
                                <td>{item.courseCode}</td>
                                <td>{item.courseDescription}</td>
                                <td>{item.finalReviewDate}</td>
                                <td>{item.finalReviewTime}</td>
                                <td>{item.location}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        ) : (
            <p className="mt-5 text-danger m-auto text-center display-6">No final review sessions for this school yet!</p>
        )}
    </>;
}

export default FinalReviewSessions;
