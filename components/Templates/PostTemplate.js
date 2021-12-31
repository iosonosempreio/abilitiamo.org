import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import Date from "../Date";
import classNames from "classnames";
import Navigation from "../Navigation";
import Footer from "../Footer";
import styles from "./PostTemplate.module.scss";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

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
							md={1}
							className="d-flex justify-content-center align-items-center"
						>
							{postData.prevPost && (
								<Link href={`/news/${postData.prevPost}`}>
									<a>
										<FaArrowCircleLeft />
									</a>
								</Link>
							)}
						</Col>
						<Col md={{ span: 10 }} className={classNames("text-center")}>
							<h1>{postData.title}</h1>
							<h6>
								<Date dateString={postData.date} />
							</h6>
						</Col>
						<Col
							md={1}
							className="d-flex justify-content-center align-items-center"
						>
							{postData.nextPost && (
								<Link href={`/news/${postData.nextPost}`}>
									<a>
										<FaArrowCircleRight />
									</a>
								</Link>
							)}
						</Col>
						{postData.coverImage && (
							<Col sm={12}>
								<div className={styles.coverImageContainer}>
									<Image
										src={postData.coverImage}
										layout="fill"
										objectFit="contain"
										priority={true}
										className={styles.coverImage}
									/>
								</div>
							</Col>
						)}
					</Row>
				</Container>
			</div>
			<Container>
				<Row>
					<Col md={{ span: 8, offset: 2 }} className={classNames("py-5", styles.body)}>
						{children}
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
	);
}
