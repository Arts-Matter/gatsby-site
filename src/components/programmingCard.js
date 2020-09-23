import React from "react"
import { Link } from "gatsby"
import "./programmingCard.scss"

export default function ProgrammingCard({ title, summary, id }) {
  const href = `https://www.artsmatter.org/programs/${id}`
  return (
    <div className="programming-card">
      <h3 className="programming-card__title">{title}</h3>
      <p className="programming-card__summary">{summary}</p>
      <Link
        className="programming-card__link"
        to={`/programs/${id}`}
        aria-label="Learn More"
      >
        Learn more
      </Link>
    </div>
  )
}
