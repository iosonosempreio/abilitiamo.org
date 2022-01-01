import Link from "next/link";
import { useRouter } from "next/router";
import { Navbar, Nav } from "react-bootstrap";
import classNames from "classnames";
import styles from "./Navigation.module.scss";
import navigationItems from "../../utils/navigation.json";
import Logo from "../Logo";

export default function Navigation() {
	const router = useRouter();
	return (
		<>
			<Navbar
				className={classNames(styles.navbar, "px-3")}
				sticky="top"
				expand="lg"
			>
				<Link href="/">
					<a className={classNames(styles.logo, "no-hover")}>
						<Logo showOnlus={true} logoStyle={{ marginLeft: 8 }} />
					</a>
				</Link>
				<Navbar.Toggle aria-controls="abilitiamo-main-navbar" />
				<Navbar.Collapse id="abilitiamo-main-navbar">
					<Nav className={classNames("ms-auto", "align-items-center")}>
						{navigationItems
							.filter((i) => i.menues.indexOf("main") > -1)
							.map((item) => {
								return (
									<Link key={item.label} href={item.url}>
										<a
											className={classNames(
												"nav-link",
												"no-hover",
												styles.item,
												{ [`${styles.active}`]: router.pathname == item.url },
												{
													[`${styles.donaOra}`]: item.url === "/dona-ora",
												}
											)}
										>
											{item.label}
										</a>
									</Link>
								);
							})}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}
