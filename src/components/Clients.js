import React from "react";

const Clients = () => (
  <div className="row clients">
    <div className="three columns header-col">
      <h1>
        <span>Clients</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <div className="info">
            <p>
              See my{" "}
              <a href="static/resources/JimTyhurst_Resume.pdf" target="_blank">resume</a>
              {" "}for a listing of my consulting clients and projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Clients;
