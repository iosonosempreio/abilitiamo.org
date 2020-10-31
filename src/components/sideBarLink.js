import React from "react"
import { Link } from "gatsby"
import { BsArrowRightShort } from "react-icons/bs"
export default function SideBarLink({data}) {
  return (
    <Link to={data.url}>
      <BsArrowRightShort style={{width:'1.5rem', height:'1.5rem', color: 'var(--red)'}} /> {data.label}
    </Link>
  )
}

SideBarLink.defaultProps = {}
