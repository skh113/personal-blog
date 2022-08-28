import React from "react";
import styled from "styled-components";

import Tech from "./Tech";

function Project(props) {
  return (
    <Container>
      <h2>{props.title}</h2>
      <Title>
        <Tech tech={props.tech1} />
        <Tech tech={props.tech2} />
        <Tech tech={props.tech3} />
      </Title>
      <Description>
        <p>{props.description}</p>
        <li>hooks</li>
        <li>components</li>
        <li>routing</li>
      </Description>
    </Container>
  );
}

const Container = styled.div`
  margin: 20px 0;
  padding: 10px 0;
  border-bottom: 1px solid hsl(0, 0%, 90%);
`;

const Title = styled.div`
  margin: 10px 0;
  display: flex;
`;
const Description = styled.div`
  margin: 20px 0 10px;
`;

export default Project;
