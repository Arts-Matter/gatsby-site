import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./newsBottomHeaderArea.scss"

export default function NewsBottomHeaderArea() {

  const data = useStaticQuery(graphql`
    {
      allContentfulNewsItem(filter: {contentful_id: {eq: "53h9cnhCcWudxIJbiLLOCg"}}) {
        edges {
          node {
            title
            byline
            date
            headerImage {
              fixed {
                src
              }
            }
            summary {
              internal {
                content
              }
            }
            contentful_id
          }
        }
      }
    }
  `)

  const {title, date, contentful_id } = data.allContentfulNewsItem.edges[0].node
  const summary = data.allContentfulNewsItem.edges[0].node.summary.internal.content
  const imgSrc = data.allContentfulNewsItem.edges[0].node.headerImage.fixed.src

  return (
    <>
      <div className="bottom-left">
        <div className="bottom-left__label">Featured Post</div>
        <div className="bottom-left__date">{date}&nbsp;&nbsp;|&nbsp;&nbsp;News</div>
        {title && <div className="bottom-left__title">
          {title}
        </div>}
        {summary && <div className="bottom-left__description">
          {summary}
        </div>}
        {contentful_id && <Link className="bottom-left__link" to={`/news/${contentful_id}`}>
          <div className="bottom-left__more"></div>
        </Link>}
      </div>
      <div className="bottom-right">
        {imgSrc && <div className="bottom-right__image-container">
          <div className="bottom-right__image" style={{backgroundImage: `url(${imgSrc})`}}></div>
        </div>}
      </div>
    </>
  )
}
