import React from "react"
import Header from "../header"
import './resources.scss'

const ResourcesSection = ({ bgColor }) => (
  <div className={`section--resources__content ${bgColor}`}>
    <Header active="home" bgColor={bgColor} siteTitle='Arts Matter' />
    <p>Section Resources</p>
  </div>
)

export default ResourcesSection
