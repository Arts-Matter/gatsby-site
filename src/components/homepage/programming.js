import React from "react"
import Header from "../header"
import './programming.scss'

const ProgrammingSection = ({ bgColor }) => (
  <div className={`section--programming__content ${bgColor}`}>
    <Header active="home" bgColor={bgColor} siteTitle='Arts Matter' />
    <p>Section Programming</p>
  </div>
)

export default ProgrammingSection
