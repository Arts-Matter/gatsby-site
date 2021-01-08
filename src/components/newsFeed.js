import React, { useEffect, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { useWindowSize } from "./hooks"
import "./newsFeed.scss"

import NewsItem from "./newsItem"

export default function NewsFeed({ contentContainerRef }) {
  const { width } = useWindowSize()
  const newsFeedRef = useRef()
  const data = useStaticQuery(graphql`
    {
      allContentfulNewsItem(
        sort: { fields: date, order: DESC }
        limit: 10
        filter: { title: { ne: "Why #ArtsMatter" } }
        skip: 1
      ) {
        edges {
          node {
            title
            summary {
              summary
            }
            contentful_id
            date
            headerImage {
              fixed {
                src
              }
            }
          }
        }
      }
    }
  `)

  useEffect(() => {
    const latestNewsPositionX = contentContainerRef.current.children[1].getBoundingClientRect()
      .x
    //On mobile position is 0, small screens is 84, we need to calculate padding when x > 84
    if (latestNewsPositionX === 0 || latestNewsPositionX === 84) {
      newsFeedRef.current.style.removeProperty("padding-left")
    } else if (latestNewsPositionX > 84) {
      newsFeedRef.current.style.paddingLeft = latestNewsPositionX - 13.5 + "px"
    }
  }, [width])

  const newsItems = data.allContentfulNewsItem.edges.reduce((news, curNews) => {
    const { date, title, contentful_id } = curNews.node
    const summary =
      curNews.node.summary === null ? null : curNews.node.summary.summary
    const imgSrc =
      curNews.node.headerImage !== null
        ? curNews.node.headerImage.fixed.src
        : null
    const newNewsItem = {
      title,
      date,
      contentfulId: contentful_id,
      summary,
      imgSrc,
    }

    if (title && date && contentful_id && summary && imgSrc) {
      news.push(newNewsItem)
    }

    return news
  }, [])

  return (
    <div className="news-feed">
      <div className="news-feed__container">
        <div className="news-feed__feed" ref={newsFeedRef}>
          {newsItems.map(item => {
            return (
              <NewsItem
                image={item.imgSrc}
                date={item.date}
                title={item.title}
                description={item.summary}
                contentful_id={item.contentfulId}
                key={item.contentfulId}
                hoverEffects={width > 889 ? true : false}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
