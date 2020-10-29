import React from "react"
import "./programResources.scss"

export default function ProgramResources() {
  return (
    <div className="program-resources">
      <div className="program-resources__left">
        <div className="program-resources__image"></div>
      </div>
      <div className="program-resources__right">
        <h2>Resources</h2>
        <p>
          Lesson plans, activity guides, instructional media, student
          worksheets, assessment rubrics, and more provide a standards-based
          framework for teaching media arts in the classroom with the structure
          needed for students to learn.
        </p>
        <a href="/resources">
          <button className="program-resources__button">View Resources</button>
        </a>
      </div>
    </div>
  )
}
