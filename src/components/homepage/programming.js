import React from "react"
import Button from "../button"
import ImageGallery from "../imageGallery"
import { useWindowSize } from "../hooks"
import "./programming.scss"

const ProgrammingSection = () => {
  const { width } = useWindowSize()

  const images = [
    {
      src: "/1.jpg",
      title: "Paramount",
      caption: "Students give final project presentations to animation staff and executives before a special screening on the Paramount lot."
    },
    {
      src: "/2.jpg",
      title: "LA2030",
      caption: "Students designing sustainable cities using Epic Games 3D visualization tool Twinmotion."
    },
    {
      src: "/3.jpg",
      title: "Media ArtsMatter",
      caption: "Teachers at Nickelodeon for an animation 101 training and tour of the studios."
    },
  ]

  const controls = {
    theme: "light",
  }

  // TODO: Add images from Contentful

  return (
    <div className="section__content section--programming__content">
      <div class="content-container">
        <div className="left">
          <h3 className="section__title section--programming__title">
            Current Programming
          </h3>
          <p className="section__description section--resources__description">Our programs provides standards-based materials to be taught in classrooms with content provided by creative producers in Los Angeles, and introduces students to the skills and careers that make up the media industry.</p>
          {width > 889 && (
            <Button
              url="/programs"
              text="Go To Programs"
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
              url="/programs"
              text="Go To Programs"
              size="medium"
              theme="light"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default ProgrammingSection
