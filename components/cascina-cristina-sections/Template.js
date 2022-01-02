import React from "react";
import { Row, Col } from "react-bootstrap";
// import { useStaticQuery, graphql } from "gatsby";
// import Img from "gatsby-image";
import styles from "../../styles/cascina-cristina.module.scss";
import classNames from "classnames";

export default function Template({ title, subtitle, image, description }) {
  // const query = graphql`
  //   query {
  //     image1: file(relativePath: { eq: "casette 8 bit.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1000, maxHeight: 670) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }

  //     image2: file(relativePath: { eq: "expertam.jpg" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1000, maxHeight: 670) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }

  //     image3: file(relativePath: { eq: "pexels-pixabay-163064.jpg" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1000, maxHeight: 670) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }

  //     image4: file(relativePath: { eq: "render residenziale.jpeg" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1000, maxHeight: 670) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }

  //     image5: file(relativePath: { eq: "render diurno.jpeg" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1000, maxHeight: 670) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }

  //     image6: file(
  //       relativePath: { eq: "nick-fewings-XqOBKnxDSfE-unsplash.jpg" }
  //     ) {
  //       childImageSharp {
  //         fluid(maxWidth: 1000, maxHeight: 670) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }

  //     image7: file(
  //       relativePath: { eq: "tumblr_osclmshNyl1slhhf0o1_1280.jpg" }
  //     ) {
  //       childImageSharp {
  //         fluid(maxWidth: 1000, maxHeight: 670) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }

  //     image8: file(
  //       relativePath: { eq: "jens-johnsson-36a3U4_UUHY-unsplash.jpg" }
  //     ) {
  //       childImageSharp {
  //         fluid(maxWidth: 1000, maxHeight: 670) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `;
  // const images = useStaticQuery(query);
  return (
    <>
      <Row className={classNames("mt-3", "mt-md-5")}>
        <Col
          xs={{ span: 12, offset: 0 }}
          sm={{ span: 10, offset: 1 }}
          lg={{ span: 5, offset: 0 }}
          className={classNames(
            "d-flex",
            "flex-column",
            "justify-content-center"
          )}
        >
          <h1>{title}</h1>
          <p className="paragraphBig mb-4">{subtitle}</p>
        </Col>
        <Col xs={12} lg={{ span: 7, offset: 0 }}>
          {/* <Img
            className={classNames("rounded")}
            fluid={images[image].childImageSharp.fluid}
          /> */}
        </Col>
      </Row>
      <Row className={classNames("mb-5", "mb-md-5")}>
        <Col
          xs={12}
          sm={{ span: 10, offset: 1 }}
          lg={{ span: 7, offset: 5 }}
          xl={{ span: 10, offset: 1 }}
          className={classNames("mt-4", "mt-lg-4", "mt-xl-5", "mb-3", "mb-md-5", "mb-lg-3")}
        >
          <p className={styles.description}>{description}</p>
        </Col>
      </Row>
    </>
  );
}
