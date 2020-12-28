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
}) {
  const renderNewsItem = () => {
    return (
      // Later on we want to use something other than the contentful ID for the link
      <div
        className={hoverEffects ? "news-item news-item--hover" : "news-item"}
      >
        <div className="news-item__back-panel"></div>
        <Link className="news-item__link" to={`/news/${id}`}>
          <div className="news-item__wrapper">
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
            {date && <time dateTime={date}>{date}</time>}
            {title && <h3>{title}</h3>}
            {(description || id) && (
              <div className="news-item__description-container">
                {description && <p>{description}</p>}
                {id && <div className="news-item__link-arrow"></div>}
              </div>
            )}
          </div>
        </Link>
      </div>
    )
  }

  return (
    <React.Fragment>
      {id && (image || date || title || description) && renderNewsItem()}
    </React.Fragment>
  )
}
