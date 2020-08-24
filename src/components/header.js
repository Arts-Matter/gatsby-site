import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useRef } from "react"
import logo from "../images/logo.svg"
import "./header.css"

const Header = ({ siteTitle, active }) => {
  const backPanelRef = useRef()

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true)

    return () => {
      window.removeEventListener("scroll", handleScroll, true)
    }
  })

  const handleScroll = () => {
    if (
      document.body.scrollTop > 10 ||
      document.documentElement.scrollTop > 10
    ) {
      backPanelRef.current.classList.remove("expandedPanel")
      backPanelRef.current.classList.add("backPanel")
    } else {
      backPanelRef.current.classList.remove("backPanel")
      backPanelRef.current.classList.add("expandedPanel")
    }
  }

  return (
    <header className="header">
      <div ref={backPanelRef} className="expandedPanel primary"></div>
      <div className="headerContainer">
        <h1 style={{ margin: 0 }}>
          <Link to="/" className="navLink">
            <img style={{ margin: 0 }} src={logo} alt="Arts Matter" />
          </Link>
        </h1>
        <nav>
          <ul className="navList">
            <li className="linkLi">
              <Link className="navLink" to="/about">
                About
              </Link>
            </li>
            <li className="linkLi">
              <Link className="navLink" to="/programs">
                Programs
              </Link>
            </li>
            <li className="linkLi">
              <Link className="navLink" to="/resources">
                Resources
              </Link>
            </li>
            <li className="linkLi">
              <Link className="navLink" to="/news">
                News
              </Link>
            </li>
            <li className="linkLi">
              <Link className="navLink" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  active: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
