import React from "react"
import "./headerArea.scss"

export default function HeaderArea({ topLeft, topRight, bottom }) {
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
      {bottom && <div className="bottom">{bottom}</div>}
    </div>
  )
}
