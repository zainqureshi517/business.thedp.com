import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); // Creates four columns
  gap: 20px; // Space between grid items
  margin: 3rem; // Margin around the entire grid
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
`;

const ProjectsCarousel = ({ projects }) => {
  return (
    <GridContainer>
      {projects.map((project, index) => (
        <ProjectCard key={index}>
          <Img
            fluid={project.img.childImageSharp.fluid}
            alt={project.name}
            style={{ width: '100%', height: '200px' }} // Adjust height as needed
          />
          <div style={{ padding: '20px' }}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Learn More</a>
          </div>
        </ProjectCard>
      ))}
    </GridContainer>
  );
};

export default ProjectsCarousel;
