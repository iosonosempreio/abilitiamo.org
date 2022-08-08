import Link from "next/link";
import { Card, Col } from "react-bootstrap";
import classNames from "classnames";

import styles from "./NewsCard.module.scss";

import Date from "../Date";

export default function NewsCard({ data }) {
	const { id, date, title, image, imageInfo } = data;
	return (
		<Link href={`/news/${id}`} key={id}>
			<a>
				<Card className={classNames(styles.post, "mb-3")}>
					<div className={styles.thumbnail}>
						<img
							// className="card-img-top"
							src={image}
							width={imageInfo.width}
							height={imageInfo.height}
							className={classNames("img-fluid")}
						/>
					</div>
					<Card.Body className={styles.body}>
						<Card.Text className={styles.text}>
							<span className={styles.date}>
								<Date dateString={date} />
							</span>
						</Card.Text>
						<Card.Title className={styles.title} as={"h6"}>
							{title}
						</Card.Title>
					</Card.Body>
				</Card>
			</a>
		</Link>
	);
}
