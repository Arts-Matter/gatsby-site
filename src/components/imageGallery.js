import React, { useRef } from "react"
import "./imageGallery.scss"

export default function ImageGallery({ src1, src2, src3 }) {
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

  return (
    <div className="gallery-wrapper">
      <div className="gallery">
        <div className="gallery-container">
          <div className="gallery-image-wrapper">
            <div
              className="gallery-image gallery-image__1"
              ref={img1}
              style={{
                backgroundImage: `url(${src1})`,
              }}
            >
              <div className="gallery-image__caption">
                <div className="gallery-image__title">
                  Film Independent screening + Q&A
                </div>
              </div>
            </div>
            <div
              className="gallery-image gallery-image__2"
              ref={img2}
              style={{ backgroundImage: `url(${src2})` }}
            >
              <div className="gallery-image__caption gallery-image__caption--no-display">
                <div className="gallery-image__title">
                  PST:LA/LA - A Celebration of Student Culture and Identity at
                  the Getty Museum
                </div>
              </div>
            </div>
            <div
              className="gallery-image gallery-image__3"
              ref={img3}
              style={{
                backgroundImage: `url("${src3}")`,
              }}
            >
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
