import React from "react"
import Navigation from "./navigation"
import Footer from "./footer"
import StickyMessage from "./stickyMessage"
export default function Layout(props) {
  return (
    <>
      <Navigation navBackground={props.navBackground} />
      <StickyMessage />
      <div className="layout-main">{props.children}</div>
      <Footer />
    </>
  )
}
