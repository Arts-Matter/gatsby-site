import React from "react"
import "./headerArea.scss"

export default function HeaderArea({
  topLeft,
  topRight,
  bottomTitle,
  bottomLeft,
  bottomRight,
  useBottom,
}) {
  return (
    <div className="header-area">
      <div className="top">
        <div className="top__left">
          <h1 className="top__title">{topLeft}</h1>
        </div>
        <div className="top__right">
          <h3 className="top__right-content">{topRight}</h3>
        </div>
      </div>
      {useBottom && (
        <div className="bottom">
          <div className="bottom__left">
            <span class="bottom__label">{bottomTitle}</span>
            {bottomLeft}
          </div>
          <div className="bottom__right">{bottomRight}</div>
        </div>
      )}
    </div>
  )
}
