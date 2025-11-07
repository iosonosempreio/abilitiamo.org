'use client';

import { useEffect, useRef } from "react";
import classNames from "classnames";
import styles from "./NewsletterForm.module.scss";

const FORM_ID = "16c229f6-9d45-11f0-8166-4f0d877d01d4";

export default function NewsletterForm() {
	const mountRef = useRef(null);

	useEffect(() => {
		if (!mountRef.current) return;
		// Create and append the vendor script in-place so it injects the form here
		const s = document.createElement('script');
		s.async = true;
		s.src = `https://eocampaign1.com/form/${FORM_ID}.js`;
		s.setAttribute('data-form', FORM_ID);
		s.onload = () => console.log('EmailOctopus form loaded');
		s.onerror = (e) => console.error('EmailOctopus form failed to load', e);
		mountRef.current.appendChild(s);
		return () => {
			// Clean up: remove script and any injected children if the component unmounts
			try {
				if (s.parentNode) s.parentNode.removeChild(s);
				if (mountRef.current) mountRef.current.innerHTML = '';
			} catch {}
		};
	}, []);

	return (
		<>
			<p>
				Iscriviti alla newsletter di Abilitiamo, uno strumento pensato per informare e aggiornare amici, sostenitori e
				partner sulle attività dell’associazione.
			</p>
			<p>Un nuovo numero ogni 3 mesi, al cambio di stagione.</p>
			<div className={classNames(styles.newsletterContainer)}>
				<div ref={mountRef} />
			</div>
		</>
	);
}
