import React, { useEffect, useRef } from "react"
import { useWindowSize } from "./hooks"
import "./panel.scss"

export default function Panel() {
  const backPanelRef = useRef()
  const { width } = useWindowSize()

  useEffect(() => {
    if (width < 890) {
      backPanelRef.current.classList.remove("panel--expanded")
      backPanelRef.current.classList.add("panel--mobile")
    } else {
      if (backPanelRef.current.classList.contains("panel--mobile")) {
        backPanelRef.current.classList.remove("panel--mobile")
      }

      if (
        (document.body.scrollTop === 0 ||
          document.documentElement.scrollTop === 0) &&
        !backPanelRef.current.classList.contains("panel--expanded")
      ) {
        backPanelRef.current.classList.add("panel--expanded")
      }

      if (
        (document.body.scrollTop > 0 ||
          document.documentElement.scrollTop > 0) &&
        backPanelRef.current.classList.contains("panel--expanded")
      ) {
        backPanelRef.current.classList.remove("panel--expanded")
      }

      window.addEventListener("scroll", handleScroll)

      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  })

  const handleScroll = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      backPanelRef.current.classList.remove("panel--expanded")
    } else {
      backPanelRef.current.classList.add("panel--expanded")
    }
  }

  return (
    <div ref={backPanelRef} className="panel panel--expanded magenta"></div>
  )
}
