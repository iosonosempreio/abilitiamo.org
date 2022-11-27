import classNames from "classnames";
import ArrowLink from "../ArrowLink";
import styles from "./Servizi.module.scss";

import cartaServiziRSD from "../../public/documenti-rsd/carta-servizi-RSD 1.2.pdf";
import cartaDirittiRSD from "../../public/documenti-rsd/carta dei diritti.pdf";
import informativaPrivacy from "../../public/documenti-cdd/Informativa Privacy Cascina Cristina Abilitiamo Autismo.pdf";
import moduloURPRSD from "../../public/documenti-rsd/Modulo Segnalazione URP.pdf";
import questionarioSoddisfazioneRSD from "../../public/documenti-rsd/questionario soddisfazione RSD su carta intestata.pdf";
import richiestaInserimento from "../../public/documenti-rsd/domanda di inserimento rsd.pdf";
export default function RSD({className}) {
	return (
		<div className={classNames(className)}>
			<h1>RSD</h1>
			<h4>Centro Residenziale per persone adulte con autismo</h4>
			<p>La RSD di Cascina Cristina può accogliere fino a 14 persone.</p>
			<p>Di seguito è possibile scaricare in formato PDF i seguenti documenti:</p>
			<ArrowLink data={{ label: "Carta dei servizi", url: cartaServiziRSD, download: true }} />
			<ArrowLink data={{ label: "Carta dei diritti", url: cartaDirittiRSD, download: true }} />
			<ArrowLink data={{ label: "Informativa privacy", url: informativaPrivacy, download: true }} />
			<ArrowLink data={{ label: "Modulo richiesta inserimento", url: richiestaInserimento, download: true }} />
			<ArrowLink data={{ label: "Modulo segnalazione URP", url: moduloURPRSD, download: true }} />
			<ArrowLink data={{ label: "Questionario di soddisfazione", url: questionarioSoddisfazioneRSD, download: true }} />
		</div>
	);
}
