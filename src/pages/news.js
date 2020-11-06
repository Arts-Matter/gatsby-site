import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeaderArea from "../components/headerArea"
import NewsBottomHeaderArea from "../components/newsBottomHeaderArea"

const title = "News"

const Page = () => (
  <Layout active="news">
    <SEO title={title} />
    <HeaderArea
      topLeft="News"
      backgroundClass="geo"
      bottom={<NewsBottomHeaderArea />}
    />
  </Layout>
)

export default Page
