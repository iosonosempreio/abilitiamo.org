import classNames from "classnames";
import styles from "./NewsletterForm.module.scss";

export default function NewsletterForm() {
	function createNewsletterForm() {
		return {
			__html: `<script asyncx src="https://eocampaign1.com/form/16c229f6-9d45-11f0-8166-4f0d877d01d4.js" data-form="16c229f6-9d45-11f0-8166-4f0d877d01d4"></script>`,
		};
	}

	return (
		<>
			<p>
				Iscriviti alla newsletter di Abilitiamo, uno strumento pensato per informare e aggiornare amici, sostenitori e
				partner sulle attività dell’associazione.
			</p>
      <p>Un nuovo numero ogni 3 mesi, al cambio di stagione.</p>
			<div className={classNames(styles.newsletterContainer)} dangerouslySetInnerHTML={createNewsletterForm()} suppressHydrationWarning={true}/>
		</>
	);
}
