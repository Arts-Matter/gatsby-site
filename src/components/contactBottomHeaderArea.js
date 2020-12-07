import React from "react"
import "./contactBottomHeaderArea.scss"

export default function ContactBottomHeaderArea() {
    const bottomLeft = (
        <form>
            <div class="form-row">
                <input type="text" placeholder="First Name" value="" />
                <input type="text" placeholder="Last Name" value="" />
            </div>
            <div class="form-row"> 
                <input type="email" placeholder="Email" value="" />
                <select>
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
                    <textarea></textarea>
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
