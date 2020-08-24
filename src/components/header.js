import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.svg"
import headerStyles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <div className={headerStyles.headerContainer}>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            display: "flex",
          }}
        >
          <img style={{ margin: 0 }} src={logo} alt="Arts Matter" />
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li className={headerStyles.linkLi}>
            <Link className={headerStyles.navLink} to="/about">
              About
            </Link>
          </li>
          <li className={headerStyles.linkLi}>
            <Link className={headerStyles.navLink} to="/programs">
              Programs
            </Link>
          </li>
          <li className={headerStyles.linkLi}>
            <Link className={headerStyles.navLink} to="/resources">
              Resources
            </Link>
          </li>
          <li className={headerStyles.linkLi}>
            <Link className={headerStyles.navLink} to="/news">
              News
            </Link>
          </li>
          <li className={headerStyles.linkLi}>
            <Link className={headerStyles.navLink} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
