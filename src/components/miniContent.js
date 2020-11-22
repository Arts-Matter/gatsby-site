import React from "react"
import PropTypes from "prop-types"
import { useWindowSize } from "./hooks"
import "./miniContent.scss"

const MiniContent = ({ content }) => {
  const [activeItem, setActiveItem] = React.useState(0)
  const { width } = useWindowSize()

  if (width > 890) {
    return (
      <div class="mini-content-wrapper">
        <div class="mini-content">
          <div class="mini-content__nav">
            <ul>
              {content.map((item, index) => {
                return (
                  <li
                    key={index}
                    class={index === activeItem && "active"}
                    onClick={() => setActiveItem(index)}
                  >
                    {item.name}
                  </li>
                )
              })}
            </ul>
          </div>
          <div class="mini-content__content-container">
            <div class="mini-content__content">
              <h5>{content[activeItem].name}</h5>
              <h3>{content[activeItem].title}</h3>
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

  return (
    <div class="mini-content-wrapper">
      <div class="mobile-mini-content">
        <div class="mini-content__nav">
          <div class="mini-content-nav__bar">
            <div class="mini-content-nav__title">{content[activeItem].name}</div>
            <div class="icon"></div>
          </div>
          <div class="options-panel">
            <ul>
              {content.map((item, index) => {
                return (
                  <li
                    key={index}
                    class={index === activeItem && "active"}
                    onClick={() => setActiveItem(index)}
                  >
                    {item.name}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div class="mini-content__content-container">
          <div class="mini-content__content">
            <h5>{content[activeItem].name}</h5>
            <h3>{content[activeItem].title}</h3>
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
