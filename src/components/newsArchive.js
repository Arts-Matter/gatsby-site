import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "./newsArchive.scss"

import NewsItem from "./newsItem"

export default function NewsArchive() {
  const data = useStaticQuery(graphql`
    {
      allContentfulNewsItem(
        sort: { fields: date, order: DESC }
        filter: { title: { ne: "Why #ArtsMatter" } }
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
    <div className="news-archive-container">
      {newsItems.map(item => {
        return (
          <NewsItem
            image={item.imgSrc}
            date={item.date}
            title={item.title}
            key={item.contentfulId}
          />
        )
      })}
    </div>
  )
}
