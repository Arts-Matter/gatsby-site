import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import "./button.scss"

export default function Button({
  url,
  text = "Read More",
  size = "medium",
  theme = "dark",
}) {
  return (
    <Link className={`button button--${size} button--${theme}`} to={url}>
      {text}
    </Link>
  )
}

Button.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string,
  size: PropTypes.string,
  theme: PropTypes.string,
}
