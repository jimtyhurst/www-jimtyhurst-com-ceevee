import React from "react";
import {
  FaGithub,
  FaGooglePlus,
  FaLinkedin,
  FaTwitter
} from "react-icons/lib/fa";
// https://github.com/react-icons/react-icons

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://twitter.com/JimTyhurst" target="_blank" rel="noopener noreferrer">
        <div className="tooltip">
          <FaTwitter />
          <span className="tooltiptext">Twitter</span>
        </div>
      </a>
    </li>
    <li>
      <a href="https://github.com/jimtyhurst" target="_blank" rel="noopener noreferrer">
        <div className="tooltip">
          <FaGithub />
          <span className="tooltiptext">GitHub</span>
        </div>
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/jimtyhurst" target="_blank" rel="noopener noreferrer">
        <div className="tooltip">
          <FaLinkedin />
          <span className="tooltiptext">LinkedIn</span>
        </div>
      </a>
    </li>
    <li>
      <a href="https://plus.google.com/u/0/+JimTyhurst" target="_blank" rel="noopener noreferrer">
        <div className="tooltip">
          <FaGooglePlus />
          <span className="tooltiptext">Google Plus</span>
        </div>
      </a>
    </li>
  </ul>
);

export default SocialLinks;
