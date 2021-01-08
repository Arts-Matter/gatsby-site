import React from "react"
import Button from "../button"
import ImageGallery from "../imageGallery"
import { useWindowSize } from "../hooks"
import "./about.scss"

const AboutSection = ({images}) => {
  const { width } = useWindowSize()

  const controls = {
    theme: "light",
  }

  return (
    <div className="section__content section--about__content">
      <div className="content-container">
        <div className="left">
          <h3 className="section__title section--about__title">
            We provide high-impact arts education programming for Los Angeles
            schools.
          </h3>
          {width > 889 && (
            <Button
              url="/about"
              text="Our Mission"
              size="medium"
              theme="light"
            />
          )}
        </div>
        <div className="right">
          <ImageGallery images={images} controls={controls} />
          {width > 889 && <div className="color" />}
          {width < 890 && (
            <Button
              url="/about"
              text="Our Mission"
              size="small"
              theme="light"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default AboutSection
