// import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.scss";
import { useEffect, useState } from "react";
import Script from "next/script";
import { useRouter } from "next/router";

import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import * as gtag from "../lib/gtag";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
	const [analytics, setAnalytics] = useState(false);

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
				buttonText="Va bene"
				buttonStyle={{
					background: "#ff7232",
					color: "#faf8f6",
					borderRadius: "4px",
				}}
				declineButtonText="Disattiva"
				declineButtonStyle={{ background: "transparent", color: "#304b70" }}
				style={{ background: "#7abed9", text: "#304b70" }}
				onAccept={() => {
					setAnalytics(true);
				}}
				enableDeclineButton
				onDecline={() => {
					setAnalytics(false);
				}}
				expires={42}
			>
				Monitoriamo le visite del nostro sito con Google Analytics.{" "}
			</CookieConsent>
			{/* Global Site Tag (gtag.js) - Google Analytics */}
			{analytics && (
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
			{!analytics && (
				<div
					dangerouslySetInnerHTML={{
						__html: `<!-- Google Analytics disattivato -->`,
					}}
				/>
			)}
		</>
	);
}
