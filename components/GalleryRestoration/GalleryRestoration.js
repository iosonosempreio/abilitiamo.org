import CarouselComp from "../CarouselComp";

const images = [];

function importAll(r) {
	r.keys().forEach((key) => {
		images.push(r(key).default);
	});
}

importAll(require.context("../../images/cantiere-ott-2021", true, /\.(png|gif|ico|jpg|jpeg)$/));
// At build-time cache will be populated with all required modules.

export default function GalleryRestoration() {
	return <CarouselComp images={images} height='56.03%' />;
}
