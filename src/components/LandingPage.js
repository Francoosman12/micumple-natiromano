import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css';
import videoSource from '../assets/your-video.mp4';


const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <video className="background-video" autoPlay loop>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay">
        <button className="btn" onClick={() => navigate('/yendo')}>Yendo 👍</button>
        <button className="btn" onClick={() => navigate('/nopuedo')}>No puedo 😪</button>
      </div>
    </div>
  );
};

export default LandingPage;
