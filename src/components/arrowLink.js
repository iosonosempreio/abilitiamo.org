import React from "react"
import { Link } from "gatsby"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { BsArrowRightShort } from "react-icons/bs"
import styles from "../styles/arrowLink.module.scss"
import classNames from "classnames"
export default function ArrowLink({ data, disabled, type, offset }) {
	return (
		<>
			{type === "external" && (
				<a
					href={!disabled ? data.url : null}
					className={classNames([styles.sidebarLink], { [styles.disabled]: disabled })}
					target="_blank"
					rel="noreferrer"
				>
					<BsArrowRightShort className={classNames(styles.arrow)} /> {data.label}
				</a>
			)}
			{type === "internal" && (
				<Link
					to={!disabled ? data.url : null}
					className={classNames([styles.sidebarLink], { [styles.disabled]: disabled })}
				>
					<BsArrowRightShort className={classNames(styles.arrow)} /> {data.label}
				</Link>
			)}
			{type === "anchor" && (
				<AnchorLink
					offset={offset}
					href={!disabled ? data.url : null}
					className={classNames([styles.sidebarLink], { [styles.disabled]: disabled })}
					target="_blank"
					rel="noreferrer"
				>
					<BsArrowRightShort className={classNames(styles.arrow)} /> {data.label}
				</AnchorLink>
			)}
		</>
	)
}

ArrowLink.defaultProps = {
	offset: 100
}