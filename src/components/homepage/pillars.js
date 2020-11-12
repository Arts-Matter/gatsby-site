import React from "react"
import Header from "../header"
import './pillars.scss'

const PillarsSection = ({ bgColor }) => (
  <div className={`section--pillars__content ${bgColor}`}>
    <Header active="home" bgColor={bgColor} siteTitle='Arts Matter' />
    <p>Section Pillars</p>
  </div>
)

export default PillarsSection
