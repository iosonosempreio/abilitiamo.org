import Head from "next/head";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import Date from "../Date";
import classNames from "classnames";
import Navigation from "../Navigation";
import Footer from "../Footer";
import styles from "./PostTemplate.module.scss";
import {
	FaLongArrowAltLeft as PrevIcon,
	FaLongArrowAltRight as NextIcon,
} from "react-icons/fa";

export default function PostTemplate({ postData, children }) {
	return (
		<>
			<Head>
				<title>{postData.title} | Abilitiamo.org</title>
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
							sm={{ span: 12 }}
							md={{ span: 10, offset: 1 }}
							className={classNames("text-center")}
						>
							<h1>{postData.title}</h1>
							<h6>
								<Date dateString={postData.date} />
							</h6>
						</Col>
						{postData.image && (
							<Col sm={{ span: 12, order: 3 }}>
								<div className={classNames(styles.coverImageContainer, "d-flex", "justify-content-center")}>
									<img
										src={postData.image}
										className={classNames(styles.coverImageXXX, "h-100", "mw-100", "rounded-3")}
									/>
								</div>
							</Col>
						)}
					</Row>
				</Container>
			</div>
			<Container>
				<Row>
					<Col
						md={{ span: 8, offset: 2 }}
						className={classNames("pt-5", "pb-4", styles.body)}
					>
						{children}
					</Col>
				</Row>
				<Row>
					<Col
						xs={{ span: 12 }}
						sm={{ span: 6 }}
						className="d-flex justify-content-start justify-content-sm-center align-items-center pb-5"
					>
						{postData.prevPost && (
							<Link href={`/news/${postData.prevPost}`}>
								<a className={classNames(styles.prev, "no-hover")}>
									<PrevIcon /> Articolo precedente<span></span>
								</a>
							</Link>
						)}
					</Col>
					<Col
						sm={{ span: 6 }}
						xs={{ span: 12 }}
						className="d-flex justify-content-end justify-content-sm-center align-items-center pb-5"
					>
						{postData.nextPost && (
							<Link href={`/news/${postData.nextPost}`}>
								<a className={classNames(styles.next, "no-hover")}>
									<span></span>Articolo successivo <NextIcon size="1rem" />
								</a>
							</Link>
						)}
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
	);
}
