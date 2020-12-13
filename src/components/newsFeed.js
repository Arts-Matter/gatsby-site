import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "./newsFeed.scss"

import NewsItem from "./newsItem"

export default function NewsFeed() {
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
        <div className="news-feed__feed">
          {newsItems.map(item => {
            return (
              <NewsItem
                image={item.imgSrc}
                date={item.date}
                title={item.title}
                description={item.summary}
                id={item.contentfulId}
                key={item.contentfulId}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
