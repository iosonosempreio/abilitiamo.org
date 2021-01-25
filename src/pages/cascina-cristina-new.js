import React, { useRef } from "react"
import "intersection-observer" // optional polyfill
import Observer from "@researchgate/react-intersection-observer"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import styles from "../styles/page.module.scss"
import stylesCascinaCristina from "../styles/cascinaCristina.module.scss"
import classNames from "classnames"

import sections from "../components/cascina-crtistina-sections/cascina-cristina-sections"

export default function CascinaCristina() {
	const sectionNav = useRef()
	const observerOptions = {
		onChange: event => {
			if (event.isIntersecting) {
				sectionNav.current
					.querySelectorAll("." + stylesCascinaCristina.sectionNavItem)
					.forEach(a => a.classList.remove(stylesCascinaCristina.active))
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
			<Navigation />
			<div
				className={classNames("container-fluid", styles.pageHeader, "text-center")}
				style={{ backgroundColor: "var(--beige)" }}
			>
				<div className={["container"].join(" ")}>
					<div className="col-12 col-md-10 offset-md-1">
						<span>
							<h1>Cascina Cristina</h1>
							<p>Un polo territoriale per la presa in carico della persona adulta con disturbi dello spettro autistico</p>
						</span>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row my-5">
					<div className="col-12 col-md-7 offset-md-1">
						<p className={["paragraph", "paragraphBig"].join(" ")}>
							Il progetto Cascina Cristina nasce per rispondere al bisogno del territorio dell'insubria e della brianza di
							strutture adatte ad ospitare giovani adulti con autismo.
						</p>
						<p>
							Vista l’assenza di strutture adatte ad ospitare giovani adulti con autismo nel territorio canturino e nelle aree
							circostanti, Cascina Cristina potrebbe diventare per l’area dell'Insubria e della Brianza un modello pilota e uno
							stimolo per altri enti per la realizzazione di strutture similari, rispondendo così al forte bisogno del
							territorio e delle famiglie che vi appartengono.
						</p>
					</div>
				</div>
			</div>
			<div className="container-fluid">
				<div id="scrolling-container" className="container" style={{ backgroundColor: "white" }}>
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
								<div id={d.anchor.slice(1)} >
									{d.content || <h1 style={{ gridColumn: "1 / -1" }}>{d.title}</h1>}
								</div>
							</Observer>
						)
					})}
				</div>
			</div>
			<Footer />
		</span>
	)
}
