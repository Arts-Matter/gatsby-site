import React from "react"
import { Link } from "gatsby"
import { useWindowSize } from "./hooks"
import "./whereItStarted.scss"

export default function WhereItStarted() {
  const { width } = useWindowSize()

  return (
    <div className="where-it-all-started">
      { width < 890 && <div className="where-it-all-started__image"></div> }
      <div className="where-it-all-started-container">
        <div className="where-it-all-started-container__left">
          <div className="where-it-all-started-container__text-container">
            <h6>A Look Back...</h6>
            <h4>PST: LA/LA Education Program</h4>
            <p>
              The PST: LA/LA Education Program engaged thousands of students and
              teachers with creative learning opportunities through content from
              exhibitions of Latin American and Latino art in cultural
              institutions and museums across Southern California.
            </p>
            <Link to="#">Learn More</Link>
          </div>
        </div>
      </div>
      { width > 889 && <div className="where-it-all-started__image"></div> }
    </div>
  )
}
