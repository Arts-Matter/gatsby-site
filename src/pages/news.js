import React from "react"
import { Link } from "gatsby"
import "./news.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeaderArea from "../components/headerArea"
import NewsBottomHeaderArea from "../components/newsBottomHeaderArea"

const title = "News"

const Page = () => (
  <Layout active="news" bgColor="sunflower">
    <SEO title={title} />
    <HeaderArea
      topLeft="News"
      backgroundClass="geo"
      bottom={<NewsBottomHeaderArea />}
    />
    <div className="latest-news">
      <h2 className="latest-news__title">Latest news</h2>
      <h3 className="latest-news__sub-title">
        Browse through our latest 10 news articles.
        <br />
        To view more articles, visit our&nbsp;
        <Link className="latest-news__archive-link" to="/news/archive">
          news archive
        </Link>
        &nbsp;page.
      </h3>
    </div>
  </Layout>
)

export default Page
