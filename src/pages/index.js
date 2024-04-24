import React from 'react'
import s from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Col } from 'react-bootstrap'

import {
  Container,
  LatestWork,
  Chevron,
  StyledLink,
  StyledAnchor
} from '../components'
import {
  POPPINS_BOLD,
  POPPINS_REGULAR,
  POPPINS_SEMI_BOLD,
  MONTSERRAT_REGULAR,
  PLAYFAIR_DISPLAY_SEMI_BOLD,
  PLAYFAIR_DISPLAY_LIGHT,
  PLAYFAIR_DISPLAY_REGULAR,
  LATO_REGULAR,
  LATO_BOLD,
  MONTSERRAT_BOLD,
  MONTSERRAT_SEMI_BOLD
} from '../styles/fonts'
import { WHITE, RED } from '../styles/constants'

const Hero = s.div`
  text-align: center;
  color: white;
  ${PLAYFAIR_DISPLAY_LIGHT}
  padding-top: 3rem;
  padding-bottom: 1rem;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  
  animation: animateBg 10s linear infinite;
  background-image: linear-gradient(30deg, #ffffff, #aa1e22, #82aaff, #f8c0d8);
  background-size: 400% 400%;

  @keyframes animateBg {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

`

const HelloWorld = s.h1`
  ${MONTSERRAT_SEMI_BOLD}
  font-size: 6rem;
`

const SubHead = s.p`
  margin-top: 5rem;
  font-size: 90%;
`

const Checkout = s.p`
  ${POPPINS_BOLD}
  margin-top: 2rem;
  color: ${WHITE};
`

const RecruitmentRow = s.div`
  padding: 1rem 3rem;
  background-color: ${RED};
  border-radius: 22px;
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 2rem;

  @media (max-width: 768px) {
    padding: 1rem 2rem;
    margin: 2rem 1rem;
  }
`

const RecruitmentTitle = s.h1`
  ${POPPINS_SEMI_BOLD}
  font-size: 3rem;
`

const RecruitmentDescription = s.p`
  margin-top: 2.5rem;
  ${POPPINS_REGULAR}
  font-size: 0.9rem;
`

const ApplyButton = s.div`
  background-color: black;
  ${POPPINS_REGULAR}
  border-radius: 5px;
  width: 5rem;
  text-align: center;
  padding: 0.2rem 1rem;
  color: white;
  margin-top: 3rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`

const LeftColWrapper = s.div`
  padding-top: 4rem;
  padding-right: 5rem;

  @media (max-width: 992px) {
    margin-bottom: 2rem;
    padding-right: 0;
  }
`

const Recruitment = () => {
  const data = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "web-building.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { img } = data

  return (
    <RecruitmentRow>
      <Col lg={6}>
        <LeftColWrapper>
          <RecruitmentTitle> We're Recruiting! </RecruitmentTitle>
          <RecruitmentDescription>
          The Daily Pennsylvanian is a $3-million, student-run media organization. Our incredible teams work together to market our products and sustain our business. Through the DP, students experience working for a real company, with real staffers, clients, and revenues. Join one of our teams to gain an invaluable, hands-on experience unlike any other.


          </RecruitmentDescription>
          <StyledAnchor
            href="https://docs.google.com/forms/d/e/1FAIpQLSeduPvGWySAkxCWQwdrvpvSppx2455xjNRh1yi4aCn_lJnQ2Q/viewform"
            target="_blank"
          >
            <ApplyButton> Apply </ApplyButton>
          </StyledAnchor>
        </LeftColWrapper>
      </Col>
      <Col>
        <Img fluid={img.childImageSharp.fluid} />
      </Col>
    </RecruitmentRow>
  )
}

const Index = () => {
  return (
    <Container>
      <Hero>
        <span role="emoji" style={{ fontSize: '4rem' }}>
        WELCOME TO
        </span>
        <HelloWorld> DP Business </HelloWorld>
        <p style={{ fontSize: '2.5rem' }}></p>
        <SubHead>
          We oversee the business operations of The Daily Pennsylvanian, <br /> Penn's award-winning independently-run media company.
        </SubHead>
        <StyledLink to="/departments">
          <Checkout>
            Check out our departments <Chevron />
          </Checkout>
        </StyledLink>
      </Hero>
      <LatestWork />
    </Container>
  )
}

export default Index
