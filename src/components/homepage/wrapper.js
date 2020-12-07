import React from "react"
import Header from "../header"
import "./wrapper.scss"

const Wrapper = ({ bgColor, header, children }) => (
  <div className={`section__wrapper ${bgColor}`}>
    {header && (
      <Header active="home" bgColor={bgColor} siteTitle="Arts Matter" />
    )}
    {children}
  </div>
)

export default Wrapper

Wrapper.defaultProps = {
  header: true,
}
