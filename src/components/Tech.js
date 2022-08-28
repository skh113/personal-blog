import React from "react";
import styled from "styled-components";

function Tech(props) {
  return (
    <Container>
      <h3>{props.tech}</h3>
    </Container>
  );
}

const Container = styled.div`
  margin: 0;

  h3 {
    width: fit-content;
    background-color: hsl(0, 0%, 90%);
    padding: 2px 20px;
    border-radius: 20px;
  }
`;

export default Tech;
