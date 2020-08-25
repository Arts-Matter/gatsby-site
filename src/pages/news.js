import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const title = "News"

const Page = () => (
  <Layout active="news">
    <SEO title={title} />
    <h1>{title}</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Page
