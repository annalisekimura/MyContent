import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/skills.css';
import { useState } from "react";

import cImg from '../Pictures/c.png';
import cppImg from '../Pictures/cpp.png';
import javaImg from '../Pictures/java.png';
import jsImg from '../Pictures/js.png';
import pyImg from '../Pictures/py.png';
import rImg from '../Pictures/r.png';
import shImage from '../Pictures/sh.png';
import sqlImg from '../Pictures/sql.jpg';
import hardworkingImg from '../Pictures/hardworking.png';
import communicateImg from '../Pictures/communication.png';
import personableImg from '../Pictures/personable.png';
import fastImg from '../Pictures/fast.png';
import enthusiasticImg from '../Pictures/enthusiastic.png';
import conflictImg from '../Pictures/conflict.png';
import timeImg from '../Pictures/time.png';
import creativeImg from '../Pictures/creative.png';
import wordImg from '../Pictures/word.png';
import outlookImg from '../Pictures/outlook.png';
import excelImg from '../Pictures/excel.png';
import cyberImg from '../Pictures/cyber.png';
import powerpointImg from '../Pictures/powerpoint.png';
import htmlImg from '../Pictures/html.png';
import cssImg from '../Pictures/css.png';
import reactImg from '../Pictures/react.png';
import canvaImg from '../Pictures/canva.png';
import flaskImg from '../Pictures/flask.png';
import neoImg from '../Pictures/neo.png';
import mongoImg from '../Pictures/mongo.png';
import sqlite from '../Pictures/sqlite.png';
import mysql from '../Pictures/mysql.png';


const placeholders = [
    { src: cImg, className: 'image-c', title: 'C'},
    { src: cppImg, className: 'image-cpp', title: 'C++' },
    { src: javaImg, className: 'image-java', title: 'Java' },
    { src: jsImg, className: 'image-js', title: 'JavaScript' },
    { src: pyImg, className: 'image-py', title: 'Python' },
    { src: rImg, className: 'image-r', title: 'R' },
    { src: shImage, className: 'image-sh', title: 'Bash' },
    { src: sqlImg, className: 'image-sql', title: 'SQL' }
];

const softSkills = [
    { src: hardworkingImg, className: 'image-hardwork', title: 'Hardworking'},
    { src: communicateImg, className: 'image-communicate', title: 'Communication'},
    { src: personableImg, className: 'image-personable', title: 'Personable'},
    { src: fastImg, className: 'image-fast', title: 'Fast Learner'},
    { src: enthusiasticImg, className: 'image-enthusiastic', title: 'Enthusiastic'},
    { src: conflictImg, className: 'image-conflict', title: 'Conflict Resolution'},
    { src: timeImg, className: 'image-time', title: 'Time Management'},
    { src: creativeImg, className: 'image-creative', title: 'Creativity'}
]

const techSkills = [
    { src: wordImg, className: 'image-word', title: 'Microsoft Word'},
    { src: outlookImg, className: 'image-outlook', title: 'Microsoft Outlook'},
    { src: excelImg, className: 'image-excel', title: 'Excel'},
    { src: powerpointImg, className: 'image-powerpoint', title: 'Powerpoint'},
    { src: htmlImg, className: 'image-html', title: 'HTML'},
    { src: cssImg, className: 'image-css', title: 'CSS'},
    { src: cyberImg, className: 'image-cyber', title: 'Cybersecurity'},
    { src: reactImg, className: 'image-react', title: 'React'},
    { src: canvaImg, className: 'image-canva', title: 'Canva'},
    { src: flaskImg, className: 'image-flask', title: 'Flask'},
    { src: neoImg, className: 'image-neo', title: 'Neo4j'},
    { src: mongoImg, className: 'image-mongo', title: 'MongoDB'},
    { src: sqlite, className: 'image-sqlite', title: 'SQLite'},
    { src: mysql, className: 'image-mysql', title: 'MySQL'}

]

const Skills = () => {
    //arrows for languages
    const [showArrowLanguage, setShowArrowLanguage] = useState(true);
    const [scrollLanguageEnd, setScrollLanguageEnd] = useState(false);
    const [scrollLanguageBegin, setScrollLanguageBegin] = useState(false);
    const [showArrowLanguageBegin, setShowArrowLanguageBegin] = useState(false);

    //arows for skills
    const [showArrowSkill, setShowArrowSkill] = useState(true);
    const [scrollSkillEnd, setScrollSkillEnd] = useState(false);
    const [scrollSkillBegin, setScrollSkillBegin] = useState(false);
    const [showArrowSkillBegin, setShowArrowSkillBegin] = useState(false);


    // language scrolling
    const handleScrollLanguageRight = () => {
        const row = document.querySelector('.browse-row-language');

        row.scrollBy({ left: 160, behavior: 'smooth' }); // Scroll right by 200px
    };

    const handleScrollLanguageLeft = () => {
        const row = document.querySelector('.browse-row-language');
        row.scrollBy({ left: -160, behavior: 'smooth' }); // Scroll left by 200px
    };

    const handleScrollLanguageEnd = () => {
        const row = document.querySelector('.browse-row-language');
        const scrollLeft = row.scrollLeft;
        const scrollWidth = row.scrollWidth;
        const clientWidth = row.clientWidth;
        
        // Check if scrolled to end or start
        if (scrollLeft + clientWidth >= scrollWidth - 2) {
            setScrollLanguageEnd(true);
        } else {
            setScrollLanguageEnd(false);
        }
        setShowArrowLanguage(!scrollLanguageEnd);
    };

    const handleScrollLanguageBegin = () => {
        const row = document.querySelector('.browse-row-language');
        const scrollLeft = row.scrollLeft;
        if(scrollLeft <= 1) {
            setScrollLanguageBegin(true);
        } else {
            setScrollLanguageBegin(false);
        }
        setShowArrowLanguageBegin(!scrollLanguageBegin);
    };

    // skill scrolling
    const handleScrollSkillRight = () => {
        const row = document.querySelector('.browse-row-skill');

        row.scrollBy({ left: 160, behavior: 'smooth' }); // Scroll right by 200px
    };

    const handleScrollSkillLeft = () => {
        const row = document.querySelector('.browse-row-skill');
        row.scrollBy({ left: -160, behavior: 'smooth' }); // Scroll left by 200px
    };

    const handleScrollSkillEnd = () => {
        const row = document.querySelector('.browse-row-skill');
        const scrollLeft = row.scrollLeft;
        const scrollWidth = row.scrollWidth;
        const clientWidth = row.clientWidth;
        
        // Check if scrolled to end or start
        if (scrollLeft + clientWidth >= scrollWidth - 2) {
            setScrollSkillEnd(true);
        } else {
            setScrollSkillEnd(false);
        }
        setShowArrowSkill(!scrollSkillEnd);
    };

    const handleScrollSkillBegin = () => {
        const row = document.querySelector('.browse-row-skill');
        const scrollLeft = row.scrollLeft;
        if(scrollLeft <= 1) {
            setScrollSkillBegin(true);
        } else {
            setScrollSkillBegin(false);
        }
        setShowArrowSkillBegin(!scrollSkillBegin);
    };


    // handle when language scrolling happens
    useEffect(() => {
        const row = document.querySelector('.browse-row-language');
        row.addEventListener('scroll', handleScrollLanguageEnd);
        return () => {
            row.removeEventListener('scroll', handleScrollLanguageEnd);
        };
    }, [scrollLanguageEnd]);


    useEffect(() => {
        const row = document.querySelector('.browse-row-language');
        row.addEventListener('scroll', handleScrollLanguageBegin);
        return () => {
            row.removeEventListener('scroll', handleScrollLanguageBegin);
        };
    }, [scrollLanguageBegin]);

    // handle when skill scrolling happens
    useEffect(() => {
        const row = document.querySelector('.browse-row-skill');
        row.addEventListener('scroll', handleScrollSkillEnd);
        return () => {
            row.removeEventListener('scroll', handleScrollSkillEnd);
        };
    }, [scrollSkillEnd]);


    useEffect(() => {
        const row = document.querySelector('.browse-row-skill');
        row.addEventListener('scroll', handleScrollSkillBegin);
        return () => {
            row.removeEventListener('scroll', handleScrollSkillBegin);
        };
    }, [scrollSkillBegin]);



    return (
        <div className="entire">
        <div className="browse">
            <h2>Browse Languages</h2>
            {showArrowLanguageBegin && (
                <div className="scroll-indicator-language-begin" onClick={handleScrollLanguageLeft}>
                    &lt;
                </div>
            )}
            <div className="browse-row-language">
                {placeholders.map((placeholder, index) => (
                    <div key={index} className="placeholder-box">
                        <img
                            src={placeholder.src}
                            alt={`Placeholder ${index + 1}`}
                            className={`placeholder-image ${placeholder.className}`}
                        />
                        <div className={`overlay overlay-${index}`}>
                            <div className="text">{placeholder.title}</div>
                        </div>
                        
                    </div>
                    
                    
                ))}
            </div>

            {showArrowLanguage && (
                <div className="scroll-indicator-language-end" onClick={handleScrollLanguageRight}>
                    &gt;
                </div>
            )}
        </div>
        <div className="browse">
            <h2>Browse Soft Skills</h2>
            {showArrowSkillBegin && (
                <div className="scroll-indicator-skill-begin" onClick={handleScrollSkillLeft}>
                    &lt;
                </div>
            )}

            <div className="browse-row-skill">
                {softSkills.map((soft, index) => (
                    <div key={index} className="placeholder-box">
                        <img
                            src={soft.src}
                            alt={`Placeholder ${index + 1}`}
                            className={`placeholder-image ${soft.className}`}
                        />
                        <div className={`overlay overlay-${index}`}>
                            <div className="text">{soft.title}</div>
                        </div>
                        
                    </div>
                    
                    
                ))}
            </div>
            {showArrowSkill && (
                <div className="scroll-indicator-skill-end" onClick={handleScrollSkillRight}>
                    &gt;
                </div>
            )}

        </div>

        <div className="browse">
            <h2>Browse Technical Skills</h2>
            {showArrowSkillBegin && (
                <div className="scroll-indicator-skill-begin" onClick={handleScrollSkillLeft}>
                    &lt;
                </div>
            )}

            <div className="browse-row-skill">
                {techSkills.map((tech, index) => (
                    <div key={index} className="placeholder-box">
                        <img
                            src={tech.src}
                            alt={`Placeholder ${index + 1}`}
                            className={`placeholder-image ${tech.className}`}
                        />
                        <div className={`overlay overlay-${index}`}>
                            <div className="text">{tech.title}</div>
                        </div>
                        
                    </div>
                    
                    
                ))}
            </div>
            {showArrowSkill && (
                <div className="scroll-indicator-skill-end" onClick={handleScrollSkillRight}>
                    &gt;
                </div>
            )}

        </div>

        
        </div>
    
    )
}


export default Skills;