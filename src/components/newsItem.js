import React from "react"
import { Link } from "gatsby"
import "./newsItem.scss"

export default function NewsItem({
  image,
  date,
  title,
  description,
  id,
  hoverEffects,
  isNewsArchive,
}) {
  const renderWrapperContent = () => {
    return (
      <React.Fragment>
        <div className="news-item__image-container">
          {image && (
            <div
              className="news-item__image"
              style={{
                backgroundImage: `url("${image}")`,
              }}
            ></div>
          )}
        </div>
        {date && <h5>{date}</h5>}
        {title && <h3>{title}</h3>}
        <div className="news-item__description-container">
          {description && <p>{description}</p>}
          {(id && !isNewsArchive) && (
            <Link to={`/news/${id}`}>
              <div className="news-item__link-arrow"></div>
            </Link>
          )}
        </div>
      </React.Fragment>
    )
  }

  const renderLinkWrapperContent = () => {
    return (
      <Link className="news-item__link-wrapper" to={`/news/${id}`}>
        {renderWrapperContent()}
      </Link>
    )
  }
  return (
    <div className={hoverEffects ? "news-item news-item--hover" : "news-item"}>
      <div className="news-item__back-panel"></div>
      <div className="news-item__wrapper">
        {isNewsArchive ? renderLinkWrapperContent() : renderWrapperContent()}
      </div>
    </div>
  )
}
