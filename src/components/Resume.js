import React from 'react'

import Work from './Work'
import CurrentFocus from './CurrentFocus'
import Clients from './Clients'
import Education from './Education'
import LifelongLearning from './LifelongLearning'

const Resume = () => (
  <section id="resume">
    <Work />
    <CurrentFocus />
    <Clients />
    <Education />
    <LifelongLearning />
  </section>
)

export default Resume
