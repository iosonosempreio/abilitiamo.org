import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import styles from "./MembroComitato.module.scss";
import classNames from "classnames";

export default function MembroComitato({ image, name, role, bio }) {
	return (
		<Row className={classNames("d-flex", "align-items-center", "mb-5")}>
			<Col xs={{ span: 6, offset: 3 }} md={{ span: 4, offset: 0 }}>
				<Image src={image} />
			</Col>
			<Col xs={{ span: 10, offset: 1 }} md={{ span: 12, offset: 0 }} xl={{ span: 8, offset: 0 }}>
				<h5 className="text-center text-md-start">{name}</h5>
				<p>
					<small>{bio}</small>
				</p>
			</Col>
		</Row>
	);
}
