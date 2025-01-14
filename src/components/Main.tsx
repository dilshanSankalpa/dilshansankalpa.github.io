import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import '../assets/styles/Main.scss';
import avatar from '../assets/images/avatar.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/dilshanSankalpa" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/dilshan-sankalpa-dissanayake/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:dilshansankalpa98@gmail.com" target="_blank" rel="noreferrer"><MailIcon/></a>
          </div>
          <h1>Dilshan Sankalpa</h1>
          <p>Software Engineer | DevOps Engineer | Data scientist</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/dilshanSankalpa" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/dilshan-sankalpa-dissanayake/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:dilshansankalpa98@gmail.com" target="_blank" rel="noreferrer"><MailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;