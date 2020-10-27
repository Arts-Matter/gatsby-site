import React, { useRef } from "react"
import { useWindowSize } from "./hooks"
import "./studentEngagementOpportunities.scss"

export default function StudentEngagementOpportunities() {
  const { width } = useWindowSize()
  const img1 = useRef()
  const img2 = useRef()
  const img3 = useRef()
  const gallery = [img1, img2, img3]
  let curImg = img1

  const handleNextImage = isNext => {
    const newIndex = isNext ? nextImageIndex() : previousImageIndex()
    handleStyleUpdates(newIndex)
    curImg = gallery[newIndex]
  }

  const previousImageIndex = () => {
    const curIndex = gallery.findIndex(e => e === curImg)
    let nextIndex

    if (curIndex === 0) {
      nextIndex = gallery.length - 1
    } else {
      nextIndex = curIndex - 1
    }

    return nextIndex
  }

  const nextImageIndex = () => {
    const curIndex = gallery.findIndex(e => e === curImg)
    let nextIndex

    if (curIndex === gallery.length - 1) {
      nextIndex = 0
    } else {
      nextIndex = curIndex + 1
    }
    console.log(nextIndex)
    return nextIndex
  }

  const handleStyleUpdates = newIndex => {
    gallery.forEach((el, i) => {
      if (i === newIndex) {
        el.current.firstChild.classList.remove(
          "gallery-image__caption--no-display"
        )
        el.current.style.zIndex = 3
      } else {
        el.current.firstChild.classList.add(
          "gallery-image__caption--no-display"
        )
        el.current.style.zIndex = 2
      }
    })
  }

  const studentEngagementLeft = () => {
    return (
      <div className="student-engagement__left">
          { displayGallery() }
      </div>
    )
  }

  const displayGallery = () => {
    return (
      <div className="gallery-wrapper">
        <div className="gallery">
          <div className="gallery-container">
            <div className="gallery-image-wrapper">
              <div className="gallery-image gallery-image__1" ref={img1}>
                <div className="gallery-image__caption">
                  <div className="gallery-image__title">
                    Film Independent screening + Q&A
                  </div>
                </div>
              </div>
              <div className="gallery-image gallery-image__2" ref={img2}>
                <div className="gallery-image__caption gallery-image__caption--no-display">
                  <div className="gallery-image__title">
                    PST:LA/LA - A Celebration of Student Culture and Identity at
                    the Getty Museum
                  </div>
                </div>
              </div>
              <div className="gallery-image gallery-image__3" ref={img3}>
                <div className="gallery-image__caption gallery-image__caption--no-display">
                  <div className="gallery-image__title">
                    Students present projects to staff on the Paramount lot
                  </div>
                </div>
              </div>
            </div>
            <div className="gallery-controls">
              <button onClick={() => handleNextImage(false)}>
                <div className="gallery-controls__left"></div>
              </button>
              <button onClick={() => handleNextImage(true)}>
                <div className="gallery-controls__right"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const displayTextContainer = () => {
    return (
      <div className="text-container">
        <h3>Student Engagement Opportunities</h3>
        {width < 890 && displayGallery()}
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
          students and schools, please reach out on our <a href="#">Contact</a>{" "}
          page.
        </p>
      </div>
    )
  }

  return (
    <div className="student-engagement">
      {width > 889 && studentEngagementLeft()}
      <div className="student-engagement__right">{displayTextContainer()}</div>
    </div>
  )
}
