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
  return (
    // Later on we want to use something other than the contentful ID for the link
    <Link
      to={`/news/${id}`}
      className={hoverEffects ? "news-item news-item--hover" : "news-item"}
    >
      <div className="news-item__back-panel"></div>
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
        <div className="news-item__description-container">
          {description && <p>{description}</p>}
          {id && (
            <div className="news-item__link-arrow"></div>
          )}
        </div>
      </div>
    </Link>
  )
}
