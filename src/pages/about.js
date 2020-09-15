import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderArea from "../components/headerArea"
import AboutBottomHeaderArea from "../components/aboutBottomHeaderArea"
import History from "../components/history"

const title = "About"

const topRight =
  "ArtsMatter draws upon a dynamic catalogue of content provided by top artists and creators to produce high-impact arts education programming for Los Angeles schools."

const bottom = <AboutBottomHeaderArea />

const Page = () => (
  <Layout active="about">
    <SEO title={title} />
    <HeaderArea topLeft="About" topRight={topRight} bottom={bottom} />
    <History />
  </Layout>
)

export default Page
