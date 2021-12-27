import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";
import classNames from "classnames";
import Navigation from "../Navigation";
import Footer from "../Footer";
import styles from "./PageTemplate.module.scss";

export default function PageTemplate({ children, title }) {
	return (
		<>
			<Head>
				<title>{title} | Abilitiamo.org</title>
			</Head>
			<Navigation />
			<div className={styles.header}>
				<Container
					className={classNames(
						"d-flex",
						"flex-column",
						"justify-content-center",
						"h-100"
					)}
				>
					<Row>
						<Col
							sm={{ span: 12, order: 0, offset: 0 }}
							md={{ span: 10, order: 0, offset: 1 }}
						>
							<h1>{title}</h1>
						</Col>
					</Row>
				</Container>
			</div>
			{children}
			<Footer />
		</>
	);
}
