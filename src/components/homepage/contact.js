import React from "react"
import Header from "../header"
import './contact.scss'

const ContactSection = ({ bgColor }) => (
  <div className={`section--contact__content ${bgColor}`}>
    <Header active="home" bgColor={bgColor} siteTitle='Arts Matter' />
    <p>Section Contact</p>
  </div>
)

export default ContactSection
