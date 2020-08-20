import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../images/logo.svg";

console.log(logo)
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Homepage</h1>
    <p>Welcome!</p>
  </Layout>
)

export default IndexPage
