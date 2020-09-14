import React from "react"
import "./aboutBottomHeaderArea.scss"

export default function AboutBottomHeaderArea() {
  const bottomLeft = (
    <div>
      <p className="bottom-text">
        Los Angeles is the world capital of media and entertainment, yet most LA
        County schools do not prepare students to take on jobs in these
        industries. ArtsMatter addresses these gaps by creating and sharing
        educational programming based in media arts to increase exposure and
        access to career pathways and equip students of color with the skills
        they need for success in the local creative economy.{" "}
      </p>
      <p className="bottom-text">
        ArtsMatter creates standards-based curriculum and instructional
        materials to be paired with hands-on Professional Development training
        for teachers to increase student engagement in schools while building
        teachers’ capacity to integrate arts learning in their classrooms.
        Trained teachers then become ambassadors in their larger school
        communities to activate county-wide impact projects to advance media
        arts education not only in Los Angeles, but in every city across the
        country.{" "}
      </p>
    </div>
  )
  const bottomRight = (
    <div className="image-container">
      <div className="image"></div>
    </div>
  )

  return (
    <>
      <div className="bottom__left">
        <span className="bottom__label">mission statement</span>
        {bottomLeft}
      </div>
      <div className="bottom__right">{bottomRight}</div>
    </>
  )
}
