import React, { useState } from "react"
import "./footerContactForm.scss"

export default function FooterContactForm({ classes }) {
  const [email, setEmail] = useState("")
  let curClasses = ["magenta", "footer-contact"]

  if (classes && Array.isArray(classes)) {
    curClasses = [...curClasses, ...classes]
  }

  return (
    <section className={curClasses.join(" ")}>
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
