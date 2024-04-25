import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { MONTSERRAT_MEDIUM, PLAYFAIR_DISPLAY_LIGHT, PLAYFAIR_DISPLAY_REGULAR } from '../styles/fonts';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); // Creates four columns
  gap: 20px; // Space between grid items
  margin: 1rem; // Margin around the entire grid
  justify-content: center; // Centers grid items when they do not fill up a row
`;

const ProjectCard = styled.div`
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  ${PLAYFAIR_DISPLAY_LIGHT}
`;
const Title = styled.h2`
  ${MONTSERRAT_MEDIUM}
  color: #800000;
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 2rem;
`;
const StyledButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  margin-top: 10px;
  font-size: 0.9rem;
  color: #fff;
  background-color: #82aaff; // Adjust the color to fit your theme
  border-radius: 5px;
  text-align: center;
  transition: background-color 0.3s, transform 0.3s;
  text-decoration: none;

  &:hover, &:focus {
    background-color: #a00000; // Slightly darker on hover
    transform: translateY(-2px);
    text-decoration: none;
  }

  &:active {
    transform: translateY(1px);
  }
`;

const DepartmentsGrid = ({ projects }) => {
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
    <GridContainer>
      {data.allProductsJson.edges.map(({ node }, index) => (
        <ProjectCard key={index}>
          <Img
            fluid={node.img.childImageSharp.fluid}
            alt={node.name}
            style={{ width: '100%', height: '200px' }} // Adjust height as needed
          />
          <div style={{ padding: '20px' }}>
            <h3>{node.name}</h3>
            <p>{node.description}</p>
          </div>
        </ProjectCard>
      ))}
    </GridContainer>
  );
};

export default DepartmentsGrid;
