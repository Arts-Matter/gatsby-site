import React from "react"
import Header from "../header"
import './about.scss'

const AboutSection = ({ bgColor }) => (
  <div className={`section--about__content ${bgColor}`}>
    <Header active="home" bgColor={bgColor} siteTitle='Arts Matter' />
    <p>Section About</p>
  </div>
)

export default AboutSection
