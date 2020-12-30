import React from "react"
import "./headerArea.scss"

export default function HeaderArea({
  topLeft,
  topRight,
  bottom,
  backgroundClass,
  customTop,
}) {
  const topRightDefault =
    "ArtsMatter draws upon a dynamic catalogue of content provided by top artists and creators to produce high-impact arts education programming for Los Angeles schools."

  const renderDefaultTop = () => {
    return (
      <React.Fragment>
        <div className="top__left">
          <h1 className="top__title">{topLeft}</h1>
        </div>
        <div className="top__right">
          <h3 className="top__right-content">
            {topRight ? topRight : topRightDefault}
          </h3>
        </div>
      </React.Fragment>
    )
  }

  const renderCustomTop = () => {
    return (
      <React.Fragment>
        <div className="top__left">{topLeft}</div>
        <div className="top__right">{topRight}</div>
      </React.Fragment>
    )
  }
  return (
    <div
      className={`header-area${backgroundClass ? " " + backgroundClass : ""}`}
    >
      <div className="top">
        {customTop === true ? renderCustomTop() : renderDefaultTop()}
      </div>
      {bottom && <div className="bottom">{bottom}</div>}
    </div>
  )
}
