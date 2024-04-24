import React from 'react'
import s from 'styled-components'
import { Link } from 'gatsby'

import { MONTSERRAT_BOLD, MONTSERRAT_REGULAR, MONTSERRAT_SEMI_BOLD, PLAYFAIR_DISPLAY_REGULAR, POPPINS_BOLD, POPPINS_REGULAR } from '../styles/fonts'

export const PageTitle = s.h1`
  ${PLAYFAIR_DISPLAY_REGULAR}
  font-size: 4rem;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`

export const PageDescription = s.p`
  font-size: 0.9rem;
  margin-top: 2rem;
  ${MONTSERRAT_REGULAR}
`

export const StyledLink = s(Link)`
  color: #000000 !important;
  text-decoration: none !important;
`

export const StyledAnchor = s.a`
  color: #000000;
  text-decoration: none !important;

  :hover {
    color: #B5B4B4;
    transition: 0.3s;
  }
`

export const URL = ({ link, children }) => {
  if (link.includes('http'))
    return (
      <StyledAnchor href={link} target="_blank">
        {children}
      </StyledAnchor>
    )
  return <StyledLink to={link}>{children}</StyledLink>
}
