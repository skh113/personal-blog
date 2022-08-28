import React from "react";
import styled from "styled-components";

import Project from "./Project";

function Projects() {
  return (
    <Container>
      <h4>Projects</h4>
      <Project
        title={"Personal Blog"}
        tech1={"React"}
        tech2={"JS"}
        tech3={"Frontend"}
        description={"Developed by React library"}
      />
      <Project
        title={"Student Management System "}
        tech1={"Django"}
        tech2={"Python"}
        tech3={"Backend"}
        description={"Developed by Django framework"}
      />
      <Project
        title={"E-commerce Store"}
        tech1={"Django"}
        tech2={"Python"}
        tech3={"Backend"}
        description={"Developed by Django framework"}
      />
    </Container>
  );
}

const Container = styled.div`
  border-radius: 10px;
  padding: 0px;
  box-shadow: 2.7px 2.6px 3.6px rgba(0, 0, 0, 0.024),
    7.5px 7.3px 10px rgba(0, 0, 0, 0.035),
    18.1px 17.5px 24.1px rgba(0, 0, 0, 0.046);

  h4 {
    text-align: center;
    font-size: 30px;
  }
`;

export default Projects;
