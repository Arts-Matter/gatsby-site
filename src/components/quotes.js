import React, { useState } from "react"
import "./quotes.scss"

export default function Quotes({ quotes = [] }) {
  const [quoteIndex, setQuoteIndex] = useState(0)

  const handleNextQuote = () => {
    if (quotes.length === 0) return

    if (quoteIndex === quotes.length - 1) return setQuoteIndex(0)

    const newIndex = quoteIndex + 1
    setQuoteIndex(newIndex)
  }

  const handlePreviousQuote = () => {
    if (quotes.length === 0) return

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
                  {quotes[quoteIndex] && quotes[quoteIndex].quote}
                </h2>
                <h5 className="quotes-container__tag">
                  {quotes[quoteIndex] && quotes[quoteIndex].tag}
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
