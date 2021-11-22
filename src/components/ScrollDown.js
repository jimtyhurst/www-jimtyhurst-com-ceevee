import React from 'react'
import { FaChevronCircleDown } from 'react-icons/fa'
import { Link } from 'gatsby'

const ScrollDown = () => (
  <p className="scrolldown">
    <Link className="smoothscroll" to="#about">
      <FaChevronCircleDown />
    </Link>
  </p>
)

export default ScrollDown
