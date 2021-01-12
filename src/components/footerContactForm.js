import React, { useState } from "react"
import addToMailChimp from "gatsby-plugin-mailchimp"
import "./footerContactForm.scss"
export default function FooterContactForm({ activePage, bgColor }) {
  const [email, setEmail] = useState("")
  const [result, setResult] = useState("")
  const classes = [bgColor, activePage ? activePage : "", "footer-contact"]

  const handleSubmit = async (e, email) => {
    const result = await addToMailChimp(email)
    setResult(result)
  }

  return (
    <section className={classes.join(" ")}>
      <div className="footer-contact__container">
        <div className="footer-contact__content">
          Receive up-to-date information related to upcoming ArtsMatter events
          and opportunities.
        </div>
        <div className="contact-form">
          <div className="contact-form__container">
            <form
              className="contact-form__form"
              onSubmit={e => handleSubmit(e, email)}
            >
              <input
                className="contact-form__input"
                placeholder="your email"
                name="email"
                onChange={e => setEmail(e.target.value)}
                value={email}
                aria-label="email input"
                required
              />
              <button
                type="submit"
                className="contact-form__button"
                aria-label="submit"
              >
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

FooterContactForm.defaultProps = {
  bgColor: "magenta",
}
