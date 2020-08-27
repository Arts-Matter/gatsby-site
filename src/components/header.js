import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useRef, useState } from "react"
import { useWindowSize } from "./hooks"
import logo from "../images/logo.svg"
import HamburgerMenu from "./hamburgerMenu"
import "./header.css"

const Header = ({ siteTitle, active }) => {
  const [mobileExpanded, setMobileExpanded] = useState(false)

  const backPanelRef = useRef()
  const headerRef = useRef()
  const mobileNavRef = useRef()

  const { width } = useWindowSize()

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
      backPanelRef.current.classList.remove("panel--expanded")
    } else {
      backPanelRef.current.classList.add("panel--expanded")
    }
  }

  const linkStyles = "nav-list__link"
  const activeLinkStyles = "nav-list__link nav-list__link--active"

  return (
    <header ref={headerRef} className="header header--primary">
      <div
        ref={backPanelRef}
        className="panel panel--expanded header--primary"
      ></div>
      <div className="header-container">
        <h1 className="header-container__title">
          <Link
            to="/"
            className="header-container__navLink"
            aria-label="Homepage"
          >
            <div
              className={`header-container__logo ${
                mobileExpanded ? "header-container__logo--open" : ""
              }`}
            ></div>
          </Link>
        </h1>
        <HamburgerMenu
          headerRef={headerRef}
          setMobileExpanded={setMobileExpanded}
          mobileNavRef={mobileNavRef}
        />
        <nav
          className="nav"
          ref={mobileNavRef}
          aria-labelledby="main-menu"
          aria-hidden={width > 889 || mobileExpanded ? false : true}
        >
          <ul id="main-menu" className="nav-list">
            <Link
              className={active === "about" ? activeLinkStyles : linkStyles}
              to="/about"
            >
              <li className="nav-list__item">About</li>
            </Link>
            <Link
              className={active === "programs" ? activeLinkStyles : linkStyles}
              to="/programs"
            >
              <li className="nav-list__item">Programs</li>
            </Link>
            <Link
              className={active === "resources" ? activeLinkStyles : linkStyles}
              to="/resources"
            >
              <li className="nav-list__item">Resources</li>
            </Link>
            <Link
              className={active === "news" ? activeLinkStyles : linkStyles}
              to="/news"
            >
              <li className="nav-list__item">News</li>
            </Link>
            <Link
              className={active === "contact" ? activeLinkStyles : linkStyles}
              to="/contact"
            >
              <li className="nav-list__item">Contact</li>
            </Link>
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
