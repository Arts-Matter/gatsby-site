import React from "react"
import FooterContactForm from "../footerContactForm"
import Quotes from "../quotes"
import Footer from "../footer"
import './contact.scss'

const ContactSection = () => (
  <div className='section--contact__content content-container'>
    <Quotes />
    <FooterContactForm />
    <Footer />
  </div>
)

export default ContactSection
