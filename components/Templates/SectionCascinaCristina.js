import styles from "./SectionCascinaCristina.module.scss";
import { Row, Col } from "react-bootstrap";
import classNames from "classnames";
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
					<h4 className="paragraphBig mb-4">{subtitle}</h4>
				</Col>
				<Col xs={12} lg={{ span: 7, offset: 0 }}>
					<img src={image.default.src}  className={classNames("rounded", "img-fluid")} />
				</Col>
			</Row>
			<Row className={classNames("mb-5", "mb-md-5")}>
				<Col
					// xs={12}
					sm={{ span: 10, offset: 1 }}
					lg={{ span: 7, offset: 5 }}
					// xl={{ span: 10, offset: 1 }}
					className={classNames(
						"mt-4",
						"mt-lg-4",
						"mt-xl-5",
						"mb-3",
						"mb-md-5",
						"mb-lg-3",
						styles.description
					)}
				>
					<p>{description}</p>
				</Col>
			</Row>
		</>
	);
}
