import React from "react"
import "./teacherDevelopment.scss"
import { useWindowSize } from './hooks';

export default function TeacherDevelopment() {
  const { width } = useWindowSize();

  return (
    <div className="teacher-development">
      <div className="teacher-development__left">
        <div className="teacher-development__text-container">
          <h3>Teacher Professional Development</h3>
          {width < 890 && (
            <div className="teacher-development__image-wrapper">
              <div className="teacher-development__image"></div>
            </div>
          )}
          <p>
            Workshops and in-classroom support is provided to teachers
            participating in ArtsMatter programming. Along with adaptable
            standards-based curriculum, teachers are equipped with pedagogical
            strategies for effective arts integration across diverse grade
            levels and subject areas.
          </p>
          <p>
            Using a gradual release model in many of our programs, teachers have
            the opportunity to co-teach alongside Teaching Artists in the
            classroom to learn new ways to effectively use media arts with
            students during each subsequent year of their teaching career.
            Trained teachers then become ambassadors in their larger school
            communities to activate county-wide impact projects to reach more
            students.
          </p>
        </div>
      </div>
      {width > 889 && (
        <div className="teacher-development__right">
          <div className="teacher-development__image"></div>
        </div>
      )}
    </div>
  )
}
