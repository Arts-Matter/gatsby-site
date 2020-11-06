import React from "react"
import { Link } from "gatsby"
import "./newsBottomHeaderArea.scss"

export default function NewsBottomHeaderArea() {
  return (
    <>
      <div className="bottom-left">
        <div className="bottom-left__label">Featured Post</div>
        <div className="bottom-left__date">2019-04-04 | News</div>
        <div className="bottom-left__title">
          500 Student Animators Converge on Paramount Pictures
        </div>
        <div className="bottom-left__description">
          Los Angeles is the world capital of media and entertainment, yet only
          7% of LA schools offer courses in media arts.
        </div>
        <Link className="bottom-left__link" to="/news/53h9cnhCcWudxIJbiLLOCg">
          <div className="bottom-left__more"></div>
        </Link>
      </div>
      <div className="bottom-right">
        <div className="bottom-right__image-container">
          <div className="bottom-right__image"></div>
        </div>
      </div>
    </>
  )
}
