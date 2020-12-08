import React, { Component } from "react"
import "./contactBottomHeaderArea.scss"


class ContactBottomHeaderArea extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        };
      }

    encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&")
      }
    
    handleSubmit = (event) => {
      event.preventDefault()
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": "contact-form",
          ...this.state
        })
      }).then(() => alert("Success!"))
        .catch(error => alert(error));

      event.preventDefault();
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { 
            firstName, 
            lastName, 
            email,
            subject, 
            message 
        } = this.state;

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
                
                <div class="form-row">
                    <input type="text" name="firstName" placeholder="First Name" value={firstName} onChange={this.handleChange}/>
                    <input type="text" name="lastName" placeholder="Last Name" value={lastName} onChange={this.handleChange}/>
                </div>
                <div class="form-row"> 
                    <input type="text" name="email" placeholder="Email" value={email} onChange={this.handleChange}/>
                    <select name="subject" value={subject} onChange={this.handleChange}>
                        <option value="Subject">Subject</option>
                        <option value="General">General</option>
                        <option value="Partnerships ">Partnerships </option>
                        <option value="Professional Development">Professional Development</option>
                        <option value="Press">Press</option>
                        <option value="Events">Events</option>
                        <option value="Donations">Donations</option>
                    </select>
                </div>
                <div class="form-row"> 
                    <div class="textarea-wrapper">
                        <label>Message</label>
                        <textarea name="message" value={message} onChange={this.handleChange} />
                    </div>
                </div>
                {/* <a href="mailto:alexk@lapromisefund.org?subject=&amp;body=First Name: %0D%0ALast Name: %0D%0AEmail: %0D%0AMessage: "> */}
                    <input type="submit" value="Submit" />
                {/* </a> */}
            </form>
        )
    
        const bottomRight = (
            <div>
                <h3>Address</h3>
                <p class="contact-detail">202 W. 1st Street, Suite 160
                <p>Los Angeles, CA 90012</p>
                </p>
                <h3>Phone</h3>
                <p class="contact-detail">(213) 745-4928</p>
            </div>
        )

        return (
            <>
              <div className="bottom__left">
                {bottomLeft}
              </div>
              <div className="bottom__right">{bottomRight}</div>
            </>
        )
    }

}

export default ContactBottomHeaderArea;
