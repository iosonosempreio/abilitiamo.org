import classNames from "classnames";
import ArrowLink from "../ArrowLink";
import styles from "./Servizi.module.scss";

import cartaServiziCDD from "../../public/documenti-cdd/Carta servizi CDD 1.1.pdf";
import cartaDiritti from "../../public/documenti-cdd/Carta dei diritti.pdf";
import informativaPrivacy from "../../public/documenti-cdd/Informativa Privacy Cascina Cristina Abilitiamo Autismo.pdf";
import moduloURP from "../../public/documenti-cdd/Modulo Segnalazione URP.pdf";
import questionarioSoddisfazione from "../../public/documenti-cdd/QUESTIONARIO GRADIMENTO CDD.pdf";
import richiestaInserimento from "../../public/documenti-cdd/domanda di inserimento cdd.pdf";

export default function CDD({ className }) {
	return (
		<div className={classNames(className)}>
			<h1>CDD</h1>
			<h4>Centro Diurno per persone adulte con autismo</h4>
			<p>Il CDD di Cascina Cristina può accogliere fino a 15 persone.</p>
			<p>Di seguito è possibile scaricare in formato PDF i seguenti documenti:</p>
			<ArrowLink data={{ label: "Carta dei servizi", url: cartaServiziCDD, download: true }} />
			<ArrowLink data={{ label: "Carta dei diritti", url: cartaDiritti, download: true }} />
			<ArrowLink data={{ label: "Informativa privacy", url: informativaPrivacy, download: true }} />
			<ArrowLink data={{ label: "Modulo richiesta inserimento", url: richiestaInserimento, download: true }} />
			<ArrowLink data={{ label: "Modulo segnalazione URP", url: moduloURP, download: true }} />
			<ArrowLink data={{ label: "Questionario di soddisfazione", url: questionarioSoddisfazione, download: true }} />
		</div>
	);
}
