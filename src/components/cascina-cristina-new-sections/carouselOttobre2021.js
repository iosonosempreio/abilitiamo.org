import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import classNames from "classnames";
import Img from "gatsby-image";

export default function CarouselOttobre2021(props) {
  const data = useStaticQuery(query);
  return (
    <div
      id="carouselCantiereExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="5000"
    >
      <ol className="carousel-indicators">
        {Object.keys(data).map((img, i) => (
          <li
            key={"indicator-" + i}
            data-bs-target="#carouselCantiereExampleIndicators"
            data-bs-slide-to={i}
            className={classNames({ active: i === 0 })}
          ></li>
        ))}
      </ol>
      <div className="carousel-inner">
        {Object.keys(data).map((key, i) => {
          const image = data[key];
          return (
            <div
              key={"item-" + i}
              className={classNames("carousel-item", { active: i === 0 })}
            >
              <Img
                fluid={image.childImageSharp.fluid}
                className="round-borders d-block w-100"
              />
            </div>
          );
        })}
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselCantiereExampleIndicators"
        role="button"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselCantiereExampleIndicators"
        role="button"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
}

export const imageSize = graphql`
  fragment imageSize on File {
    childImageSharp {
      fluid(maxWidth: 1600, maxHeight: 777) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const query = graphql`
  query {
    image1: file(
      relativePath: {
        eq: "cantiere-ott-2021/WhatsApp Image 2021-10-01 at 15.56.31.jpeg"
      }
    ) {
      ...imageSize
    }
    image2: file(
      relativePath: {
        eq: "cantiere-ott-2021/WhatsApp Image 2021-10-01 at 15.56.31 (4).jpeg"
      }
    ) {
      ...imageSize
    }
    
    image4: file(
      relativePath: {
        eq: "cantiere-ott-2021/WhatsApp Image 2021-10-01 at 15.56.30 (1).jpeg"
      }
    ) {
      ...imageSize
    }
    image5: file(
      relativePath: {
        eq: "cantiere-ott-2021/WhatsApp Image 2021-10-01 at 15.56.30 (2).jpeg"
      }
    ) {
      ...imageSize
    }
    image6: file(
      relativePath: {
        eq: "cantiere-ott-2021/WhatsApp Image 2021-10-01 at 15.56.30.jpeg"
      }
    ) {
      ...imageSize
    }
    image7: file(
      relativePath: {
        eq: "cantiere-ott-2021/WhatsApp Image 2021-10-01 at 15.56.31 (1).jpeg"
      }
    ) {
      ...imageSize
    }
    image9: file(
      relativePath: {
        eq: "cantiere-ott-2021/WhatsApp Image 2021-10-01 at 15.56.31 (3).jpeg"
      }
    ) {
      ...imageSize
    }
    image10: file(
      relativePath: {
        eq: "cantiere-ott-2021/WhatsApp Image 2021-10-01 at 15.56.31 (5).jpeg"
      }
    ) {
      ...imageSize
    }
    image12: file(
      relativePath: {
        eq: "cantiere-ott-2021/WhatsApp Image 2021-10-01 at 15.56.31 (7).jpeg"
      }
    ) {
      ...imageSize
    }
    image13: file(
      relativePath: {
        eq: "cantiere-ott-2021/WhatsApp Image 2021-10-01 at 15.56.32 (1).jpeg"
      }
    ) {
      ...imageSize
    }
    image14: file(
      relativePath: {
        eq: "cantiere-ott-2021/WhatsApp Image 2021-10-01 at 15.56.32 (2).jpeg"
      }
    ) {
      ...imageSize
    }
    image15: file(
      relativePath: {
        eq: "cantiere-ott-2021/WhatsApp Image 2021-10-01 at 15.56.32 (3).jpeg"
      }
    ) {
      ...imageSize
    }
    image16: file(
      relativePath: {
        eq: "cantiere-ott-2021/WhatsApp Image 2021-10-01 at 15.56.32.jpeg"
      }
    ) {
      ...imageSize
    }
  }
`;
