import React, { useState, useEffect } from "react"
import "./hamburgerMenu.scss"

export default function HamburgerMenu({
  headerRef,
  setMobileExpanded,
  mobileNavRef,
  width,
  activeColor,
}) {
  const [active, setActive] = useState(false)
  const inactiveClass = "hamburger"
  const activeClass = "hamburger is-active"

  useEffect(() => {
    const handleResize = () => {
      if (width > 889 && width < 900) {
        setActive(false)
        headerRef.current.classList.remove("white")
        headerRef.current.classList.remove("magenta")
        headerRef.current.classList.add(activeColor)
        mobileNavRef.current.removeAttribute("style")
        setMobileExpanded(false)
      }
    }

    if (
      width < 890 &&
      !active &&
      !headerRef.current.classList.contains("white")
    ) {
      headerRef.current.classList.add("white")
      headerRef.current.classList.remove(activeColor)
    }

    handleResize()
  }, [width, headerRef, mobileNavRef, setMobileExpanded])

  const handleClick = () => {
    setActive(!active)

    if (!active) {
      headerRef.current.classList.remove("white")
      headerRef.current.classList.add("magenta")
      mobileNavRef.current.style.height = "500px"
      setMobileExpanded(true)
    } else {
      headerRef.current.classList.add("white")
      headerRef.current.classList.remove("magenta")
      mobileNavRef.current.style.height = "0px"
      setMobileExpanded(false)
    }
  }

  return (
    <button
      className={active ? activeClass : inactiveClass}
      type="button"
      onClick={handleClick}
      aria-label="Toggle Menu"
      aria-pressed={active}
      aria-expanded={active}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  )
}
