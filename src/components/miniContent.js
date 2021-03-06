import React from "react"
import { Link } from "gatsby";
import PropTypes from "prop-types"
import { useWindowSize } from "./hooks"
import "./miniContent.scss"

const MiniContent = ({ content }) => {
  const [activeItem, setActiveItem] = React.useState(0)
  const { width } = useWindowSize()
  const nav = React.useRef(null)

  const toggleNav = () => {
    nav.current.classList.toggle("open")
  }

  const toggleProgram = index => {
    setActiveItem(index)
    toggleNav()
  }

  if (width > 1080) {
    return (
      <div className="mini-content-wrapper">
        <div className="mini-content">
          <div className="mini-content__nav" ref={nav}>
            <ul>
              {content.map((item, index) => {
                return (
                  <li key={index} className={index === activeItem && "active"}>
                    <button
                      onClick={() => toggleProgram(index)}
                      onKeyUp={() => toggleProgram(index)}
                    >
                      {item.name}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="mini-content__content-container">
            <div className="mini-content__content">
              <h4>{content[activeItem].name}</h4>
              <h3>{content[activeItem].title}</h3>
              <p>{content[activeItem].description}</p>
              <Link to={content[activeItem].link.url}>
                {content[activeItem].link.text}
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mini-content-wrapper">
      <div className="mobile-mini-content">
        <div className="mini-content__nav" ref={nav}>
          <div className="mini-content__nav-bar" role="button" tabIndex={0} onClick={toggleNav} onKeyPress={toggleNav}>
            <div className="mini-content__nav-title">
              {content[activeItem].name}
            </div>
            <div className="mini-content__nav-icon"></div>
          </div>
          <div className="mini-content__options-panel">
            <ul>
              {content.map((item, index) => {
                return (
                  <li key={index} className={index === activeItem ? "active" : ""}>
                    <button
                      onClick={() => toggleProgram(index)}
                      onKeyUp={() => toggleProgram(index)}
                    >
                      {item.name}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="mini-content__content-container">
          <div className="mini-content__content">
            <h4>{content[activeItem].title}</h4>
            <p>{content[activeItem].description}</p>
            <a href={content[activeItem].link.url}>
              {content[activeItem].link.text}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MiniContent

MiniContent.propTypes = {
  content: PropTypes.object.isRequired,
}
