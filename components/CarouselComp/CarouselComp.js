import Carousel from "react-bootstrap/Carousel";
import styles from "./CarouselComp.module.scss";
import Image from "next/image";

export default function CarouselComp({ images, height }) {
	return (
		<>
			<Carousel className={styles.carousel} style={{paddingBottom: height}}>
				{images.map((image, i) => (
					<Carousel.Item key={i} className={styles.carouselItem}>
						<Image 
							alt="Immagine galleria"
							src={image}
							layout="fill"
							objectFit="cover"
							placeholder="blur"
						/>
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
