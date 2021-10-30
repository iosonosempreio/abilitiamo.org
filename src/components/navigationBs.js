import React from "react"
import { Link } from "gatsby"
// import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa"
import Logo from "./logo"
import classNames from "classnames"
import styles from "../styles/navigationBs.module.scss"
import { Container, Navbar, Nav } from "react-bootstrap"
import items from "../menu-items.json"

export default function NavigationBs({ background }) {
	return (
		<>
			<Navbar className={styles.navbar} sticky="top" expand="md">
				<Container fluid>
					<Logo showOnlus={true} logoStyle={{ marginLeft: 8 }} />
					<Navbar.Toggle aria-controls="abilitiamo-main-navbar" />
					<Navbar.Collapse id="abilitiamo-main-navbar">
						<Nav className="ms-auto">
							{items
								.filter(i => i.menues.indexOf("main") > -1)
								.map(item => {
									return (
										<Link
											className={classNames("nav-link", styles.item, { [`${styles.donaOra}`]: item.url === "/dona-ora" })}
											key={item.label}
											to={item.url}
										>
											{item.label}
										</Link>
									)
								})}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	)
}
