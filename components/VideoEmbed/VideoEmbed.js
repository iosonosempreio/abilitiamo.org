import classNames from "classnames";
import styles from "./VideoEmbed.module.scss";
import ReactPlayer from "react-player";

export default function VideoEmbed({url, volume}) {
	return (
		<div className={classNames(styles.videoWrapper)}>
			<ReactPlayer
				className={styles.reactPlayer}
				url={url}
				width="100%"
				height="100%"
        volume={volume||1}
				controls
			/>
		</div>
	);
}
