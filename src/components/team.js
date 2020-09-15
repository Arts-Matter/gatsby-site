import React from "react"
import "./team.scss"

export default function Team({ team }) {
  console.log("TEAM: ", team)
  return (
    <div className="team">
      <h2 className="team__title">Team</h2>
      <h3 className="team__subtitle">
        ArtsMatter has assembled an exceptional team of staff and project
        consultants to implement the innovative work of Media ArtsMatter and its
        other pioneering arts integration programs.
        <br></br>
        <br></br>
        Individuals have been selected for their broad experience in
        standards-based instruction, arts education, student programming,
        professional development, teacher coaching, and impactful work
        throughout LA County schools.
      </h3>
      <div className="staff-container"></div>
    </div>
  )
}
