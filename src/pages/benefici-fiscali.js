import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function BeneficiFiscali() {
	return (
		<Layout title="Benefici fiscali">
			<div className="a-row">
				<div className="content">
					<h2>Donare godendo di benefici fiscali</h2>
					<p className="paragraphBig">
						Art.83 D. Lgs. 3 luglio 2017 n. 117
						<br />
						D.M. Lavoro e politiche sociali del 28.11.2019
					</p>
					<p>
						In questa pagina riportatiamo i benefici fiscali di cui è possibile godere a seguito di una donazione ad un ente ONLUS. Clicca su una delle voci
						sottostanti per scorrere alla sezione corrispondente:
					</p>
					<ul>
						<li>
							<Link to="/benefici-fiscali#persone-fisiche">Persone fisiche</Link>
						</li>
						<li>
							<Link to="/benefici-fiscali#società">Società</Link>
						</li>
						<li>
							<Link to="/benefici-fiscali#come-e-quando">Come e quando donare</Link>
						</li>
						<li>
							<Link to="/benefici-fiscali#beni-e-merce">Cessione gratuita di beni e merce</Link>
						</li>
						<li>
							<Link to="/benefici-fiscali#sponsorizzazione">Sponsorizzazione</Link>
						</li>
						<li>
							<Link to="/benefici-fiscali#riferimenti-legislativi">Riferimenti legislativi</Link>
						</li>
					</ul>
					<div className="section-separator" />
					<h3 id="persone-fisiche">Persone fisiche</h3>
					<p>
						<strong>Detrazione d’imposta</strong>: Dall’ammontare dell’Irpef annua lorda si detrae il 30% dell’importo donato, quest’ultimo entro il limite di €
						30.000,00. Il beneficio è pertanto al massimo pari a € 9.000,00.
						<br />
						In altre parole, ogni € 1.000,00 donati l’esborso effettivo, una volta effettuata la detrazione in sede di dichiarazione dei redditi annuale, è nei fatti
						di € 700,00.
					</p>
					<p>
						<strong>Deduzione dall’imponibile</strong>: La donazione effettuata si deduce dal reddito imponibile Irpef, fino ad un importo massimo pari al 10% dello
						stesso reddito. In altre parole, l’Irpef sarà calcolata su un minore ammontare. Ad esempio, su un reddito imponibile Irpef di € 30.000,00 corrispondente
						ad un’aliquota marginale Irpef del 38% una donazione di € 1.000,00 comporta un esborso effettivo di € 620,00.
						<br />
						Poiché non è del tutto prevedibile l’ammontare dell’imponibile di fine anno, è ammesso riportare nei successivi quattro anni l’eventuale eccedenza di
						donazione rispetto al 10%.
					</p>
					<p>A fronte della medesima donazione, le due agevolazioni non sono cumulabili tra di loro né con altre agevolazioni dello stesso tenore.</p>
					<div className="section-separator" />
					<h3 id="società">Società</h3>
					<p>
						<strong>Deduzione dall’imponibile</strong>: come per le persone fisiche, la donazione riduce il reddito imponibile, in questo caso Ires, fino ad un
						importo massimo pari al 10% dello stesso reddito. Pertanto, considerata l’attuale aliquota Ires del 24%, ogni € 1.000,00 donati l’esborso effettivo è pari
						a € 760,00.
						<br />
						Vale anche in questo caso la possibilità di riportare al quadriennio successivo l’eventuale eccedenza di donazione rispetto al limite del 10%.
					</p>
					<div className="section-separator" />
					<h3 id="come-e-quando">Come e quando</h3>
					<p>
						L’erogazione deve essere effettuata solo tramite metodi di pagamento tracciati: bonifico, assegno bancario o circolare, bollettino postale, carte di
						debito, carte di credito, carte prepagate, assegni bancari e circolari. Il sostenimento dell’onere è documentato dalla ricevuta del versamento ovvero
						dall’estratto conto. A fini di detrazione / deduzione fiscale non è ammesso il versamento in contanti.
					</p>
					<p>
						È possibile godere dell’agevolazione fiscale compilando opportunamente la dichiarazione dei redditi (modello 730, modello Redditi PF, SP, SC) relativa
						all’anno in cui si è effettuato il versamento (cd. principio di cassa).
					</p>
					<div className="section-separator" />
					<h3 id="beni-e-merci">Cessione gratuita beni e merci</h3>
					<p>
						<strong>Imposte sui redditi</strong>. Con gli stessi benefici in termini di detrazione Irpef (solo persone fisiche) o deduzione dall’imponibile (aziende e
						persone fisiche) è possibile donare anche in natura, cioè donare beni.
						<br />
						Per quantificare l’ammontare della donazione si deve in genere fare riferimento al valore normale (art.9 T.U.I.R.) che, sostanzialmente, è pari al valore
						a cui si riuscirebbe a vendere tale bene in normali condizioni di mercato. Se si stima tale valore superiore ai 30.000 euro oppure se non è determinabile
						oggettivamente, è richiesta una perizia giurata.
						<br />
						Nel caso di aziende, se si tratta di beni facenti parte delle immobilizzazioni, il loro valore ai fini della donazione è pari al residuo fiscale (cioè
						sostanzialmente il costo al netto dell’eventuale ammortamento già effettuato). Se invece si tratta di beni merce, cioè oggetto dell’attività di produzione
						o commercializzazione, il valore è determinato secondo i criteri di valutazione delle rimanenze di magazzino (art. 92 T.U.I.R.).
					</p>
					<p>
						<strong>Esenzione IVA</strong>. La cessione gratuita di beni alle Onlus è esente da IVA (art.10 c.1 n.12 DpR 633/72). Diviene però indetraibile e va
						quindi riversata all’Erario l’iva detratta sugli acquisti relativi a tali cessioni (art. 19 c.2 DpR 633/72). Fanno eccezione, a particolari condizioni, le
						cessioni gratuite di eccedenze alimentari, integratori alimentari, medicinali, articoli di medicazione, presidi medico chirurgici, prodotti per l’igiene
						della casa e della persona, cartoleria e cancelleria (cfr. art.16 L.166/2016 e ss.mm.), che ai fini Iva si considerano “distrutti” e quindi rimane
						consentita all’impresa donante la detrazione dell’iva versata sul loro acquisto / produzione.
					</p>
					<div className="section-separator" />
					<h3 id="sponsorizzazione">Sponsorizzazione</h3>
					<p>
						<strong>Condizioni</strong>: In merito, la circolare 34/E/2009 ha affermato che le spese di sponsorizzazione, per essere deducibili come spese di
						pubblicità, devono: 1) avere come scopo quello di reclamizzare un prodotto commerciale oppure il nome o il marchio dell'impresa; 2) essere corrisposte a
						fronte di un obbligo sinallagmatico (cioè una controprestazione) del soggetto beneficiario.
					</p>
					<p>
						<strong>Imposte sui redditi</strong>: Le spese per le sponsorizzazioni sono deducibili dalle aziende come quelle di pubblicità, dato che si tratta di
						contratti a prestazioni corrispettive. L'agenzia delle Entrate (con le risoluzioni 2/1016 del 1974, 9/204 del 1992 e 356/E del 2002) e la dottrina
						prevalente ritengono che le spese di sponsorizzazione debbano avere, nella determinazione del reddito d'impresa, lo stesso trattamento di quelle di
						pubblicità.
					</p>
					<p>
						<strong>IVA</strong>: Considerate le caratteristiche di tale contratto, per beneficiare di sponsorizzazioni l’ente del terzo settore deve essere in
						possesso di partita IVA. Infatti, le prestazioni rese si considerano svolte nell'ambito di un'attività commerciale e i relativi corrispettivi andranno
						assoggettati ad IVA.
					</p>
					<div className="section-separator" />
					<h3 id="riferimenti-legislativi">Riferimenti legislativi</h3>
					<h5>D. Lgs. 3 luglio 2017 n. 117</h5>
					<p>
						<i>Codice del Terzo settore, a norma dell'articolo 1, comma 2, lettera b), della legge 6 giugno 2016, n. 106.</i> (G.U. 2 agosto 2017, n. 179 - S.O. n.
						43)
					</p>
					<h4>Articolo 83 - Detrazioni e deduzioni per erogazioni liberali</h4>
					<ol>
						<li>
							Dall'imposta lorda sul reddito delle persone fisiche si detrae un importo pari al 30 per cento degli oneri sostenuti dal contribuente per le erogazioni
							liberali in denaro o in natura a favore degli enti del Terzo settore non commerciali di cui all'articolo 79, comma 5, per un importo complessivo in
							ciascun periodo d'imposta non superiore a 30.000 euro. L'importo di cui al precedente periodo è elevato al 35 per cento degli oneri sostenuti dal
							contribuente, qualora l'erogazione liberale sia a favore di organizzazioni di volontariato. La detrazione è consentita, per le erogazioni liberali in
							denaro, a condizione che il versamento sia eseguito tramite banche o uffici postali ovvero mediante altri sistemi di pagamento previsti dall'articolo 23
							del decreto legislativo 9 luglio 1997, n. 241
						</li>
						<li>
							Le liberalità in denaro o in natura erogate a favore degli enti del Terzo settore non commerciali di cui all'articolo 79, comma 5, da persone fisiche,
							enti e società sono deducibili dal reddito complessivo netto del soggetto erogatore nel limite del 10 per cento del reddito complessivo dichiarato.
							Qualora la deduzione sia di ammontare superiore al reddito complessivo dichiarato, diminuito di tutte le deduzioni, l'eccedenza può essere computata in
							aumento dell'importo deducibile dal reddito complessivo dei periodi di imposta successivi, ma non oltre il quarto, fino a concorrenza del suo ammontare.
							Con apposito decreto del Ministro del lavoro e delle politiche sociali, di concerto con il Ministro dell'economia e delle finanze, sono individuate le
							tipologie dei beni in natura che danno diritto alla detrazione o alla deduzione d'imposta e sono stabiliti i criteri e le modalità di valorizzazione
							delle liberalità di cui ai commi 1 e 2.
						</li>
						<li>Omiss.</li>
						<li>
							Ferma restando la non cumulabilità delle agevolazioni di cui ai commi 1 e 2, i soggetti che effettuano erogazioni liberali ai sensi del presente articolo
							non possono cumulare la detraibilità e la deducibilità con altra agevolazione fiscale prevista a titolo di detrazione o di deduzione di imposta da altre
							disposizioni di legge a fronte delle medesime erogazioni.
						</li>
						<li>Omiss.</li>
						<li>Omiss.</li>
					</ol>
					<h4>Articolo 104 - Entrata in vigore</h4>
					<ol>
						<li>
							Le disposizioni di cui agli articoli 77, 78, 81, 82, 83 e 84, comma 2, 85 comma 7 e dell'articolo 102, comma 1, lettere e), f) e g) si applicano in via
							transitoria a decorrere dal periodo di imposta successivo a quello in corso al 31 dicembre 2017 e fino al periodo d'imposta di entrata in vigore delle
							disposizioni di cui al titolo X secondo quanto indicato al comma 2, alle Organizzazioni non lucrative di utilità sociale di cui all'articolo 10, del
							decreto legislativo 4 dicembre 1997, n. 460 iscritte negli appositi registri, alle organizzazioni di volontariato iscritte nei registri di cui alla legge
							11 agosto 1991, n. 266, e alle associazioni di promozione sociale iscritte nei registri nazionali, regionali e delle provincie autonome di Trento e
							Bolzano previsti dall'articolo 7 della legge 7 dicembre 2000, n. 383.
						</li>
						<li>Omiss.</li>
						<li>Omiss.</li>
					</ol>
					<h5>D. M. 28 novembre 2019 - Ministero del Lavoro e delle Politiche sociali</h5>
					<p>
						<i>Erogazioni liberali in natura a favore degli enti del Terzo settore.</i> (G.U. 30 gennaio 2020, n. 24)
					</p>
					<h4>Articolo 3 - Oggetto delle erogazioni liberali in natura e valorizzazione dei beni</h4>
					<ol>
						<li>
							L'ammontare della detrazione o della deduzione spettante nelle ipotesi di erogazioni liberali in natura è quantificato sulla base del valore normale del
							bene oggetto di donazione, determinato ai sensi dell'art. 9 del testo unico delle imposte sui redditi, approvato con decreto del Presidente della
							Repubblica 22 dicembre 1986, n. 917.
						</li>
						<li>
							Nel caso di erogazione liberale avente ad oggetto un bene strumentale, l'ammontare della detrazione o della deduzione è determinato con riferimento al
							residuo valore fiscale all'atto del trasferimento.
						</li>
						<li>
							Nel caso di erogazione liberale avente ad oggetto i beni di cui all'art. 85, comma 1, lettere a) e b) del TUIR, l'ammontare della detrazione o della
							deduzione è determinato con riferimento al minore tra il valore determinato ai sensi del comma 1 del presente articolo e quello determinato applicando le
							disposizioni dell'art. 92 del TUIR.
						</li>
						<li>
							Qualora, al di fuori delle ipotesi di cui ai commi 2 e 3, il valore della cessione, singolarmente considerata, determinato in base al comma 1, sia
							superiore a 30.000 euro, ovvero, nel caso in cui, per la natura dei beni, non sia possibile desumerne il valore sulla base di criteri oggettivi, il
							donatore dovrà acquisire una perizia giurata che attesti il valore dei beni donati, recante data non antecedente a novanta giorni il trasferimento del
							bene.
						</li>
					</ol>
				</div>
			</div>
		</Layout>
	)
}
