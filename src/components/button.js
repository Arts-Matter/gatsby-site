import React from "react"
import { Link } from "gatsby"
import "./button.scss"

export default function Button({ url, text }) {
  return (
    <Link className="button" to={url}>
      {text}
    </Link>
  )
}
