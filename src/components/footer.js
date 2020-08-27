import React from "react"
import { Link } from "gatsby"
import "./footer.css"
import promiseFundLogo from "../images/promise-fund-logo.svg"

export default function footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content-container">
          <div className="footer-content-container__left">
            <div className="footer-content-container__logo"></div>
            <nav className="footer-content-container__links">
              <ul className="footer-content-container__links-list">
                <li className="footer-content-container__item">
                  <Link
                    className="footer-content-container__link"
                    to="https://donatenow.networkforgood.org/Shared/Error.aspx"
                  >
                    Donate
                  </Link>
                </li>
              </ul>
              <ul className="footer-content-container__links-list footer-content-container__links-list--visuelt-regular">
                <li className="footer-content-container__item">
                  <Link
                    className="footer-content-container__link"
                    to="https://www.facebook.com/LAFund"
                  >
                    Facebook
                  </Link>
                </li>
                <li className="footer-content-container__item">
                  <Link
                    className="footer-content-container__link"
                    to="https://twitter.com/ArtsMatter"
                  >
                    Twitter
                  </Link>
                </li>
                <li className="footer-content-container__item">
                  <Link
                    className="footer-content-container__link"
                    to="https://www.instagram.com/artsmatter/"
                  >
                    Instagram
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="promise-fund-container">
            <Link to="" className="footer-content-container__link">
              <img
                className="promise-fund-container__logo"
                src={promiseFundLogo}
                alt="LA Promise Fund"
              />
            </Link>
            <p className="promise-fund-container__paragraph">
              ArtsMatter is an initiative of the LA Promise Fund.
            </p>
            <p className="promise-fund-container__paragraph">
              {`© ${new Date().getFullYear()} ArtsMatter. All rights reserved.`}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
