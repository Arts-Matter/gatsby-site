import React, { useState } from "react"
import "./teamMember.scss"

export default function TeamMember({ member }) {
  const { name, role, descriptions, imageSrc } = member
  const [expanded, setExpanded] = useState(false)
  const classes = [
    "collapsible-content",
    expanded
      ? "collapsible-content--expanded"
      : "collapsible-content--collapsed",
  ]

  const handleKeyDown = e => {
    if (e.keyCode === 13) {
      setExpanded(!expanded)
    }
  }

  return (
    <div className="team-member">
      <div className="member-image-container">
        <div
          className="member-image"
          style={{ backgroundImage: `url(${imageSrc})` }}
        ></div>
      </div>
      <div
        className={
          expanded
            ? "bio-collapsible bio-collapsible--expanded"
            : "bio-collapsible"
        }
      >
        <div
          className="bio-collapsible__title-container"
          onKeyDown={handleKeyDown}
          role="button"
          aria-pressed={expanded}
          aria-expanded={expanded}
          tabIndex="0"
          onClick={() => setExpanded(!expanded)}
        >
          <div className="bio-collapsible__title-left">
            <h3 className="bio-collapsible__name">{name}</h3>
            <h4 className="bio-collapsible__role">{role}</h4>
          </div>
          <div
            className="bio-collapsible__expand-button"
            aria-label="Toggle Menu"
          >
            Bio
            <div className="bio-collapsible__expand-icon"></div>
          </div>
        </div>
        <div className={classes.join(" ")}>
          {descriptions.map(description => (
            <p key={description} className="rich-text">
              {description}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
