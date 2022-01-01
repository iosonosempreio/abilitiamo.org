import { Col, Container, Row } from "react-bootstrap";
import { PageTemplate } from "../components/Templates";
import ArrowLink from "../components/ArrowLink";
import PaypalDonation from "../components/PaypalDonation";
import BankTransferDonation from "../components/BankTransferDonation";
import FacebookDonation from "../components/FacebookDonation";
import SatispayDonation from "../components/SatispayDonation";
import classNames from "classnames";
import ReactPlayer from "react-player";

export default function DonaOra() {
	return (
		<>
			<PageTemplate title="Dona ora">
				<Container>
					<Row className={classNames("mb-3", "mb-md-5")}>
						<Col md={{ span: 7, offset: 1 }}>
							<section className={classNames("mt-3", "mt-md-5")}>
								<h2>Mettiamo in cascina il futuro</h2>
								<p>
									Costruisci insieme a noi Cascina Cristina: un luogo unico
									dedicato ai giovani adulti con autismo e alle loro famiglie.
									Daremo vita a un importante progetto di accoglienza, sviluppo
									e condivisione per tenere unita la nostra comunità.
								</p>
								<div className={classNames("video-wrapper")}>
									<ReactPlayer
										className="react-player"
										url="https://www.facebook.com/1400253103427642/videos/1496214477164837"
										width="100%"
										height="100%"
										controls
									/>
								</div>
								<p className={classNames("mt-3")}>
									Ogni martedì Marco si sveglia di primo mattino, prende il bus
									per andare a Cantù, porta a Gabriele frutta e verdura da lui
									coltivata, lo aiuta a far la spesa e a svolgere altre
									commissioni, e infine rientra in Cascina e prepara il pranzo
									insieme ai suoi coinquilini. Si tratta di azioni che svolgiamo
									facilmente nella nostra quotidianità, ma per lui sono gesti
									molto importanti, una sfida da affrontare ogni giorno. Perché
									Marco è un giovane adulto con autismo.
								</p>
								<p>
									L’autismo è una condizione di difficoltà nella comunicazione e
									interazione sociale che accompagna le persone per{" "}
									<b>tutto l’arco della loro vita</b>, e che tuttavia viene
									spesso associata solo all’infanzia. Per questo, una volta
									raggiunta la maggiore età, alle persone con autismo mancano
									servizi e strutture dedicati. Rimangono perciò soli, con le
									loro famiglie, a gestire situazioni di vita che diventano
									sempre più difficili.
								</p>
								<p>
									Grazie a Cascina Cristina sarà presto possibile dare risposta
									a questo bisogno urgente della comunità. Vogliamo realizzare
									un centro multifunzionale per supportare giovani adulti
									autistici a vivere una vita il più possibile autonoma.{" "}
									<b>
										Un servizio così non esiste ancora nel nostro territorio, ma
										insieme possiamo costruirlo!
									</b>
								</p>
								<p>
									Cascina Cristina è un progetto di Associazione Abilitiamo
									Autismo ONLUS, nata nel 2017 da familiari di persone con
									autismo. La Cascina diventerà{" "}
									<b>
										un polo multifunzionale per la presa in carico di giovani e
										adulti con disturbi dello spettro autistico
									</b>
									. Ospiterà una <b>comunità abitativa</b> per 12 persone che
									condivideranno spazi e occasioni di socialità e aggregazione.
									Ma non solo: sarà un centro diurno dove 15 persone, insieme
									agli abitanti, potranno svolgere{" "}
									<b>
										attività lavorative, ricreative e sportive attraverso cui
										diventare sempre più autonomi
									</b>
									. Sarà uno spazio in cui offrire{" "}
									<b>uno sportello psicologico</b> per dare supporto alle
									famiglie in difficoltà. Sarà un centro che promuoverà{" "}
									<b>formazione specializzata e informazione</b> per gli
									operatori del settore e la cittadinanza. Sarà un modello
									pilota e un punto di riferimento per tantissime famiglie
									presenti nel territorio.
								</p>
								<p>
									Inoltre, si tratta di un’area dal grande valore storico che,
									grazie alla donazione da parte della Parrocchia San Carlo di
									Fecchio unita al supporto di Fondazione Cariplo e Regione
									Lombardia, sarà riqualificata e restituita alla cittadinanza.
								</p>
								<p>
									Insieme sarà possibile ricostruire, metro quadro dopo metro
									quadro, Cascina Cristina, dando nuova vita ad un magnifico
									edificio oggi abbandonato, affinché diventi un{" "}
									<b>punto di riferimento unico per tutta la comunità</b>.
								</p>
								<h6>
									Tutto questo sarà possibile, anche grazie al tuo supporto!
								</h6>
								<p>
									Con una tua donazione, puoi dare un contributo di grande
									valore alla comunità canturina e a tutta la Lombardia, posando
									una pietra per il futuro del territorio. Realizzerai con noi
									un servizio fondamentale per le persone con autismo e le loro
									famiglie, perché non siano sole. Sosterrai un progetto pilota
									che porterà la comunità ad essere sempre più inclusiva per le
									persone con autismo.
								</p>
								<p>
									Posa simbolicamente un mattone per il futuro delle persone con
									autismo in provincia di Como, fai subito una donazione per la
									ristrutturazione di Cascina Cristina.
								</p>
							</section>
							<section id="paypal-donation">
								<PaypalDonation />
							</section>
							<section id="bank-transfer-donation">
								<BankTransferDonation />
							</section>
							<section
								id="facebook-donation"
								className={classNames("mt-3", "mt-md-5")}
							>
								<h2>Altri pagamenti elettronici</h2>
								<FacebookDonation />
							</section>
							<section id="satispay-donation">
								<SatispayDonation />
							</section>
							<section
								id="5x1000"
								className={classNames("mb-3", "mb-md-5", "mt-3", "mt-md-5")}
							>
								<h2>Altri modi per donare</h2>
								<h3>5x1000</h3>
								<p>
									Il 5X1000 è una quota delle tasse che hai pagato e che puoi
									destinare a realtà non-profit. Ogni contribuente può decidere
									a chi donarla. Destinare ad Abilítiamo il tuo 5x1000, è
									facilissimo! È sufficiente inserire il nostro codice fiscale
									nella apposita sezione dei moduli per la dichiarazione dei
									redditi:{" "}
									<span style={{ color: "var(--red)", fontWeight: 600 }}>
										90041140139
									</span>
									.
								</p>
							</section>
							<section
								id="donazione-materiale"
								className={classNames("mb-3", "mb-md-5")}
							>
								<h3>Donazione liberale materiale</h3>
								<p>
									La realizzazione di Cascina Cristina è molto onerosa. Siamo
									alla ricerca di arredamento, attrezzature, di una cucina, di
									un pulmino e di materiale per il giardinaggio o agricoltura.
									Vuoi liberarti di cose simili? Le tratti per lavoro e vuoi
									aiutarci con una donazione? Anche per questi casi sono
									previste agevolazioni fiscali.
								</p>
							</section>
							<section
								id="lasciti-testamentari"
								className={classNames("Xmb-3", "Xmb-md-5")}
							>
								<h3>Lasciti testamentari e patrimoniali</h3>
								<p>
									Il miglioramento della vita delle persone con autismo va oltre
									il progetto Cascina Cristina. Servono altri luoghi dove
									erogare servizi e diversificare le attività: appartamenti
									protetti, laboratori, avvio alle autonomie, ecc. Abilitiamo
									può ricevere anche lasciti testamentari e donazioni di
									immobili da dedicare a questi utilizzi.
								</p>
								<p>
									È anche possibile devolvere ad Abilítiamo il patrimonio di
									altre associazioni ONLUS in fase di scioglimento.
								</p>
							</section>
						</Col>
						<Col md={{ span: 4 }}>
							<div
								className={classNames("position-sticky")}
								style={{ top: 65 }}
							>
								<p className="mb-1 mt-3" style={{ color: "#999" }}>
									Modalità per donare
								</p>
								{modalità.map((d, i) => (
									<ArrowLink key={i} data={d} type="anchor" />
								))}
								<p className="mb-1 mt-3" style={{ color: "#999" }}>
									Agevolazioni
								</p>
								<ArrowLink
									data={{ label: "Benefici fiscali", url: "/benefici-fiscali" }}
								/>
							</div>
						</Col>
					</Row>
				</Container>
			</PageTemplate>
		</>
	);
}

const modalità = [
	{
		label: "Paypal e carta di credito",
		url: "#paypal-donation",
	},
	{
		label: "Bonifico bancario",
		url: "#bank-transfer-donation",
	},
	{
		label: "Facebook",
		url: "#facebook-donation",
	},
	{
		label: "Satispay",
		url: "#satispay-donation",
	},
	{ label: "5x1000", url: "#5x1000" },
	{
		label: "Donazione materiale",
		url: "#donazione-materiale",
	},
	{
		label: "Lasciti testamentari",
		url: "#lasciti-testamentari",
	},
];
