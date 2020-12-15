/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useRef } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import Panel from "./panel"
import FooterContactForm from "./footerContactForm"
import Quotes from "./quotes"
import NewsFeed from "./newsFeed"
import WhereItStarted from "../components/whereItStarted"
import "./layout.scss"

const Layout = ({ children, active, bgColor }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // Used to position news page news feed on larger screens
  const contentContainerRef = useRef()

  return (
    <>
      <Header
        active={active}
        bgColor={bgColor}
        siteTitle={data.site.siteMetadata.title}
      />
      <main className={active}>
        <section className="main-wrapper">
          <Panel active={active} bgColor={bgColor} />
          <div className="content-container" ref={contentContainerRef}>
            {children}
          </div>
        </section>
      </main>
      {active === "about" && <Quotes />}
      {active === "news" && (
        <NewsFeed contentContainerRef={contentContainerRef} />
      )}
      {active === "programs" && <WhereItStarted />}
      <FooterContactForm
        isProgramsPage={active === "programs" ? true : false}
      />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.string.isRequired,
}

export default Layout
