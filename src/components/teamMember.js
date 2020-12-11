import React, { useState } from "react"
import "./teamMember.scss"

export default function TeamMember({ 
  member,
  teamDescriptions
 }) {
  const { name, role, email, phone, descriptions, imageSrc } = member
  const [expanded, setExpanded] = useState(false)
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
                return <React.Fragment key={`${text.value}${index}`}>{text.value}</React.Fragment>
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
      {
        (teamDescriptions ? 
          <div
          className={
            expanded
              ? "bio-collapsible bio-collapsible--expanded"
              : "bio-collapsible"
          }
          >
            <div className="bio-collapsible__title-container">
              <div className="bio-collapsible__title-left">
                <h3 className="bio-collapsible__name">{name}</h3>
                <h4 className="bio-collapsible__role">{role}</h4>
              </div>
              <button
                className="bio-collapsible__expand-button"
                aria-label="Toggle Bio"
                aria-pressed={expanded}
                aria-expanded={expanded}
                onClick={() => setExpanded(!expanded)}
              >
                Bio
                <div className="bio-collapsible__expand-icon"></div>
              </button>
            </div>
            <div className={classes.join(" ")}>
              {generateFormattedDescriptions()}
            </div>
          </div>
        : 
          <div>
            <div className="bio-collapsible__title-left">
                <h3 className="bio-collapsible__name">{name}</h3>
                <h4 className="bio-collapsible__role">{role}</h4>
            </div>
            <div>
                <p>{email}</p>
                <p>{phone}</p>
            </div>
          </div>
        ) 
      }   
    </div>
  )
}
