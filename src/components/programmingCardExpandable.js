import React, { useState } from "react"
import "./programmingCard.scss"
import "./programmingCardExpandable.scss"
import ProgrammingCard from "./programmingCard"

export default function ProgrammingCardExpandable({ title, summary, cards }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={`programming-card ${expanded ? "is-open" : ""}`}
      onClick={() => setExpanded(!expanded)}
    >
      <h3 className="programming-card__title">{title}</h3>
      <p className="programming-card__summary">{summary}</p>
      <button className="programming-card__expand-button">
        <div className="programming-card__expand-icon"></div>
      </button>
      <div
        className={`collapsible__outer ${
          expanded
            ? "collapsible__outer--expanded"
            : "collapsible__outer--collapsed"
        }`}
      >
        <div className="collapsible__inner">
          <div className="collapsible__nested-cards">
            {cards.map(card => (
              <ProgrammingCard
                title={card.title}
                summary={card.summary}
                id={card.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
