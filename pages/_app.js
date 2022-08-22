import "../styles/main.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import info from "../utils/info.json"
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import * as gtag from "../lib/gtag";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
	const [analytics, setAnalytics] = useState();
	useEffect(() => {
		const initialConsentValue = getCookieConsentValue() + "";
		if (initialConsentValue === "true") {
			setAnalytics(true);
		} else {
			setAnalytics(false);
		}
	}, []);
	const router = useRouter();
	useEffect(() => {
		if (analytics) {
			const handleRouteChange = (url) => {
				gtag.pageview(url);
			};
			router.events.on("routeChangeComplete", handleRouteChange);
			return () => {
				router.events.off("routeChangeComplete", handleRouteChange);
			};
		}
	}, [router.events]);

	return (
		<>
			<Component {...pageProps} />
			<CookieConsent
				buttonText="Attiva"
				buttonStyle={{
					background: "#ff7232",
					color: "#faf8f6",
					borderRadius: "4px",
				}}
				declineButtonText="Mantieni disattivi"
				declineButtonStyle={{ background: "transparent", color: "#304b70" }}
				style={{ background: "#7abed9", text: "#304b70" }}
				onAccept={() => {
					setAnalytics(true);
				}}
				enableDeclineButton
				onDecline={() => {
					setAnalytics(false);
				}}
				expires={info.associazione.durataCookies.value}
				sameSite="strict"
			>
				{/* Usiamo cookies tecnici e di terze parti per{" "}
				<Link href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=it">
					monitorare le visite
				</Link>{" "}
				del sito e per riprodurre filmati tramite servizi esterni.{" "} */}
				Questo sito utilizza cookies di terze parti per consentire la riproduzione di filmati tramite servizi esterni. <Link href="/cookie-policy">Maggiori informazioni</Link>
			</CookieConsent>
			{/* Global Site Tag (gtag.js) - Google Analytics */}
			{/* {(analytics) && (
				<>
					<Script
						strategy="afterInteractive"
						src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
					/>
					<Script
						id="gtag-init"
						strategy="afterInteractive"
						dangerouslySetInnerHTML={{
							__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
						}}
					/>
				</>
			)}
			{(!analytics) && (
				<div
					dangerouslySetInnerHTML={{
						__html: `<!-- Google Analytics non attivo per sospetta incompatibilità GDPR -->`,
					}}
				/>
			)} */}
		</>
	);
}
