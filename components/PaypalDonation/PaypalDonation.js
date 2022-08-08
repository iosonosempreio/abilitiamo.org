import { useState, useEffect } from "react";
import Link from "next/link";
import ArrowLink from "../ArrowLink";
import { Card, Form, InputGroup } from "react-bootstrap";

export default function PaypalDonation() {
	const [url, setUrl] = useState(null);
	const [selection, setSelection] = useState("20,00");
	const [custom, setCustom] = useState("15,00");
	// const [amount, setAmount] = useState()
	const [anonymous, setAnonymous] = useState(false);
	const [terminiCondizioni, setTerminiCondizioni] = useState(false);

	const presets = [
		{
			amount: "10,00",
			defaultChecked: false,
			text: "Dona 10 € per posare un mattone del futuro (10 x 10 cm)",
		},
		{
			amount: "30,00",
			defaultChecked: true,
			text: "Dona 30 € per tre mattoni del futuro",
		},
		{
			amount: "50,00",
			defaultChecked: false,
			text: "Dona 50 € per cinque mattoni del futuro",
		},
		{
			amount: "100,00",
			defaultChecked: false,
			text: "Dona 100 € per dieci mattoni del futuro",
		},
		{
			amount: "altro importo",
			defaultChecked: false,
			text: "Dona un importo a tua scelta",
		},
	];

	useEffect(() => {
		let _amount;

		if (selection === "altro importo") {
			_amount = custom;
		} else {
			_amount = selection;
		}

		_amount = encodeURIComponent(
			_amount.replaceAll(".", "").replaceAll(",", ".")
		);
		const _item_name = encodeURIComponent("Donazione per Cascina Cristina");
		const _business = encodeURIComponent("info@abilitiamo.org");
		const _return = "";
		const _cancel_return = "";
		let url = `https://www.paypal.com/donate/?cmd=_donations&business=${_business}&item_name=${_item_name}&amount=${_amount}&currency_code=EUR&charset=UTF-8return=${_return}&cancel_return=${_cancel_return}`;
		setUrl(url);
	}, [selection, custom, anonymous]);

	return (
		<Card className="mb-3">
			<Card.Body>
				<h3 className="fw-bold mt-0">Tramite Paypal o carta di credito</h3>
				{/* <span
          className="position-absolute top-0 start-1 translate-middle badge rounded-pill"
          style={{ backgroundColor: "var(--red)" }}
        >
          Novità
        </span> */}
				<p>
					Paypal è un sistema per pagamenti elettronici. Per utilizzarlo non è
					necessario avere un account, basta una carta di credito o prepagata.
				</p>
				<p>Scegli quanto donare:</p>
				<Form>
					<Form.Group className="mb-3">
						{presets.map((d, i) => (
							<Form.Check
								key={i}
								type="radio"
								name="preset"
								label={d.text}
								value={d.amount}
								onChange={(e) => setSelection(d.amount)}
								defaultChecked={d.defaultChecked}
								className="mb-3"
							/>
						))}
					</Form.Group>

					{selection === "altro importo" && (
						<>
							<Form.Label htmlFor="custom-amount">
								Scegli l'importo della tua donazione
							</Form.Label>
							<InputGroup className="mb-3">
								<InputGroup.Text id="custom-amount">€</InputGroup.Text>
								<Form.Control
									placeholder="Inserisci un importo"
									aria-label="amount"
									aria-describedby="custom-amount"
									onChange={(e) => setCustom(e.target.value)}
									defaultValue="150,00"
								/>
							</InputGroup>
						</>
					)}

					<Form.Group className="mb-3">
						<Form.Label htmlFor="termini-condizioni">
							I tuoi dati personali saranno trattati in accordo all’informativa
							sulla privacy che puoi consultare alla pagina{" "}
							<Link href="/privacy">abilitiamo.org/privacy</Link>. Non
							dimenticarti che sono previsti{" "}
							<Link href="/benefici-fiscali">benefici fiscali</Link> per chi
							sceglie di donare.
							<h5 className="mt-3">
								Abitare è abilitare, metti in cascina il futuro insieme a noi!
							</h5>
						</Form.Label>
						<Form.Check
							type="checkbox"
							id="termini-condizioni"
							label="Accetto termini e condizioni"
							onChange={(e) => setTerminiCondizioni(e.target.checked)}
						/>
					</Form.Group>
				</Form>

				{url && (
					<ArrowLink
						data={{
							label: "Dona con Paypal",
							url: url,
						}}
						disabled={!terminiCondizioni || !url}
					/>
				)}
			</Card.Body>
		</Card>
	);
}
