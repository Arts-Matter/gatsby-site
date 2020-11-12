import React, { useState } from "react"
import { Link } from "gatsby"
import "./programmingCard.scss"

export default function ProgrammingCard({ title, summary, id, entries }) {
  const [expanded, setExpanded] = useState(false)

  const card = (title, summary, id) => {
    return (
      <div className="programming-card">
        {title && <h4 className="programming-card__title">{title}</h4>}
        {summary && <p className="programming-card__summary">{summary}</p>}
        {id && (
          <Link
            className="programming-card__link"
            to={`/programs/${id}`}
            aria-label="Learn More"
          >
            Learn more
          </Link>
        )}
      </div>
    )
  }

  const expandableCard = (title, summary, nestedCards) => {
    return (
      <div
        className={`programming-card ${expanded ? "is-open" : ""}`}
        onClick={() => setExpanded(!expanded)}
      >
        {title && <h4 className="programming-card__title">{title}</h4>}
        {summary && <p className="programming-card__summary">{summary}</p>}
        <button
          className="programming-card__expand-button"
          aria-pressed={expanded}
          aria-expanded={expanded}
        >
          <div className="programming-card__expand-icon"></div>
        </button>
        {nestedCards.length > 0 && (
          <div
            aria-hidden={!expanded}
            className={`collapsible__outer ${
              expanded
                ? "collapsible__outer--expanded"
                : "collapsible__outer--collapsed"
            }`}
          >
            <div className="collapsible__inner">
              <div className="collapsible__nested-cards">
                {nestedCards.map((entry, i) => (
                  <React.Fragment key={`${entry.title}${i}`}>
                    {card(entry.title, entry.summary, entry.id)}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  return entries === null
    ? card(title, summary, id)
    : expandableCard(title, summary, entries)
}
