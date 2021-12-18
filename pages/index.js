import Head from "next/head";
import { Container, Col, Row } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Head>
        <title>Abilitiamo.org</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Row>
          <Col xs={{ span: 10 }} md={{ span: 4, offset: 1 }}>
            <h1>
              Miglioriamo la qualità di vita delle persone adulte con autismo
            </h1>
            <h2>Abilitare è possibile a qualsiasi età, per noi l'età adulta è solo un punto di partenza.</h2>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}
