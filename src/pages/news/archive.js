import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import HeaderArea from "../../components/headerArea"
import NewsArchive from "../../components/newsArchive"
const title = "News Archive"

const Page = () => {
  return (
    <Layout active="news-archive" bgColor="magenta">
      <SEO title={title} />
      <HeaderArea
        topLeft="News Archive"
        topRight=" "
        backgroundClass=""
      />
      <NewsArchive />
    </Layout>
  )
}

export default Page

