import React from "react"
import "./headerArea.scss"

export default function HeaderArea({
  topLeft,
  topRight,
  bottom,
  backgroundClass,
}) {
  const topRightDefault =
    "ArtsMatter draws upon a dynamic catalogue of content provided by top artists and creators to produce high-impact arts education programming for Los Angeles schools."
  return (
    <div className={`header-area ${backgroundClass}`}>
      <div className="top">
        <div className="top__left">
          <h1 className="top__title">{topLeft}</h1>
        </div>
        <div className="top__right">
          <h3 className="top__right-content">
            {topRight ? topRight : topRightDefault}
          </h3>
        </div>
      </div>
      {bottom && <div className="bottom">{bottom}</div>}
    </div>
  )
}
