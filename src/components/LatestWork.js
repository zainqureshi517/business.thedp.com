import React from 'react'
import s from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

import {
  POPPINS_SEMI_BOLD,
  POPPINS_MEDIUM,
  POPPINS_LIGHT
} from '../styles/fonts'
import { BLUE } from '../styles/constants'
import { Badge } from './badge'

const LatestWorkWrapper = s.div`
  padding: 1rem 0.5rem; /* Adjust the horizontal padding */
  padding-left: 10rem; /* Adjust the left padding */
  margin-right: 5rem; /* Adjust the right margin */
  margin-bottom: 2rem;

  @media (max-width: 992px) {
    padding: 0 1rem; /* Adjust the horizontal padding */
    margin-right: 0;
    padding-left: 2rem; /* Adjust the left padding */
  }
`

const Title = s.h2`
  ${POPPINS_SEMI_BOLD}
  color: ${"#800000"};

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`

const ProjectContainer = s.div`
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
  padding: 1rem;
  margin-bottom: 2rem;
`

const ProjectName = s.h2`
  ${POPPINS_MEDIUM}
  margin-top: 1rem;
`

const Divider = s.hr`
  border: 0.5px solid rgba(224,224,224,0.5);
  margin: 1.5rem 0;
`

const ProjectDescription = s.p`
  ${POPPINS_LIGHT}
  font-size: 0.9rem;
  width: 80%;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`
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
  `)

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <Title> Our Latest Projects </Title>
      </div>
      <LatestWorkWrapper>
        <Row>
          {data.allProductsJson.edges.map(({ node }, index) => (
            <Col key={index} md={4}>
              <ProjectContainer>
                <Img fluid={node.img.childImageSharp.fluid} style={{ width: '100%', borderRadius: '10px' }} />
                <ProjectName> {node.name} </ProjectName>
                <Divider />
                <ProjectDescription>
                  {node.description}
                </ProjectDescription>
              </ProjectContainer>
            </Col>
          ))}
        </Row>
      </LatestWorkWrapper>
    </>
  )
}
