import React from 'react';
import styled from 'styled-components';
import { MONTSERRAT_LIGHT, PLAYFAIR_DISPLAY_MEDIUM } from '../styles/fonts';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; // Two columns
  grid-template-rows: auto auto; // Two rows, size adjusts to content
  gap: 20px; // Space between grid items
  padding: 2rem 7rem; // Padding around the entire grid
`;

const ContentBlock = styled.div`
  background: #f5f5f5; // Light grey background, adjust as needed
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const Title = styled.h2`
  ${PLAYFAIR_DISPLAY_MEDIUM}
  font-size: 1.5rem;
  color: #333; // Dark grey text color
`;

const Description = styled.p`
  ${MONTSERRAT_LIGHT}
  font-size: 1rem;
  color: #666; // Medium grey text color
`;

// Sample component to display the grid with content
const ContentGrid = () => {
  return (
    <GridContainer>
      <ContentBlock>
        <Title>Our Mission</Title>
        <Description>The business departments at the Daily Pennsylvanian Inc. focus on developing the business activites and operations of the Corporation. DP Business works to improve the DP's financial standing and create meaningful products and services for the DP and its audience. </Description>
      </ContentBlock>
      <ContentBlock>
        <Title>Our Goals</Title>
        <Description>DP Business strives to make the DP a more efficient and effective company, who is engaged with our audience. </Description>
      </ContentBlock>
      <ContentBlock>
        <Title>Our Progess</Title>
        <Description>DP Business has worked to achieve our goals through regular campus outreach, creating practical products and services, and always focusing on improvement.</Description>
      </ContentBlock>
      <ContentBlock>
        <Title>Our Community</Title>
        <Description>DP Business seeks to foster a collaborative, engaging, and inclusive community that is committed to supporting student media and journalism.</Description>
      </ContentBlock>
    </GridContainer>
  );
};

export default ContentGrid;
