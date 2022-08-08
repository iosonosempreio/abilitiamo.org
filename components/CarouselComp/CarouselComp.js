import Carousel from "react-bootstrap/Carousel";
import styles from "./CarouselComp.module.scss";
import classNames from "classnames";


export default function CarouselComp({ images, height, className }) {
	return (
		<>
			<Carousel className={classNames(styles.carousel, className)} style={{paddingBottom: height}}>
				{images.map((image, i) => (
					<Carousel.Item key={i} className={styles.carouselItem}>
						<div className={styles.carouselImage} style={{backgroundImage: `url(${JSON.stringify(image.src)})`}} />
						{image.caption && (
							<Carousel.Caption>
								<p>{image.caption}</p>
							</Carousel.Caption>
						)}
					</Carousel.Item>
				))}
			</Carousel>
		</>
	);
}

CarouselComp.defaultProps = {
  height: '75%'
};
