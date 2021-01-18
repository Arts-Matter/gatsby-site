import React, { useState } from "react"
import addToMailChimp from "gatsby-plugin-mailchimp"
import "./footerContactForm.scss"
export default function FooterContactForm({ activePage, bgColor }) {
  const [email, setEmail] = useState("")
  const [result, setResult] = useState({})
  const classes = [bgColor, activePage ? activePage : "", "footer-contact"]

  const handleSubmit = async e => {
    e.preventDefault()
    const result = await addToMailChimp(email, {
      FNAME: "not supplied",
      LNAME: "not supplied",
      MMERGE4: "not supplied",
    })
    setResult(result)
  }

  const generateResponse = () => {
    if (result && result.result && result.result === "error") {
      if (result.msg.includes("already subscribed"))
        return "That email is already subscribed!"

      if (result.msg.includes("not valid")) return result.msg

      return "There was a problem subscribing, please try again later"
    } else if (result && result.result && result.result === "success") {
      return `Thanks for subscribing ${email}!`
    }
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
            <form className="contact-form__form" onSubmit={handleSubmit}>
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
      {Object.keys(result).length > 0 && result.result && (
        <div className="footer-contact__status-msg">{generateResponse()}</div>
      )}
    </section>
  )
}

FooterContactForm.defaultProps = {
  bgColor: "magenta",
}
