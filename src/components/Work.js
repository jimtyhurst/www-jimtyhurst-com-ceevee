import React from "react";
import { Link } from "gatsby";
import resumePdf from "../assets/resources/JimTyhurst_Resume.pdf";

const Work = () => (
  <div className="row work">
    <div className="three columns header-col">
      <h1>
        <span>Consulting since 2000</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>
            <a href="http://www.tyhurst.com/" target="_blank" rel="noopener noreferrer">
              Tyhurst Technology Group, LLC
            </a>
          </h3>
          <div className="info">
            <p>
              Application Architect and Developer
              (<Link href={resumePdf} target="_blank" rel="noopener noreferrer">
                PDF resume
              </Link>)
            </p>
            <p>
              I have been an
              {" "}<span><a href="http://www.tyhurst.com/" target="_blank" rel="noopener noreferrer">independent consultant</a></span>{" "}
              since 2000, contracting
              with companies who need to write their own software.
              I have worked in the roles of machine learning engineer, application architect,
              R developer, and Enterprise Java developer, writing Java since 1997.
              Since 2011, I have been designing and developing RESTful web services
              for enterprise applications.
              Since 2016, I have been writing
              {" "}<a href="https://www.r-project.org/" target="_blank" rel="noopener noreferrer">R</a>{" "}
              applications for statistical analysis,
              deployed as RESTful web services. Most recently, I have been working in
              Python, developing data pipelines and neural networks.
            </p>
            <p>
              I have used machine learning, rule-based systems,
              object-oriented design, functional languages,
              artificial intelligence techniques,
              relational databases, and NoSQL databases.
              My understanding of alternative architectures leads to well-structured,
              maintainable code based on design patterns when appropriate and
              supported by automated unit tests.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Work;
