import React from "react"
import "./socialMediaBar.scss"

export default function SocialMediaBar() {
  return (
    <div className="social-media-bar">
      <ul>
        <a href="https://www.facebook.com">
          <li id="fb-logo" className="social-media-bar__image"></li>
        </a>
        <a href="https://www.twitter.com">
          <li id="twitter-logo" className="social-media-bar__image"></li>
        </a>
        <a href="https://www.gmail.com">
          <li id="email-logo" className="social-media-bar__image"></li>
        </a>
      </ul>
    </div>
  )
}
