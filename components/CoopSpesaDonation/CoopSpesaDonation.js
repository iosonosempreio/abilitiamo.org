import { useState } from "react";
import Image from "next/image";
import { Card, Col, Modal, Row } from "react-bootstrap";
import CoopSpesaLocandina from "../../images/coop-spesa-locandina.png";

export default function CoopSpesaDonation() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<Card className="mb-3">
				<Card.Body>
					<h3 className="fw-bold mt-0">Spesa solidale da Coop</h3>
					<div
						className="mb-3 rounded"
						style={{
							borderRadius: "5px",
							overflow: "hidden",
							height: 360,
							position: "relative",
							backgroundColor: "var(--beige)",
							cursor: "pointer",
						}}
					>
						<Image
							src={CoopSpesaLocandina}
							alt="Locandina iniziativa spesa solidale presso Coop"
							layout="fill"
							objectFit="contain"
							onClick={handleShow}
						/>
					</div>
					<h5 className="mb-3">
						Puoi fare una spesa solidale per Cascina Cristina, grazie a Coop!
					</h5>
					<p>
						Partecipa all’iniziativa{" "}
						<strong>“Mettiamo in Cascina il Futuro”</strong>, promossa da
						<strong>Coop Lombardia</strong> e{" "}
						<strong>Comitato Soci Coop Cantù e Capiago Intimiano</strong>.
					</p>
					<p>
						Fino al 20 maggio 2022, presso l’Ipercoop Mirabello di Cantù e la
						Coop di Capiago Intimiano, sarà possibile:
					</p>
					<p>
						• Fare una donazione direttamente in cassa, chiedendo una Card
						Solidale del valore di 3€
					</p>
					<p>
						• Convertire 300 punti della Carta Socio in una donazione del valore
						di 3€
					</p>
					<h5>Grazie per il tuo aiuto!</h5>
				</Card.Body>
			</Card>
			<Modal show={show} onHide={handleClose} size="lg">
				<Modal.Header closeButton>
					<Modal.Title>Spesa solidale da Coop</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Image
						src={CoopSpesaLocandina}
						alt="Locandina iniziativa spesa solidale presso Coop"
						layout="responsive"
						onClick={handleShow}
					/>
				</Modal.Body>
			</Modal>
		</>
	);
}
