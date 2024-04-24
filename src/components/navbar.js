import React, { useState } from 'react';
import { Navbar, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';

import { StyledLink } from './typography';
import { ApplyButtonNav } from './badge';
import { MONTSERRAT_SEMI_BOLD, POPPINS_SEMI_BOLD } from '../styles/fonts';

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
    submenu: [
      { name: 'Innovation Lab', link: '/innovationlab' },
      { name: 'S&P', link: '/strategy' },
      { name: 'Finance', link: '/finance' },
      { name: 'Analytics', link: '/analytics' },
      { name: 'Consulting', link: '/consulting' }
    ]
  }
];

const NavBarText = styled(Navbar.Text)`
  ${MONTSERRAT_SEMI_BOLD}
  color: black;
`;

const NavText = ({ link, name, submenu }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const StyledNavDropdown = styled(NavDropdown)`
  position: absolute;
  left: -7rem;
  transform: translateX(-50%);
  top: 250%; // Adjust this value as needed to move the dropdown below the "Departments" link
`;

  return (
    <StyledLink
      to={link}
      style={{ position: 'relative', marginRight: '1.5rem', display: 'flex', alignItems: 'center' }} // Set position to relative
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <NavBarText style={{ color: 'black', marginRight: '0.5rem' }}>{name}</NavBarText>
      {submenu && (
        <StyledNavDropdown show={showDropdown} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {submenu.map(item => (
            <NavDropdown.Item key={item.link}>
              <StyledLink to={item.link}>{item.name}</StyledLink>
            </NavDropdown.Item>
          ))}
        </StyledNavDropdown>
      )}
    </StyledLink>
  );
};

const CollapseWrapper = styled(Navbar.Collapse)`
  justify-content: flex-end;
  margin: 0.5rem 0;

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledNavDropdown = styled(NavDropdown)`
  position: absolute;
  left: 0;
  transform: translateX(-50%);
  top: 100%; // Adjust this value as needed to move the dropdown below the "Departments" link
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
        <img src="/logo-rect.png" height="70" alt="logo" />
      </Navbar.Brand>
    </StyledLink>
    <Navbar.Toggle style={{ border: 'none' }}>
      <img src="/menu.svg" alt="menu" />
    </Navbar.Toggle>
    <Navbar.Collapse className="justify-content-end">
      <CollapseWrapper>
        {LINKS.map(link => (
          <NavText key={link.name} {...link} />
        ))}
        <StyledLink to="/apply">
          <ApplyButtonNav>Apply</ApplyButtonNav>
        </StyledLink>
      </CollapseWrapper>
    </Navbar.Collapse>
  </Navbar>
);
