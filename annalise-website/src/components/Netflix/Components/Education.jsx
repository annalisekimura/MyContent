import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/education.css';
import { useState } from "react";

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

    // arrows for courses
    const [showArrowCourses, setShowArrowCourses] = useState(true);
    const [scrollCoursesEnd, setScrollCoursesEnd] = useState(false);
    const [scrollCoursesBegin, setScrollCoursesBegin] = useState(false);
    const [showArrowCoursesBegin, setShowArrowCoursesBegin] = useState(false);

    // arrows for more
    const [showArrowMore, setShowArrowMore] = useState(true);
    const [scrollMoreEnd, setScrollMoreEnd] = useState(false);
    const [scrollMoreBegin, setScrollMoreBegin] = useState(false);
    const [showArrowMoreBegin, setShowArrowMoreBegin] = useState(false);

    // course scrolling
    const handleScrollCoursesRight = () => {
        const row = document.querySelector('.browse-row-courses');

        row.scrollBy({ left: 160, behavior: 'smooth' }); // Scroll right by 200px
    };

    const handleScrollCoursesLeft = () => {
        const row = document.querySelector('.browse-row-courses');
        row.scrollBy({ left: -160, behavior: 'smooth' }); // Scroll left by 200px
    };

    const handleScrollCoursesEnd = () => {
        const row = document.querySelector('.browse-row-courses');
        const scrollLeft = row.scrollLeft;
        const scrollWidth = row.scrollWidth;
        const clientWidth = row.clientWidth;
        
        // Check if scrolled to end or start
        if (scrollLeft + clientWidth >= scrollWidth - 2) {
            setScrollCoursesEnd(true);
        } else {
            setScrollCoursesEnd(false);
        }
        setShowArrowCourses(!scrollCoursesEnd);
    };

    const handleScrollCoursesBegin = () => {
        const row = document.querySelector('.browse-row-courses');
        const scrollLeft = row.scrollLeft;
        if(scrollLeft <= 1) {
            setScrollCoursesBegin(true);
        } else {
            setScrollCoursesBegin(false);
        }
        setShowArrowCoursesBegin(!scrollCoursesBegin);
    };

    // handle when course scrolling happens
    useEffect(() => {
        const row = document.querySelector('.browse-row-courses');
        row.addEventListener('scroll', handleScrollCoursesEnd);
        return () => {
            row.removeEventListener('scroll', handleScrollCoursesEnd);
        };
    }, [scrollCoursesEnd]);


    useEffect(() => {
        const row = document.querySelector('.browse-row-courses');
        row.addEventListener('scroll', handleScrollCoursesBegin);
        return () => {
            row.removeEventListener('scroll', handleScrollCoursesBegin);
        };
    }, [scrollCoursesBegin]);


    // more info scrolling
    const handleScrollMoreRight = () => {
        const row = document.querySelector('.browse-row-more');

        row.scrollBy({ left: 160, behavior: 'smooth' }); // Scroll right by 200px
    };

    const handleScrollMoreLeft = () => {
        const row = document.querySelector('.browse-row-more');
        row.scrollBy({ left: -160, behavior: 'smooth' }); // Scroll left by 200px
    };

    const handleScrollMoreEnd = () => {
        const row = document.querySelector('.browse-row-more');
        const scrollLeft = row.scrollLeft;
        const scrollWidth = row.scrollWidth;
        const clientWidth = row.clientWidth;
        
        // Check if scrolled to end or start
        if (scrollLeft + clientWidth >= scrollWidth - 2) {
            setScrollMoreEnd(true);
        } else {
            setScrollMoreEnd(false);
        }
        setShowArrowMore(!scrollMoreEnd);
    };

    const handleScrollMoreBegin = () => {
        const row = document.querySelector('.browse-row-more');
        const scrollLeft = row.scrollLeft;
        if(scrollLeft <= 1) {
            setScrollMoreBegin(true);
        } else {
            setScrollMoreBegin(false);
        }
        setShowArrowMoreBegin(!scrollMoreBegin);
    };

    // handle when tree scrolling happens
    useEffect(() => {
        const row = document.querySelector('.browse-row-more');
        row.addEventListener('scroll', handleScrollMoreEnd);
        return () => {
            row.removeEventListener('scroll', handleScrollMoreEnd);
        };
    }, [scrollMoreEnd]);


    useEffect(() => {
        const row = document.querySelector('.browse-row-more');
        row.addEventListener('scroll', handleScrollMoreBegin);
        return () => {
            row.removeEventListener('scroll', handleScrollMoreBegin);
        };
    }, [scrollMoreBegin]);


    return (
        <div className="entire">
            <div className="browse-courses">
                <h2>Relevant Courses</h2>
                {showArrowCoursesBegin && (
                    <div className="scroll-indicator-courses-begin" onClick={handleScrollCoursesLeft}>
                        &lt;
                    </div>
                )}
                <div className="browse-row-courses">
                    {courses.map((course, index) => (
                        <div key={index} className="placeholder-box-courses">
                            <p className={`placeholder-image-courses ${course.className}`}>{course.title}</p>
                            <div className={`overlay overlay-${index}`}>
                                <div className="text">{course.className}</div>
                            </div>
                        </div> 
                        
                    ))}
                </div>
                {showArrowCourses && (
                    <div className="scroll-indicator-courses-end" onClick={handleScrollCoursesRight}>
                        &gt;
                    </div>
                )}
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
                {showArrowMoreBegin && (
                    <div className="scroll-indicator-more-begin" onClick={handleScrollMoreLeft}>
                        &lt;
                    </div>
                )}
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
                {showArrowMore && (
                    <div className="scroll-indicator-more-end" onClick={handleScrollMoreRight}>
                        &gt;
                    </div>
                )}
            </div>

        </div>
    )

    
}


export default Education;