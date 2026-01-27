import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2025 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Sitecore - Search, Dataplatform</h4>
            <p>
              I am responsible for maintaining and contributing to an intelligent search system designed to power search functionality within e-commerce platforms and content applications. My role encompasses software engineering, data engineering and DevOps responsibilities to ensure the system's reliability, scalability, and performance.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2023 - 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Wiley, Service Automation</h4>
            <p>
              I could save numerous hours of manual work by automating the process with the innovations. We have used Python, TS, Jenkins, Power Automate, Angular, Express, Java, Go, Stackstorm , Zabbix, Dynatrace, and Splunk and more.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Asc Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Wiley, Service Automation</h4>
            <p>
              I have been working on the automation of the manual work that the team was doing. I have used Python, TS, Jenkins, Power Automate, Angular, Express, Java, Go, Stackstorm , ServiceNow , BigPanda, Zabbix, Dynatrace, and Splunk and more.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2019"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Backend Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Infini Solution</h4>
            <p>
              I started my career as a backend developer for a startup company. We have created MVC application according to the client's requirements. I could get the experience with a diverse range of exposure of software development requirement elicitation, design, development, testing, and deployment. We have used PHP, Apache, MySQL, JQuery, HTML, CSS and more.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;