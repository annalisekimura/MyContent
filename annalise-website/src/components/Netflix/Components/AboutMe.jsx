import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import hIndex from '../Pictures/aboutMe/hIndex.mp4';
import IDR from '../Pictures/aboutMe/insert-delete-random.mp4';
import candy from '../Pictures/aboutMe/candy.mp4';
import water from '../Pictures/aboutMe/water.mp4';
import '../Styles/me.css';

const AboutMe = () => {
    const leetcode = [
        { type: 'video', src: hIndex, title: 'hIndex', className: 'leetcode-hIndex' },
        { type: 'video', src: IDR, title: 'ins-del-ran', className: 'leetcode-IDR' },
        { type: 'video', src: candy, title: 'candy', className: 'leetcode-candy' },
        { type: 'video', src: water, title: 'water', className: 'leetcode-water' },
    ]

    const hobbies = [
        { title: 'Running'},
        { title: 'Crocheting'},
        { title: 'Cooking'},
        { title: 'Learning'},
        { title: 'Guitar'},
        { title: 'Coding'}

    ]

    const personal = [
        { className: 'Age', title: '21' },
        { className: 'Name', title: 'Annalise Kimura' },
        { className: 'Email', title: 'amkimura@purdue.edu' },
    ]



    return (
        <div className="entire">
            <div className="browse-leetcode">
                <h2>LeetCode</h2>

                <div className="browse-row-leetcode">
                    {leetcode.map((code, index) => (
                        <div key={index} className="placeholder-box-leetcode">
                            <video
                                src={code.src}
                                alt={`Placeholder ${index + 1}`}
                                className={`placeholder-image-leetcode ${code.className}`}
                                controls
                            />
                            
                            
                        </div>
                        
                    ))}
                </div>

            </div>
            <div className="browse-hobbies">
                <h2>Hobbies</h2>
                <div className="browse-row-hobbies">
                    {hobbies.map((hobbie, index) => (
                        <div key={index} className="placeholder-box-hobbies">
                            <p className={`placeholder-image-hobbies ${hobbie.className}`}>{hobbie.title}</p>
                            <div className={`overlay overlay-${index}`}>
                                <div className="text">{hobbie.className}</div>
                            </div>
                        </div> 
                        
                    ))}
                </div>
            </div>

            <div className="browse-personal">
                <h2>Personal</h2>
                <div className="browse-row-personal">
                    {personal.map((me, index) => (
                        <div key={index} className="placeholder-box-personal">
                            <p className={`placeholder-image-personal ${me.className}`}>{me.title}</p>
                            <div className={`overlay overlay-${index}`}>
                                <div className="text">{me.className}</div>
                            </div>
                        </div> 
                        
                    ))}
                </div>
            </div>
        </div>

    )
}


export default AboutMe;