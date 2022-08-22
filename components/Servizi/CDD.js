import classNames from "classnames";
import ArrowLink from "../ArrowLink";
import styles from "./Servizi.module.scss";

import cartaServiziCDD from "../../public/documenti-cdd/Carta servizi CDD 1.0.1.pdf";
import cartaDiritti from "../../public/documenti-cdd/Carta dei diritti.pdf";
import informativaPrivacy from "../../public/documenti-cdd/Informativa Privacy Cascina Cristina Abilitiamo Autismo.pdf";
import moduloURP from "../../public/documenti-cdd/Modulo Segnalazione URP.pdf";
import questionarioSoddisfazione from "../../public/documenti-cdd/QUESTIONARIO GRADIMENTO CDD.pdf";
import menuEstivo2022 from "../../public/documenti-cdd/Cascina Cristina_Menu Estate 2022_pranzo.pdf";
import menuAlternativeFisse from "../../public/documenti-cdd/Cascina Cristina_Alternative Fisse.pdf";

export default function CDD() {
	return (
		<>
			<h1>CDD</h1>
			<h3>Centro Diurno per persone adulte con autismo</h3>
			<p>Il CDD di Cascina Cristina può accogliere fino a 15 persone.</p>
			<p>Di seguito è possibile scaricare in formato PDF i seguenti documenti:</p>
			<ArrowLink data={{ label: "Carta dei servizi", url: cartaServiziCDD, download: true }} />
			<ArrowLink data={{ label: "Carta dei diritti", url: cartaDiritti, download: true }} />
			<ArrowLink data={{ label: "Informativa privacy", url: informativaPrivacy, download: true }} />
			<ArrowLink disabled={true} data={{ label: "Modulo richiesta inserimento", url: "", download: true }} />
			<ArrowLink data={{ label: "Modulo segnalazione URP", url: moduloURP, download: true }} />
			<ArrowLink data={{ label: "Questionario di soddisfazione", url: questionarioSoddisfazione, download: true }} />
			<ArrowLink data={{ label: "Menù estivo 2022", url: menuEstivo2022, download: true }} />
			<ArrowLink data={{ label: "Menù - Alternative fisse", url: menuAlternativeFisse, download: true }} />
		</>
	);
}
