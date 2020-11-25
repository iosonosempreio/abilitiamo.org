import React from "react"
import { Link } from "gatsby"
import classNames from "classNames"
import Layout from "../components/layout"
import ArrowLink from "../components/arrowLink"
import styles from "../styles/page.module.scss"
import info from "../components/assets/info.json"

export default function Donazioni() {
	return (
		<Layout title="Donazioni">
			<div className="a-row">
				<div className="content">
					<p className={classNames("paragraph", "paragraphBig")}>
						Abilitiamo è un’associazione senza scopo di lucro. Sono previsti benefici fiscali per chi sceglie di donare!
					</p>
				</div>
				<div className={[styles.sideBar].join(" ")}>
					<div className="position-sticky" style={{ top: 104 }}>
						<ArrowLink data={{ label: "Benefici fiscali", url: "/benefici-fiscali" }} />
					</div>
				</div>
			</div>

			<div className={classNames(styles.pageBlock, styles.small, "round-borders")}>
				<h2>Erogazioni liberali</h2>
				<p>
					Abilitiamo può ricevere donazioni liberali tramite bonifico bancario, sistemi di pagamento digitali (<a href="#facebook">Facebook</a>,{" "}
					<a href="#paypal">Paypal</a>, <a href="satispay">Satispay</a>) e contanti. Rilasceremo una ricevuta per ogni donazione. In questa pagina trovi tutti i
					dettagli necessari a fare una donazione che sia in regola per godere dei benefici fiscali. <a href="carta-di-credito">Scorri più in basso</a>.
				</p>
			</div>
			<div className={classNames(styles.pageBlock, styles.small, "round-borders")}>
				<h2>Donazione liberale materiale</h2>
				<p>
					La realizzazione di Cascina Cristina è molto onerosa. Siamo alla ricerca di arredamento, attrezzature, di una cucina, di un pulmino e di materiale per il
					giardinaggio o agricoltura. Vuoi liberarti di cose simili? Le tratti per lavoro e vuoi aiutarci con una donazione? Anche per questi casi sono previste {" "}
					<Link to="/benefici-fiscali">agevolazioni fiscali</Link>.
				</p>
			</div>
			<div className={classNames(styles.pageBlock, styles.small, "round-borders")}>
				<h2>5x1000</h2>
				<p>
					Il 5X1000 è una quota delle tasse che hai pagato e che puoi destinare a realtà non-profit. Ogni contribuente può decidere a chi donarla. Destinare ad
					Abilítiamo il tuo 5x1000, è facilissimo! È sufficiente inserire il nostro codice fiscale nella apposita sezione dei moduli per la dichiarazione dei
					redditi: <span style={{ color: "var(--red)", fontWeight: 600 }}>90041140139</span>.
				</p>
			</div>
			<div className={classNames(styles.pageBlock, styles.small, "round-borders")}>
				<h2>Lasciti testamentari</h2>
				<p>
					Il miglioramento della vita delle persone con autismo va oltre il progetto Cascina Cristina. Servono altri luoghi dove erogare servizi e diversificare le
					attività: appartamenti protetti, laboratori, avvio alle autonomie, ecc. Abilitiamo può ricevere anche lasciti testamentari e donazioni di immobili da
					dedicare a questi utilizzi.
				</p>
			</div>

			<div className="a-row">
				<div className="content">
					<p className={classNames("paragraph", "paragraphBig")}>
						Qui sotto troverai le informazioni necessarie per fare una donazione. Vai a questa pagina per conoscere in dettaglio i benefici fiscali di cui potrai
						godere. Se dovesse servire altro non esitare a contattarci!
					</p>
					<br/>
					<h2>Dona con bonifico bancario</h2>
					<p>Puoi donare tramite bonifico bancario sul nostro c/c, controlla se la tua banca offre la possibilità di non pagare i costi di commissione.</p>
					<p>Ecco come intestare il bonifico:</p>
					<span className={styles.info}>
						<h4>IBAN</h4>
						<h3>{info.associazione.iban}</h3>
					</span>
					<span className={styles.info}>
						<h4>Intestatario</h4>
						<h3>{info.associazione.ragioneSociale}</h3>
					</span>
					<span className={styles.info}>
						<h4>Presso</h4>
						<h3>{info.associazione.filiale}</h3>
					</span>
					<span className={styles.info}>
						<h4>Causale</h4>
						<h3>{info.associazione.causale}</h3>
					</span>
					<div className="section-separator" />
					<h2 id="satispay">Dona con satispay</h2>
					<p>Sblocca il tuo smartphone e dona con Satispay!</p>
					<p>Satispay è un’applicazione per iPhone, Android e Windows Phone che permette di fare pagamenti veloci e gratuiti. Per donare clicca qui sotto.</p>
					<ArrowLink data={{ label: "Dona con Satispay", url: "/" }} />
					<div className="section-separator" />
					<h2 id="carta-di-credito">Dona con carta di credito</h2>
					<p>Puoi donare tramite carta di credito attraverso Facebook e Paypal.</p>
					<span className={classNames(styles.info)}>
						<h4>Facebook</h4>
						<p>Visita la nostra pagina facebook e clicca sul pulsante “Fai una donazione”.</p>
						<ArrowLink data={{ label: "facebook.com/abilitiamo", url: info.associazione.facebook, external: true }} />
					</span>
					<span className={classNames(styles.info)}>
						<h4>Payapal</h4>
						<p>Paypal è un sistema per pagamenti elettronici tramite carta di credito.</p>
						<ArrowLink data={{ label: "payapal/abilitiamo", url: info.associazione.paypal, external: true }} />
					</span>
				</div>
				<div className={[styles.sideBar].join(" ")}>
					<div className="position-sticky" style={{ top: 104 }}>
						<ArrowLink data={{ label: "Benefici fiscali", url: "/benefici-fiscali" }} />
					</div>
				</div>
			</div>
		</Layout>
	)
}
