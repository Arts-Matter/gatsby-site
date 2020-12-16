import React, { useState } from "react"
import "./footerContactForm.scss"

export default function FooterContactForm({ isProgramsPage, bgColor }) {
  const [email, setEmail] = useState("")
  const classes = [
    bgColor,
    isProgramsPage ? "programs footer-contact" : "footer-contact",
  ]

  return (
    <section className={classes.join(' ')}>
      <div className="footer-contact__container">
        <div className="footer-contact__content">
          Receive up-to-date information related to upcoming ArtsMatter events
          and opportunities.
        </div>
        <div className="contact-form">
          <div className="contact-form__container">
            <div className="contact-form__form">
              <input
                className="contact-form__input"
                placeholder="your email"
                name="email"
                onChange={e => setEmail(e.target.value)}
                value={email}
                aria-label="email input"
              />
              <button className="contact-form__button" aria-label="submit">
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

FooterContactForm.defaultProps = {
  bgColor: 'magenta'
};