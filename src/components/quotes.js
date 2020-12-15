import React, { useState } from "react"
import "./quotes.scss"

export default function Quotes() {
  const [quoteIndex, setQuoteIndex] = useState(0)
  const quotes = [
    {
      quote:
        "The program and curriculum were easy to implement with the students. From the Professional Development to the lesson plans and video resources we could use to talk about careers in the field.”",
      tag: "JASMINE TIGOLO | TEACHER, FOSHAY LEARNING CENTER",
    },
    {
      quote:
        "We loved working together as a class for all of us to learn more about each other and work together as one big group.”",
      tag: "3RD GRADER, SANTA MONICA BOULEVARD CHARTER SCHOOL",
    },
    {
      quote:
        "The students really enjoyed learning about the animation process and creating their own animated clips. It was something totally new to almost all of them and they were very proud of their work.”",
      tag: "EMILY SLASON | TEACHER, JOHN MUIR MS",
    },
    {
      quote:
        "I am grateful for the additional funding that ArtsMatter provided, which supported the resources I required for my Photography class. My colleagues and I were dismayed to realize that we had never had a PD that focused solely on the arts.”",
      tag: "MEGHAN LEE | TEACHER, ACADEMIC LEADERSHIP COMMUNITY SCHOOL",
    },
    {
      quote:
        "There were numerous special lessons learned and for many students, this arts assignment was one of the most meaningful and special projects.”",
      tag: "ALBERT CELIS | TEACHER, KING MS",
    },
  ]

  const handleNextQuote = () => {
    if (quoteIndex === quotes.length - 1) return setQuoteIndex(0)
    const newIndex = quoteIndex + 1
    setQuoteIndex(newIndex)
  }

  const handlePreviousQuote = () => {
    if (quoteIndex === 0) return setQuoteIndex(quotes.length - 1)
    const newIndex = quoteIndex - 1
    setQuoteIndex(newIndex)
  }

  return (
    <div className="about quotes-container">
      <div className="quotes-container__background"></div>
      <div className="quotes-container__wrapper">
        <div className="quotes-container__inner-wrapper">
          <div className="quotes-container__quotes-gallery">
            <div className="quotes-container__open-quote"></div>
            <div className="quotes-container__quote-wrapper">
              <div>
                <h2 className="quotes-container__quote">
                  {quotes[quoteIndex].quote}
                </h2>
                <h5 className="quotes-container__tag">
                  {quotes[quoteIndex].tag}
                </h5>
              </div>
            </div>
            <div className="quotes-container__controls">
              <button
                className="quotes-container__button"
                onClick={handleNextQuote}
              >
                <div className="quotes-container__arrow quotes-container__arrow-right"></div>
              </button>
              <button
                className="quotes-container__button"
                onClick={handlePreviousQuote}
              >
                <div className="quotes-container__arrow quotes-container__arrow-left"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
