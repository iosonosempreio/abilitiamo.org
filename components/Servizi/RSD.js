import classNames from "classnames";
import ArrowLink from "../ArrowLink";
import styles from "./Servizi.module.scss";

import cartaServiziRSD from "../../public/documenti-rsd/carta-servizi-RSD 1.0.1.pdf";
import cartaDirittiRSD from "../../public/documenti-rsd/carta dei diritti.pdf";
import informativaPrivacy from "../../public/documenti-cdd/Informativa Privacy Cascina Cristina Abilitiamo Autismo.pdf";
import moduloURPRSD from "../../public/documenti-rsd/Modulo Segnalazione URP.pdf";
import questionarioSoddisfazioneRSD from "../../public/documenti-rsd/questionario soddisfazione RSD su carta intestata.pdf";
import menuEstivo2022pranzoRSD from "../../public/documenti-rsd/Cascina Cristina_Menu Estate 2022_pranzo.pdf";
import menuEstivo2022cenaRSD from "../../public/documenti-rsd/Cascina Cristina_Menu Estate 2022_cena.pdf";

export default function RSD() {
	return (
		<>
			<h1>RSD</h1>
			<h3>Centro Residenziale per persone adulte con autismo</h3>
			<p>La RSD di Cascina Cristina può accogliere fino a 14 persone.</p>
			<p>Di seguito è possibile scaricare in formato PDF i seguenti documenti:</p>
			<ArrowLink data={{ label: "Carta dei servizi", url: cartaServiziRSD, download: true }} />
			<ArrowLink data={{ label: "Carta dei diritti", url: cartaDirittiRSD, download: true }} />
			<ArrowLink data={{ label: "Informativa privacy", url: informativaPrivacy, download: true }} />
			<ArrowLink disabled={true} data={{ label: "Modulo richiesta inserimento", url: "", download: true }} />
			<ArrowLink data={{ label: "Modulo segnalazione URP", url: moduloURPRSD, download: true }} />
			<ArrowLink data={{ label: "Questionario di soddisfazione", url: questionarioSoddisfazioneRSD, download: true }} />
			<ArrowLink data={{ label: "Menù estivo pranzo 2022", url: menuEstivo2022pranzoRSD, download: true }} />
			<ArrowLink data={{ label: "Menù estivo cena 2022", url: menuEstivo2022cenaRSD, download: true }} />
		</>
	);
}
