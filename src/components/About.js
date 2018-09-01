import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/JimTyhurst.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
          I have done a lot of Enterprise Java work, especially developing web services.
          In addition, during the last few years, I have been working more in the
          area of data science.
          For example, I implemented statistical analyses in
          {" "}<a href="https://www.r-project.org/">R</a>{" "}
          and then productized that application for deployment as a web service.
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Jim Tyhurst, Ph.D.</span>
              <br />
              <span>
                Portland, Oregon, USA
              </span>
              <br />
              <span>+1.503.704.0389</span>
              <br />
              <span>jim@tyhurst.com</span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href="http://www.tyhurst.com/pub/JimTyhurst_Resume.pdf" className="button">
                <FaCloudDownload /> Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
