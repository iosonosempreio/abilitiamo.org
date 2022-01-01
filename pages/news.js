// import Link from "next/link";
// import Image from "next/image";
import { Container, Row } from "react-bootstrap";
// import styles from "../styles/news.module.scss";
import { PageTemplate } from "../components/Templates";

import { getSortedPostsData } from "../lib/posts";
// import classNames from "classnames";

import NewsCard from "../components/NewsCard/NewsCard";

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}

export default function News({ allPostsData }) {
	console.log(allPostsData)
	return (
		<PageTemplate title="News">
			<Container>
				<Row className="pt-3">
					{allPostsData.map((postData, i) => (
						<NewsCard data={postData} key={i} />
					))}
				</Row>
			</Container>
		</PageTemplate>
	);
}
