import React from "react"
import "./team.scss"
import { useWindowSize } from "./hooks"

import TeamMember from "./teamMember"

export default function Team({ team }) {
  const { width } = useWindowSize()
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
      <div className="team-container">
        {width > 889 ? (
          team.map(member => <TeamMember member={member} />)
        ) : (
          <div className="team-container__wrapper">
            {team.map(member => (
              <TeamMember member={member} />
            ))}
          </div>
        )}
        {/* <div className="team-container__wrapper">
        {team && team.map(member => <TeamMember member={member} />)}
        </div> */}
      </div>
    </div>
  )
}
