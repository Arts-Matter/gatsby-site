import React from "react"
import PropTypes from "prop-types"
import "./imageGallery.scss"

export default function ImageGallery({ images, controls }) {
  
  // Images format : [
  //   {
  //     src(required): String,
  //     title(optional): String,
  //     caption(optional): String,
  //   },
  //   ...
  // ]

  const [curIndex, setCurIndex] = React.useState(0)

  const handleNextImage = isNext => {
    const newIndex = isNext ? nextImageIndex() : previousImageIndex()
    setCurIndex(newIndex)
  }

  const previousImageIndex = () => {
    const nextIndex = curIndex === 0 ? images.length - 1 : curIndex - 1
    return nextIndex
  }

  const nextImageIndex = () => {
    const nextIndex = curIndex === images.length - 1 ? 0 : curIndex + 1
    return nextIndex
  }

  return (
    <div className="gallery-wrapper">
      <div className="gallery">
        <div className="gallery-container">
          <div className="gallery-image-wrapper">
            {images.map((image, index) => {
              return (
                <div
                  key={index}
                  className={`gallery-image gallery-image__${index}`}
                  style={{
                    backgroundImage: `url(${image.src})`,
                    zIndex: index === curIndex ? 3 : 2,
                  }}
                >
                  {(image.caption || image.title) && (
                    <div
                      className={
                        index === curIndex
                          ? "gallery-image__caption gallery-image__caption--active"
                          : "gallery-image__caption"
                      }
                    >
                      {image.title && (
                        <div className="gallery-image__caption-title">
                          {image.title}
                        </div>
                      )}
                      {image.caption && (
                        <p className="gallery-image__caption-text">
                          {image.caption}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
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

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  controls: PropTypes.object,
}
