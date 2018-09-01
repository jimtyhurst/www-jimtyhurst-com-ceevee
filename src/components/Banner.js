import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">Jim Tyhurst, Ph.D.</h1>
      <h3>
        I am a software developer, living in Portland, Oregon, USA.
        Read more{" "}<a className="smoothscroll" href="#about">about</a>{" "}
        me below.
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
