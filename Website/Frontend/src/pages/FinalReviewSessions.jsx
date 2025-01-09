import styles from './finalreviewsessions.module.scss';

import ContentBlock from '../components/ContentBlock.jsx';
import { Table } from 'react-bootstrap';
import { useState, useEffect } from 'react';

/*
    Update School Term every year

    sessionJSONList information format:

    {
        courseCode: the course code (Example: COMPSCI 161),
        courseDescription: brief course description (Example: Data Structures and Algorithms)
        finalReviewDate: final exam review date (Example: August 15th, 2035)
        location: the location of the session (Example: Engineering Lecture Hall)
    }
*/

function FinalReviewSessions() {
    const [ finalsInfo, setFinalsInfo ] = useState(null);

    useEffect(() => {
        let sessionJSON = [];

        if(localStorage.getItem("school") == "university_california_irvine") {
            sessionJSON = [
                {
                    courseCode: "PHYSICS 7C",
                    courseDescription: "Classical Physics",
                    finalReviewDate: "TBD",
                    location: "TBD"
                },
                {
                    courseCode: "PHYSICS 7D",
                    courseDescription: "Classical Physics",
                    finalReviewDate: "TBD",
                    location: "TBD"
                },
                {
                    courseCode: "MATH 2A",
                    courseDescription: "Calculus I",
                    finalReviewDate: "TBD",
                    location: "TBD"
                },
                {
                    courseCode: "MATH 2B",
                    courseDescription: "Calculus II",
                    finalReviewDate: "TBD",
                    location: "TBD"
                },
                {
                    courseCode: "I&C SCI 31",
                    courseDescription: "Introduction to Programming",
                    finalReviewDate: "TBD",
                    location: "TBD"
                },
                {
                    courseCode: "I&C SCI 32",
                    courseDescription: "Programming in Python",
                    finalReviewDate: "TBD",
                    location: "TBD"
                },
                {
                    courseCode: "I&C SCI 33",
                    courseDescription: "Advanced Programming in Python",
                    finalReviewDate: "TBD",
                    location: "TBD"
                },
                {
                    courseCode: "I&C SCI 45C",
                    courseDescription: "Programming with C/C++ as a Second Language",
                    finalReviewDate: "TBD",
                    location: "TBD"
                },
                {
                    courseCode: "I&C SCI 46",
                    courseDescription: "Data Structures",
                    finalReviewDate: "TBD",
                    location: "TBD"
                }
            ];
        } else {
            // Default is University of California, Irvine (UCI)
            sessionJSON = [
                {
                    courseCode: "PHYSICS 7C",
                    courseDescription: "Classical Physics",
                    finalReviewDate: "TBD",
                    location: "TBD"
                },
                {
                    courseCode: "PHYSICS 7D",
                    courseDescription: "Classical Physics",
                    finalReviewDate: "TBD",
                    location: "TBD"
                },
                {
                    courseCode: "MATH 2A",
                    courseDescription: "Calculus I",
                    finalReviewDate: "TBD",
                    location: "TBD"
                },
                {
                    courseCode: "MATH 2B",
                    courseDescription: "Calculus II",
                    finalReviewDate: "TBD",
                    location: "TBD"
                },
                {
                    courseCode: "I&C SCI 31",
                    courseDescription: "Introduction to Programming",
                    finalReviewDate: "TBD",
                    location: "TBD"
                },
                {
                    courseCode: "I&C SCI 32",
                    courseDescription: "Programming in Python",
                    finalReviewDate: "TBD",
                    location: "TBD"
                },
                {
                    courseCode: "I&C SCI 33",
                    courseDescription: "Advanced Programming in Python",
                    finalReviewDate: "TBD",
                    location: "TBD"
                },
                {
                    courseCode: "I&C SCI 45C",
                    courseDescription: "Programming with C/C++ as a Second Language",
                    finalReviewDate: "TBD",
                    location: "TBD"
                },
                {
                    courseCode: "I&C SCI 46",
                    courseDescription: "Data Structures",
                    finalReviewDate: "TBD",
                    location: "TBD"
                }
            ];
        }

        setFinalsInfo(sessionJSON);
    }, []);

    return <>
        <ContentBlock mt='25' mb='0' content={<>
            <h1 className= "m-auto display-1 text-dark mb-5">Final Exam Review Sessions</h1>
        </>}/>
        {finalsInfo != null ? finalsInfo.length == 0 ? <p className="mt-5 text-danger m-auto text-center display-6">No final review sessions for this school yet!</p> : <>
            <Table className="m-auto text-center w-75" striped bordered hover variant="secondary">
                <thead>
                    <tr>
                        <th>Course Code</th>
                        <th>Course Description</th>
                        <th>Final Review Session Date</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {finalsInfo.map((item) => {return(<>
                        <tr>
                            <td>{item.courseCode}</td>
                            <td>{item.courseDescription}</td>
                            <td>{item.finalReviewDate}</td>
                            <td>{item.location}</td>
                        </tr>
                    </>)})}
                </tbody>
            </Table>
        </> : <p className="mt-5 text-danger m-auto text-center display-6">No final review sessions for this school yet!</p>}
    </>;
}

export default FinalReviewSessions;
