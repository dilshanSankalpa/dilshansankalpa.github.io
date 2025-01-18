import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "TypeScript",
    "JavaScript",
    "Java",
    "React",
    "Angular",
    "HTML5",
    "CSS3",
    "Express",
    "FastAPI",
    "SpringBoot",
    "SQL",
    "MongoDB",
    "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "Windows Server",
    "Jenkins",
    "Linux",
    "Stackstorm",
    "AWS",
    "Selenium",
];

const labelsThird = [
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Scikit-Learn",
    "TensorFlow",
    "OpenAI",
    "LangChain",
    "Copilot Studio",
    "Hugging Face",
    "Power BI",
    "MS SQL",
    "MS Excel",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>I have years practices in manual process automation and DevOps Automation which is from Automate testing to monitoring.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Data Science</h3>
                    <p>I have passion on data science due to this once I completed my bachelor degree I have joined for data science related Master's degree and joined for couple of freelancing projects.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;