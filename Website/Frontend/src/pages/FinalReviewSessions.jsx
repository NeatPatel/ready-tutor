import styles from './finalreviewsessions.module.scss';

import ContentBlock from '../components/ContentBlock.jsx';
import { Table, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

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
    const [ finalsInfo, setFinalsInfo ] = useState(null);

    useEffect(() => {
        let sessionJSON = [];

        if(localStorage.getItem("school") == "university_california_irvine") {
            /*sessionJSON = [
                {
                    courseCode: "PHYSICS 7C",
                    courseDescription: "Classical Physics",
                    finalReviewDate: "March 17th, 2025",
                    finalReviewTime: "5pm - 6pm",
                    location: "ANTrepreneur Center"
                },
                {
                    courseCode: "PHYSICS 7D",
                    courseDescription: "Classical Physics",
                    finalReviewDate: "March 14th, 2025",
                    finalReviewTime: "5pm - 6pm",
                    location: "ANTrepreneur Center"
                },
                {
                    courseCode: "MATH 2A",
                    courseDescription: "Calculus I",
                    finalReviewDate: "March 7th, 2025",
                    finalReviewTime: "5pm - 6pm",
                    location: "ANTrepreneur Center"
                },
                {
                    courseCode: "MATH 2B",
                    courseDescription: "Calculus II",
                    finalReviewDate: "March 13th, 2025",
                    finalReviewTime: "5pm - 6pm",
                    location: "ANTrepreneur Center"
                },
                {
                    courseCode: "I&C SCI 31",
                    courseDescription: "Introduction to Programming",
                    finalReviewDate: "March 10th, 2025",
                    finalReviewTime: "5pm - 6pm",
                    location: "ANTrepreneur Center"
                },
                {
                    courseCode: "I&C SCI 32",
                    courseDescription: "Programming in Python",
                    finalReviewDate: "March 19th, 2025",
                    finalReviewTime: "5pm - 6pm",
                    location: "ANTrepreneur Center"
                },
                {
                    courseCode: "I&C SCI 33",
                    courseDescription: "Advanced Programming in Python",
                    finalReviewDate: "March 5th, 2025",
                    finalReviewTime: "5pm - 6pm",
                    location: "ANTrepreneur Center"
                },
                {
                    courseCode: "I&C SCI 45C",
                    courseDescription: "Programming with C/C++ as a Second Language",
                    finalReviewDate: "March 6th, 2025",
                    finalReviewTime: "5pm - 6pm",
                    location: "ANTrepreneur Center"
                },
                {
                    courseCode: "I&C SCI 46",
                    courseDescription: "Data Structures",
                    finalReviewDate: "March 11th, 2025",
                    finalReviewTime: "5pm - 6pm",
                    location: "ANTrepreneur Center"
                }
            ];*/
        } else {
            // Default is University of California, Irvine (UCI)
            sessionJSON = [
                {
                    courseCode: "PHYSICS 7C",
                    courseDescription: "Classical Physics",
                    finalReviewDate: "June 3rd, 2025",
                    finalReviewTime: "5pm - 6pm",
                    location: "ANTrepreneur Center"
                },
                {
                    courseCode: "PHYSICS 7D",
                    courseDescription: "Classical Physics",
                    finalReviewDate: "May 29th, 2025",
                    finalReviewTime: "3:30pm - 4:30pm",
                    location: "ANTrepreneur Center"
                },
                {
                    courseCode: "MATH 2A",
                    courseDescription: "Calculus I",
                    finalReviewDate: "June 2nd, 2025",
                    finalReviewTime: "5pm - 6pm",
                    location: "ANTrepreneur Center"
                },
                {
                    courseCode: "MATH 2B",
                    courseDescription: "Calculus II",
                    finalReviewDate: "June 4th",
                    finalReviewTime: "6pm - 7pm",
                    location: "ANTrepreneur Center"
                },
                {
                    courseCode: "MATH 2D",
                    courseDescription: "Multivariable Calculus I",
                    finalReviewDate: "May 30th, 2025",
                    finalReviewTime: "5pm - 6pm",
                    location: "ANTrepreneur Center"
                },
                {
                    courseCode: "MATH 3A",
                    courseDescription: "Linear Algebra",
                    finalReviewDate: "June 5th",
                    finalReviewTime: "5pm - 6pm",
                    location: "ANTrepreneur Center"
                },
                {
                    courseCode: "I&C SCI 31",
                    courseDescription: "Introduction to Programming",
                    finalReviewDate: "June 1st, 2025",
                    finalReviewTime: "5pm - 6pm",
                    location: <a target="_blank" href="https://meet.google.com/fcw-otor-ifq">Virtual, link here soon</a>
                },
                {
                    courseCode: "I&C SCI 32",
                    courseDescription: "Programming in Python",
                    finalReviewDate: "June 1st, 2025",
                    finalReviewTime: "5pm - 6pm",
                    location: <a target="_blank" href="https://meet.google.com/aup-spcm-ofi">Virtual, link here soon</a>
                },
                {
                    courseCode: "I&C SCI 33",
                    courseDescription: "Advanced Programming in Python",
                    finalReviewDate: "June 1st, 2025",
                    finalReviewTime: "6pm - 7pm",
                    location: <a target="_blank" href="https://meet.google.com/qgx-ccty-apg">Virtual, link here soon</a>
                },
                {
                    courseCode: "I&C SCI 45C",
                    courseDescription: "Programming with C/C++ as a Second Language",
                    finalReviewDate: "June 1st, 2025",
                    finalReviewTime: "5pm - 6pm",
                    location: <a target="_blank" href="https://meet.google.com/svo-wqek-peb">Virtual, link here soon</a>
                },
                {
                    courseCode: "I&C SCI 46",
                    courseDescription: "Data Structures",
                    finalReviewDate: "June 1st, 2025",
                    finalReviewTime: "2pm - 3pm",
                    location: <a target="_blank" href="https://meet.google.com/qeu-heig-zdh">Virtual, link here soon</a>
                },
                {
                    courseCode: "BIOSCI 99",
                    courseDescription: "Molecular Biology",
                    finalReviewDate: "June 6th, 2025",
                    finalReviewTime: "5pm - 6pm",
                    location: "ANTrepreneur Center"
                },
            ];
        }

        setFinalsInfo(sessionJSON);
    }, []);

    return <>
        <ContentBlock mt='25' mb='0' content={<>
            <h1 className= "m-auto display-1 text-dark">Final Exam Review Sessions</h1>
            <p className= "m-auto text-dark">Below are FREE Final Examination Review Sessions Schedule at the University of California, Irvine (UCI) to be held to help students learn material better. For more information, contact <a href="mailto:readytutor01@gmail.com">readytutor01@gmail.com</a></p>
            <p className="m-auto text-dark mb-2">Register below for fast entrance to the session!</p>
            <p className="m-auto text-dark mb-2">NOTE: ALL listed courses below WILL BE OFFERED for the current school term</p>
            <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScMiJ8LKHU15qR80KdD3SKPFfYjnX1zzuDYd7ww-rvkk8FHQg/viewform?usp=preview"><button className="btn btn-dark rounded-pill px-4 py-3 m-auto mb-5 d-inline-block">Register</button></a>
        </>}/>
        {finalsInfo != null ? finalsInfo.length == 0 ? <p className="mt-5 text-danger m-auto text-center display-6">No final review sessions for this school yet!</p> : <>
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
                        {finalsInfo.map((item) => {return(<>
                            <tr>
                                <td>{item.courseCode}</td>
                                <td>{item.courseDescription}</td>
                                <td>{item.finalReviewDate}</td>
                                <td>{item.finalReviewTime}</td>
                                <td>{item.location}</td>
                            </tr>
                        </>)})}
                    </tbody>
                </Table>
            </div>
        </> : <p className="mt-5 text-danger m-auto text-center display-6">No final review sessions for this school yet!</p>}
    </>;
}

export default FinalReviewSessions;
