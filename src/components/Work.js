import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

const Work = () => (
  <div className="row work">
    <div className="three columns header-col">
      <h1>
        <span>Work</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>
            <a href="http://www.tyhurst.com/">Tyhurst Technology Group, LLC</a>
          </h3>
          <p className="info">
            Application Architect and Developer
          </p>
          <p>
            I have been an
            {" "}<span><a href="http://www.tyhurst.com/">independent consultant</a></span>{" "}
            since 2000, contracting
            with companies who need to write their own software.
            I have worked in the roles of applications architect, R developer, and
            Enterprise Java developer.
            Since 2011, I have been designing and developing RESTful web services
            for enterprise applications.
            Since 2016, I have been writing R applications for statistical analysis,
            deployed as RESTful web services. Most recently, I have been
            developing neural networks with Python.
          </p>
          <p>
            I have used object-oriented design, functional languages,
            artificial intelligence techniques, relational databases, and
            NoSQL databases.
            My understanding of alternative architectures leads to well-structured,
            maintainable code based on design patterns when appropriate and
            supported by automated unit tests.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Work;