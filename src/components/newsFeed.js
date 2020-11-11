import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "./newsFeed.scss"

import NewsItem from "./newsItem"

export default function NewsFeed() {
  return (
    <div className="news-feed">
      <div className="news-feed__container">
        <div className="news-feed__feed">
          <NewsItem image="//images.ctfassets.net/0yqesla6898r/4K2pZfJWenbZ6svb2DaDSM/33bcb8d6730b8c88bae126b770f6ce71/il_1588xN.849554362_rwlq.jpg" 
            date="2020-10-23"
            title="In the Spotlight! Ilene Squires LaCourt, Teaching Artist"
            description="Today we chat with Ilene, Teaching Artist for ArtsMatter at The LA
            Promise Fund."
            id="testID"
          />
        </div>
      </div>
    </div>
  )
}
