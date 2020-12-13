import React from "react"
import Header from "../header"
import './wrapper.scss'

const Wrapper = ({ bgColor, children }) => (
  <div className={`section__wrapper ${bgColor}`}>
    <Header active="home" bgColor={bgColor} siteTitle='Arts Matter' />
    {children}
  </div>
)

export default Wrapper
