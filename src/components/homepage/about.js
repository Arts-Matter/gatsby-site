import React from "react"
import Button from "../button"
import ImageGallery from "../imageGallery"
import { useWindowSize } from "../hooks"
import "./about.scss"

const AboutSection = () => {
  const { width } = useWindowSize()

  return (
    <div className="section--about__content">
      <div class="content-container">
        <div className="left">
          <h3 className="section--about__title">
            We provide high-impact arts education programming for Los Angeles
            schools.
          </h3>
          {width > 889 && <Button url="/about" text="Our Mission" size="small" theme="light" />}
        </div>
        <div className="right">
          <div className="color"></div>
          <ImageGallery src1="/1.jpg" src2="/2.jpg" src3="/3.jpg" />
          {width < 890 && <Button url="/about" text="Our Mission" size="small" theme="light" />}
        </div>
      </div>
    </div>
  )
}

export default AboutSection
