import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const title = "Contact"

const Page = () => (
  <Layout active="contact" bgColor="tomato">
    <SEO title={title} />
    <h1>{title}</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Page
