// import styles from "./SectionCascinaCristina.module.scss";
import { Row, Col } from "react-bootstrap";
import classNames from "classnames";
import Image from "next/image";
export default function SectionCascinaCristina({
	title,
	subtitle,
	image,
	description,
}) {
	return (
		<>
			<Row className={classNames("mt-3", "mt-md-5")}>
				<Col
					xs={{ span: 12, offset: 0 }}
					sm={{ span: 10, offset: 1 }}
					lg={{ span: 5, offset: 0 }}
					className={classNames(
						"d-flex",
						"flex-column",
						"justify-content-center"
					)}
				>
					<h1>{title}</h1>
					<p className="paragraphBig mb-4">{subtitle}</p>
				</Col>
				<Col xs={12} lg={{ span: 7, offset: 0 }}>
					<Image src={image} className={classNames("rounded")} />
				</Col>
			</Row>
			<Row className={classNames("mb-5", "mb-md-5")}>
				<Col
					xs={12}
					sm={{ span: 10, offset: 1 }}
					lg={{ span: 7, offset: 5 }}
					xl={{ span: 10, offset: 1 }}
					className={classNames(
						"mt-4",
						"mt-lg-4",
						"mt-xl-5",
						"mb-3",
						"mb-md-5",
						"mb-lg-3"
					)}
				>
					<p className={"styles.description"}>{description}</p>
				</Col>
			</Row>
		</>
	);
}
