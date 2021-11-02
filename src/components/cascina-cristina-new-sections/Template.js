import React from "react";
import { Row, Col } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import stylescc from "../../styles/cascinaCristinaNew.module.scss";
import classNames from "classnames";

export default function Template({ title, subtitle, imageKey, description }) {

  const query = graphql`
    query {
      image1: file(relativePath: { eq: "casette 8 bit.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 670) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image2: file(relativePath: { eq: "expertam.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 670) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image3: file(relativePath: { eq: "pexels-pixabay-163064.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 670) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image4: file(relativePath: { eq: "expertam.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 670) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image5: file(relativePath: { eq: "expertam.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 670) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image6: file(relativePath: { eq: "expertam.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 670) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image7: file(relativePath: { eq: "expertam.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 670) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image8: file(relativePath: { eq: "expertam.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 670) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `;
  const images = useStaticQuery(query);
  return (
    <>
      <Row className={classNames("mt-3", "mt-md-5")}>
        <Col
          xs={4}
          className={classNames(
            "d-flex",
            "flex-column",
            "justify-content-center"
          )}
        >
          <h1>{title}</h1>
          <p className="paragraphBig">{subtitle}</p>
        </Col>
        <Col xs={8}>
          <Img
            className={classNames("rounded")}
            fluid={images[imageKey].childImageSharp.fluid}
          />
        </Col>
      </Row>
      <Row className={classNames("mb-3", "mb-md-5")}>
        <Col
          xs={12}
          md={{ span: 8, offset: 4 }}
          className={classNames("mt-3", "mt-md-5", "mb-3", "mb-md-5")}
        >
          <p className={stylescc.description}>{description}</p>
        </Col>
      </Row>
    </>
  );
}
