// import Link from "next/link";
// import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
// import styles from "../styles/news.module.scss";
import { PageTemplate } from "../components/Templates";

import { getSortedPostsData } from "../lib/posts";
// import classNames from "classnames";

import Masonry from "react-masonry-css";

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
	const masonryBreakpoints = {
		default: 4,
		1400: 3,
		1200: 3,
		992: 2,
		768: 2,
		576: 1
	};
	return (
		<PageTemplate title="News">
			<Container>
				<Row className="pt-3">
					{/* {allPostsData.map((postData, i) => (
						<NewsCard data={postData} key={i} />
					))} */}
					<Col>
						<Masonry
							breakpointCols={masonryBreakpoints}
							className="my-masonry-grid"
							columnClassName="my-masonry-grid_column"
						>
							{allPostsData.map((postData, i) => (
								<NewsCard data={postData} key={i} />
							))}
						</Masonry>
					</Col>
				</Row>
			</Container>
		</PageTemplate>
	);
}
