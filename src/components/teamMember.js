import React, { useState } from "react"
import "./teamMember.scss"
export default function TeamMember({ member }) {
  const { name, role, descriptions, imageSrc } = member
  const [expanded, setExpanded] = useState(false)
  const collapsedClasses =
    "bio-collapsible__collapsible-content bio-collapsible__collapsible-content--collapsed"
  const expandedClasses =
    "bio-collapsible__collapsible-content bio-collapsible__collapsible-content--expanded"

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
          <button className="bio-collapsible__expand-button">
            Bio
            <div className="bio-collapsible__expand-icon"></div>
          </button>
        </div>
        <div className={expanded ? expandedClasses : collapsedClasses}>
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
