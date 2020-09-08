import React from "react"
import "./headerArea.scss"

export default function HeaderArea({ active, top, bottom }) {
  return (
    <div className="header-area">
      <div className="top">{top}</div>
      {bottom && <div className="bottom">{bottom}</div>}
    </div>
  )
}
