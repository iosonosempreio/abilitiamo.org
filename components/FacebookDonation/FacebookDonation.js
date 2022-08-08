import { Card } from "react-bootstrap";
import donateFacebook from "../../images/donate-facebook.gif";
import ArrowLink from "../ArrowLink";
import info from "../../utils/info.json";
import classNames from "classnames";

export default function FacebookDonation() {
	return (
		<Card className="mb-3">
			<Card.Body>
				<h3 className="fw-bold mt-0">Facebook</h3>
				<a href={info.associazione.facebook} target="_blank" rel="noreferrer">
					<img
						className={classNames("image-fluid", "mb-3", "rounded-3")}
						src={donateFacebook.src}
						alt="Donazione via Facebook"
					/>
				</a>
				<p>
					Visita la nostra pagina Facebook e clicca sul pulsante “Fai una donazione”. Per donare è necessario fare
					log-in su Facebook.
				</p>
				<ArrowLink
					data={{
						label: "Dona con Facebook",
						url: info.associazione.facebook,
					}}
				/>
			</Card.Body>
		</Card>
	);
}
