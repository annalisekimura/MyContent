import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/education.css';

const Education = () => {
    const courses = [
        { className: 'CS180', title: 'Problem Solving and Object-Oriented Programming'},
        { className: 'CS182', title: 'Foundations of Computer Science'},
        { className: 'CS240', title: 'Programming in C'},
        { className: 'CS250', title: 'Computer Architecture'},
        { className: 'CS251', title: 'Data Structures and Algorithms'},
        { className: 'CS252', title: 'Systems Programming'},
        { className: 'CS307', title: 'Software Engineering I'},
        { className: 'CS361', title: 'Great Issues in Computer Science'},
        { className: 'CS355', title: 'Intro to Cryptography'},
        { className: 'CS354', title: 'Operating Systems'},
        { className: 'CS348', title: 'Information Systems'}
    ]

    const currentCourses = [
        { className: 'CS381', title: 'Introduction to the Analysis of Algorithms'},
        { className: 'CS426', title: 'Computer Security'}
    ]

    const additional = [
        { className: 'College', title: 'Purdue University- West Lafayette' },
        { className: 'Major', title: 'BS Computer Science' },
        { className: 'Track', title: 'Software Engineering' },
        { className: 'Track', title: 'Computer Security' },
        { className: 'Year Start', title: '2021' },
        { className: 'Expected Graduation', title: '2025' },
        { className: '2023 Summer Intern', title: 'USDA Computer Science Intern'}
    ]


    return (
        <div className="entire">
            <div className="browse-courses">
                <h2>Relevant Courses</h2>
                <div className="browse-row-course">
                    {courses.map((course, index) => (
                        <div key={index} className="placeholder-box-courses">
                            <p className={`placeholder-image-courses ${course.className}`}>{course.title}</p>
                            <div className={`overlay overlay-${index}`}>
                                <div className="text">{course.className}</div>
                            </div>
                        </div> 
                        
                    ))}
                </div>
            </div>

            <div className="browse-current">
                <h2>Current Courses</h2>
                <div className="browse-row-current">
                    {currentCourses.map((current, index) => (
                        <div key={index} className="placeholder-box-current">
                            <p className={`placeholder-image-courses ${current.className}`}>{current.title}</p>
                            <div className={`overlay overlay-${index}`}>
                                <div className="text">{current.className}</div>
                            </div>
                        </div> 
                        
                    ))}
                </div>
            </div>

            <div className="browse-more">
                <h2>More Info</h2>
                <div className="browse-row-more">
                    {additional.map((more, index) => (
                        <div key={index} className="placeholder-box-more">
                            <p className={`placeholder-image-more ${more.className}`}>{more.title}</p>
                            <div className={`overlay overlay-${index}`}>
                                <div className="text">{more.className}</div>
                            </div>
                        </div> 
                        
                    ))}
                </div>
            </div>

        </div>
    )

    
}


export default Education;