import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col, Card } from "react-bootstrap";
import Date from "../components/Date";
import styles from "../styles/news.module.scss";
import { PageTemplate } from "../components/Templates";

import { getSortedPostsData } from "../lib/posts";
import classNames from "classnames";

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}

export default function News({ allPostsData }) {
	return (
		<PageTemplate title="News">
			<Container>
				<Row className="pt-3">
					{allPostsData
						// .concat(allPostsData)
						// .concat(allPostsData)
						// .concat(allPostsData)
						.map(({ id, date, title, coverImage }) => (
							<Col
								// xs={{ span: 10, offset: 1 }}
								sm={{ span: 6, offset: 0 }}
								md={{ span: 4, offset: 0 }}
								key={id}
							>
								<Link href={`/news/${id}`}>
									<a>
										<Card className={classNames(styles.post, "mb-3")}>
											{/* <Card.Img
												variant="top"
												src={coverImage || "news/guado.jpg"}
											/> */}
											<div className={styles.thumbnail}>
												<Image
													className="card-img-top"
													src={coverImage}
													layout="fill"
													objectFit="cover"
												/>
											</div>
											<Card.Body className={styles.body}>
												<Card.Text className={styles.text}>
													<span className={styles.date}><Date dateString={date} /></span>
												</Card.Text>
												<Card.Title className={styles.title} as={"h6"}>
													{title}
												</Card.Title>

												{/* <Button variant="primary">Go somewhere</Button> */}
											</Card.Body>
										</Card>
									</a>
								</Link>
								{/* <Link href={`/news/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<small>
								<Date dateString={date} />
							</small> */}
							</Col>
						))}
				</Row>
			</Container>
		</PageTemplate>
	);
}
