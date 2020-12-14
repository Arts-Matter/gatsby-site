import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useRef, useState, useEffect } from "react"
import { useWindowSize } from "./hooks"
import HamburgerMenu from "./hamburgerMenu"
import "./header.scss"

const Header = ({ siteTitle, active, bgColor }) => {
  const [mobileExpanded, setMobileExpanded] = useState(false)
  const [activeColor, setActiveColor] = useState()

  const headerRef = useRef()
  const mobileNavRef = useRef()

  const { width } = useWindowSize()

  const linkStyles = "nav-list__item"
  const activeLinkStyles = "nav-list__item nav-list__item--active"

  useEffect(() => {
    setActiveColor(bgColor)

    if (width > 889) {
      headerRef.current.classList.add(bgColor)
    }
  }, [bgColor, width])

  return (
    <header ref={headerRef} className="header">
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
          width={width}
          activeColor={activeColor}
        />
        <nav
          className="nav"
          ref={mobileNavRef}
          aria-labelledby="main-menu"
          aria-hidden={width > 889 || mobileExpanded ? false : true}
        >
          <ul id="main-menu" className="nav-list">
            <Link className="nav-list__link" to="/about">
              <li
                className={
                  active === "about" && !mobileExpanded
                    ? activeLinkStyles
                    : linkStyles
                }
              >
                About
              </li>
            </Link>
            <Link className="nav-list__link" to="/programs">
              <li
                className={
                  active === "programs" && !mobileExpanded
                    ? activeLinkStyles
                    : linkStyles
                }
              >
                Programs
              </li>
            </Link>
            <Link className="nav-list__link" to="/resources">
              <li
                className={
                  active === "resources" && !mobileExpanded
                    ? activeLinkStyles
                    : linkStyles
                }
              >
                Resources
              </li>
            </Link>
            <Link className="nav-list__link" to="/news">
              <li
                className={
                  active.includes("news") && !mobileExpanded
                    ? activeLinkStyles
                    : linkStyles
                }
              >
                News
              </li>
            </Link>
            <Link className="nav-list__link" to="/contact">
              <li
                className={
                  active === "contact" && !mobileExpanded
                    ? activeLinkStyles
                    : linkStyles
                }
              >
                Contact
              </li>
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
  bgColor: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
