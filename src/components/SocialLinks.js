import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a
        href="https://twitter.com/JimTyhurst"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="tooltip">
          <FaTwitter />
          <span className="tooltiptext">Twitter</span>
        </div>
      </a>
    </li>
    <li>
      <a
        href="https://github.com/jimtyhurst"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="tooltip">
          <FaGithub />
          <span className="tooltiptext">GitHub</span>
        </div>
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/in/jimtyhurst"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="tooltip">
          <FaLinkedin />
          <span className="tooltiptext">LinkedIn</span>
        </div>
      </a>
    </li>
  </ul>
)

export default SocialLinks
