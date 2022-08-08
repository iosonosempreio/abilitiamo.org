import classNames from "classnames";
import { Card } from "react-bootstrap";
import donateSatispay from "../../images/donate-satispay.png";
import info from "../../utils/info.json";
import ArrowLink from "../ArrowLink";

export default function SatispayDonation() {
	return (
		<Card className="mb-3">
			<Card.Body>
				<h3 className="fw-bold mt-0">Satispay</h3>
				<a href={info.associazione.satispay} target="_blank" rel="noreferrer">
					<img
						className={classNames("mb-3", "w-100", "image-fluid", "rounded-3")}
						src={donateSatispay.src}
						alt="Donazione via Satispay"
					/>
				</a>
				<p>
					Sblocca il tuo smartphone e dona con Satispay: un’applicazione per iPhone, Android e Windows Phone che
					permette di fare pagamenti veloci e gratuiti.
				</p>
				<ArrowLink data={{ label: "Dona con Satispay", url: info.associazione.satispay }} />
				<ArrowLink
					data={{
						label: "Dona con Satispay",
						url: info.associazione.satispay,
						external: true,
					}}
					type="external"
				/>
			</Card.Body>
		</Card>
	);
}
