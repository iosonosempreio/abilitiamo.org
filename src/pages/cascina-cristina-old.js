import React, { useRef, useEffect } from "react"
import "intersection-observer" // optional polyfill
import Observer from "@researchgate/react-intersection-observer"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import styles from "../styles/page.module.scss"
import stylesCascinaCristina from "../styles/cascinaCristina.module.scss"

import sections from "./cascina-crtistina-sections/cascina-cristina-sections"

export default function CascinaCristina() {
	useEffect(() => {
		document.documentElement.style.setProperty("scroll-behavior", "smooth")
		// returned function will be called on component unmount
		return () => {
			document.documentElement.style.setProperty("scroll-behavior", "auto")
		}
	}, [])

	const sectionNav = useRef()
	const observerOptions = {
		onChange: event => {
			if (event.isIntersecting) {
				sectionNav.current.querySelectorAll("." + stylesCascinaCristina.sectionNavItem).forEach(a => a.classList.remove(stylesCascinaCristina.active))
				sectionNav.current.querySelector(".name-" + event.target.id).classList.add(stylesCascinaCristina.active)
			}
		},
		rootMargin: "0% 0% -67%",
	}
	const scrollToEl = d => {
		const el = document.querySelector(d.anchor)
		const bbox = el.getBoundingClientRect()
		window.scrollBy({
			top: bbox.y - 162,
			left: 0,
			behavior: "smooth",
		})
	}
	return (
		<span className={styles.cascinaCristina}>
			<Navigation background="var(--beige)" />
			<div className={[styles.pageHeader, "text-center"].join(" ")}>
				<span>
					<h1>Cascina Cristina</h1>
					<p className="paragraph-big">Un polo territoriale per la presa in carico della persona adulta con disturbi dello spettro autistico</p>
				</span>
			</div>
			<div className="layout-main">
				<div className="a-row">
					<div className="content">
						<p className={["paragraph", "paragraphBig"].join(" ")}>
							Un nome, due significati, un unico obiettivo.<br/>Abitare abilitando è lo
							scopo per il quale la nostra associazione è nata: creare una casa per
							i nostri ragazzi autistici dove potranno esprimere al meglio le loro
							abilità.
						</p>
					</div>
					<div className={[styles.sideBar].join(" ")}>
						<div className="position-sticky"  style={{top: 104}}>
							{/* {sidebar1.map((d, i) => (
								<ArrowLink key={i} data={d} />
							))} */}
						</div>
					</div>
				</div>
			</div>
			<div id="scrolling-container" className="layout-main" style={{ padding: 0, backgroundColor: "white" }}>
				<div ref={sectionNav} className={[stylesCascinaCristina.sectionsNavigation].join(" ")}>
					{sections.map((d, i) => {
						return (
							<span
								key={i}
								className={[stylesCascinaCristina.sectionNavItem, "pointer", "name-" + d.anchor.slice(1)].join(" ")}
								onClick={() => scrollToEl(d)}
								onKeyDown={() => scrollToEl(d)}
								role="button"
								tabIndex={0}
							>
								<div className={stylesCascinaCristina.sectionStatus}></div>
								<p>{("00" + (i + 1)).slice(-2)}</p>
								<p>{d.title}</p>
							</span>
						)
					})}
				</div>
				{sections.map((d, i) => {
					return (
						<Observer key={i} {...observerOptions}>
							<div
								id={d.anchor.slice(1)}
								className={[stylesCascinaCristina.section].join(" ")}
								// data-sal="fade"
							>
								{d.content || <h1 style={{ gridColumn: "1 / -1" }}>{d.title}</h1>}
							</div>
						</Observer>
					)
				})}
			</div>
			<Footer />
		</span>
	)
}
