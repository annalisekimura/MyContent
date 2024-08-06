import React from 'react';
import '../Styles/profiles.css';
import { useNavigate } from 'react-router-dom';
import purdue from '../Pictures/purdue-logo.png';
import codeImg from '../Pictures/skills.jpg';
import gitImg from '../Pictures/github.jpeg';
import me from '../Pictures/me.png';


const profiles = [
    { id: 1, name: 'Projects', image: gitImg },
    { id: 2, name: 'Skills', image: codeImg },
    { id: 3, name: 'Education', image: purdue },
    { id: 4, name: 'About Me', image: me }
];

const Profiles = () => {
    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`/profiles/${id}`);
    }

    return (
        <div className="profile-container">
            {profiles.map(profile => (
                <div key={profile.id} className="profile-box" onClick={() => handleClick(profile.id)}>
                    <img src={profile.image} alt={profile.name} className="profile-image" />
                    <span className="profile-name">{profile.name}</span>
                </div>
            ))}
        </div>
    );
};

export default Profiles;