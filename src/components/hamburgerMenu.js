import React, { useState } from "react"
import "./hamburgerMenu.css"

export default function HamburgerMenu({
  headerRef,
  setMobileExpanded,
  mobileNavRef,
}) {
  const [active, setActive] = useState(false)
  const inactiveClass = "hamburger hamburger--slider"
  const activeClass = "hamburger hamburger--slider is-active"

  const handleClick = () => {
    setActive(!active)

    if (!active) {
      headerRef.current.classList.add("header--secondary")
      headerRef.current.classList.remove("header--primary")
      mobileNavRef.current.style.height = "50vh"
      setMobileExpanded(true)
    } else {
      headerRef.current.classList.add("header--primary")
      headerRef.current.classList.remove("header--secondary")
      mobileNavRef.current.style.height = "0px"
      setMobileExpanded(false)
    }
  }

  return (
    <button
      className={active ? activeClass : inactiveClass}
      type="button"
      onClick={handleClick}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  )
}
