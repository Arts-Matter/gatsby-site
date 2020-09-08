/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import Panel from "./panel"
import FooterContactForm from "./footerContactForm"
import "./layout.scss"

const Layout = ({ children, active }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header active={active} siteTitle={data.site.siteMetadata.title} />
      <main>
        <section className="main-wrapper">
          <Panel active={active} />
          <div className="content-container">{children}</div>
        </section>
      </main>
      <FooterContactForm />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.string.isRequired,
}

export default Layout
