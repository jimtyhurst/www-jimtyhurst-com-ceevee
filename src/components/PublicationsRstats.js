import React from "react";

const PublicationsRstats = () => (
  <div className="row publications-rstats">
    <div className="three columns header-col">
      <h1>
        <span>R Programming</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <p>
            Tyhurst, Jim. 2021-02-23.
            10 Git Commands for Collaborating: Learn Just Enough Git and GitHub to Contribute to an Open Source Project.
            Presented at <a href="https://www.meetup.com/portland-r-user-group/" target="_blank" rel="noopener noreferrer">Portland R User Group</a>, Portland, OR.
            <br />
            Portland R User Group <a href="https://www.meetup.com/portland-r-user-group/events/276194867/" target="_blank" rel="noopener noreferrer">Meetup Announcement</a>.
            <br />
            <a href="https://github.com/jimtyhurst/git-10-commands/blob/main/10-Git-Commands-for-Collaborating.pdf" target="_blank" rel="noopener noreferrer">10-Git-Commands-for-Collaborating.pdf</a>
          </p>
        </div>
      </div>
      <div className="row item">
        <div className="twelve columns">
          <p>
            Tyhurst, Jim. 2017.
            Internationalizing an R application for model parameters
            that vary per country.
            Lightening talk presented at CascadiaRConf 2017, Portland, OR.
            June 3, 2017.
            <br />
            <a href="https://cascadiarconf.com/years/2017/" target="_blank" rel="noopener noreferrer">https://cascadiarconf.com/years/2017/</a>
            <br />
            <a href="https://github.com/jimtyhurst/i18nr" target="_blank" rel="noopener noreferrer">https://github.com/jimtyhurst/i18nr</a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default PublicationsRstats;
