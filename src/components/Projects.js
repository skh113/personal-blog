import React from "react";
import styled from "styled-components";

function Projects() {
  return (
    <Container>
      <Project>
        <h2>Title</h2>
        <h3>react</h3>
        <Description>
          <p>Description</p>
          <li>hooks</li>
          <li>components</li>
          <li>routing</li>
        </Description>
      </Project>
      <Project>
        <h2>Title</h2>
        <h3>react</h3>
        <Description>
          <p>Description</p>
          <li>hooks</li>
          <li>components</li>
          <li>routing</li>
        </Description>
      </Project>
      <Project>
        <h2>Title</h2>
        <h3>react</h3>
        <Description>
          <p>Description</p>
          <li>hooks</li>
          <li>components</li>
          <li>routing</li>
        </Description>
      </Project>
    </Container>
  );
}

const Container = styled.div``;

const Project = styled.div`
  margin: 20px 0;
  border-bottom: 1px solid black;
`;

const Description = styled.div``;

export default Projects;
