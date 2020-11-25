import React from "react"
import { Link } from "gatsby"
import { BsArrowRightShort } from "react-icons/bs"
export default function ArrowLink({data}) {
  return (
    <>
      {data.external && <a href={data.url} className="sidebar-link">
        <BsArrowRightShort style={{width:'1.5rem', height:'1.5rem', color: 'var(--red)'}} /> {data.label}
      </a>}
      {!data.external && <Link to={data.url} className="sidebar-link">
        <BsArrowRightShort style={{width:'1.5rem', height:'1.5rem', color: 'var(--red)'}} /> {data.label}
      </Link>}
    </>
  )
}