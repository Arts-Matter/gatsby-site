import React from "react"
import FooterContactForm from "../footerContactForm"
import Quotes from "../quotesBasic"
import "./contact.scss"

const ContactSection = () => (
  <div className="section--contact__content">
    <div class="content-container">
      <div class="content-wrapper">
        <Quotes />
        <FooterContactForm bgColor='' />
      </div>
    </div>
  </div>
)

export default ContactSection
