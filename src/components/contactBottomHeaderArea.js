/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from "react"
import "./contactBottomHeaderArea.scss"

class ContactBottomHeaderArea extends Component {
  constructor(props) {
    super(props)

    this.state = {
      completedForm: {
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      },
      successMessage: "",
      errorMessage: "",
    }
  }

  encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  handleSubmit = event => {
    event.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({
        "form-name": "contact-form",
        ...this.state.completedForm,
      }),
    })
      .then(() =>
        this.setState({
          completedForm: {
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            message: "",
          },
          successMessage: "Thank you for contacting Arts Matter!",
        })
      )
      .catch(error =>
        this.setState({
          errorMessage: "An unexpected error occurred",
        })
      )

    event.preventDefault()
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      completedForm: {
        ...this.state.completedForm,
        [name]: value,
      },
    })
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      subject,
      message,
    } = this.state.completedForm

    const bottomLeft = (
      <form
        name="contact-form"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact-form" />
        <input type="hidden" name="bot-field" />

        <div className="form-row">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={this.handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-row">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
            required
          />
          <select name="subject" value={subject} onChange={this.handleChange}>
            <option value="Subject">Subject</option>
            <option value="General">General</option>
            <option value="Partnerships ">Partnerships </option>
            <option value="Professional Development">
              Professional Development
            </option>
            <option value="Press">Press</option>
            <option value="Events">Events</option>
            <option value="Donations">Donations</option>
          </select>
        </div>
        <div className="form-row message-container">
          <div className="textarea-wrapper">
            <label for="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={this.handleChange}
              required
            />
          </div>
        </div>
        <input type="submit" value="Submit" />
        {(this.state.errorMessage !== "" ||
          this.state.successMessage !== "") && (
          <div className="formMessage">
            {this.state.successMessage !== "" && this.state.successMessage}
            {this.state.errorMessage !== "" && this.state.errorMessage}
          </div>
        )}
      </form>
    )

    const bottomRight = (
      <div>
        <h3>Address</h3>
        <p className="contact-detail">
          202 W. 1st Street, Suite 160
          <br />
          Los Angeles, CA 90012
        </p>
        <h3>Phone</h3>
        <p className="contact-detail">(213) 745-4928</p>
      </div>
    )

    return (
      <>
        <div className="bottom__left">{bottomLeft}</div>
        <div className="bottom__right">{bottomRight}</div>
      </>
    )
  }
}

export default ContactBottomHeaderArea
