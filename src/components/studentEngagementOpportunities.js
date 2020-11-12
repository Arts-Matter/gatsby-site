import React from "react"
import { useWindowSize } from "./hooks"
import "./studentEngagementOpportunities.scss"
import ImageGallery from "./imageGallery"

export default function StudentEngagementOpportunities() {
  const { width } = useWindowSize()

  const displayTextContainer = () => {
    return (
      <div className="text-container">
        <h3>Student Engagement Opportunities</h3>
        {width < 890 && (
          <div className="student-engagement__left">
            <ImageGallery />
          </div>
        )}
        <p>
          Aside from classroom curriculum, ArtsMatter collaborates with media
          partners, arts organizations, local museums, and content producers to
          provide students and classes with opportunities to see their learning
          in media arts come to life in real-world contexts outside of the
          classroom.
        </p>
        <p>
          In the past, Paramount has hosted students at their lot for early
          screenings of movies tied to classroom projects followed by a Q&A with
          their animation team, Film Independent curated a program of short
          films paired with an office tour focused on exposing students to
          diverse careers in and around film, and local museums have hosted
          field trips to extend student learning that started in classrooms.
        </p>
        <p>
          ​If you're interested in providing educational opportunities for
          students and schools, please reach out on our{" "}
          <a href="/contact">Contact</a> page.
        </p>
      </div>
    )
  }

  return (
    <div className="student-engagement">
      {width > 889 && (
        <div className="student-engagement__left">
          <ImageGallery />
        </div>
      )}
      <div className="student-engagement__right">{displayTextContainer()}</div>
    </div>
  )
}
