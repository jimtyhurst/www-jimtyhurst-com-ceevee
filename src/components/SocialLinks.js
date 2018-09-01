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
      <a href="https://twitter.com/JimTyhurst">
        <FaTwitter />
      </a>
    </li>
    <li>
      <a href="https://github.com/jimtyhurst">
        <FaGithub />
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/jimtyhurst">
        <FaLinkedin />
      </a>
    </li>
    <li>
      <a href="https://plus.google.com/u/0/+JimTyhurst">
        <FaGooglePlus />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
