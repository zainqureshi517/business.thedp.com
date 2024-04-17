import React, { useState } from 'react'
import { Navbar, NavDropdown } from 'react-bootstrap'
import s from 'styled-components'

import { StyledLink } from './typography'
import { ApplyButtonNav } from './badge'
import { POPPINS_SEMI_BOLD } from '../styles/fonts'

const LINKS = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'What We Do',
    link: '/team'
  },
  {
    name: 'Departments',
    link: '/departments',
    dropdown: true,
    submenu: [
      { name: 'Innovation Lab', link: '/innovationlab' },
      { name: 'S&P', link: '/strategy' },
      { name: 'Finance', link: '/finance' },
      { name: 'Analytics', link: '/analytics' }
    ]
  }
]

const NavBarText = s(Navbar.Text)`
  ${POPPINS_SEMI_BOLD}
  color: black;
`

const NavText = ({ link, name, dropdown, submenu }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    if (dropdown) setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    if (dropdown) setShowDropdown(false);
  };

  return (
    <StyledLink
      to={link}
      style={{ marginRight: '3rem', display: 'flex', alignItems: 'center' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <NavBarText style={{ color: 'black', marginRight: '0.5rem' }}>{name}</NavBarText>
      {dropdown && (
        <NavDropdown show={showDropdown} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {submenu.map(item => (
            <NavDropdown.Item key={item.link}>
              <StyledLink to={item.link}>{item.name}</StyledLink>
            </NavDropdown.Item>
          ))}
        </NavDropdown>
      )}
    </StyledLink>
  );
};

const CollapseWrapper = s(Navbar.Collapse)`
  justify-content: flex-end;
  margin: 0.5rem 0;

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
  }
`;

export const NavBar = () => (
  <Navbar
    sticky="top"
    expand="lg"
    style={{
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 5px 6px #00000029',
      fontSize: '0.9rem'
    }}
  >
    <StyledLink to="/">
      <Navbar.Brand>
        <img src="/logo-rect.png" height="40" alt="logo" />
      </Navbar.Brand>
    </StyledLink>
    <Navbar.Toggle style={{ border: 'none' }}>
      <img src="/menu.svg" alt="menu" />
    </Navbar.Toggle>
    <Navbar.Collapse className="justify-content-end">
      {/* <CollapseWrapper> */}
        {LINKS.map(link => (
          <NavText key={link.name} {...link} />
        ))}
        <StyledLink to="/apply">
          <ApplyButtonNav> Apply </ApplyButtonNav>
        </StyledLink>
      {/* </CollapseWrapper> */}
    </Navbar.Collapse>
  </Navbar>
);
