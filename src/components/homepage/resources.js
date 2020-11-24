import React from "react"
import Button from "../button"
import Ticker from "react-ticker"
import "./resources.scss"
import { useWindowSize } from "../hooks"

const ResourcesSection = () => {
  const { width } = useWindowSize()

  if (width > 890) {
    return (
      <div className="section__content section--resources__content">
        <div className="content-container">
          <div className="content-wrapper">
            <div className="section--resources__top">
              <div className="left">
                <h3>Instructional Resources</h3>
                <p>
                  Lesson plans, activity guides, instructional media, student
                  worksheets, assessment rubrics, and more provide a
                  standards-based framework for teaching media arts in the
                  classroom with the structure needed for students to learn.
                </p>
                <Button
                  url="/resources"
                  text="View Resources"
                  size="medium"
                  theme="light"
                />
              </div>
              <div className="right">
                <div className="pyramid"></div>
              </div>
            </div>
            <div className="section--resources__bottom">
              <Ticker speed={8}>
                {({ index }) => (
                  <>
                    <div className="ticker-content">
                      <span>Lesson Plans</span>
                      <span>Student Worksheets</span>
                      <span>Instructional Media</span>
                      <span>Supplemental Resources</span>
                      <span>Assessments</span>
                    </div>
                  </>
                )}
              </Ticker>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="section__content section--resources__content">
      <div className="content-container">
        <div className="content-wrapper">
          <div className="section--resources__top">
            <div className="left">
              <h3>Instructional Resources</h3>
              <p className="section__description section--resources__description">
                Lesson plans, activity guides, instructional media, student
                worksheets, assessment rubrics, and more provide a
                standards-based framework for teaching media arts in the
                className with the structure needed for students to learn.
              </p>
              <div className="mobile-resources">
                <div className="pyramid"></div>
              </div>
              <Button
                url="/resources"
                text="View Resources"
                size="medium"
                theme="light"
              />
            </div>
          </div>
          <div className="section--resources__bottom">
            <Ticker speed={8} mode="await" height={210} offset={75}>
              {({ index }) => (
                <>
                  <div className="ticker-content">
                    <span>Lesson Plans</span>
                    <span>Student Worksheets</span>
                    <span>Instructional Media</span>
                    <span>Supplemental Resources</span>
                    <span>Assessments</span>
                  </div>
                </>
              )}
            </Ticker>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ResourcesSection
