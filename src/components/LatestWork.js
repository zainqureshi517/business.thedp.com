import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import {
  POPPINS_SEMI_BOLD,
  POPPINS_MEDIUM,
  POPPINS_LIGHT,
  PLAYFAIR_DISPLAY_LIGHT,
  MONTSERRAT_MEDIUM,
  LATO_REGULAR,
  RALEWAY_REGULAR,
  PLAYFAIR_DISPLAY_MEDIUM,
  MONTSERRAT_LIGHT,
  MONTSERRAT_REGULAR,
  POPPINS_REGULAR
} from '../styles/fonts';

const LatestWorkWrapper = styled.div`
  margin: 4rem 8rem; /* 3rem margin on the sides */
`;

const Title = styled.h2`
  ${MONTSERRAT_MEDIUM}
  color: #800000;
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 2rem;
`;

const ProjectContainer = styled.div`
  border-radius: 10px;
  box-shadow: 0px 10px 10px 5px rgba(0.3, 0.3, 0.3, 0.3);
  padding: 1.5rem; /* 0.5rem padding within the ProjectContainer */
  margin: 1rem 1rem; /* 2rem total space between items, 1rem each side */
`;

const ProjectName = styled.h2`
  ${PLAYFAIR_DISPLAY_LIGHT}
  margin-top: 1rem;
`;

const ProjectDescription = styled.p`
  ${MONTSERRAT_REGULAR}
  font-size: 0.9rem;
`;

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
    slidesToSlide: 3 // this will slide 3 items at a time
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // this will slide 3 items at a time
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, change it as you see fit
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, change it as you see fit
  }
};

export const LatestWork = () => {
  const data = useStaticQuery(graphql`
    query {
      allProductsJson {
        edges {
          node {
            name
            description
            img {
              childImageSharp {
                fluid(maxWidth: 1300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <LatestWorkWrapper>
      <Title>Our Latest Projects</Title>
      <Carousel
        responsive={responsive}
        ssr
        infinite
        keyBoardControl
        customTransition="transform 1000ms ease-out"
        transitionDuration={1000}
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {data.allProductsJson.edges.map(({ node }, index) => (
          <ProjectContainer key={index}>
            <Img fluid={node.img.childImageSharp.fluid} style={{ width: '100%', borderRadius: '10px' }} />
            <ProjectName>{node.name}</ProjectName>
            <ProjectDescription>{node.description}</ProjectDescription>
          </ProjectContainer>
        ))}
      </Carousel>
    </LatestWorkWrapper>
  );
};