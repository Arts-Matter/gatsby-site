import React from "react"
import "./programResources.scss"
import { useWindowSize } from "./hooks"
import Button from "./button"

export default function ProgramResources() {
  const { width } = useWindowSize()

  const leftContent = () => {
    return (
      <div className="program-resources__left">
        <div className="program-resources__image"></div>
      </div>
    )
  }

  return (
    <div className="program-resources">
      {width > 889 && leftContent()}
      <div className="program-resources__right">
        <h2>Resources</h2>
        <p>
          Lesson plans, activity guides, instructional media, student
          worksheets, assessment rubrics, and more provide a standards-based
          framework for teaching media arts in the classroom with the structure
          needed for students to learn.
        </p>
        {width < 890 && leftContent()}
        <Button url="/resources" text="View Resources" />
      </div>
    </div>
  )
}
