import React from "react";
import { FaChevronCircleUp } from "react-icons/fa";
import SocialLinks from "./SocialLinks";
import { Link } from "gatsby";

const Footer = () => (
  <footer id="footer">
    <div className="row">
      <div className="twelve columns">
        <SocialLinks />

        <ul className="copyright">
          <li>Copyright &copy; 2018 by Jim Tyhurst. All rights reserved.</li>
        </ul>
      </div>

      <div id="go-top">
        <Link className="smoothscroll" title="Back to Top" to="#home">
          <FaChevronCircleUp />
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
