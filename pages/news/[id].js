import { Container, Row, Col } from "react-bootstrap";
import { PostTemplate } from "../../components/Templates";
import { getAllPostIds, getPostData, getSortedPostsIds } from "../../lib/posts";

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id);
	const postsSortedIds = await getSortedPostsIds();

	const index = postsSortedIds.indexOf(postData.id);
	const nextPost = index > 0 ? postsSortedIds[index - 1] : null;
	const prevPost =
		index < postsSortedIds.length - 1 ? postsSortedIds[index + 1] : null;

	postData.nextPost = nextPost;
	postData.prevPost = prevPost;

	return {
		props: {
			postData,
		},
	};
}

export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}

export default function Post({ postData, postsSortedIds }) {
	return (
		<>
			<PostTemplate postData={postData}>
				<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
			</PostTemplate>
		</>
	);
}
