import React from "react"
import "./socialMediaBar.scss"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share"

export default function SocialMediaBar({ title, url, hashtags }) {
  return (
    <div className="social-media-bar">
      <ul>
        <li>
          <FacebookShareButton url={url} quote={title}>
            <FacebookIcon size={40} round={true} />
          </FacebookShareButton>
        </li>
        <li>
          <TwitterShareButton url={url} title={title} hashtags={hashtags}>
            <TwitterIcon size={40} round={true} />
          </TwitterShareButton>
        </li>
        <li>
          <EmailShareButton subject={title} url={url}>
            <EmailIcon size={40} round={true} />
          </EmailShareButton>
        </li>
      </ul>
    </div>
  )
}
