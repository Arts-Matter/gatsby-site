import React from "react"
import Button from "../button"
import { useWindowSize } from "../hooks"
import "./pillars.scss"

const PillarsSection = () => {
  const { width } = useWindowSize()

  return (
    <div className="section__content section--pillars__content">
      <div class="content-container">
        <div className="left">
          <h3 className="section__title section--pillars__title">
            Program Pillars
          </h3>
          <p>
            We draw upon a dynamic catalogue of content provided by top artists
            and creators to produce high-impact arts education programming for
            Los Angeles schools.
          </p>
          {width > 889 && (
            <Button
              url="/about"
              text="Go to Pillars"
              size="medium"
              theme="light"
            />
          )}
        </div>
        <div className="right">
          {width < 890 && (
            <Button
              url="/about"
              text="Go to Pillars"
              size="small"
              theme="light"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default PillarsSection
