import React from "react"
import { Link } from "gatsby"
import "./newsItem.scss"

import { convertTitleToSlug } from "./helpers"

export default function NewsItem({
  image,
  date,
  title,
  description,
  contentful_id,
  hoverEffects,
}) {
  const renderNewsItem = () => {
    const slug = convertTitleToSlug(title)

    return (
      <div
        className={hoverEffects ? "news-item news-item--hover" : "news-item"}
      >
        <div className="news-item__back-panel"></div>
        <Link
          className="news-item__link"
          to={`/news${date ? "/" + date : ""}/${slug ? slug : contentful_id}`}
        >
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
            {description && (
              <div className="news-item__description-container">
                <p>{description}</p>
                {slug && <div className="news-item__link-arrow"></div>}
              </div>
            )}
          </div>
        </Link>
      </div>
    )
  }

  return (
    <React.Fragment>
      {contentful_id && (image || date || title || description) && renderNewsItem()}
    </React.Fragment>
  )
}
