import Carousel from "react-bootstrap/Carousel";
import styles from "./CarouselComp.module.scss";
import Image from "next/image";
import classNames from "classnames";


export default function CarouselComp({ images, height, className }) {
	console.log(className)
	return (
		<>
			<Carousel className={classNames(styles.carousel, className)} style={{paddingBottom: height}}>
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
