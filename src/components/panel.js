import React, { useEffect, useRef } from "react"

export default function Panel() {
  const backPanelRef = useRef()

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
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
