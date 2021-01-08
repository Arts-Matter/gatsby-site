import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "./newsBottomHeaderArea.scss"

import { convertTitleToSlug } from "./helpers"

export default function NewsBottomHeaderArea() {
  const data = useStaticQuery(graphql`
    {
      allContentfulSingleton(
        filter: { singletonName: { eq: "Featured news item" } }
      ) {
        edges {
          node {
            singletonName
            entry {
              ... on ContentfulNewsItem {
                byline
                title
                date
                headerImage {
                  fixed(width: 600, quality: 100) {
                    src
                  }
                }
                summary {
                  summary
                }
                contentful_id
              }
            }
          }
        }
      }
    }
  `)

  const {
    title,
    date,
    summary,
    contentful_id,
    headerImage,
  } = data.allContentfulSingleton.edges[0].node.entry
  const slug = title ? convertTitleToSlug(title) : null
 
  return (
    <>
      <div className="bottom-left">
        <div className="bottom-left__label">Featured Post</div>
        <div className="bottom-left__date">
          {date}&nbsp;&nbsp;|&nbsp;&nbsp;News
        </div>
        {title && <div className="bottom-left__title">{title}</div>}
        {summary && (
          <div className="bottom-left__description">{summary.summary}</div>
        )}
        {contentful_id && (
          <Link
            className="bottom-left__link"
            to={`/news${date ? "/" + date : ""}/${slug ? slug : contentful_id}`}
          >
            <div className="bottom-left__more"></div>
          </Link>
        )}
      </div>
      <div className="bottom-right">
        {headerImage && (
          <div className="bottom-right__image-container">
            <div
              className="bottom-right__image"
              style={{ backgroundImage: `url(${headerImage.fixed.src})` }}
            ></div>
          </div>
        )}
      </div>
    </>
  )
}
