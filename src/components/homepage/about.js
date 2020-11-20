import React from "react"
import Button from "../button"
import ImageGallery from "../imageGallery"
import { useWindowSize } from "../hooks"
import "./about.scss"

const AboutSection = () => {
  const { width } = useWindowSize()

  const images = [
    {
      src: "/1.jpg",
      caption: "",
    },
    {
      src: "/2.jpg",
      caption: "",
    },
    {
      src: "/3.jpg",
      caption: "",
    },
  ]

  const controls = {
    theme: "light",
  }

  // TODO: Add images from Contentful

  return (
    <div className="section--about__content">
      <div class="content-container">
        <div className="left">
          <h3 className="section--about__title">
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
          {width > 889 && <div class="color" />}
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
