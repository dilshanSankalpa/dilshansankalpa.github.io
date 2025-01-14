import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
            <a href="https://github.com/dilshanSankalpa" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/dilshan-sankalpa-dissanayake/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:dilshansankalpa98@gmail.com" target="_blank" rel="noreferrer"><MailIcon/></a>
      </div>
      <p>Thanks for designing this template <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Yuji Sato</a> 🙏🏼 </p>
    </footer>
  );
}

export default Footer;