import { Card } from "react-bootstrap";
import info from "../../utils/info.json";
import donateBank from "../../images/assegnozzo.jpg";
import classNames from "classnames";

export default function BankTransferDonation() {
	return (
		<Card className="mb-3">
			<Card.Body>
				<h3 className="fw-bold mt-0">Bonifico bancario</h3>
				<p>
					Puoi donare tramite bonifico bancario sul nostro c/c. Ricordati di controllare se la tua banca offre la
					possibilità di azzerare i costi di commissione.
				</p>
				<img
					className={classNames("img-fluid", "mb-3", "rounded-3")}
					src={donateBank.src}
					alt="Foto di un assegno intestato ad Abilitiamo"
				/>

				<p>Ecco come intestare il bonifico:</p>
				<h6 style={{ color: "var(--azure)" }} className="mt-3 mb-0">
					IBAN
				</h6>
				<p>{info.associazione.iban}</p>
				<h6 style={{ color: "var(--azure)" }} className="mt-3 mb-0">
					Intestatario
				</h6>
				<p>{info.associazione.ragioneSociale}</p>
				<h6 style={{ color: "var(--azure)" }} className="mt-3 mb-0">
					Presso
				</h6>
				<p>{info.associazione.filiale}</p>
				<h6 style={{ color: "var(--azure)" }} className="mt-3 mb-0">
					Causale
				</h6>
				<p>{info.associazione.causale}</p>
			</Card.Body>
		</Card>
	);
}
