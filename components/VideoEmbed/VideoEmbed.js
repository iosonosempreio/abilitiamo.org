import classNames from "classnames";
import styles from "./VideoEmbed.module.scss";
import ReactPlayer from "react-player";

import CookieConsent, {
	getCookieConsentValue,
	resetCookieConsentValue,
} from "react-cookie-consent";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function AcceptButton({ onAccept, children }) {
	return <Button variant="secondary">{children}</Button>;
}

export default function VideoEmbed({ url, volume, preview }) {
	const [analytics, setAnalytics] = useState();
	useEffect(() => {
		const initialConsentValue = getCookieConsentValue() + "";
		if (initialConsentValue === "true") {
			setAnalytics(true);
		} else {
			setAnalytics(false);
		}
	});
	return (
		<div className={classNames(styles.videoWrapper)}>
			{!analytics && (
				<div
					className={classNames(styles.cookiesForbidden, "text-center", "p-5")}
				>
					{preview && (
						<div
							className={classNames(styles.videoPreview)}
							style={{ backgroundImage: `url(${preview.src})` }}
						/>
					)}
					<h4>Visione del filmato bloccata</h4>
					<p>
						La riproduzione del filmato è stata impedita poichè fa uso di cookie
						di terze parti. Acconsenti all'uso dei cookies per vedere il
						filmato.
					</p>
					{/* <Button
					variant="secondary"
					onClick={() => {
						resetCookieConsentValue();
					}}
				>
					Acconsenti
				</Button> */}
					<CookieConsent
						visible="show"
						containerClasses={styles.videoCookiesConsent}
						disableStyles={true}
						buttonClasses={styles.acceptBtn}
						buttonText="Acconsenti"
						onAccept={() => {
							setAnalytics(true);
							console.log("accepted");
						}}
					/>
				</div>
			)}
			{analytics && (
				<ReactPlayer
					className={styles.reactPlayer}
					url={url}
					width="100%"
					height="100%"
					volume={volume || 1}
					controls
				/>
			)}
		</div>
	);
}
