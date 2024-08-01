import React, {useEffect} from "react";
import '../Styles/style.css';
import { useNavigate } from "react-router-dom";

export const NetflixLogo = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/profiles');
        }, 4000); // 4 seconds

        // Clean up the timer if the component unmounts before the timeout completes
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="logo-container">
            <span className="left"></span>
            <span className="center"></span>
            <span className="right"></span>
        </div>

    )
}

