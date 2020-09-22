import React from "react"
import "./programmingCard.scss"

export default function ProgrammingCard({ title, summary, id }) {
  const href = `https://www.artsmatter.org/programs/${id}`
  return (
    <div className="programming-card">
      <h3 className="programming-card__title">{title}</h3>
      <p className="programming-card__summary">{summary}</p>
      <a
        className="programming-card__link"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn more
      </a>
    </div>
  )
}
