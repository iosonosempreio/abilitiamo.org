import CarouselComp from "../CarouselComp";

export default function GalleryCascinaFinished() {
	const images = [];

	function importAll(r) {
		r.keys().forEach((key) => {
			images.push(r(key).default);
		});
	}

	importAll(
		require.context(
			"../../images/cascina-finished",
			true,
			/\.(png|gif|ico|jpg|jpeg)$/
		)
	);
	// At build-time cache will be populated with all required modules.
	return <CarouselComp images={images} height="56.03%" />;
}
