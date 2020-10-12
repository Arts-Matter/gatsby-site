import React, { useState } from "react"
import "./teamMember.scss"

export default function TeamMember({ member }) {
  const { name, role, descriptions, imageSrc } = member
  const [expanded, setExpanded] = useState(false)
  const collapsedClasses = "collapsible-content collapsible-content--collapsed"
  const expandedClasses = "collapsible-content collapsible-content--expanded"
  const classes = [
    "collapsible-content",
    expanded
      ? "collapsible-content--expanded"
      : "collapsible-content--collapsed",
  ]

  const generateFormattedDescriptions = () => {
    return descriptions.map((desc, i) => {
      return (
        <p key={i}>
          {desc.map((text, index) => {
            if (typeof text === "object" && text.marks.length > 0) {
              if (text.marks[0].type === "italic") {
                return (
                  <span key={`${text.value}${index}`}>
                    <em>{text.value}</em>
                  </span>
                )
              } else if (text.marks[0].type === "bold") {
                return (
                  <span key={`${text.value}${index}`}>
                    <b>{text.value}</b>
                  </span>
                )
              } else {
                return <span key={`${text.value}${index}`}>{text.value}</span>
              }
            } else {
              return (
                <React.Fragment key={`${text.value}${index}`}>
                  {text}
                </React.Fragment>
              )
            }
          })}
        </p>
      )
    })
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
          onClick={() => setExpanded(!expanded)}
        >
          <div className="bio-collapsible__title-left">
            <h3 className="bio-collapsible__name">{name}</h3>
            <h4 className="bio-collapsible__role">{role}</h4>
          </div>
          <button
            className="bio-collapsible__expand-button"
            aria-label="Toggle Menu"
            aria-pressed={expanded}
            aria-expanded={expanded}
          >
            Bio
            <div className="bio-collapsible__expand-icon"></div>
          </button>
        </div>
        <div className={classes.join(" ")}>
          {generateFormattedDescriptions()}
        </div>
      </div>
    </div>
  )
}
