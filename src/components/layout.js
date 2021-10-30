import React from "react"
import NavigationBs from "./navigationBs"
import Footer from "./footer"
import StickyMessage from "./stickyMessage"
import PageHeader from "../components/pageHeader"

export default function Layout(props) {
  return (
    <>
      <NavigationBs navBackground={props.navBackground} />
      { !props.hideStickyMessage && <StickyMessage /> }
      <PageHeader color={props.color} bgColor={props.bgColor}>
        {props.title}
      </PageHeader>
      <div className="layout-main">{props.children}</div>
      <Footer />
    </>
  )
}
