import React from 'react'
import { GoCloudDownload } from 'react-icons/go'

import profilePic from '../assets/images/JimTyhurst.jpg'
import resumePdf from '../assets/resources/JimTyhurst_Resume.pdf'

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="profile" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
          I am an experienced developer and application architect, who has been
          expanding into statistical analysis, machine learning, and deep
          learning for the past few years. My previous experience developing
          enterprise Java applications and microservices is proving useful to
          productize new machine learning applications. For example, I recently
          implemented some statistical analyses in{' '}
          <a
            href="https://www.r-project.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            R
          </a>{' '}
          and then productized that application for deployment as a web service.
          My experience as an application architect is especially useful working
          with data scientists, helping them to turn their preliminary coding
          into released products.
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              Jim Tyhurst, Ph.D.
              <br />
              Portland, Oregon, USA
              <br />
              jim@tyhurst.com
            </p>
          </div>
          <div className="columns download">
            <p>
              <a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                <GoCloudDownload /> Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default About
