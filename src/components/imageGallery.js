import React, { useRef } from "react"
import "./imageGallery.scss"

export default function ImageGallery({ images, controls }) {
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

  // TODO: Ensure only top caption displays on initial load

  const handleStyleUpdates = newIndex => {
    gallery.forEach((el, i) => {
      if (i === newIndex) {
        if (el.current.firstChild) {
          el.current.firstChild.classList.remove(
            "gallery-image__caption--no-display"
          )
        }
        el.current.style.zIndex = 3
      } else {
        if (el.current.firstChild) {
          el.current.firstChild.classList.add(
            "gallery-image__caption--no-display"
          )
        }
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
                backgroundImage: `url(${images[0].src})`,
              }}
            >
              {(images[0].caption || images[0].title) && (
                <div className="gallery-image__caption">
                  {images[0].title && (<div className="gallery-image__caption-title">{images[0].title}</div>)}
                  {images[0].caption && (<p className="gallery-image__caption-text">{images[0].caption}</p>)}
                </div>
              )}
            </div>
            <div
              className="gallery-image gallery-image__2"
              ref={img2}
              style={{ backgroundImage: `url(${images[1].src})` }}
            >
              {(images[1].caption || images[1].title) && (
                <div className="gallery-image__caption">
                  {images[1].title && (<div className="gallery-image__caption-title">{images[1].title}</div>)}
                  {images[1].caption && (<p className="gallery-image__caption-text">{images[1].caption}</p>)}
                </div>
              )}
            </div>
            <div
              className="gallery-image gallery-image__3"
              ref={img3}
              style={{
                backgroundImage: `url("${images[2].src}")`,
              }}
            >
              {(images[2].caption || images[2].title) && (
                <div className="gallery-image__caption">
                  {images[2].title && (<div className="gallery-image__caption-title">{images[2].title}</div>)}
                  {images[2].caption && (<p className="gallery-image__caption-text">{images[2].caption}</p>)}
                </div>
              )}
            </div>
          </div>
          <div
            className={`gallery-controls gallery-controls--${controls.theme}`}
          >
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

ImageGallery.defaultProps = {
  controls: {
    theme: "dark",
  },
}
