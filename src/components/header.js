import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useRef, useState } from "react"
import logo from "../images/logo.svg"
import HamburgerMenu from "./hamburgerMenu"
import "./header.css"

const Header = ({ siteTitle, active }) => {
  const [mobileExpanded, setMobileExpanded] = useState(false)

  const backPanelRef = useRef()
  const headerRef = useRef()
  const mobileNavRef = useRef()

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
            className="header-container__navLink header-container__navLink--flex"
          >
            <img
              className="header-container__img"
              src={logo}
              alt="Arts Matter"
            />
          </Link>
        </h1>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-list__item">
              <Link
                className={active === "about" ? activeLinkStyles : linkStyles}
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-list__item">
              <Link
                className={
                  active === "programs" ? activeLinkStyles : linkStyles
                }
                to="/programs"
              >
                Programs
              </Link>
            </li>
            <li className="nav-list__item">
              <Link
                className={
                  active === "resources" ? activeLinkStyles : linkStyles
                }
                to="/resources"
              >
                Resources
              </Link>
            </li>
            <li className="nav-list__item">
              <Link
                className={active === "news" ? activeLinkStyles : linkStyles}
                to="/news"
              >
                News
              </Link>
            </li>
            <li className="nav-list__item">
              <Link
                className={active === "contact" ? activeLinkStyles : linkStyles}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="nav-mobile" ref={mobileNavRef}>
          <ul className="nav-list-mobile">
            <li className="nav-list__item nav-list-mobile__item">
              <Link className={linkStyles} to="/about">
                About
              </Link>
            </li>
            <li className="nav-list__item nav-list-mobile__item">
              <Link className={linkStyles} to="/programs">
                Programs
              </Link>
            </li>
            <li className="nav-list__item nav-list-mobile__item">
              <Link className={linkStyles} to="/resources">
                Resources
              </Link>
            </li>
            <li className="nav-list__item nav-list-mobile__item">
              <Link className={linkStyles} to="/news">
                News
              </Link>
            </li>
            <li className="nav-list__item nav-list-mobile__item">
              <Link className={linkStyles} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <HamburgerMenu
          headerRef={headerRef}
          setMobileExpanded={setMobileExpanded}
          mobileNavRef={mobileNavRef}
        />
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
