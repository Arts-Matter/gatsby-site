import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const title = "Resources"

const Page = () => (
  <Layout active="resources" bgColor="geo">
    <SEO title={title} />
    <h1>{title}</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Page
