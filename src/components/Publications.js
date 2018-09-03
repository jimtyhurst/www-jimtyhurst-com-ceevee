import React from "react";

import PublicationsNLP from "./PublicationsNLP";
import PublicationsRstats from "./PublicationsRstats";
import PublicationsFrameworks from "./PublicationsFrameworks";
import PublicationsWebBasedDevelopment from "./PublicationsWebBasedDevelopment";

const Publications = () => (
  <section id="publications">
    <PublicationsNLP />
    <PublicationsRstats />
    <PublicationsFrameworks />
    <PublicationsWebBasedDevelopment />
  </section>
);

export default Publications;
