import React from "react";

import Work from "./Work";
import CurrentFocus from "./CurrentFocus";
import Clients from "./Clients";
import Education from "./Education";

const Resume = () => (
  <section id="resume">
    <Work />
    <CurrentFocus />
    <Clients />
    <Education />
  </section>
);

export default Resume;
