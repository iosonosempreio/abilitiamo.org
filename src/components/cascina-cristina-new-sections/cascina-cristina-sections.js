import React from "react";
// import SpiritoProgetto from "./SpiritoProgetto";
// import MappaturaBisogno from "./MappaturaBisogno"
// import CambiamentoPerseguito from "./CambiamentoPerseguito";
import ComunitàAbitativa from "./ComunitàAbitativa";
import CentroDiurno from "./CentroDiurno";
import SollievoServizi from "./SollievoServizi";
import PresaInCarico from "./PresaInCarico";
import SostegnoAllaFamiglia from "./SostegnoAllaFamiglia";
import StudioDellaSindromeAutistica from "./StudioDellaSindromeAutistica";

import Template from "./Template";

const sections = [
  {
    title: (
      <>
        Lo spirito
        <br />
        del progetto
      </>
    ),
    anchor: "#spirito-del-progetto",
    content: (
      <Template
        title="Lo spirito del progetto"
        subtitle="Il progetto Cascina Cristina nasce dal diritto delle persone autistiche ad avere una casa, ma lo spirito che lo anima è però molto più ampio."
        imageKey="image1"
        description="Facendo leva sull&#39;esperienza maturata vivendo la condizione dei
				loro figli, i genitori dell&#39;associazione hanno deciso di mettersi
				al servizio del territorio per rendere meno difficile il percorso
				delle famiglie che si verranno a trovare in una situazione analoga a
				quella da loro vissuta. Da qui la sfida di creare un polo
				multifunzionale per l&#39;autismo. Un centro in grado di accogliere in
				forma residenziale adulti autistici a basso funzionamento, di offrire
				la possibilità di abilitazione a giovani autistici per i quali è
				sufficiente una gestione diurna, di dare sollievo temporaneo a quelle
				famiglie che attraversano un periodo complicato con il loro figlio
				autistico. Il polo Cascina Cristina si occuperà anche di formazione
				degli operatori del settore e cercherà di agevolare il percorso di
				diagnosi della potenziale persona autistica. Una volta accreditata, la
				struttura, lavorando in rete con le istituzioni sanitarie, organizzerà
				una presa in carico coordinata della persona autistica."
      />
    ),
  },
  {
    title: (
      <>
        Cambiamento
        <br />
        perseguito
      </>
    ),
    anchor: "#cambiamento",
    content: (
      <Template
        title="Il cambiamento perseguito"
        subtitle="Il progetto Cascina Cristina nasce dal diritto delle persone autistiche ad avere una casa, ma lo spirito che lo anima è però molto più ampio."
        imageKey="image2"
        description="Sempre di più, oggi, sta cambiando la visione della persona con disabilità che, da una gestione pressoché tutta assistenzialistica, sta passando a
				considerare la disabilità come parte integrante della persona e, quindi, all’applicazione di metodologie abilitative/psicoeducative, conferendogli dignità
				e pari opportunità, nei limiti delle sue capacità potenziali. La spinta a questa nuova visione è da attribuire a diverse cause: la situazione economica del
				Paese e delle Regioni, le scoperte scientifiche, il nuovo welfare, la partecipazione sempre più attiva della famiglia nel ripensare gli interventi sul
				proprio figlio. Anche Abilitiamo con il progetto “Cascina Cristina” partecipa al cambiamento, applicando, quanto più possibile, tutte le nuove tecniche e/o
				metodiche che sono emerse dagli studi scientifici più recenti e la conoscenza più specifica e approfondita dei vari professionisti del settore. In
				particolare, seguendo le linee di un progetto sperimentale, Abilitiamo intende dare uniformità e continuità all’utilizzo delle nuove tecniche proposte
				dalla letteratura, attualmente puntiformi e prive di connessioni, individuando i parametri che meglio si adattano al potenziamento delle abilità della
				persona con autismo nei vari contesti di vita, rendendola il più possibile regista e attore della propria vita."
      />
    ),
  },
  {
    title: (
      <>
        Presa in carico
        <br />a rete
      </>
    ),
    anchor: "#presa-in-carico",
    content: <PresaInCarico />,
  },
  {
    title: (
      <>
        Comunità
        <br />
        abitativa
      </>
    ),
    anchor: "#comunita",
    content: <ComunitàAbitativa />,
  },
  {
    title: (
      <>
        Centro
        <br />
        diurno
      </>
    ),
    anchor: "#diurno",
    content: <CentroDiurno />,
  },
  {
    title: (
      <>
        Sollievo
        <br />e altri servizi
      </>
    ),
    anchor: "#servizi",
    content: <SollievoServizi />,
  },
  {
    title: (
      <>
        Sostegno
        <br />
        alla famiglia
      </>
    ),
    anchor: "#sostegno-alla-famiglia",
    content: <SostegnoAllaFamiglia />,
  },
  {
    title: (
      <>
        Studio della
        <br />
        sindrome autistica
      </>
    ),
    anchor: "#sindrome-autistica",
    content: <StudioDellaSindromeAutistica />,
  },
];
export default sections;
