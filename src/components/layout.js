/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.scss"

const Layout = ({ children, active }) => {
  const backPanelRef = useRef()
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  const handleScroll = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      backPanelRef.current.classList.remove("panel--expanded")
      //  headerRef.current.style.zIndex = 0
    } else {
      backPanelRef.current.classList.add("panel--expanded")
      //  headerRef.current.removeAttribute("style")
    }
  }

  return (
    <>
      <Header active={active} siteTitle={data.site.siteMetadata.title} />
      <main>
        <section>
          <div
            ref={backPanelRef}
            className="panel panel--expanded header--primary"
          ></div>
          <div className="content-container content-container--relative">
            {children}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.string.isRequired,
}

export default Layout
